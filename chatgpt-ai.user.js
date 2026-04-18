// ==UserScript==
// @name         chatgpt-stopwords
// @namespace    http://tampermonkey.net/
// @version      3
// @description  try to take over the world!
// @author       You
// @downloadURL  https://raw.githubusercontent.com/BosnianArtiljerija/tampermonkeyBlockerScript/main/chatgpt-ai.user.js
// @match *://*.chatgpt.com/*
// @match *://chatgpt.com/*
// @match *://openai.com/*
// @match *://*.openai.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


        const predicate = (x) =>  {
            if (!x) {
                return false;
            }
            return ["inanimate"].includes(x.toLowerCase());
        }


        function block1() {
            if (predicate(document.body && document.body.innerText)) {
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
        }


        try {
            block1();
        } catch (e) {}

        setInterval(block1, 100);

})();