import{a as n}from"./chunk-55JHTTGY.js";import{a as r}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function t(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function p(e){let o=Array.isArray(e.links)?e.links:[];return o.length===0?"":`
    <div class="project-links">
      ${o.map((a,l)=>`
        <a href="${t(a.url)}" target="_blank" rel="noopener noreferrer" class="btn ${t(a.className||(l===0?"secondary":"outline"))}">${t(a.label)}</a>
      `).join("")}
    </div>
  `}function s(e,o){return o?`
    <section class="project-detail-section">
      <h2>${t(r(e))}</h2>
      <p>${t(o)}</p>
    </section>
  `:""}function u(e){let o=Array.isArray(e.technologies)?e.technologies:[],a=e.detail||{},l=e.category?r(`projetos.categories.${e.category}`):"",i=`
    <a href="#projetos" class="btn outline project-detail-back">${t(r("projetos.detail.backToProjects"))}</a>
    <h1>${t(e.title)}</h1>
    ${l?`<p class="project-context">${t(r("projetos.detail.categoryLabel"))}: ${t(l)}</p>`:""}
    ${e.context?`<p class="project-context">${t(e.context)}</p>`:""}
    <p>${t(a.longDescription||e.description)}</p>
    ${o.length>0?`
      <ul class="tag-list" aria-label="${t(r("projetos.technologiesLabel"))}">
        ${o.map(c=>`<li>${t(c)}</li>`).join("")}
      </ul>
    `:""}
    ${s("projetos.detail.roleLabel",a.role)}
    ${s("projetos.detail.resultsLabel",a.results)}
    ${p(e)}
  `;return n("projeto-detalhe",i)}export{u as buildProjetoDetalhePage};
