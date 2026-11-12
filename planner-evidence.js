/* 전문가 과정 글 — 공개 API 근거 검색·서지 검증·NotebookLM 자료 묶음 */
var PlannerEvidence = (function(){
  var OPENALEX_MAILTO = 'planner-evidence@local';

  function trimText(v, max){
    var s = String(v == null ? '' : v).replace(/\s+/g, ' ').trim();
    if(max && s.length > max) s = s.slice(0, max - 1) + '…';
    return s;
  }

  function buildSearchQuery(topic, hook){
    var t = trimText(topic, 120);
    var h = trimText(hook, 160);
    var parts = [];
    if(t) parts.push(t);
    if(h){
      // 검색어는 영·한 핵심 구만 — 너무 긴 문장은 OpenAlex 품질이 떨어진다.
      var shortHook = h.split(/[.。!?]/)[0] || h;
      shortHook = trimText(shortHook, 80);
      if(shortHook && shortHook !== t) parts.push(shortHook);
    }
    return parts.join(' ').trim() || t;
  }

  function authorsFromOpenAlex(authorships){
    var list = Array.isArray(authorships) ? authorships : [];
    var names = list.slice(0, 4).map(function(a){
      var d = a && a.author && a.author.display_name;
      return trimText(d, 40);
    }).filter(Boolean);
    if(!names.length) return 'Anonymous';
    if(list.length > 4) return names[0] + ' et al.';
    if(names.length === 1) return names[0];
    return names[0] + (names.length === 2 ? ' & ' + names[1] : ' et al.');
  }

  function yearFromOpenAlex(work){
    var y = work && (work.publication_year || (work.publication_date && String(work.publication_date).slice(0, 4)));
    y = parseInt(y, 10);
    return isNaN(y) ? '' : y;
  }

  function doiFromOpenAlex(work){
    var d = work && work.doi ? String(work.doi) : '';
    return d.replace(/^https?:\/\/doi\.org\//i, '').trim();
  }

  function journalFromOpenAlex(work){
    var src = work && work.primary_location && work.primary_location.source;
    return trimText(src && src.display_name, 80);
  }

  function abstractFromInverted(inv){
    if(!inv || typeof inv !== 'object') return '';
    var slots = [];
    Object.keys(inv).forEach(function(word){
      (inv[word] || []).forEach(function(i){ slots[i] = word; });
    });
    return trimText(slots.filter(Boolean).join(' '), 220);
  }

  function citationLine(paper){
    if(!paper) return '';
    var authors = trimText(paper.authors, 80) || 'Anonymous';
    var year = paper.year ? String(paper.year) : 'n.d.';
    var title = trimText(paper.title, 160);
    var journal = trimText(paper.journal, 80);
    var line = authors + ' (' + year + '). ' + title + '.';
    if(journal) line += ' ' + journal + '.';
    return line;
  }

  function normalizeOpenAlexWork(work){
    if(!work || typeof work !== 'object') return null;
    var id = String(work.id || '').replace('https://openalex.org/', '');
    if(!id) id = 'oa-' + Math.abs(hashStr_(String(work.display_name || Math.random()))).toString(36);
    var doi = doiFromOpenAlex(work);
    var pmid = '';
    var ids = work.ids || {};
    if(ids.pmid) pmid = String(ids.pmid).replace(/^https?:\/\/pubmed\.ncbi\.nlm\.nih\.gov\//i, '').replace(/\D/g, '');
    var url = '';
    if(doi) url = 'https://doi.org/' + doi;
    else if(pmid) url = 'https://pubmed.ncbi.nlm.nih.gov/' + pmid + '/';
    else if(work.id) url = String(work.id);
    var paper = {
      id: pmid ? ('pmid:' + pmid) : ('openalex:' + id),
      source: 'openalex',
      authors: authorsFromOpenAlex(work.authorships),
      year: yearFromOpenAlex(work),
      title: trimText(work.display_name || work.title, 200),
      journal: journalFromOpenAlex(work),
      doi: doi,
      pmid: pmid,
      url: url,
      abstractSummary: abstractFromInverted(work.abstract_inverted_index) || trimText(work.abstract, 220)
    };
    if(!paper.title) return null;
    paper.citationLine = citationLine(paper);
    return paper;
  }

  function hashStr_(s){
    var h = 0;
    for(var i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i) | 0;
    return h;
  }

  function normalizePubMedSummary(item){
    if(!item || typeof item !== 'object') return null;
    var pmid = String(item.uid || item.pmid || '').replace(/\D/g, '');
    if(!pmid) return null;
    var authors = '';
    if(Array.isArray(item.authors) && item.authors.length){
      authors = trimText(item.authors[0].name, 40);
      if(item.authors.length > 1) authors += ' et al.';
    } else authors = 'Anonymous';
    var year = '';
    var pub = String(item.pubdate || item.sortpubdate || '').slice(0, 4);
    if(/^\d{4}$/.test(pub)) year = parseInt(pub, 10);
    var paper = {
      id: 'pmid:' + pmid,
      source: 'pubmed',
      authors: authors,
      year: year,
      title: trimText(item.title, 200),
      journal: trimText(item.fulljournalname || item.source, 80),
      doi: trimText(item.elocationid && String(item.elocationid).replace(/^doi:\s*/i, ''), 80),
      pmid: pmid,
      url: 'https://pubmed.ncbi.nlm.nih.gov/' + pmid + '/',
      abstractSummary: trimText(item.sorttitle || '', 220)
    };
    if(!paper.title) return null;
    paper.citationLine = citationLine(paper);
    return paper;
  }

  async function fetchOpenAlex(query, limit){
    limit = limit || 8;
    var q = trimText(query, 200);
    if(!q) return [];
    var url = 'https://api.openalex.org/works?search=' + encodeURIComponent(q) +
      '&per_page=' + limit +
      '&filter=type:article' +
      '&mailto=' + encodeURIComponent(OPENALEX_MAILTO);
    var res = await fetch(url, { method: 'GET', mode: 'cors' });
    if(!res.ok) throw new Error('OpenAlex HTTP ' + res.status);
    var data = await res.json();
    var results = Array.isArray(data.results) ? data.results : [];
    return results.map(normalizeOpenAlexWork).filter(Boolean);
  }

  async function fetchPubMed(query, limit){
    limit = limit || 8;
    var q = trimText(query, 200);
    if(!q) return [];
    var searchUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=' +
      limit + '&term=' + encodeURIComponent(q);
    var sRes = await fetch(searchUrl, { method: 'GET', mode: 'cors' });
    if(!sRes.ok) throw new Error('PubMed search HTTP ' + sRes.status);
    var sData = await sRes.json();
    var ids = (((sData || {}).esearchresult) || {}).idlist || [];
    if(!ids.length) return [];
    var sumUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=' + ids.join(',');
    var uRes = await fetch(sumUrl, { method: 'GET', mode: 'cors' });
    if(!uRes.ok) throw new Error('PubMed summary HTTP ' + uRes.status);
    var uData = await uRes.json();
    var result = ((uData || {}).result) || {};
    return ids.map(function(id){ return normalizePubMedSummary(result[id]); }).filter(Boolean);
  }

  function dedupePapers(list){
    var seen = {};
    var out = [];
    (list || []).forEach(function(p){
      if(!p || !p.id) return;
      var key = p.doi ? ('doi:' + String(p.doi).toLowerCase()) : p.id;
      if(seen[key]) return;
      seen[key] = true;
      out.push(p);
    });
    return out;
  }

  /** 공개 API만 사용. Apps Script 프록시가 있으면 우선, 없으면 OpenAlex(·가능하면 PubMed). */
  async function searchPapers(query, opts){
    opts = opts || {};
    var q = buildSearchQuery(opts.topic || query, opts.hook || '');
    if(!q) return [];
    var papers = [];
    if(typeof opts.gasSearch === 'function'){
      try {
        var gasPapers = await opts.gasSearch(q);
        if(Array.isArray(gasPapers) && gasPapers.length) papers = papers.concat(gasPapers);
      } catch(eGas){}
    }
    try {
      papers = papers.concat(await fetchOpenAlex(q, opts.limit || 8));
    } catch(eOa){
      if(!papers.length) throw eOa;
    }
    try {
      papers = papers.concat(await fetchPubMed(q, Math.min(6, opts.limit || 8)));
    } catch(ePm){
      // PubMed는 브라우저 CORS로 막힐 수 있음 — OpenAlex만으로도 충분.
    }
    return dedupePapers(papers).slice(0, opts.limit || 10);
  }

  function paperMatchScore(line, paper){
    line = String(line || '').toLowerCase();
    if(!line || !paper) return 0;
    var score = 0;
    var title = trimText(paper.title, 80).toLowerCase();
    if(title && line.indexOf(title.slice(0, Math.min(24, title.length))) >= 0) score += 3;
    if(paper.year && line.indexOf(String(paper.year)) >= 0) score += 1;
    var author = trimText(String(paper.authors || '').split(/[&,]/)[0], 30).toLowerCase();
    if(author && line.indexOf(author) >= 0) score += 2;
    return score;
  }

  /** 모델이 지어낸 참고 문헌 줄을 걸러, API로 확인된 서지만 남긴다. */
  function filterReferencesToVerified(text, papers){
    var list = Array.isArray(papers) ? papers : [];
    if(!list.length) return '';
    var lines = String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n').map(function(l){ return l.trim(); }).filter(Boolean);
    var kept = [];
    var used = {};
    lines.forEach(function(line){
      var best = null;
      var bestScore = 0;
      list.forEach(function(p){
        var s = paperMatchScore(line, p);
        if(s > bestScore){ bestScore = s; best = p; }
      });
      if(best && bestScore >= 3 && !used[best.id]){
        used[best.id] = true;
        kept.push(best.citationLine || citationLine(best));
      }
    });
    return kept.join('\n');
  }

  function buildEvidencePromptBlock(papers){
    var list = Array.isArray(papers) ? papers : [];
    if(!list.length) return '';
    var lines = [
      '[검증된 근거 목록 — API로 확인된 논문만. 이 목록에 없는 논문을 만들지 마세요]',
      '본문에서 실제로 쓴 근거만 blog.references에 아래 형식으로 한 줄씩 적으세요: 저자 (연도). 제목. 저널.',
      '목록에 없는 저자·연도·제목을 지어내지 마세요. 쓰지 않은 논문은 references에 넣지 마세요. 링크·DOI는 넣지 마세요.'
    ];
    list.forEach(function(p, i){
      lines.push((i + 1) + '. ' + (p.citationLine || citationLine(p)));
      if(p.abstractSummary) lines.push('   요약: ' + trimText(p.abstractSummary, 180));
      if(p.url) lines.push('   링크: ' + p.url);
    });
    return lines.join('\n');
  }

  function buildNotebookLmPack(opts){
    opts = opts || {};
    var blog = opts.blog || {};
    var papers = Array.isArray(opts.papers) ? opts.papers : [];
    var placement = trimText(opts.placement, 200);
    var imagePrompt = String(opts.imagePrompt || '').trim();
    var linked = Array.isArray(opts.linkedImages) ? opts.linkedImages : [];
    var parts = [];
    parts.push('# NotebookLM 자료 묶음 — 근거 이미지');
    parts.push('');
    parts.push('## 블로그 초안');
    parts.push('제목: ' + trimText(blog.title, 200));
    if(blog.hook) parts.push('\n[영상·사진 맥락]\n' + String(blog.hook).trim());
    if(blog.outline || blog.outlineText){
      var outline = typeof PlannerSyncRules !== 'undefined' && PlannerSyncRules.plannerOutlineDisplayText
        ? PlannerSyncRules.plannerOutlineDisplayText(blog.outlineText, blog.outline)
        : (Array.isArray(blog.outline) ? blog.outline.join('\n') : String(blog.outlineText || ''));
      if(outline) parts.push('\n[시연·핵심 포인트]\n' + outline);
    }
    if(blog.draft) parts.push('\n[원리 설명]\n' + String(blog.draft).trim());
    if(blog.cta) parts.push('\n[마무리]\n' + String(blog.cta).trim());
    parts.push('');
    parts.push('## 근거 논문 (서지·링크)');
    if(!papers.length) parts.push('(선택된 근거 없음)');
    papers.forEach(function(p, i){
      parts.push((i + 1) + '. ' + (p.citationLine || citationLine(p)));
      if(p.url) parts.push('   ' + p.url);
      if(p.abstractSummary) parts.push('   요약: ' + trimText(p.abstractSummary, 200));
    });
    parts.push('');
    parts.push('## 이미지 배치');
    parts.push(placement ? ('관련 문단: ' + placement) : '관련 문단: (시연·핵심 포인트 또는 원리 설명 중 해당 문단 바로 아래)');
    if(linked.length){
      parts.push('');
      parts.push('## 카드에 올린 근거 이미지');
      linked.forEach(function(img, i){
        parts.push((i + 1) + '. ' + trimText(img.name || ('이미지' + (i + 1)), 80) +
          (img.paperId ? (' → ' + img.paperId) : ''));
      });
    }
    parts.push('');
    parts.push('## 이미지 프롬프트');
    parts.push(imagePrompt || '(프롬프트 없음)');
    parts.push('');
    parts.push('## NotebookLM 지시');
    parts.push(IMAGE_TOOL_HINT_());
    return parts.join('\n');
  }

  function IMAGE_TOOL_HINT_(){
    return '업로드한 블로그와 참고 문헌만 근거로 인포그래픽 한 장을 만들어 주세요. 문헌에 없는 주장은 넣지 마세요. 이미지 안 글자는 최소로, 라벨·인용은 나중에 직접 넣을 수 있게 여백을 두세요.';
  }

  var NOTEBOOKLM_URL = 'https://notebooklm.google.com/';

  return {
    buildSearchQuery: buildSearchQuery,
    citationLine: citationLine,
    normalizeOpenAlexWork: normalizeOpenAlexWork,
    normalizePubMedSummary: normalizePubMedSummary,
    searchPapers: searchPapers,
    fetchOpenAlex: fetchOpenAlex,
    fetchPubMed: fetchPubMed,
    dedupePapers: dedupePapers,
    filterReferencesToVerified: filterReferencesToVerified,
    buildEvidencePromptBlock: buildEvidencePromptBlock,
    buildNotebookLmPack: buildNotebookLmPack,
    NOTEBOOKLM_URL: NOTEBOOKLM_URL
  };
})();
if(typeof module !== 'undefined' && module.exports) module.exports = PlannerEvidence;
