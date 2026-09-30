import{a as s,b as c}from"./chunk-2Q2YQBUC.js";import{a}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function t(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function p(e){let r=Array.isArray(e.links)?e.links:[],o=[e.demoUrl?{label:a("projetos.demoButton"),url:e.demoUrl,className:"secondary"}:null,e.repoUrl?{label:a("projetos.codeButton"),url:e.repoUrl,className:"outline"}:null].filter(Boolean),l=r.length>0?r:o,n=e.slug?`<a href="#projetos/${t(e.slug)}" class="btn primary">${t(a("projetos.viewDetails"))}</a>`:"";return!n&&l.length===0?"":`
    <div class="project-links">
      ${n}
      ${l.map((i,g)=>`
        <a href="${t(i.url)}" target="_blank" rel="noopener noreferrer" class="btn ${t(i.className||(g===0&&!n?"secondary":"outline"))}">${t(i.label)}</a>
      `).join("")}
    </div>
  `}function d(e){return e.image?`
    <div class="project-thumbnail">
      <img ${c(t(e.image),"(max-width: 640px) calc(100vw - 32px), (max-width: 960px) calc(50vw - 40px), 340px")} alt="" loading="lazy" decoding="async" width="720" height="720" />
    </div>
  `:""}function u(e){let r=Array.isArray(e.technologies)?e.technologies:[],o=e.category?a(`projetos.categories.${e.category}`):"";return`
    <article class="project-card" data-project-category="${t(e.category||"")}">
      ${d(e)}
      <h2>${t(e.title)}</h2>
      ${o?`<p class="project-context">${t(o)}</p>`:""}
      ${e.context?`<p class="project-context">${t(e.context)}</p>`:""}
      <p>${t(e.description)}</p>
      ${r.length>0?`
        <ul class="tag-list" aria-label="${t(a("projetos.technologiesLabel"))}">
          ${r.map(l=>`<li>${t(l)}</li>`).join("")}
        </ul>
      `:""}
      ${p(e)}
    </article>
  `}function h(e=[]){let r=`
    <h1 data-i18n="projetos.title">${a("projetos.title")}</h1>
    <p data-i18n="projetos.description">${a("projetos.description")}</p>
    <div class="projects-grid" id="projects-grid">
      ${e.map(o=>u(o)).join("")}
    </div>
  `;return s("projetos",r)}export{h as buildProjetosPage};
