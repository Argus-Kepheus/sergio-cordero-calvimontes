import{a as i,b as n}from"./chunk-2Q2YQBUC.js";import{a as o}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function t(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function g(e){let a=Array.isArray(e.links)?e.links:[];return a.length===0?"":`
    <div class="project-links">
      ${a.map((r,l)=>`
        <a href="${t(r.url)}" target="_blank" rel="noopener noreferrer" class="btn ${t(r.className||(l===0?"secondary":"outline"))}">${t(r.label)}</a>
      `).join("")}
    </div>
  `}function u(e){return e.image?`
    <div class="project-thumbnail project-thumbnail-detail">
      <img ${n(t(e.image),"(max-width: 640px) calc(100vw - 32px), 360px")} alt="" decoding="async" width="720" height="720" />
    </div>
  `:""}function s(e,a){return a?`
    <section class="project-detail-section">
      <h2>${t(o(e))}</h2>
      <p>${t(a)}</p>
    </section>
  `:""}function h(e){let a=Array.isArray(e.technologies)?e.technologies:[],r=e.detail||{},l=e.category?o(`projetos.categories.${e.category}`):"",c=`
    <a href="#projetos" class="btn outline project-detail-back">${t(o("projetos.detail.backToProjects"))}</a>
    ${u(e)}
    <h1>${t(e.title)}</h1>
    ${l?`<p class="project-context">${t(o("projetos.detail.categoryLabel"))}: ${t(l)}</p>`:""}
    ${e.context?`<p class="project-context">${t(e.context)}</p>`:""}
    <p>${t(r.longDescription||e.description)}</p>
    ${a.length>0?`
      <ul class="tag-list" aria-label="${t(o("projetos.technologiesLabel"))}">
        ${a.map(p=>`<li>${t(p)}</li>`).join("")}
      </ul>
    `:""}
    ${s("projetos.detail.roleLabel",r.role)}
    ${s("projetos.detail.resultsLabel",r.results)}
    ${g(e)}
  `;return i("projeto-detalhe",c)}export{h as buildProjetoDetalhePage};
