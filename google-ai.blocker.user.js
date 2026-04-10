// ==UserScript==
// @name         google-ai-blocker
// @namespace    http://tampermonkey.net/
// @version      12
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

    const banned = ["Режим ИИ", "KI‑Modus", "Задайте вопрос", "Frage senden", "Frage stellen"];

    function block1() {
        [...document.querySelectorAll("div")]
            .filter(x => banned.includes(x.innerText))
            .forEach(x => x.hidden=true);
        [...document.querySelectorAll("textarea")]
            .filter(x => banned.includes(x?.getAttribute("placeholder")))
            .forEach(x => x.hidden=true);
        [...document.querySelectorAll("img")]
            .filter(x => x?.getAttribute("alt")?.includes("DeviantArt"))
            .forEach(x => x.hidden=true);
    }


    try {
        block1();
    } catch (e) {}

    setInterval(block1, 100);

})();