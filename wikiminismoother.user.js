// ==UserScript==
// @name     WikiMini Smoother
// @version  1
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @match   https://fr.wikimini.org/*
// @icon    https://pbs.twimg.com/profile_images/2917232826/66a2d449bfc51eb0e9c6bf3e5dcb84e8_400x400.png
// ==/UserScript==

$( ".searchButton" ).remove();

$( "a.addthis_button" ).replaceWith( '<a href="https://fr.wikimini.org/wiki/Sp%C3%A9cial:AWCforum" >Forum Wikimini</a>' );

var certifbach = $("body").html().replace(/Z">BachirZ/g,'Z">BachirZ <img src="http://www.famfamfam.com/lab/icons/silk/icons/accept.png">');
$("body").html(certifbach);

var certjuli = $("body").html().replace(/4">Julie54/g,'Z">Julie54 <img src="http://www.famfamfam.com/lab/icons/silk/icons/accept.png">');
$("body").html(certjuli);