import{a as n}from"./chunk-D2XV4R5X.js";function r(){return`
    <div class="back-to-top-container">
      <a href="#top" class="back-to-top-button" aria-label="${n("aria.backToTop")}" data-i18n-aria-label="aria.backToTop">
        <span class="arrow-up">\u2191</span>
        <span class="button-text" data-i18n="buttons.backToTop">${n("buttons.backToTop")}</span>
      </a>
    </div>
  `}function p(a,o,e=!1){console.log("Creating page container for:",a);let t=`
    <div class="page-container ${a}-page">
      ${o}
      ${e?r():""}
    </div>
  `;return console.log("Page container HTML:",t),t}var c=[360,720];function l(a,o){let e=a.replace(/\.[a-z0-9]+$/iu,""),t=c.map(s=>`${e}-${s}.webp ${s}w`).join(", ");return`src="${a}" srcset="${t}" sizes="${o}"`}export{p as a,l as b};
