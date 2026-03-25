// ==UserScript==
// @name         Blocker
// @namespace    http://tampermonkey.net/
// @version      2026-03-25
// @description  try to take over the world!
// @author       You
// @updateURL    https://raw.githubusercontent.com/BosnianArtiljerija/tampermonkeyBlocker/main/Blocker-2026-03-25.user.js
// @downloadURL  https://raw.githubusercontent.com/BosnianArtiljerija/tampermonkeyBlocker/main/Blocker-2026-03-25.user.js
// @match *://grok.com/*
// @match *://*.grok.com/*
// @match *://chatgpt.com/*
// @match *://*.chatgpt.com/*
// @match *://x.ai/*
// @match *://*.x.ai/*
// @match *://openai.com/*
// @match *://*.openai.com/*
// @match *://pornhub.com/*
// @match *://*.pornhub.com/*
// @match *://xhamster.com/*
// @match *://*.xhamster.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{
        document.body.innerHTML="Nö";
    },100);
})();