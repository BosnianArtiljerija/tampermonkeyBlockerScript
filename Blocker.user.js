// ==UserScript==
// @name         Blocker
// @namespace    http://tampermonkey.net/
// @version      2052
// @description  try to take over the world!
// @author       You
// @downloadURL  https://raw.githubusercontent.com/BosnianArtiljerija/tampermonkeyBlockerScript/main/Blocker.user.js
// @match *://grok.com/*
// @match *://*.grok.com/*
// @match *://deviantart.com/*
// @match *://*.deviantart.com/*
// @match *://x.ai/*
// @match *://*.x.ai/*
// @match *://pornhub.com/*
// @match *://*.pornhub.com/*
// @match *://xhamster.com/*
// @match *://*.xhamster.com/*
// @match *://instagram.com
// @match *://www.instagram.com
// @match *://gemini.google.com/*
// @match *://*.gemini.google.com/*
// @match *://copilot.microsoft.com/*
// @match *://*.copilot.microsoft.com/*
// @match *://www.google.com/*inanimate*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const condition = true;

    if (condition) {
        function block1() {
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

        function block2() {
            document.open();
            document.write("Nö");
            document.close();
        }

        function block3() {
            window.location.href = "about:blank";
        }

        try {
            block1();
        } catch (e) {}

        try {
            block2();
        } catch (e) {}

        try {
            block3();
        } catch (e) {}

        setInterval(block1, 100);
        setInterval(block2, 100);
        setInterval(block3, 100);
    }

})();