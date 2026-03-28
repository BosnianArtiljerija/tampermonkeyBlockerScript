// ==UserScript==
// @name         Blocker
// @namespace    http://tampermonkey.net/
// @version      2026-03-38
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
// @all_frames true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{
        document.body.innerHTML="Nö";
    },100);
    setInterval(()=>{
        document.head.innerHTML = "";
    },100);

    function block() {
        if (document.head) {
            document.head.innerHTML = "";
        }
        if (document.documentElement) {
            document.documentElement.innerHTML = "Nö";
        }
    }

    try {
        block();
    } catch (e) {}

    setInterval(block, 100);

    // also catch SPA navigation
    window._____observer = new MutationObserver(block);
    window._____observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();