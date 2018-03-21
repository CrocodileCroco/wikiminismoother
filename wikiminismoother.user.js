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

var certjuli = $("body").html().replace(/4">Julie54/g,'4">Julie54 <img src="http://www.famfamfam.com/lab/icons/silk/icons/accept.png">');
$("body").html(certjuli);

$( '<a class="twitter-timeline" data-width="220" data-height="500" href="https://twitter.com/WikiminiFR?ref_src=twsrc%5Etfw">Tweets by WikiminiFR</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ' ).insertAfter( ".tool-box" );

var urlozz      = window.location.href;

if ( urlozz == "https://fr.wikimini.org/wiki/Utilisateur:BachirZ") {
    alert("Ce profil est certifié par WikiMini Smoother")
}



if ( urlozz == "https://fr.wikimini.org/wiki/Discussion_utilisateur:BachirZ/SmoothCertification") {
    $( "div.lqt-talkpage-header" ).replaceWith( '<div class="lqt-talkpage-header"><strong class="lqt_start_discussion"><a href="/w/index.php?title=Discussion_utilisateur:BachirZ/SmoothCertification&amp;lqt_method=talkpage_new_thread" title="Discussion utilisateur:BachirZ/SmoothCertification" lqt_talkpage="Discussion utilisateur:BachirZ/SmoothCertification">Demander Certification</a></strong><div class="lqt_view_options"><form action="/w/index.php?title=Discussion_utilisateur:BachirZ/SmoothCertification&amp;lqt_method=talkpage_sort_order" method="get" name="lqt_sort"><label for="lqt_sort_select">Tri :</label> <select name="lqt_order" id="lqt_sort_select" class="lqt_sort_select"><option value="nc" selected="">en commençant par les derniers modifiés</option><option value="nt">en commençant par les fils de discussion les plus récents</option><option value="ot">en commençant par les fils de discussion les plus anciens</option></select><input class="lqt_go_sort" value="Trier" type="submit"><input value="Discussion utilisateur:BachirZ/SmoothCertification" name="title" type="hidden"></form></div></div>' );
}
