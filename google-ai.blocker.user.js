// ==UserScript==
// @name         google-ai-blocker
// @namespace    http://tampermonkey.net/
// @version      2
// @description  try to take over the world!
// @author       You
// @downloadURL  https://raw.githubusercontent.com/BosnianArtiljerija/tampermonkeyBlockerScript/main/google-ai.blocker.user.js
// @match *://*.google.com/*
// @match *://*.google.com/
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.error("Script was injected");

    function block1() {
        [...document.querySelectorAll("div[role=listitem]")].filter(x => x.innerText==="Режим ИИ").forEach(x => x.hidden=true)
    }


    try {
        block1();
    } catch (e) {}

    setInterval(block1, 100);

})();