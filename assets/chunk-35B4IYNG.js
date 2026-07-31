import{a as o}from"./chunk-55JHTTGY.js";import{a as r}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function e(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function s(t){let i=Array.isArray(t.links)?t.links:[],n=i.length>0?i:t.link?[{label:r("buttons.readMore"),url:t.link}]:[];return n.length===0?"":`
    <div class="publication-links">
      ${n.map(a=>`
        <a href="${e(a.url)}" target="_blank" rel="noopener noreferrer" class="btn outline">${e(a.label)}</a>
      `).join("")}
    </div>
  `}function p(t){let i=[];return t.edition&&i.push(e(t.edition)),t.isbn&&i.push(`ISBN: ${e(t.isbn)}`),t.doi&&i.push(`DOI: <a href="https://doi.org/${e(t.doi)}" target="_blank" rel="noopener noreferrer">${e(t.doi)}</a>`),i.length===0?"":`<p class="publication-identifiers">${i.join(" &middot; ")}</p>`}function d(t,i){let n=[t.type,t.journal,t.publisher,t.year].filter(Boolean),a=`publication-${i+1}`,l=`${a}-title`,c=`${a}-abstract`;return`
    <article class="publication-item" id="${a}" aria-labelledby="${l}" data-publication-year="${e(t.year||"")}" data-publication-type="${e(t.type||"")}">
      <h2 id="${l}">${e(t.title)}</h2>
      ${n.length>0?`<p class="publication-meta">${e(n.join(" | "))}</p>`:""}
      ${p(t)}
      ${t.authors?`<p class="publication-authors">${e(t.authors)}</p>`:""}
      ${t.abstract?`<p class="publication-abstract" id="${c}">${e(t.abstract)}</p>`:""}
      ${s(t)}
    </article>
  `}function f(t=[]){let i=`
    <h1 data-i18n="publicacoes.title">${r("publicacoes.title")}</h1>
    <p data-i18n="publicacoes.description">${r("publicacoes.description")}</p>

    <div class="publications-list" id="publications-list" aria-live="polite">
      ${t.length>0?t.map((n,a)=>d(n,a)).join(""):`<p>${r("publicacoes.noItems")}</p>`}
    </div>
  `;return o("publicacoes",i)}export{f as buildPublicacoesPage};
