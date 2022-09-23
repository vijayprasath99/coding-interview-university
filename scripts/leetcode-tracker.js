// ==UserScript==
// @name         Leetcode question tracker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script is to keep track of problems which are already done or being re-done
// @author       You
// @match        https://leetcode.com/problemset/all/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var finished = new Set([
        1, 9, 13, 2, 14, 509
    ])
    var extractQNoFromNode = (node) => Number(node.innerText.split('. ')[0])
    var strikeThoughNode = (node) => node.style.setProperty("text-decoration", "line-through");
    setInterval(() => {
        var nodes = document.querySelectorAll('[role="table"] [role="row"] [role="cell"]:nth-child(2)')
        nodes.forEach((node) => {
            var qNo = extractQNoFromNode(node);
            if (finished.has(qNo)) {
                strikeThoughNode(node)
            }
        });
    }, 3000);
})();
