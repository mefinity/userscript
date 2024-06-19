// ==UserScript==
// @name        Cure Elaelo Disability
// @namespace   Violentmonkey script
// @version     1.1
// @description Delete 'disabled="disabled"' on elaelo
// @author      MeFinity
// @homepageURL https://github.com/MeFinity/userscript
// @downloadURL  https://github.com/MeFinity/userscript/raw/main/elaelo-able.user.js
// @updateURL    https://github.com/MeFinity/userscript/raw/main/elaelo-able.user.js
// @match       https://elaelo.com/*
// @match       https://elaelo.id/*
// @match       https://elaelo.app/*
// @grant       none
// ==/UserScript==

(function() {
  'use strict';

  function curedisability() {
    const buttons = document.querySelectorAll('button[disabled="disabled"]');
    for (const button of buttons) {
      button.removeAttribute('disabled');
    }
  }

  curedisability();
  setInterval(curedisability, 3000);
})();
