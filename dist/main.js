(()=>{"use strict";var n={885:(n,a,t)=>{n.exports=t.p+"df73b7db546a5a50f92d.png"}},a={};function t(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var a=t.g.document;if(!n&&a&&(a.currentScript&&(n=a.currentScript.src),!n)){var e=a.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(885);const a="https://rickandmortyapi.com/api/character/",e=async n=>{const t=n?`${a}${n}`:a;try{const n=await fetch(t);return await n.json()}catch(n){console.error(n)}},r=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",i=()=>'\n        <div class="error404">\n            <h2>Error 404</h2>\n        </div>\n    ',s={"/":async()=>`\n        <div class="home">\n            ${(await e()).results.map((n=>`\n                <article class="character-item">\n                    <a href="#/${n.id}/">\n                        <img src="${n.image}" alt="${n.name}">\n                        <h2>${n.name}</h2>\n                    </a>\n                </article>\n            `)).join("")}\n        </div>\n    `,"/:id":async()=>{const n=r(),a=await e(n);return`\n        <div class="character-inner">\n            <article class="character-cards">\n                <img src="${a.image}" alt="${a.name}">\n                <h2>${a.name}</h2>\n            </article>\n            <article class="character-info">\n                <h3>Episodes: <span>${a.episode.length}</span></h3>\n                <h3>Status: <span>${a.status}</span></h3>\n                <h3>Species: <span>${a.species}</span></h3>\n                <h3>Gender: <span>${a.gender}</span></h3>\n                <h3>Origin: <span>${a.origin.name}</span></h3>\n                <h3>Last Location: <span>${a.location.name}</span></h3>\n            </article>\n        </div>\n    `},"/contact":"Contact"},c=async()=>{const a=document.getElementById("header"),t=document.getElementById("content");a.innerHTML=await(`\n    <div class="header">\n        <div class="header-logo">\n            <a href="/">\n                <img src="${n}" alt="Rick and Morty">\n            </a>\n        </div>\n        <nav>\n            <a href="/">\n                Home\n            </a>\n            <a href="#/about/">\n                About\n            </a>\n        </nav>\n    </div>\n  `);let e=r(),c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(e),o=s[c]?s[c]:i;t.innerHTML=await o()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})()})();