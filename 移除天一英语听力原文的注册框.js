// ==UserScript==
// @name         移除天一英语听力原文的注册框
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://video.kaola100.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   // $("#dialog-message").text("");
     $("#dialog-message").remove();
    // Your code here...
})(); 
