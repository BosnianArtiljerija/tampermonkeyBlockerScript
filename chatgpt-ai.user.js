// ==UserScript==
// @name         chatgpt-stopwords
// @namespace    http://tampermonkey.net/
// @version      9
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


        const predicate = (text) =>  {
            if (!text) {
                return false;
            }
            const sws = [
                "inanimate", "tf", "transform", "velvet", "dress",
                 "cord", "leggings", "cami", "comic", "превращ", "превратил"
             ]
                .map(sw =>  sw.toLowerCase());
            return sws.find(sw => text.includes(sw));
        }


        function block1() {
            if (predicate(document?.body?.innerText?.toLowerCase())) {
                if (document.documentElement) {
                    document.documentElement.innerHTML = "Conversation not found";
                }
                if (document.head) {
                    document.head.innerHTML = "";
                }
                if (document.body) {
                    document.body.innerHTML="Conversation not found";
                }
            }
        }


        try {
            block1();
        } catch (e) {}

        setInterval(block1, 1000);

})();