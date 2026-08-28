import{a as d}from"./chunk-55JHTTGY.js";import{a as e,d as m}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";var f="sergio.cordero.calvimontes@proton.me";function s(a,o=void 0){let n=a.split("."),t=m();for(let i of n)if(t&&Object.prototype.hasOwnProperty.call(t,i))t=t[i];else return o;return t!=null?t:o}function r(a=""){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function p(a,o,n=""){if(!o)return"";let t=`<bdi dir="ltr">${r(o)}</bdi>`,l=/^https?:\/\//i.test(n)?' target="_blank" rel="noopener noreferrer"':"";return`
    <p><strong>${r(a)}:</strong> ${n?`<a href="${r(n)}" dir="ltr"${l}>${t}</a>`:t}
    </p>
  `}function c(a,o,n="secondary"){return o?`<a href="${r(o)}" class="btn ${n}" target="_blank" rel="noopener noreferrer">${r(a)}</a>`:""}function u(){return`
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
  `}function h(){return`
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
  `}function g(){let a=e("contato.email")||f,o=s("contato.lattes",""),n=s("contato.europass",""),t=s("contato.github",""),i=a&&a!=="contato.email",l=`
    <h1 data-i18n="contato.title">${e("contato.title")}</h1>

    <div class="contact-info">
      ${i?p(e("contato.labels.email"),a,`mailto:${a}`):""}
    </div>

    ${o||n||t?`
      <div class="contact-buttons">
        ${c("CV Lattes",o,"secondary")}
        ${c("Europass",n,"outline")}
        ${c("GitHub",t,"outline")}
      </div>
    `:""}

    <div class="contact-forms">
      ${u()}
      ${h()}
    </div>
  `;return d("contato",l)}export{g as buildContatoPage};
