import{a as o}from"./chunk-2Q2YQBUC.js";import{a as n}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function e(i=""){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function s(i){let t=Array.isArray(i.links)?i.links:[],a=t.length>0?t:i.link?[{label:n("buttons.readMore"),url:i.link}]:[];return a.length===0?"":`
    <ul class="publication-links">
      ${a.map(l=>`
        <li><a href="${e(l.url)}" target="_blank" rel="noopener noreferrer">${e(l.label)}</a></li>
      `).join("")}
    </ul>
  `}function c(i){let t=[];return i.edition&&t.push(e(i.edition)),i.isbn&&t.push(`ISBN: ${e(i.isbn)}`),i.doi&&t.push(`DOI: <a href="https://doi.org/${e(i.doi)}" target="_blank" rel="noopener noreferrer">${e(i.doi)}</a>`),t.length===0?"":`<p class="publication-identifiers">${t.join(" &middot; ")}</p>`}function p(i,t){let a=[c(i),i.authors?`<p class="publication-authors">${e(i.authors)}</p>`:"",i.abstract?`<p class="publication-abstract">${e(i.abstract)}</p>`:""].join("");return a?`
    <details class="publication-details">
      <summary aria-describedby="${t}" data-i18n="projetos.viewDetails">${n("projetos.viewDetails")}</summary>
      ${a}
    </details>
  `:""}function d(i,t){let a=[i.type,i.journal,i.publisher,i.year].filter(Boolean),l=`publication-${t+1}`,r=`${l}-title`;return`
    <article class="publication-item" id="${l}" aria-labelledby="${r}" data-publication-year="${e(i.year||"")}" data-publication-type="${e(i.type||"")}">
      <h2 id="${r}">${e(i.title)}</h2>
      ${a.length>0?`<p class="publication-meta">${e(a.join(" | "))}</p>`:""}
      ${s(i)}
      ${p(i,r)}
    </article>
  `}function f(i=[]){let t=`
    <h1 data-i18n="publicacoes.title">${n("publicacoes.title")}</h1>
    <p data-i18n="publicacoes.description">${n("publicacoes.description")}</p>

    <div class="publications-list" id="publications-list" aria-live="polite">
      ${i.length>0?i.map((a,l)=>d(a,l)).join(""):`<p>${n("publicacoes.noItems")}</p>`}
    </div>
  `;return o("publicacoes",t)}export{f as buildPublicacoesPage};
