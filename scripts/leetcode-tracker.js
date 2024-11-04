// ==UserScript==
// @name         Leetcode question tracker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script is to keep track of problems which are already done or being re-done
// @author       You
// @match        https://leetcode.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.com
// @grant        none
// ==/UserScript==

window.tamper_ext = {
    something: "VJJJJJ - PRINT THIS!!",
}

window.tamper_ext.strike_off_fn = (query) => {
    'use strict';

    console.log(window.tamper_ext.something)

    var finished = new Set([
        3
    ])
    var extractQNoFromNode = (node) => Number(node.innerText.split('. ')[0])
    var strikeThoughNode = (node) => node.style.setProperty("text-decoration", "line-through");
    setInterval(() => {
        const nodes = document.querySelectorAll(query)
        nodes.forEach((node) => {
            var qNo = extractQNoFromNode(node);
            if (finished.has(qNo)) {
                strikeThoughNode(node)
            }
        });
    }, 3000);
}


var problemset_page = '[role="table"] [role="row"] [role="cell"]:nth-child(2)'
var problem_list_page = 'div [data-rbd-droppable-id="droppable"]  div:not([data-rbd-draggable-id=""]) a'
window.tamper_ext.strike_off_fn(problemset_page)
window.tamper_ext.strike_off_fn(problem_list_page)
