import{a as n}from"./chunk-55JHTTGY.js";import{a as o}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function t(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function g(e){let a=Array.isArray(e.links)?e.links:[];return a.length===0?"":`
    <div class="project-links">
      ${a.map((r,l)=>`
        <a href="${t(r.url)}" target="_blank" rel="noopener noreferrer" class="btn ${t(r.className||(l===0?"secondary":"outline"))}">${t(r.label)}</a>
      `).join("")}
    </div>
  `}function p(e){return e.image?`
    <div class="project-thumbnail project-thumbnail-detail">
      <img src="${t(e.image)}" alt="" loading="lazy" decoding="async" width="800" height="800" />
    </div>
  `:""}function i(e,a){return a?`
    <section class="project-detail-section">
      <h2>${t(o(e))}</h2>
      <p>${t(a)}</p>
    </section>
  `:""}function d(e){let a=Array.isArray(e.technologies)?e.technologies:[],r=e.detail||{},l=e.category?o(`projetos.categories.${e.category}`):"",s=`
    <a href="#projetos" class="btn outline project-detail-back">${t(o("projetos.detail.backToProjects"))}</a>
    ${p(e)}
    <h1>${t(e.title)}</h1>
    ${l?`<p class="project-context">${t(o("projetos.detail.categoryLabel"))}: ${t(l)}</p>`:""}
    ${e.context?`<p class="project-context">${t(e.context)}</p>`:""}
    <p>${t(r.longDescription||e.description)}</p>
    ${a.length>0?`
      <ul class="tag-list" aria-label="${t(o("projetos.technologiesLabel"))}">
        ${a.map(c=>`<li>${t(c)}</li>`).join("")}
      </ul>
    `:""}
    ${i("projetos.detail.roleLabel",r.role)}
    ${i("projetos.detail.resultsLabel",r.results)}
    ${g(e)}
  `;return n("projeto-detalhe",s)}export{d as buildProjetoDetalhePage};
