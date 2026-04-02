// ==UserScript==
// @name         google-ai-blocker
// @namespace    http://tampermonkey.net/
// @version      5
// @description  try to take over the world!
// @author       You
// @downloadURL  https://raw.githubusercontent.com/BosnianArtiljerija/tampermonkeyBlockerScript/main/google-ai.blocker.user.js
// @match *://www.google.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.error("Script was injected");

    function block1() {
        [...document.querySelectorAll("div[role=listitem]")]
        .filter(x => x.innerText==="Режим ИИ" || x.innerText==="KI‑Modus")
        .forEach(x => x.hidden=true)
    }


    try {
        block1();
    } catch (e) {}

    setInterval(block1, 100);

})();