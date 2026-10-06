/**
 * 플래너 릴스 메이커
 * 1) 4:5 레터박스 · 멘트 컷 · 다운로드
 * 2) 구도 프레이밍(자동 → 좌/중/우)
 * 3) 영상·사진 여러 개 · 릴스 적합 구간 자동 제안 · 이어붙이기
 * 4) 긴 영상/복수 영상에서 후보 구간만 잘라 하나로 합치기
 */
(function (global) {
  'use strict';

  var W = 1080;
  var H = 1350;
  var TOP_FS = 78;
  var BOT_FS = 68;
  var FONT = '"Noto Sans KR", "Malgun Gothic", sans-serif';
  var PHOTO_DEFAULT_SEC = 3;
  var END_HOLD_SEC = 0.9;
  var END_FADE_SEC = 1.0;
  var FOCUS_LABEL = { left: '왼쪽', center: '가운데', right: '오른쪽' };

  var reel = {
    clips: [],
    top1: 'IFC x INDIBA',
    top2: '휴대 가능한 인디바 고주파',
    captions: [],
    previews: [],
    busy: false,
    status: '',
    exportPct: 0,
    focus: 'center',
    focusAuto: true,
    zoom: 1.18,
    volume: 0.85,
    speed: 1,
    preservePitch: true
  };

  function clampSpeed(s) {
    s = Number(s);
    if (!(s > 0)) s = 1;
    return Math.min(1.05, Math.max(1, Math.round(s * 100) / 100));
  }

  function clampVolume(v) {
    v = Number(v);
    if (isNaN(v)) return 0.85;
    return Math.min(1, Math.max(0, Math.round(v * 100) / 100));
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function uid() {
    return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function fmtTime(sec) {
    sec = Math.max(0, Number(sec) || 0);
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function parseTime(str) {
    str = String(str || '').trim();
    if (!str) return 0;
    var parts = str.split(':');
    if (parts.length === 1) return Math.max(0, parseFloat(parts[0]) || 0);
    return Math.max(0, (parseFloat(parts[0]) || 0) * 60 + (parseFloat(parts[1]) || 0));
  }

  function isVideoFile(file) {
    return !!(file && ((file.type && file.type.indexOf('video/') === 0) || /\.(mp4|mov|m4v|webm|avi|mkv)$/i.test(file.name || '')));
  }

  function includedClips() {
    return (reel.clips || []).filter(function (c) { return c && c.include !== false; });
  }

  function contentDuration() {
    return includedClips().reduce(function (sum, c) { return sum + (Number(c.duration) || 0); }, 0);
  }

  function totalDuration() {
    return contentDuration();
  }

  function renderDuration() {
    return contentDuration() / clampSpeed(reel.speed) + END_HOLD_SEC;
  }

  function outputToSourceTime_(tOut) {
    var speed = clampSpeed(reel.speed);
    var contentOut = contentDuration() / speed;
    if (tOut >= contentOut) return Math.max(0, contentDuration() - 0.03);
    return Math.min(contentDuration() - 0.02, tOut * speed);
  }

  function clipAtTime(t) {
    var list = includedClips();
    var contentDur = contentDuration();
    if (list.length && t >= contentDur - 0.001) {
      var last = list[list.length - 1];
      var d = Number(last.duration) || 0;
      return {
        clip: last,
        localT: Math.max(0, d - 0.04),
        index: list.length - 1,
        timelineStart: contentDur - d,
        holding: true
      };
    }
    var acc = 0;
    for (var i = 0; i < list.length; i++) {
      var dd = Number(list[i].duration) || 0;
      if (t < acc + dd || i === list.length - 1) {
        return {
          clip: list[i],
          localT: Math.max(0, Math.min(dd - 0.01, t - acc)),
          index: i,
          timelineStart: acc,
          holding: false
        };
      }
      acc += dd;
    }
    return null;
  }

  function defaultCaptions(duration) {
    var d = Math.max(6, Number(duration) || 30);
    var cuts = [
      { t0: 0.5, t1: Math.min(5, d * 0.22) },
      { t0: Math.min(5.5, d * 0.24), t1: Math.min(12, d * 0.45) },
      { t0: Math.min(12.5, d * 0.47), t1: Math.min(20, d * 0.7) },
      { t0: Math.min(20.5, d * 0.72), t1: Math.max(d - 0.4, d * 0.92) }
    ];
    var texts = [
      ['장면을 열고', '핵심 포인트부터 보여 줍니다'],
      ['손과 프로브가 같이 움직일 때', '반응이 더 선명해집니다'],
      ['현장에서 바로', '시연할 수 있습니다'],
      ['휴대형 고주파,', '세미나·실습에 맞춘 흐름입니다']
    ];
    return cuts.map(function (c, i) {
      return {
        start: Math.round(c.t0 * 10) / 10,
        end: Math.round(Math.min(c.t1, d - 0.15) * 10) / 10,
        line1: texts[i][0],
        line2: texts[i][1]
      };
    });
  }

  function readFormKeywords_() {
    try {
      if (global.state && global.state.newItem) {
        var t = String(global.state.newItem.topic || '').trim();
        if (t) return t;
      }
    } catch (e) {}
    var el = document.getElementById('new-item-topic-input');
    return el ? String(el.value || '').trim() : '';
  }

  function parseKeywordPhrases_(raw) {
    var out = [];
    String(raw || '').split(/\r?\n/).forEach(function (line) {
      line = String(line || '').trim();
      if (!line) return;
      line.split(/\s*[·|/]\s*|,\s+/).forEach(function (p) {
        p = String(p || '').trim();
        if (p) out.push(p);
      });
    });
    return out;
  }

  function splitToTwoLines_(phrase) {
    var p = String(phrase || '').trim();
    if (!p) return ['', ''];
    if (p.length <= 16) return [p, ''];
    var mid = Math.floor(p.length / 2);
    var sp = p.lastIndexOf(' ', mid + 6);
    if (sp < 3) sp = p.indexOf(' ', Math.max(3, mid - 6));
    if (sp > 2 && sp < p.length - 1) {
      return [p.slice(0, sp).trim(), p.slice(sp + 1).trim()];
    }
    return [p.slice(0, 14).trim(), p.slice(14).trim()];
  }

  function phrasePairsFromKeywords_(phrases) {
    var pairs = [];
    var i = 0;
    while (i < phrases.length && pairs.length < 4) {
      var a = phrases[i];
      var b = phrases[i + 1];
      if (a && a.length > 18) {
        pairs.push(splitToTwoLines_(a));
        i += 1;
      } else if (a && b && a.length <= 16 && b.length <= 16) {
        pairs.push([a, b]);
        i += 2;
      } else if (a) {
        pairs.push(splitToTwoLines_(a));
        i += 1;
      } else {
        break;
      }
    }
    return pairs;
  }

  function applyKeywordsToCaptions_(force) {
    var phrases = parseKeywordPhrases_(readFormKeywords_());
    if (!phrases.length) {
      if (force) toast_('위에 키워드를 먼저 적어 주세요.', 'err');
      return false;
    }
    var d = totalDuration();
    if (!(d > 0.5)) {
      if (force) toast_('영상을 먼저 선택해 주세요.', 'err');
      return false;
    }
    var base = defaultCaptions(d);
    var pairs = phrasePairsFromKeywords_(phrases);
    for (var i = 0; i < base.length; i++) {
      var pair = pairs[i % pairs.length];
      base[i].line1 = pair[0] || base[i].line1;
      base[i].line2 = pair[1] || (pairs.length > 1 ? '' : base[i].line2);
    }
    reel.captions = base;
    if (reel.top2 === '휴대 가능한 인디바 고주파' || force) {
      var top = phrases[0];
      if (top && top.length > 22) top = top.slice(0, 22);
      if (top) reel.top2 = top;
    }
    return true;
  }

  function keywordMatchBoost_(text, phrases) {
    if (!phrases || !phrases.length) return 1;
    var hay = String(text || '').toLowerCase().replace(/\s+/g, '');
    if (!hay) return 1;
    var boost = 1;
    for (var i = 0; i < phrases.length; i++) {
      var tok = String(phrases[i] || '').toLowerCase().replace(/\s+/g, '');
      if (tok.length >= 2 && hay.indexOf(tok) >= 0) boost += 0.4;
      else if (tok.length >= 4) {
        var head = tok.slice(0, Math.min(4, tok.length));
        if (hay.indexOf(head) >= 0) boost += 0.15;
      }
    }
    return boost;
  }

  function rebuildCaptionsKeepText() {
    var d = totalDuration();
    var prev = reel.captions || [];
    var next = defaultCaptions(d);
    for (var i = 0; i < next.length && i < prev.length; i++) {
      next[i].line1 = prev[i].line1;
      next[i].line2 = prev[i].line2;
    }
    reel.captions = next;
  }

  function captionAt(t) {
    var list = reel.captions || [];
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (t >= c.start && t < c.end) return c;
    }
    return null;
  }

  function focusFactor(focus) {
    if (focus === 'left') return 0;
    if (focus === 'right') return 1;
    return 0.5;
  }

  function mediaSize(media, kind) {
    if (kind === 'image') {
      return { vw: media.naturalWidth || media.width || 1080, vh: media.naturalHeight || media.height || 1080 };
    }
    return { vw: media.videoWidth || 1920, vh: media.videoHeight || 1080 };
  }

  function layoutVideo(vw, vh) {
    var bandW = W;
    var bandH = Math.round(bandW * (vh / vw));
    if (bandH > H) {
      bandH = H;
      bandW = Math.round(H * (vw / vh));
    }
    var bandX = Math.round((W - bandW) / 2);
    var bandY = Math.round((H - bandH) / 2);
    var zoom = Math.max(1, Number(reel.zoom) || 1.18);
    var scale = Math.max(bandW / vw, bandH / vh) * zoom;
    var drawW = vw * scale;
    var drawH = vh * scale;
    var maxOx = Math.max(0, drawW - bandW);
    var maxOy = Math.max(0, drawH - bandH);
    var fx = focusFactor(reel.focus || 'center');
    return {
      x: bandX, y: bandY, w: bandW, h: bandH,
      topPad: bandY, botPad: H - bandY - bandH,
      drawX: bandX - maxOx * fx,
      drawY: bandY - maxOy * 0.5,
      drawW: drawW, drawH: drawH
    };
  }

  function drawReelFrame(ctx, timelineT, outT) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    var contentDur = contentDuration();
    var drawT = Math.min(timelineT, Math.max(0, contentDur - 0.03));
    var hit = clipAtTime(drawT);
    var lay = layoutVideo(1920, 1080);
    if (hit && hit.clip && hit.clip.el) {
      var sz = mediaSize(hit.clip.el, hit.clip.kind);
      lay = layoutVideo(sz.vw, sz.vh);
      try {
        ctx.save();
        ctx.beginPath();
        ctx.rect(lay.x, lay.y, lay.w, lay.h);
        ctx.clip();
        ctx.drawImage(hit.clip.el, lay.drawX, lay.drawY, lay.drawW, lay.drawH);
        ctx.restore();
      } catch (e) {}
    }

    var topMid = lay.topPad / 2;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '800 ' + TOP_FS + 'px ' + FONT;
    ctx.fillText(reel.top1 || '', W / 2, topMid - TOP_FS * 0.55);
    ctx.fillText(reel.top2 || '', W / 2, topMid + TOP_FS * 0.55);

    var cap = captionAt(drawT);
    if (!cap && timelineT >= contentDur - 0.05 && reel.captions && reel.captions.length) {
      cap = reel.captions[reel.captions.length - 1];
    }
    if (cap) {
      var botMid = lay.y + lay.h + lay.botPad / 2;
      ctx.font = '800 ' + BOT_FS + 'px ' + FONT;
      ctx.fillText(cap.line1 || '', W / 2, botMid - BOT_FS * 0.55);
      ctx.fillText(cap.line2 || '', W / 2, botMid + BOT_FS * 0.55);
    }

    var exportDur = renderDuration();
    var fadeClock = (outT != null && !isNaN(outT)) ? outT : timelineT;
    var fadeStart = Math.max(0, exportDur - END_FADE_SEC);
    if (fadeClock >= fadeStart && exportDur > 0.2) {
      var fade = Math.min(1, (fadeClock - fadeStart) / END_FADE_SEC);
      fade = fade * fade;
      ctx.fillStyle = 'rgba(0,0,0,' + fade.toFixed(3) + ')';
      ctx.fillRect(0, 0, W, H);
    }
    return lay;
  }

  function seekVideo(video, t) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var timer = setTimeout(function () {
        if (!done) { done = true; resolve(); }
      }, 2500);
      function finish() {
        if (done) return;
        done = true;
        clearTimeout(timer);
        video.removeEventListener('seeked', finish);
        resolve();
      }
      video.addEventListener('seeked', finish);
      try {
        var dur = video.duration || t || 1;
        video.currentTime = Math.min(Math.max(0.02, t), Math.max(0.05, dur - 0.05));
      } catch (e) {
        clearTimeout(timer);
        reject(e);
      }
    });
  }

  async function prepareMediaAt(timelineT) {
    var contentDur = contentDuration();
    var t = Math.min(timelineT, Math.max(0, contentDur - 0.02));
    var hit = clipAtTime(t);
    if (!hit || !hit.clip) return;
    if (hit.clip.kind === 'video' && hit.clip.el) {
      var t0 = Number(hit.clip.trimStart) || 0;
      var t1 = Number(hit.clip.trimEnd);
      if (!(t1 > t0)) t1 = t0 + (Number(hit.clip.duration) || 1);
      var srcT = Math.min(t1 - 0.02, t0 + hit.localT);
      await seekVideo(hit.clip.el, srcT);
    }
  }

  async function sampleFrameEnergy_(video, t, ctx, sw, sh) {
    await seekVideo(video, t);
    ctx.drawImage(video, 0, 0, sw, sh);
    var data = ctx.getImageData(0, 0, sw, sh).data;
    var energy = 0;
    var n = 0;
    for (var y = 2; y < sh; y += 2) {
      for (var x = 2; x < sw; x += 2) {
        var i0 = (y * sw + x) * 4;
        var iL = (y * sw + (x - 2)) * 4;
        var g = (data[i0] + data[i0 + 1] + data[i0 + 2]) / 3;
        var gL = (data[iL] + data[iL + 1] + data[iL + 2]) / 3;
        energy += Math.abs(g - gL);
        n++;
      }
    }
    return n ? energy / n : 0;
  }

  async function makeSegmentThumb_(video, t) {
    var c = document.createElement('canvas');
    c.width = 160; c.height = 90;
    var ctx = c.getContext('2d');
    await seekVideo(video, t);
    ctx.drawImage(video, 0, 0, 160, 90);
    return c.toDataURL('image/jpeg', 0.75);
  }

  /** 긴 영상에서 움직임·디테일이 큰 구간을 골라 제안 */
  async function suggestSegmentsFromVideo_(video, onProgress, fileName) {
    var phrases = parseKeywordPhrases_(readFormKeywords_());
    var kwBoost = keywordMatchBoost_(fileName || '', phrases);
    var dur = video.duration || 0;
    if (!(dur > 0.5)) return [{ start: 0, end: Math.max(0.5, dur), score: 1 * kwBoost, reason: '전체' }];
    if (dur <= 18) {
      var shortSeg = { start: 0, end: Math.round(dur * 10) / 10, score: 1 * kwBoost, reason: phrases.length ? '짧은 원본 · 키워드 반영' : '짧은 원본 · 전체' };
      // 짧은 클립도 끝 1.5초 안에서 잔잔한 쪽으로 살짝 당김
      var canvas0 = document.createElement('canvas');
      canvas0.width = 160; canvas0.height = 90;
      var ctx0 = canvas0.getContext('2d', { willReadFrequently: true });
      var samples0 = [];
      if (ctx0 && dur > 6) {
        for (var t0 = Math.max(0.2, dur - 2.5); t0 < dur - 0.15; t0 += 0.45) {
          samples0.push({ t: t0, e: await sampleFrameEnergy_(video, t0, ctx0, 160, 90) });
        }
        shortSeg = refineSegmentEnd_(shortSeg, samples0, dur);
        if (shortSeg.reason.indexOf('끝 다듬음') < 0) {
          shortSeg.reason = phrases.length ? '짧은 원본 · 키워드 반영' : '짧은 원본 · 전체';
        }
      }
      shortSeg.score = (shortSeg.score || 1) * kwBoost;
      return [shortSeg];
    }

    var segLen = dur > 70 ? 12 : (dur > 40 ? 10 : 8);
    var sampleStep = Math.max(0.9, Math.min(2.2, dur / 45));
    var canvas = document.createElement('canvas');
    canvas.width = 160; canvas.height = 90;
    var ctx = canvas.getContext('2d', { willReadFrequently: true });
    var samples = [];
    for (var t = 0.25; t < dur - 0.25; t += sampleStep) {
      if (onProgress) onProgress('구간 분석 ' + Math.min(99, Math.round((t / dur) * 100)) + '%');
      var e = await sampleFrameEnergy_(video, t, ctx, 160, 90);
      samples.push({ t: t, e: e });
    }

    var stride = Math.max(2, segLen * 0.4);
    var candidates = [];
    for (var start = 0; start + segLen <= dur + 0.05; start += stride) {
      var end = Math.min(dur, start + segLen);
      var sum = 0;
      var n = 0;
      for (var i = 0; i < samples.length; i++) {
        if (samples[i].t >= start && samples[i].t <= end) {
          sum += samples[i].e;
          n++;
        }
      }
      var score = n ? sum / n : 0;
      // 끝 2초가 잔잔할수록 가점 (중간에 끊기는 느낌 완화)
      var endSum = 0, endN = 0, allAvg = score;
      for (var j = 0; j < samples.length; j++) {
        if (samples[j].t >= end - 2.2 && samples[j].t <= end) {
          endSum += samples[j].e;
          endN++;
        }
      }
      var endAvg = endN ? endSum / endN : allAvg;
      if (allAvg > 0) {
        var calm = Math.max(0, Math.min(1.4, allAvg / Math.max(endAvg, 0.0001)));
        score *= 0.82 + 0.18 * Math.min(calm, 1.35);
      }
      // 맨 앞·끝의 정체 구간은 약간 감점
      if (start < 1.2) score *= 0.9;
      if (end > dur - 1.2) score *= 0.92;
      score *= kwBoost;
      candidates.push({
        start: Math.round(start * 10) / 10,
        end: Math.round(end * 10) / 10,
        score: score,
        reason: phrases.length ? '키워드·움직임 후보' : '움직임·디테일 후보'
      });
    }
    candidates.sort(function (a, b) { return b.score - a.score; });

    var maxSeg = dur > 100 ? 3 : (dur > 40 ? 2 : 1);
    if (phrases.length >= 3) maxSeg = Math.min(4, Math.max(maxSeg, 3));
    else if (phrases.length >= 1) maxSeg = Math.min(3, Math.max(maxSeg, 2));
    var picked = [];
    candidates.forEach(function (c) {
      if (picked.length >= maxSeg) return;
      var overlaps = picked.some(function (p) {
        return !(c.end <= p.start + 0.8 || c.start >= p.end - 0.8);
      });
      if (!overlaps) picked.push(c);
    });
    picked.sort(function (a, b) { return a.start - b.start; });
    if (!picked.length) {
      var mid = Math.max(0, (dur - segLen) / 2);
      picked = [{ start: mid, end: mid + segLen, score: 1 * kwBoost, reason: phrases.length ? '키워드 중앙 구간' : '중앙 구간' }];
    }
    // 구간 끝 자동 다듬기: 끝부분에서 가장 잔잔한 지점으로 스냅
    picked = picked.map(function (seg) {
      return refineSegmentEnd_(seg, samples, dur);
    });
    return picked;
  }

  function refineSegmentEnd_(seg, samples, dur) {
    var minLen = 5;
    var winStart = Math.max(seg.start + minLen, seg.end - 2.8);
    var bestT = seg.end;
    var bestE = Infinity;
    for (var i = 0; i < samples.length; i++) {
      var s = samples[i];
      if (s.t < winStart || s.t > seg.end + 0.4) continue;
      if (s.e < bestE) {
        bestE = s.e;
        bestT = s.t;
      }
    }
    var newEnd = Math.min(dur, Math.max(seg.start + minLen, bestT + 0.4));
    // 원래 끝보다 너무 일찍 자르지 않음 (최대 2.2초만 당김)
    newEnd = Math.max(newEnd, seg.end - 2.2);
    newEnd = Math.min(newEnd, seg.end);
    if (newEnd - seg.start >= minLen && newEnd < seg.end - 0.15) {
      seg.end = Math.round(newEnd * 10) / 10;
      seg.reason = (seg.reason || '후보') + ' · 끝 다듬음';
    }
    return seg;
  }

  async function detectFocusAutoFromClips() {
    var vids = includedClips().filter(function (c) { return c.kind === 'video' && c.el; });
    if (!vids.length) return 'center';
    var video = vids[0].el;
    var duration = video.duration || 1;
    var ratios = [0.2, 0.45, 0.7];
    var scores = { left: 0, center: 0, right: 0 };
    var c = document.createElement('canvas');
    c.width = 240; c.height = 135;
    var ctx = c.getContext('2d', { willReadFrequently: true });
    if (!ctx) return 'center';
    for (var i = 0; i < ratios.length; i++) {
      await seekVideo(video, duration * ratios[i]);
      ctx.drawImage(video, 0, 0, 240, 135);
      var data = ctx.getImageData(0, 0, 240, 135).data;
      var third = 80;
      var parts = [
        { k: 'left', x0: 0, x1: third },
        { k: 'center', x0: third, x1: third * 2 },
        { k: 'right', x0: third * 2, x1: 240 }
      ];
      parts.forEach(function (part) {
        var energy = 0, n = 0;
        for (var y = 2; y < 135; y += 2) {
          for (var x = part.x0 + 2; x < part.x1; x += 2) {
            var i0 = (y * 240 + x) * 4;
            var iL = (y * 240 + (x - 2)) * 4;
            var g = (data[i0] + data[i0 + 1] + data[i0 + 2]) / 3;
            var gL = (data[iL] + data[iL + 1] + data[iL + 2]) / 3;
            energy += Math.abs(g - gL);
            n++;
          }
        }
        scores[part.k] += n ? energy / n : 0;
      });
    }
    var best = 'center', bestS = -1;
    ['left', 'center', 'right'].forEach(function (k) {
      if (scores[k] > bestS) { bestS = scores[k]; best = k; }
    });
    var avg = (scores.left + scores.center + scores.right) / 3;
    if (avg > 0 && Math.abs(scores[best] - scores.center) < avg * 0.06) best = 'center';
    return best;
  }

  function loadImageFile(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        resolve({
          id: uid(),
          kind: 'image',
          name: file.name || 'photo.jpg',
          objectUrl: url,
          sourceKey: url,
          el: img,
          duration: PHOTO_DEFAULT_SEC,
          trimStart: 0,
          trimEnd: PHOTO_DEFAULT_SEC,
          include: true,
          score: 0.5,
          file: file
        });
      };
      img.onerror = function () {
        try { URL.revokeObjectURL(url); } catch (e) {}
        reject(new Error('사진을 열 수 없습니다: ' + (file.name || '')));
      };
      img.src = url;
    });
  }

  async function loadVideoFileAsSegments_(file, onProgress) {
    var url = URL.createObjectURL(file);
    var video = document.createElement('video');
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.src = url;
    await new Promise(function (resolve, reject) {
      video.onloadedmetadata = function () { resolve(); };
      video.onerror = function () { reject(new Error('영상을 열 수 없습니다: ' + (file.name || ''))); };
    });
    var dur = video.duration || 0;
    if (onProgress) onProgress((file.name || '영상') + ' 구간 찾는 중…');
    var segs = await suggestSegmentsFromVideo_(video, onProgress, file.name || '');
    var out = [];
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i];
      var mid = (s.start + s.end) / 2;
      var thumb = '';
      try { thumb = await makeSegmentThumb_(video, mid); } catch (e) {}
      out.push({
        id: uid(),
        kind: 'video',
        name: (file.name || 'video.mp4') + (segs.length > 1 ? ' · 구간' + (i + 1) : ''),
        objectUrl: url,
        sourceKey: url,
        el: video,
        sourceDuration: dur,
        trimStart: s.start,
        trimEnd: s.end,
        duration: Math.round((s.end - s.start) * 10) / 10,
        include: true,
        score: s.score || 0,
        reason: s.reason || '',
        thumbDataUrl: thumb,
        file: file,
        sharedSource: true
      });
    }
    return out;
  }

  async function addFiles(fileList) {
    var files = Array.prototype.slice.call(fileList || []);
    if (!files.length) return;
    reel.busy = true;
    reel.status = '미디어 불러오는 중…';
    rerender_();
    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      try {
        if (isVideoFile(f)) {
          var segs = await loadVideoFileAsSegments_(f, function (msg) {
            reel.status = msg;
            rerenderSoftStatus_();
          });
          reel.clips = reel.clips.concat(segs);
        } else {
          reel.clips.push(await loadImageFile(f));
        }
      } catch (err) {
        toast_((err && err.message) || '파일 로드 실패', 'err');
      }
    }
    autoSelectClips_();
    rebuildCaptionsKeepText();
    var kwApplied = applyKeywordsToCaptions_(false);
    reel.focusAuto = true;
    reel.status = '구도 자동 분석 중…';
    rerender_();
    try {
      reel.focus = await detectFocusAutoFromClips();
    } catch (e) {
      reel.focus = 'center';
    }
    reel.busy = false;
    reel.status = '자동 구도: ' + (FOCUS_LABEL[reel.focus] || '') +
      ' · 구간 ' + includedClips().length + '개 선정' +
      (kwApplied ? ' · 키워드 멘트 반영' : '') +
      ' · 미리보기 생성 중…';
    rerender_();
    await refreshPreviews();
  }

  function autoSelectClips_() {
    var phrases = parseKeywordPhrases_(readFormKeywords_());
    var videos = reel.clips.filter(function (c) { return c.kind === 'video'; });
    var photos = reel.clips.filter(function (c) { return c.kind === 'image'; });
    videos.forEach(function (c) {
      c.score = (Number(c.score) || 0) * keywordMatchBoost_(c.name || '', phrases);
    });
    videos.sort(function (a, b) { return (b.score || 0) - (a.score || 0); });
    var budget = 40;
    var kept = 0;
    var maxKeep = phrases.length >= 3 ? 5 : (phrases.length >= 1 ? 4 : 5);
    videos.forEach(function (c) {
      var d = Number(c.duration) || 0;
      if (kept >= maxKeep) { c.include = false; return; }
      if (kept === 0 || budget - d >= -2) {
        c.include = true;
        budget -= d;
        kept++;
      } else {
        c.include = false;
      }
    });
    photos.forEach(function (c, idx) { c.include = idx < 4; });
    reel.clips.sort(function (a, b) {
      if (!!b.include !== !!a.include) return (b.include ? 1 : 0) - (a.include ? 1 : 0);
      if (a.kind === 'video' && b.kind === 'video') return (a.trimStart || 0) - (b.trimStart || 0);
      return 0;
    });
  }
  async function refreshPreviews() {
    if (!includedClips().length) {
      reel.previews = [];
      reel.status = '포함할 영상·사진을 골라 주세요.';
      rerender_();
      return;
    }
    reel.busy = true;
    reel.status = '컷 미리보기 생성 중…';
    rerender_();
    var canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext('2d');
    var out = [];
    for (var i = 0; i < reel.captions.length; i++) {
      var c = reel.captions[i];
      var t = Math.min(Math.max(c.start + 0.1, c.start), (c.start + c.end) / 2);
      await prepareMediaAt(t);
      drawReelFrame(ctx, t);
      out.push({ index: i, t: t, dataUrl: canvas.toDataURL('image/jpeg', 0.82) });
      reel.status = '컷 미리보기 ' + (i + 1) + '/' + reel.captions.length;
      rerenderSoft_();
    }
    reel.previews = out;
    reel.busy = false;
    reel.status = '구도 ' + (FOCUS_LABEL[reel.focus] || '') +
      (reel.focusAuto ? '(자동)' : '(수동)') +
      ' · 클립 ' + includedClips().length + '개 · 본편 ' + fmtTime(contentDuration()) +
      ' + 엔딩홀드 ' + END_HOLD_SEC + '초';
    rerender_();
  }

  function pickMime() {
    var types = [
      'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
      'video/mp4',
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm'
    ];
    for (var i = 0; i < types.length; i++) {
      if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(types[i])) return types[i];
    }
    return '';
  }

  function buildReelMemoText_() {
    var lines = [];
    lines.push('[릴스 메이커 저장]');
    lines.push('상단: ' + (reel.top1 || '') + ' / ' + (reel.top2 || ''));
    lines.push('구도: ' + (FOCUS_LABEL[reel.focus] || reel.focus) + (reel.focusAuto ? ' (자동)' : ' (수동)'));
    lines.push('볼륨: ' + Math.round(clampVolume(reel.volume) * 100) + '% · 속도: ' + clampSpeed(reel.speed).toFixed(2) + 'x' +
      (reel.preservePitch ? ' · 피치 유지' : ''));
    lines.push('구성 클립:');
    includedClips().forEach(function (c, i) {
      if (c.kind === 'video') {
        lines.push((i + 1) + ') 영상 · ' + c.name + ' · 원본 ' +
          fmtTime(c.trimStart || 0) + '~' + fmtTime(c.trimEnd || c.duration) +
          ' (길이 ' + fmtTime(c.duration) + ')' +
          (c.reason ? ' · ' + c.reason : ''));
      } else {
        lines.push((i + 1) + ') 사진 · ' + c.name + ' · ' + fmtTime(c.duration));
      }
    });
    lines.push('멘트 구간:');
    (reel.captions || []).forEach(function (c, i) {
      lines.push((i + 1) + '. ' + fmtTime(c.start) + '~' + fmtTime(c.end) + ' — ' + (c.line1 || '') + ' / ' + (c.line2 || ''));
    });
    return lines.join('\n');
  }

  async function collectPreviewFramesForAnalysis_() {
    var frames = [];
    var canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext('2d');
    var times = (reel.captions || []).map(function (c) { return (c.start + c.end) / 2; });
    if (!times.length) times = [0.5, totalDuration() * 0.5];
    times = times.slice(0, 4);
    for (var i = 0; i < times.length; i++) {
      await prepareMediaAt(times[i]);
      drawReelFrame(ctx, times[i]);
      frames.push({
        data: canvas.toDataURL('image/jpeg', 0.85),
        name: '릴스컷_' + (i + 1) + '.jpg',
        mediaType: 'image'
      });
    }
    return frames;
  }

  function makeSilenceBuffer_(actx, seconds, channels, sampleRate) {
    var len = Math.max(1, Math.floor(seconds * sampleRate));
    return actx.createBuffer(channels, len, sampleRate);
  }

  async function decodeClipAudioBuffer_(actx, clip) {
    if (!clip || clip.kind !== 'video' || !clip.file) return null;
    try {
      var ab = await clip.file.arrayBuffer();
      return await actx.decodeAudioData(ab.slice(0));
    } catch (e) {
      return null;
    }
  }

  function sliceAudioBuffer_(actx, buffer, startSec, endSec) {
    var sr = buffer.sampleRate;
    var start = Math.max(0, Math.floor(startSec * sr));
    var end = Math.min(buffer.length, Math.floor(endSec * sr));
    var len = Math.max(1, end - start);
    var out = actx.createBuffer(buffer.numberOfChannels, len, sr);
    for (var ch = 0; ch < buffer.numberOfChannels; ch++) {
      out.getChannelData(ch).set(buffer.getChannelData(ch).subarray(start, end));
    }
    return out;
  }

  function concatAudioBuffers_(actx, buffers) {
    if (!buffers.length) return makeSilenceBuffer_(actx, 0.05, 2, actx.sampleRate || 48000);
    var sr = buffers[0].sampleRate;
    var chs = buffers[0].numberOfChannels;
    var total = 0;
    for (var i = 0; i < buffers.length; i++) total += buffers[i].length;
    var out = actx.createBuffer(chs, Math.max(1, total), sr);
    var offset = 0;
    for (var b = 0; b < buffers.length; b++) {
      var buf = buffers[b];
      for (var ch = 0; ch < chs; ch++) {
        var srcCh = Math.min(ch, buf.numberOfChannels - 1);
        out.getChannelData(ch).set(buf.getChannelData(srcCh), offset);
      }
      offset += buf.length;
    }
    return out;
  }

  async function buildExportAudioBuffer_() {
    var AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    var probe = new AudioCtx();
    var speed = clampSpeed(reel.speed);
    var volume = clampVolume(reel.volume);
    var list = includedClips();
    var sr = probe.sampleRate;
    var chs = 2;
    var parts = [];

    // 먼저 영상 오디오를 찾아 sampleRate/channel 기준을 맞춤
    for (var i = 0; i < list.length; i++) {
      if (list[i].kind !== 'video') continue;
      var probeDec = await decodeClipAudioBuffer_(probe, list[i]);
      if (probeDec) {
        sr = probeDec.sampleRate;
        chs = probeDec.numberOfChannels;
        break;
      }
    }

    for (var k = 0; k < list.length; k++) {
      var cl = list[k];
      if (cl.kind !== 'video') {
        parts.push(makeSilenceBuffer_(probe, Number(cl.duration) || PHOTO_DEFAULT_SEC, chs, sr));
        continue;
      }
      var dec = await decodeClipAudioBuffer_(probe, cl);
      if (!dec) {
        parts.push(makeSilenceBuffer_(probe, Number(cl.duration) || 1, chs, sr));
        continue;
      }
      var a = Number(cl.trimStart) || 0;
      var b = Number(cl.trimEnd);
      if (!(b > a)) b = a + (Number(cl.duration) || 1);
      var sliced = sliceAudioBuffer_(probe, dec, a, b);
      if (sliced.sampleRate !== sr || sliced.numberOfChannels !== chs) {
        parts.push(makeSilenceBuffer_(probe, Number(cl.duration) || 1, chs, sr));
      } else {
        parts.push(sliced);
      }
    }

    var concat = concatAudioBuffers_(probe, parts);
    try { probe.close(); } catch (e) {}

    var outDur = concat.duration / speed + END_HOLD_SEC;
    var offline = new OfflineAudioContext(chs, Math.max(1, Math.ceil(outDur * sr)), sr);
    var src = offline.createBufferSource();
    src.buffer = concat;
    src.playbackRate.value = speed;
    if (reel.preservePitch && speed !== 1) {
      src.detune.value = -1200 * Math.log(speed) / Math.LN2;
    }
    var gain = offline.createGain();
    gain.gain.value = volume;
    var fadeStart = Math.max(0, outDur - END_FADE_SEC);
    try {
      gain.gain.setValueAtTime(volume, fadeStart);
      gain.gain.linearRampToValueAtTime(0, outDur);
    } catch (e2) {}
    src.connect(gain);
    gain.connect(offline.destination);
    src.start(0);
    return await offline.startRendering();
  }

  async function exportReel() {
    if (!includedClips().length || !reel.captions.length) {
      toast_('포함할 영상·사진을 먼저 선택해 주세요.', 'err');
      return;
    }
    if (typeof MediaRecorder === 'undefined') {
      toast_('이 브라우저에서는 영상 내보내기를 지원하지 않습니다.', 'err');
      return;
    }
    var mime = pickMime();
    if (!mime) {
      toast_('지원되는 녹화 형식이 없습니다.', 'err');
      return;
    }

    reel.busy = true;
    reel.exportPct = 0;
    reel.status = '오디오 준비 중…';
    rerender_();

    var canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext('2d');
    var fps = 30;
    var stream = canvas.captureStream(fps);

    // 오디오 트랙 믹스
    var audioBuf = null;
    var liveCtx = null;
    var audioSrc = null;
    try {
      audioBuf = await buildExportAudioBuffer_();
      if (audioBuf) {
        var AC = window.AudioContext || window.webkitAudioContext;
        liveCtx = new AC();
        var dest = liveCtx.createMediaStreamDestination();
        audioSrc = liveCtx.createBufferSource();
        audioSrc.buffer = audioBuf;
        audioSrc.connect(dest);
        dest.stream.getAudioTracks().forEach(function (tr) { stream.addTrack(tr); });
      }
    } catch (eAud) {
      reel.status = '영상만 렌더(오디오 없음)…';
    }

    var chunks = [];
    var recOpts = { videoBitsPerSecond: 8e6 };
    try { recOpts.mimeType = mime; } catch (e) {}
    var rec;
    try { rec = new MediaRecorder(stream, recOpts); }
    catch (e) { rec = new MediaRecorder(stream); mime = rec.mimeType || 'video/webm'; }
    rec.ondataavailable = function (ev) { if (ev.data && ev.data.size) chunks.push(ev.data); };
    var stopped = new Promise(function (resolve) { rec.onstop = function () { resolve(); }; });

    var duration = renderDuration();
    var step = 1 / fps;
    rec.start(200);
    if (audioSrc && liveCtx) {
      try {
        if (liveCtx.state === 'suspended') await liveCtx.resume();
        audioSrc.start(0);
      } catch (eStart) {}
    }

    for (var tOut = 0; tOut < duration && reel.busy; tOut += step) {
      var tSrc = outputToSourceTime_(tOut);
      await prepareMediaAt(tSrc);
      drawReelFrame(ctx, tSrc, tOut);
      reel.exportPct = Math.min(99, Math.round((tOut / duration) * 100));
      reel.status = '렌더 중… ' + reel.exportPct + '%';
      if (Math.floor(tOut * 2) !== Math.floor((tOut - step) * 2)) rerenderSoftStatus_();
      await new Promise(function (r) { setTimeout(r, Math.max(8, 1000 / fps - 4)); });
    }
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    await new Promise(function (r) { setTimeout(r, 120); });
    try { if (rec.state !== 'inactive') rec.stop(); } catch (e) {}
    await stopped;
    try { if (audioSrc) audioSrc.stop(); } catch (e3) {}
    try { if (liveCtx) liveCtx.close(); } catch (e4) {}

    var ext = mime.indexOf('mp4') >= 0 ? 'mp4' : 'webm';
    var blob = new Blob(chunks, { type: mime.split(';')[0] });
    if (!blob.size) {
      reel.busy = false;
      reel.status = '렌더 결과가 비어 있습니다.';
      toast_(reel.status, 'err');
      rerender_();
      return;
    }
    var baseName = (includedClips()[0] && includedClips()[0].name || 'reel').replace(/\.[^.]+$/, '');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = baseName + '_4x5_IFC.' + ext;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { try { URL.revokeObjectURL(a.href); } catch (e) {} a.remove(); }, 2500);

    try {
      var memo = buildReelMemoText_();
      var frames = await collectPreviewFramesForAnalysis_();
      if (typeof global.applyReelMemoToNewItem_ === 'function') {
        await global.applyReelMemoToNewItem_({ memoText: memo, frames: frames });
      }
    } catch (eMemo) {}

    reel.busy = false;
    reel.exportPct = 100;
    reel.status = '다운로드 완료 (' + ext.toUpperCase() + '). 참고 메모에 반영했습니다.';
    toast_('릴스 저장 · 참고 메모에 반영', 'ok');
    rerender_();
  }

  function toast_(msg, variant) {
    if (typeof setAppToast === 'function') setAppToast(msg, { duration: 2600, variant: variant || 'ok' });
  }
  function rerender_() {
    if (typeof renderMain === 'function') renderMain();
    else if (typeof render === 'function') render();
  }
  function rerenderSoft_() {
    var host = document.getElementById('reel-maker-root');
    if (!host) { rerender_(); return; }
    host.outerHTML = renderReelMakerSectionHTML_();
  }
  function rerenderSoftStatus_() {
    var el = document.getElementById('reel-maker-status');
    if (el) el.textContent = reel.status || '';
    var pct = document.getElementById('reel-maker-pct');
    if (pct) pct.textContent = reel.exportPct ? (reel.exportPct + '%') : '';
  }
  function previewFor(i) {
    var p = (reel.previews || []).filter(function (x) { return x.index === i; })[0];
    return p ? p.dataUrl : '';
  }

  function renderClipList_() {
    if (!reel.clips.length) return '';
    return '<div class="reel-clip-list">' +
      '<div class="reel-cap-list-head"><span class="form-label" style="margin:0;">릴스 후보 구간</span>' +
        '<span style="font-size:10px;color:#9CA3AF;">포함 ' + includedClips().length + '/' + reel.clips.length + ' · ' + fmtTime(totalDuration()) + '</span></div>' +
      '<p class="reel-focus-hint" style="margin-top:0;">긴 영상·여러 영상에서 움직임이 큰 구간을 자동으로 골랐어요. 위에 키워드가 있으면 멘트·구간 개수에 반영됩니다. 시작·끝을 고치거나 포함을 끄면 됩니다.</p>' +
      reel.clips.map(function (c, i) {
        var thumb = c.thumbDataUrl
          ? '<img class="reel-seg-thumb" src="' + c.thumbDataUrl + '" alt="">'
          : '<div class="reel-seg-thumb reel-cap-thumb-empty">컷</div>';
        return '<div class="reel-clip-row' + (c.include ? '' : ' is-off') + '">' +
          thumb +
          '<div class="reel-clip-main">' +
            '<label class="reel-clip-inc"><input type="checkbox" ' + (c.include ? 'checked' : '') + ' onchange="ReelMaker.toggleClip(' + i + ', this.checked)" ' + (reel.busy ? 'disabled' : '') + '>포함</label>' +
            '<div class="reel-clip-name">' + esc(c.kind === 'video' ? '🎞 ' : '🖼 ') + esc(c.name) + '</div>' +
            '<div class="reel-clip-sub">' +
              (c.kind === 'image'
                ? ('길이 <input class="form-input reel-time" value="' + esc(String(c.duration)) + '" onchange="ReelMaker.setClipDuration(' + i + ', this.value)" ' + (reel.busy ? 'disabled' : '') + '>초')
                : ('원본 구간 <input class="form-input reel-time" value="' + esc(fmtTime(c.trimStart || 0)) + '" onchange="ReelMaker.setTrim(' + i + ',\'start\',this.value)" ' + (reel.busy ? 'disabled' : '') + '>' +
                  '~<input class="form-input reel-time" value="' + esc(fmtTime(c.trimEnd || c.duration)) + '" onchange="ReelMaker.setTrim(' + i + ',\'end\',this.value)" ' + (reel.busy ? 'disabled' : '') + '>' +
                  ' <span>(' + fmtTime(c.duration) + (c.sourceDuration ? ' / 전체 ' + fmtTime(c.sourceDuration) : '') + ')</span>')) +
            '</div>' +
            (c.reason ? '<div class="reel-clip-reason">' + esc(c.reason) + (c.score ? ' · 점수 ' + Math.round(c.score) : '') + '</div>' : '') +
          '</div>' +
          '<button type="button" class="reel-cap-del" onclick="ReelMaker.removeClip(' + i + ')" ' + (reel.busy ? 'disabled' : '') + '>삭제</button>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  function renderReelMakerSectionHTML_() {
    var hasMedia = reel.clips.length > 0;
    var caps = reel.captions || [];
    var rows = caps.map(function (c, i) {
      var thumb = previewFor(i);
      return '<div class="reel-cap-row">' +
        '<div class="reel-cap-meta">' +
          '<span class="reel-cap-idx">컷 ' + (i + 1) + '</span>' +
          '<label>시작 <input class="form-input reel-time" value="' + esc(fmtTime(c.start)) + '" onchange="ReelMaker.setCapTime(' + i + ',\'start\',this.value)" ' + (reel.busy ? 'disabled' : '') + '></label>' +
          '<label>끝 <input class="form-input reel-time" value="' + esc(fmtTime(c.end)) + '" onchange="ReelMaker.setCapTime(' + i + ',\'end\',this.value)" ' + (reel.busy ? 'disabled' : '') + '></label>' +
        '</div>' +
        '<div class="reel-cap-body">' +
          (thumb ? '<img class="reel-cap-thumb" src="' + thumb + '" alt="">' : '<div class="reel-cap-thumb reel-cap-thumb-empty">미리보기</div>') +
          '<div class="reel-cap-texts">' +
            '<input class="form-input" value="' + esc(c.line1) + '" placeholder="멘트 1줄" oninput="ReelMaker.setCapText(' + i + ',\'line1\',this.value)" ' + (reel.busy ? 'disabled' : '') + '>' +
            '<input class="form-input" value="' + esc(c.line2) + '" placeholder="멘트 2줄" oninput="ReelMaker.setCapText(' + i + ',\'line2\',this.value)" ' + (reel.busy ? 'disabled' : '') + '>' +
          '</div>' +
        '</div></div>';
    }).join('');

    var onAddForm = !!(global.state && global.state.showAdd);
    return '<div class="form-field reel-maker" id="reel-maker-root">' +
      '<div class="reel-maker-hd' + (onAddForm ? ' add-media-section-hd' : '') + '">' +
        '<label class="form-label">릴스 만들기 <span style="font-weight:600;color:#9CA3AF;">· 4:5</span>' +
          '<span class="reel-maker-pick-hint">참고할 영상, 사진, 폴더를 선택해주세요.</span></label>' +
        (onAddForm
          ? '<button type="button" class="add-media-fold-btn" onclick="closeAddMediaStudio_()" title="접기" aria-label="릴스 만들기 접기">접기 ▴</button>'
          : '') +
      '</div>' +
      '<div class="reel-maker-file-row">' +
        '<input class="form-input" type="file" accept="video/*,image/*" multiple onchange="ReelMaker.onFile(this)" style="padding:8px;" ' + (reel.busy ? 'disabled' : '') + '>' +
        '<label class="reel-folder-btn"' + (reel.busy ? ' aria-disabled="true"' : '') + '>' +
          '<input type="file" webkitdirectory multiple accept="video/*,image/*" onchange="ReelMaker.onFile(this)" ' + (reel.busy ? 'disabled' : '') + ' style="display:none">' +
          '폴더 선택</label>' +
      '</div>' +
      '<div class="reel-maker-hint">PC: 파일 여러 개·폴더 선택 가능.<br>모바일·탬플릿: 사진첩에서 영상/사진만 고르기만 가능.</div>' +
      (hasMedia
        ? (renderClipList_() +
          '<div class="reel-maker-meta" id="reel-maker-meta">본편 ' + fmtTime(contentDuration()) +
            ' · 저장 ' + fmtTime(renderDuration()) + ' (×' + clampSpeed(reel.speed).toFixed(2) + ' · 페이드+홀드)' +
            ' <span id="reel-maker-pct">' + (reel.exportPct ? reel.exportPct + '%' : '') + '</span></div>' +
          '<div class="reel-audio-block">' +
            '<label class="form-label">소리 · 속도</label>' +
            '<div class="reel-audio-row">' +
              '<label class="reel-audio-lab"><span id="reel-vol-label">볼륨 ' + Math.round(clampVolume(reel.volume) * 100) + '%</span>' +
                '<input type="range" min="0" max="100" step="1" value="' + Math.round(clampVolume(reel.volume) * 100) + '" oninput="ReelMaker.setVolume(this.value)" ' + (reel.busy ? 'disabled' : '') + '>' +
              '</label>' +
              '<label class="reel-audio-lab"><span id="reel-spd-label">속도 ' + clampSpeed(reel.speed).toFixed(2) + 'x</span>' +
                '<input type="range" min="100" max="105" step="1" value="' + Math.round(clampSpeed(reel.speed) * 100) + '" oninput="ReelMaker.setSpeed(this.value)" ' + (reel.busy ? 'disabled' : '') + '>' +
              '</label>' +
            '</div>' +
            '<label class="reel-pitch-lab"><input type="checkbox" ' + (reel.preservePitch ? 'checked' : '') + ' onchange="ReelMaker.setPreservePitch(this.checked)" ' + (reel.busy ? 'disabled' : '') + '> 속도 변경 시 피치 유지</label>' +
          '</div>' +
          '<div class="reel-focus-block">' +
            '<label class="form-label">구도' +
              (reel.focusAuto ? ' <span class="reel-focus-auto-tag">자동 · ' + esc(FOCUS_LABEL[reel.focus] || '') + '</span>' : '') +
            '</label>' +
            '<div class="reel-focus-row">' +
              '<button type="button" class="reel-focus-btn' + (reel.focusAuto ? ' active' : '') + '" onclick="ReelMaker.autoFocus()" ' + (reel.busy ? 'disabled' : '') + '>자동</button>' +
              '<button type="button" class="reel-focus-btn' + (reel.focus === 'left' ? ' active' : '') + '" onclick="ReelMaker.setFocus(\'left\')" ' + (reel.busy ? 'disabled' : '') + '>왼쪽</button>' +
              '<button type="button" class="reel-focus-btn' + (reel.focus === 'center' ? ' active' : '') + '" onclick="ReelMaker.setFocus(\'center\')" ' + (reel.busy ? 'disabled' : '') + '>가운데</button>' +
              '<button type="button" class="reel-focus-btn' + (reel.focus === 'right' ? ' active' : '') + '" onclick="ReelMaker.setFocus(\'right\')" ' + (reel.busy ? 'disabled' : '') + '>오른쪽</button>' +
            '</div>' +
          '</div>' +
          '<div class="reel-top-fields">' +
            '<label class="form-label">상단 문구</label>' +
            '<input class="form-input" value="' + esc(reel.top1) + '" oninput="ReelMaker.setTop(1,this.value)" ' + (reel.busy ? 'disabled' : '') + '>' +
            '<input class="form-input" value="' + esc(reel.top2) + '" oninput="ReelMaker.setTop(2,this.value)" style="margin-top:6px;" ' + (reel.busy ? 'disabled' : '') + '>' +
          '</div>' +
          '<div class="reel-cap-list">' +
            '<div class="reel-cap-list-head"><span class="form-label" style="margin:0;">멘트 컷</span>' +
              '<button type="button" class="reel-btn-ghost" onclick="ReelMaker.applyKeywords()" ' + (reel.busy ? 'disabled' : '') + '>키워드→멘트</button>' +
              '<button type="button" class="reel-btn-ghost" onclick="ReelMaker.addCap()" ' + (reel.busy ? 'disabled' : '') + '>구간+</button>' +
              '<button type="button" class="reel-btn-ghost" onclick="ReelMaker.refreshPreviews()" ' + (reel.busy ? 'disabled' : '') + '>미리보기</button>' +
            '</div>' + rows +
          '</div>' +
          '<button type="button" class="btn-submit reel-export-btn" onclick="ReelMaker.exportReel()" ' + (reel.busy ? 'disabled' : '') + '>' +
            (reel.busy && reel.exportPct ? ('렌더 중… ' + reel.exportPct + '%') : '완료 · 저장·다운로드') +
          '</button>')
        : '') +
      '<div class="reel-maker-status" id="reel-maker-status">' + esc(reel.status) + '</div>' +
    '</div>';
  }

  function revokeClip(c) {
    if (!c || !c.objectUrl) return;
    var key = c.sourceKey || c.objectUrl;
    var stillUsed = (reel.clips || []).some(function (other) {
      return other && other !== c && (other.sourceKey || other.objectUrl) === key;
    });
    if (stillUsed) return;
    try { URL.revokeObjectURL(c.objectUrl); } catch (e) {}
  }

  function syncClipDurationFromTrim_(c) {
    if (!c || c.kind !== 'video') return;
    var a = Math.max(0, Number(c.trimStart) || 0);
    var b = Number(c.trimEnd);
    var maxD = Number(c.sourceDuration) || b || a + 1;
    if (!(b > a)) b = Math.min(maxD, a + 8);
    b = Math.min(maxD, b);
    c.trimStart = Math.round(a * 10) / 10;
    c.trimEnd = Math.round(b * 10) / 10;
    c.duration = Math.round((c.trimEnd - c.trimStart) * 10) / 10;
  }

  var api = {
    onFile: function (input) {
      var files = input && input.files;
      if (!files || !files.length) return;
      addFiles(files).catch(function (err) {
        reel.busy = false;
        reel.status = (err && err.message) || '로드 실패';
        toast_(reel.status, 'err');
        rerender_();
      });
      if (input) input.value = '';
    },
    toggleClip: function (i, on) {
      if (!reel.clips[i]) return;
      reel.clips[i].include = !!on;
      rebuildCaptionsKeepText();
      refreshPreviews();
    },
    setClipDuration: function (i, v) {
      if (!reel.clips[i] || reel.clips[i].kind !== 'image') return;
      var n = parseFloat(v);
      if (!(n > 0)) n = PHOTO_DEFAULT_SEC;
      reel.clips[i].duration = Math.min(12, Math.max(1, n));
      reel.clips[i].trimEnd = reel.clips[i].duration;
      rebuildCaptionsKeepText();
      refreshPreviews();
    },
    setTrim: function (i, which, v) {
      var c = reel.clips[i];
      if (!c || c.kind !== 'video') return;
      var t = parseTime(v);
      if (which === 'start') c.trimStart = t;
      else c.trimEnd = t;
      syncClipDurationFromTrim_(c);
      c.reason = '수동 구간';
      rebuildCaptionsKeepText();
      refreshPreviews();
    },
    removeClip: function (i) {
      if (!reel.clips[i]) return;
      var removed = reel.clips[i];
      reel.clips.splice(i, 1);
      revokeClip(removed);
      rebuildCaptionsKeepText();
      if (!reel.clips.length) {
        reel.captions = [];
        reel.previews = [];
        reel.status = '';
        rerender_();
        return;
      }
      refreshPreviews();
    },
    setTop: function (n, v) {
      if (n === 1) reel.top1 = v; else reel.top2 = v;
    },
    setVolume: function (v) {
      reel.volume = clampVolume((Number(v) || 0) / 100);
      var lab = document.getElementById('reel-vol-label');
      if (lab) lab.textContent = '볼륨 ' + Math.round(reel.volume * 100) + '%';
    },
    setSpeed: function (v) {
      reel.speed = clampSpeed((Number(v) || 100) / 100);
      var lab = document.getElementById('reel-spd-label');
      if (lab) lab.textContent = '속도 ' + reel.speed.toFixed(2) + 'x';
      var meta = document.getElementById('reel-maker-meta');
      if (meta) {
        var pct = document.getElementById('reel-maker-pct');
        var pctTxt = pct && pct.textContent ? pct.textContent : '';
        meta.innerHTML = '본편 ' + fmtTime(contentDuration()) +
          ' · 저장 ' + fmtTime(renderDuration()) + ' (×' + reel.speed.toFixed(2) + ' · 페이드+홀드)' +
          ' <span id="reel-maker-pct">' + pctTxt + '</span>';
      }
    },
    setPreservePitch: function (on) {
      reel.preservePitch = !!on;
    },
    setFocus: function (focus) {
      if (focus !== 'left' && focus !== 'center' && focus !== 'right') return;
      reel.focus = focus;
      reel.focusAuto = false;
      refreshPreviews();
    },
    autoFocus: function () {
      reel.busy = true;
      reel.focusAuto = true;
      reel.status = '구도 자동 분석 중…';
      rerender_();
      detectFocusAutoFromClips().then(function (f) {
        reel.focus = f || 'center';
        reel.busy = false;
        return refreshPreviews();
      }).catch(function () {
        reel.focus = 'center';
        reel.busy = false;
        refreshPreviews();
      });
    },
    setCapText: function (i, field, v) {
      if (reel.captions[i]) reel.captions[i][field] = v;
    },
    setCapTime: function (i, field, v) {
      if (reel.captions[i]) reel.captions[i][field] = parseTime(v);
    },
    addCap: function () {
      var last = reel.captions[reel.captions.length - 1];
      var start = last ? last.end : 0;
      var end = Math.min(totalDuration(), start + 4);
      reel.captions.push({ start: start, end: end, line1: '새 멘트 1줄', line2: '새 멘트 2줄' });
      refreshPreviews();
    },
    applyKeywords: function () {
      if (!applyKeywordsToCaptions_(true)) return;
      reel.status = '키워드로 멘트를 채웠습니다. 미리보기를 확인하세요.';
      toast_('키워드 → 멘트 반영', 'ok');
      refreshPreviews();
    },
    refreshPreviews: function () { refreshPreviews(); },
    exportReel: function () {
      exportReel().catch(function (err) {
        reel.busy = false;
        reel.status = (err && err.message) || '내보내기 실패';
        toast_(reel.status, 'err');
        rerender_();
      });
    },
    reset: function () {
      (reel.clips || []).forEach(revokeClip);
      reel.clips = [];
      reel.captions = [];
      reel.previews = [];
      reel.busy = false;
      reel.status = '';
      reel.exportPct = 0;
      reel.top1 = 'IFC x INDIBA';
      reel.top2 = '휴대 가능한 인디바 고주파';
      reel.focus = 'center';
      reel.focusAuto = true;
      reel.zoom = 1.18;
      reel.volume = 0.85;
      reel.speed = 1;
      reel.preservePitch = true;
    },
    renderSection: renderReelMakerSectionHTML_
  };

  global.ReelMaker = api;
  global.renderReelMakerSectionHTML_ = renderReelMakerSectionHTML_;
})(typeof window !== 'undefined' ? window : this);
