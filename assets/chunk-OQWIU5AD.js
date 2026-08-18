import{a as i}from"./chunk-55JHTTGY.js";import{a as r}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function t(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function g(e){let a=Array.isArray(e.links)?e.links:[],o=[e.demoUrl?{label:r("projetos.demoButton"),url:e.demoUrl,className:"secondary"}:null,e.repoUrl?{label:r("projetos.codeButton"),url:e.repoUrl,className:"outline"}:null].filter(Boolean),l=a.length>0?a:o,n=e.slug?`<a href="#projetos/${t(e.slug)}" class="btn primary">${t(r("projetos.viewDetails"))}</a>`:"";return!n&&l.length===0?"":`
    <div class="project-links">
      ${n}
      ${l.map((s,c)=>`
        <a href="${t(s.url)}" target="_blank" rel="noopener noreferrer" class="btn ${t(s.className||(c===0&&!n?"secondary":"outline"))}">${t(s.label)}</a>
      `).join("")}
    </div>
  `}function d(e){return e.image?`
    <div class="project-thumbnail">
      <img src="${t(e.image)}" alt="" loading="lazy" decoding="async" width="800" height="800" />
    </div>
  `:""}function p(e){let a=Array.isArray(e.technologies)?e.technologies:[],o=e.category?r(`projetos.categories.${e.category}`):"";return`
    <article class="project-card" data-project-category="${t(e.category||"")}">
      ${d(e)}
      <h2>${t(e.title)}</h2>
      ${o?`<p class="project-context">${t(o)}</p>`:""}
      ${e.context?`<p class="project-context">${t(e.context)}</p>`:""}
      <p>${t(e.description)}</p>
      ${a.length>0?`
        <ul class="tag-list" aria-label="${t(r("projetos.technologiesLabel"))}">
          ${a.map(l=>`<li>${t(l)}</li>`).join("")}
        </ul>
      `:""}
      ${g(e)}
    </article>
  `}function m(e=[]){let a=`
    <h1 data-i18n="projetos.title">${r("projetos.title")}</h1>
    <p data-i18n="projetos.description">${r("projetos.description")}</p>
    <div class="projects-grid" id="projects-grid">
      ${e.map(o=>p(o)).join("")}
    </div>
  `;return i("projetos",a)}export{m as buildProjetosPage};
