function getQuery(){let e=location.search.replace(/^\?/,"").split("&"),t={};for(let n of e){let e=n.split("=");t[e[0]]=e[1]}return t}function isMobile(){return"onorientationchange"in window}function setHeight(){let e=navigator.userAgent;/iphone|android/i.test(e),document.querySelector("video"),window.outerHeight,window.outerWidth,window.outerHeight;null!=window.orientation&&(console.info("orientation",window.orientation),180==window.orientation||window.orientation,90==window.orientation||window.orientation)}window.addEventListener("load",setHeight,!1),window.addEventListener("orientationchange",setHeight,!1),jQuery((e=>{setHeight();let t=getQuery(),n=decodeURIComponent(t.id);n&&async function(e){if(!/^https?:/i.test(e))return;window.playerx&&window.playerx.destroy();let t=sessionStorage.getItem(e);ivideos.open((async()=>{if(t||(t=await ivideos.fetch(e).then((async e=>await e.text()))),!t)return;t=ivideos.parse.formatM3u8(e,t),sessionStorage.setItem(e,t);let n=new Blob([Buffer.from(t)],{type:"application/vnd.apple.mpegurl"});e=URL.createObjectURL(n);let o=document.querySelector("video");console.info("play url",e);const i=e,r=new Plyr(o,{autoplay:!0,seekTime:5,invertTime:!1,captions:{active:!0,update:!0,language:"en"}});if(Hls.isSupported()){const e=new Hls;e.loadSource(i),e.attachMedia(o),e.on(Hls.Events.MANIFEST_PARSED,(()=>{})),r.on("languagechange",(()=>{setTimeout((()=>e.subtitleTrack=r.currentTrack),50)})),r.on("ready",(()=>{console.info("=========ready"),r.play().catch((e=>console.info("play error",e)))}))}else o.src=i;return window.playerx=r,r}))}(n)})),setHeight();