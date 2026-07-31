import{a as i}from"./chunk-55JHTTGY.js";import{a as r}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function t(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function p(e){let o=Array.isArray(e.links)?e.links:[],a=[e.demoUrl?{label:r("projetos.demoButton"),url:e.demoUrl,className:"secondary"}:null,e.repoUrl?{label:r("projetos.codeButton"),url:e.repoUrl,className:"outline"}:null].filter(Boolean),l=o.length>0?o:a,s=e.slug?`<a href="#projetos/${t(e.slug)}" class="btn primary">${t(r("projetos.viewDetails"))}</a>`:"";return!s&&l.length===0?"":`
    <div class="project-links">
      ${s}
      ${l.map((n,c)=>`
        <a href="${t(n.url)}" target="_blank" rel="noopener noreferrer" class="btn ${t(n.className||(c===0&&!s?"secondary":"outline"))}">${t(n.label)}</a>
      `).join("")}
    </div>
  `}function g(e){let o=Array.isArray(e.technologies)?e.technologies:[],a=e.category?r(`projetos.categories.${e.category}`):"";return`
    <article class="project-card" data-project-category="${t(e.category||"")}">
      <h2>${t(e.title)}</h2>
      ${a?`<p class="project-context">${t(a)}</p>`:""}
      ${e.context?`<p class="project-context">${t(e.context)}</p>`:""}
      <p>${t(e.description)}</p>
      ${o.length>0?`
        <ul class="tag-list" aria-label="${t(r("projetos.technologiesLabel"))}">
          ${o.map(l=>`<li>${t(l)}</li>`).join("")}
        </ul>
      `:""}
      ${p(e)}
    </article>
  `}function $(e=[]){let o=`
    <h1 data-i18n="projetos.title">${r("projetos.title")}</h1>
    <p data-i18n="projetos.description">${r("projetos.description")}</p>
    <div class="projects-grid" id="projects-grid">
      ${e.map(a=>g(a)).join("")}
    </div>
  `;return i("projetos",o)}export{$ as buildProjetosPage};
