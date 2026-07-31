import{a as s}from"./chunk-55JHTTGY.js";import{a as l,d as c}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function a(e,t=void 0){let n=e.split("."),i=c();for(let o of n)if(i&&Object.prototype.hasOwnProperty.call(i,o))i=i[o];else return t;return i!=null?i:t}function r(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function m(e,t=""){return!e||!e.url||!e.label?"":`<a href="${r(e.url)}" target="_blank" rel="noopener noreferrer" class="${t}">${r(e.label)}</a>`}function $(e){return`
    <section class="resume-hero" aria-labelledby="resume-name">
      <div class="resume-hero-main">
        <h1 id="resume-name">${r(e.name||l("curriculo.title"))}</h1>
        ${e.professionalTitle?`<p class="resume-subtitle">${r(e.professionalTitle)}</p>`:""}
      </div>
    </section>
  `}function f(e){return!e||!e.text?"":`
    <section class="resume-section resume-summary" aria-labelledby="resume-summary-title">
      <h2 id="resume-summary-title">${r(e.title||l("curriculo.summary.title"))}</h2>
      <p>${r(e.text)}</p>
    </section>
  `}function g(e){let t=Array.isArray(e.projects)?e.projects:[];return`
    <article class="timeline-item">
      <div class="timeline-date">${r(e.period||"")}</div>
      <div class="timeline-content">
        <h3>${r(e.degree||"")}</h3>
        <p class="timeline-institution"><strong>${r(e.institution||"")}</strong>${e.location?` \xB7 ${r(e.location)}`:""}</p>
        ${e.description?`<p>${r(e.description)}</p>`:""}
        ${t.length>0?`
          <ul class="resume-link-list">
            ${t.map(n=>`
              <li>${n.url?m({label:n.title,url:n.url}):r(n.title||"")}</li>
            `).join("")}
          </ul>
        `:""}
      </div>
    </article>
  `}function h(e,t){return!Array.isArray(t)||t.length===0?"":`
    <section class="resume-section" aria-labelledby="resume-education-title">
      <h2 id="resume-education-title">${r(e.title||l("curriculo.education.title"))}</h2>
      ${e.description?`<p class="section-description">${r(e.description)}</p>`:""}
      <div class="timeline">
        ${t.map(g).join("")}
      </div>
    </section>
  `}function u(e,t){let n=Array.isArray(e==null?void 0:e.items)?e.items:[];return n.length===0?"":`
    <section class="resume-section" aria-labelledby="${t}">
      <h2 id="${t}">${r(e.title||"")}</h2>
      <div class="resume-card-list">
        ${n.map(i=>`
          <article class="resume-card">
            <h3>${r(i.label||i.title||"")}</h3>
            <p>${r(i.text||i.description||"")}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `}function y(){let e=l("curriculo.downloadLink"),t=l("curriculo.downloadButton");if(!e||e==="curriculo.downloadLink")return"";let i=/^https?:\/\//i.test(e)?'target="_blank" rel="noopener noreferrer"':"download";return`
    <div class="resume-actions">
      <a href="${r(e)}" class="btn primary" ${i} data-i18n="curriculo.downloadButton">${r(t)}</a>
    </div>
  `}function w(e=[]){let t=a("curriculo.profile",{}),n=a("curriculo.summary",{}),i=a("curriculo.education",{}),o=a("curriculo.careerPerspective",{}),d=a("curriculo.additionalTraining",{}),p=`
    ${$(t)}
    ${f(n)}
    ${h(i,e)}
    ${u(o,"resume-career-title")}
    ${u(d,"resume-training-title")}
    ${y()}
  `;return s("curriculo",p)}export{w as buildCurriculoPage};
