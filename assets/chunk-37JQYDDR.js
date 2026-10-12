import{a as s}from"./chunk-2Q2YQBUC.js";import{a as e,d as c}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function n(t,o=void 0){let i=t.split("."),a=c();for(let l of i)if(a&&Object.prototype.hasOwnProperty.call(a,l))a=a[l];else return o;return a!=null?a:o}function m(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function r(t,o,i="secondary"){return o?`<a href="${m(o)}" class="btn ${i}" target="_blank" rel="noopener noreferrer">${m(t)}</a>`:""}function d(){return`
    <details class="contact-section">
      <summary data-i18n="contato.sections.message">${e("contato.sections.message")}</summary>
      <div class="contact-form">
        <form id="contact-form" action="https://formspree.io/f/xgogqzyq" method="POST" enctype="multipart/form-data">
          <div class="form-group">
            <label for="name" data-i18n="contato.form.name">${e("contato.form.name")}</label>
            <input type="text" id="name" name="name" required data-i18n-placeholder="form.placeholders.name" placeholder="${e("form.placeholders.name")}">
          </div>
          <div class="form-group">
            <label for="email" data-i18n="contato.form.email">${e("contato.form.email")}</label>
            <input type="email" id="email" name="email" required data-i18n-placeholder="form.placeholders.email" placeholder="${e("form.placeholders.email")}">
          </div>
          <div class="form-group">
            <label for="subject" data-i18n="contato.form.subject">${e("contato.form.subject")}</label>
            <input type="text" id="subject" name="subject" required data-i18n-placeholder="form.placeholders.subject" placeholder="${e("form.placeholders.subject")}">
          </div>
          <div class="form-group">
            <label for="message" data-i18n="contato.form.message">${e("contato.form.message")}</label>
            <textarea id="message" name="message" rows="5" required data-i18n-placeholder="form.placeholders.message" placeholder="${e("form.placeholders.message")}"></textarea>
          </div>
          <div class="form-group">
            <div class="checkbox-container">
              <input type="checkbox" id="privacy-consent" name="privacy-consent" required>
              <label for="privacy-consent">
                <span data-i18n="privacy.consent">${e("privacy.consent")}</span>
                <a href="#privacyPolicy" class="privacy-link">${e("privacy.title")}</a>
              </label>
            </div>
          </div>
          <button type="submit" class="btn primary" data-i18n="contato.form.send">${e("contato.form.send")}</button>
        </form>
        <div id="form-status" class="form-status hidden" role="status" aria-live="polite"></div>
      </div>
    </details>
  `}function f(){return`
    <details class="contact-section">
      <summary data-i18n="contato.sections.file">${e("contato.sections.file")}</summary>
      <div class="contact-form">
        <form id="contact-form-file" action="https://forminit.com/f/2vsofm10hvn" method="POST" enctype="multipart/form-data">
          <div class="form-group">
            <label for="file-name" data-i18n="contato.form.name">${e("contato.form.name")}</label>
            <input type="text" id="file-name" name="fi-sender-fullName" required data-i18n-placeholder="form.placeholders.name" placeholder="${e("form.placeholders.name")}">
          </div>
          <div class="form-group">
            <label for="file-email" data-i18n="contato.form.email">${e("contato.form.email")}</label>
            <input type="email" id="file-email" name="fi-sender-email" required data-i18n-placeholder="form.placeholders.email" placeholder="${e("form.placeholders.email")}">
          </div>
          <input type="hidden" name="fi-text-subject" value="inbox-document">
          <div class="form-group">
            <label for="file-message" data-i18n="contato.form.message">${e("contato.form.message")}</label>
            <textarea id="file-message" name="fi-text-message" rows="5" required data-i18n-placeholder="form.placeholders.message" placeholder="${e("form.placeholders.message")}"></textarea>
          </div>
          <div class="form-group">
            <label for="file-attachment" data-i18n="contato.form.attachment">${e("contato.form.attachment")}</label>
            <div class="file-input">
              <input type="file" id="file-attachment" name="fi-file-attachment" required accept=".pdf,application/pdf" class="file-input-native">
              <label for="file-attachment" class="file-input-trigger" data-i18n="contato.form.chooseFile">${e("contato.form.chooseFile")}</label>
              <span class="file-input-filename" data-i18n="contato.form.noFileChosen">${e("contato.form.noFileChosen")}</span>
            </div>
            <p class="field-hint" data-i18n="contato.form.attachmentHint">${e("contato.form.attachmentHint")}</p>
          </div>
          <div class="form-group">
            <div class="checkbox-container">
              <input type="checkbox" id="file-privacy-consent" name="fi-text-privacyConsent" required>
              <label for="file-privacy-consent">
                <span data-i18n="privacy.consent">${e("privacy.consent")}</span>
                <a href="#privacyPolicy" class="privacy-link">${e("privacy.title")}</a>
              </label>
            </div>
          </div>
          <button type="submit" class="btn primary" data-i18n="contato.form.sendFile">${e("contato.form.sendFile")}</button>
        </form>
        <div id="form-status-file" class="form-status hidden" role="status" aria-live="polite"></div>
      </div>
    </details>
  `}function h(){let t=n("contato.lattes",""),o=n("contato.europass",""),i=n("contato.github",""),a=`
    <h1 data-i18n="contato.title">${e("contato.title")}</h1>

    ${t||o||i?`
      <div class="contact-buttons">
        ${r("CV Lattes",t,"secondary")}
        ${r("Europass",o,"outline")}
        ${r("GitHub",i,"outline")}
      </div>
    `:""}

    <div class="contact-forms">
      ${d()}
      ${f()}
    </div>
  `;return s("contato",a)}export{h as buildContatoPage};
