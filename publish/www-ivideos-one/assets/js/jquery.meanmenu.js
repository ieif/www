!function(e){"use strict";e.fn.meanmenu=function(n){var a={meanMenuTarget:e(this),meanMenuContainer:".techvio-responsive-menu",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};n=e.extend(a,n);var t=window.innerWidth||document.documentElement.clientWidth;return this.each((function(){var a=n.meanMenuTarget,i=n.meanMenuContainer,s=n.meanMenuClose,m=n.meanMenuCloseSize,l=n.meanMenuOpen,o=n.meanRevealPosition,r=n.meanRevealPositionDistance,c=n.meanRevealColour,u=n.meanScreenWidth,v=n.meanNavPush,h=".meanmenu-reveal",d=n.meanShowChildren,f=n.meanExpandableChildren,g=n.meanExpand,p=n.meanContract,C=n.meanRemoveAttrs,w=n.onePage,x=n.meanDisplay,A=n.removeElements,E=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(E=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&e("html").css("overflow-y","scroll");var M="",P=function(){if("center"===o){var n=(window.innerWidth||document.documentElement.clientWidth)/2-22+"px";M="left:"+n+";right:auto;",E?e(".meanmenu-reveal").animate({left:n}):e(".meanmenu-reveal").css("left",n)}},W=!1,b=!1;"right"===o&&(M="right:"+r+";left:auto;"),"left"===o&&(M="left:"+r+";right:auto;"),P();var S="",k=function(){S.html(e(S).is(".meanmenu-reveal.meanclose")?s:l)},y=function(){e(".mean-bar,.mean-push").remove(),e(i).removeClass("mean-container"),e(a).css("display",x),W=!1,b=!1,e(A).removeClass("mean-remove")},D=function(){var n="background:"+c+";color:"+c+";"+M;if(u>=t){e(A).addClass("mean-remove"),b=!0,e(i).addClass("mean-container"),e(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+n+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var s=e(a).html();e(".mean-nav").html(s),C&&e("nav.mean-nav ul, nav.mean-nav ul *").each((function(){e(this).is(".mean-remove")?e(this).attr("class","mean-remove"):e(this).removeAttr("class"),e(this).removeAttr("id")})),e(a).before('<div class="mean-push" />'),e(".mean-push").css("margin-top",v),e(a).hide(),e(".meanmenu-reveal").show(),e(h).html(l),S=e(h),e(".mean-nav ul").hide(),d?f?(e(".mean-nav ul ul").each((function(){e(this).children().length&&e(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+m+'">'+g+"</a>")})),e(".mean-expand").on("click",(function(n){n.preventDefault(),e(this).hasClass("mean-clicked")?(e(this).text(g),e(this).prev("ul").slideUp(300,(function(){}))):(e(this).text(p),e(this).prev("ul").slideDown(300,(function(){}))),e(this).toggleClass("mean-clicked")}))):e(".mean-nav ul ul").show():e(".mean-nav ul ul").hide(),e(".mean-nav ul li").last().addClass("mean-last"),S.removeClass("meanclose"),e(S).click((function(n){n.preventDefault(),!1===W?(S.css("text-align","center"),S.css("text-indent","0"),S.css("font-size",m),e(".mean-nav ul:first").slideDown(),W=!0):(e(".mean-nav ul:first").slideUp(),W=!1),S.toggleClass("meanclose"),k(),e(A).addClass("mean-remove")})),w&&e(".mean-nav ul > li > a:first-child").on("click",(function(){e(".mean-nav ul:first").slideUp(),W=!1,e(S).toggleClass("meanclose").html(l)}))}else y()};E||e(window).resize((function(){t=window.innerWidth||document.documentElement.clientWidth,y(),u>=t?(D(),P()):y()})),e(window).resize((function(){t=window.innerWidth||document.documentElement.clientWidth,E?(P(),u>=t?!1===b&&D():y()):(y(),u>=t&&(D(),P()))})),D()}))}}(globalThis.jQuery);