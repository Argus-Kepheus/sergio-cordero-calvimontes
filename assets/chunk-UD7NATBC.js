import"./chunk-OYHKDPRU.js";import{a as t}from"./chunk-2Q2YQBUC.js";import{a as e}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";var r="https://www.arguskepheus.com.br/";function p(){let s=["item1","item2","item3"].map(i=>`
      <li class="principle">
        <h3 data-i18n="home.highlights.${i}.title">${e(`home.highlights.${i}.title`)}</h3>
        <p data-i18n="home.highlights.${i}.description">${e(`home.highlights.${i}.description`)}</p>
      </li>
    `).join(""),o=`
    <section class="cover-hero on-cover full-bleed" aria-labelledby="home-title">
      <div class="cover-hero-inner cover-hero-single">
        <div class="cover-hero-text reveal">
          <span class="rule" aria-hidden="true"></span>
          <h1 id="home-title" data-i18n="home.title">${e("home.title")}</h1>
          <span class="rule" aria-hidden="true"></span>
          <p class="subtitle" data-i18n="curriculo.profile.professionalTitle">${e("curriculo.profile.professionalTitle")}</p>
          <div class="cta-buttons">
            ${`<a href="#curriculo" class="btn primary" data-i18n="home.cta.resume">${e("home.cta.resume")}</a>`}
            ${`<a href="#projetos" class="btn secondary" data-i18n="home.cta.projects">${e("home.cta.projects")}</a>`}
          </div>
        </div>
      </div>
    </section>
    <section class="section intro-section reveal">
      <p class="lede" data-i18n="home.intro">${e("home.intro")}</p>
    </section>
    <section class="section highlights-section reveal" aria-labelledby="home-highlights">
      <h2 class="section-title" id="home-highlights" data-i18n="home.highlights.title">${e("home.highlights.title")}</h2>
      <ol class="principles">${s}</ol>
    </section>
    <section class="section publisher-section reveal" aria-labelledby="home-publisher">
      <div class="publisher-card">
        <p class="kicker" data-i18n="home.publisher.kicker">${e("home.publisher.kicker")}</p>
        <h2 id="home-publisher" data-i18n="home.publisher.title">${e("home.publisher.title")}</h2>
        <p data-i18n="home.publisher.description">${e("home.publisher.description")}</p>
        <a href="${r}" class="btn primary" target="_blank" rel="noopener noreferrer" data-i18n="home.publisher.cta">${e("home.publisher.cta")}</a>
      </div>
    </section>
  `;return t("home",o)}export{p as buildHomePage};
