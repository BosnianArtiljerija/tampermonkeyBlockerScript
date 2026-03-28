// ==UserScript==
// @name         Blocker
// @namespace    http://tampermonkey.net/
// @version      2026-03-39
// @description  try to take over the world!
// @author       You
// @downloadURL  https://raw.githubusercontent.com/BosnianArtiljerija/tampermonkeyBlockerScript/main/Blocker.user.js
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
// @match *://instagram.com
// @match *://www.instagram.com
// @match *://gemini.google.com/*
// @match *://*.gemini.google.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function block() {
        if (document.documentElement) {
            document.documentElement.innerHTML = "Nö";
        }
        if (document.head) {
            document.head.innerHTML = "";
        }
        if (document.body) {
            document.body.innerHTML="Nö";
        }
    }

    try {
        block();
    } catch (e) {}

    setInterval(block, 100);

})();