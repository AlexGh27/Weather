(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>m});var i=n(81),a=n.n(i),r=n(645),o=n.n(r)()(a());o.push([t.id,"* {\n    box-sizing: border-box;\n}\nhtml, body {\n    margin: 0;\n    height: 100%;\n}\n\nbody {\n    background-image: linear-gradient(blue,#0B72C1);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding-top: 50px;\n\n}\n\n#search {\n    height: 20px;\n    width: 250px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 30px;\n}\n\n#cityName {\n    color: white;\n    text-shadow: 1px 1px black;\n    font-size: 30px;\n    margin-top: 30px;\n}\n#date_time {\n    color: white;\n    text-shadow: 1px 1px black;\n    font-size: 20px;\n    margin-top: 30px;\n}\n#center_info {\n    color: white;\n    text-shadow: 1px 1px black;\n    height: 70px;\n    width: 450px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    margin-bottom: 50px;\n    margin-top: 30px;\n}\n\n#degrees {\n    font-size: 55px;\n}\n\n#info {\n    font-size: 25px;\n}\n\n#later{\n    color: white;\n    font-size: 25px;\n    margin-right: 1200px;\n}\n\n\n.hour_info {\n    height: 200px;\n    width: 1400px;\n    border: 2px solid white;\n    display: flex;\n    justify-content: space-between;\n    border-radius: 20px;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    box-shadow: 0 0 10px black;\n}\n\n\n.hour_square {\n    height: 200px;\n    width: 175px;\n}\n\n.temp {\n    color: white;\n    text-shadow: 1px 1px black;\n    height: 100px;\n    width: 175px;\n    text-align: center;\n    font-size: 25px;\n    padding-top: 30px;\n}\n\n.hour {\n    color: white;\n    text-shadow: 1px 1px black;\n    height: 100px;\n    width: 175px;\n    text-align: center;\n    font-size: 25px;\n    padding-top: 30px;\n}\n\n#thisweek {\n    margin-top: 30px;\n    color: white;\n    font-size: 25px;\n    margin-right: 1200px;\n}\n.week_info {\n    width: 90%;\n    height: 300px;\n    width: 1400px;\n    display: flex;\n    justify-content: space-around;\n    margin-top: 10px;\n}\n\n\n.day {\n    border: 2px solid white;\n    border-radius: 20%;\n    height: 250px;\n    width: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    box-shadow: 0 0 10px black;\n}\n\n.day_name {\n    color: white;\n    text-shadow: 1px 1px black;\n    font-size: 30px;\n}\n.day_temperature {\n    width: 120px;\n    display: flex;\n    font-size: 18px;\n    justify-content: space-between;\n}\n\n.min_temperature {\n    color: white;\n    text-shadow: 1px 1px black;\n    font-size: 25px;\n}\n\n.max_temperature {\n    color: white;\n    text-shadow: 1px 1px black;\n    font-size: 25px;\n}\n\n.weather_icon {\n    height: 100px;\n    width: 100px;\n}\n\n#weatherImage {\n    height: 125px;\n    width: 125px;\n}",""]);const m=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var m=0;m<this.length;m++){var c=this[m][0];null!=c&&(o[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);i&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],m=0;m<t.length;m++){var c=t[m],s=i.base?c[0]+i.base:c[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=n(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(d);else{var h=a(d,i);i.byIndex=m,e.splice(m,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var r=i(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var m=n(r[o]);e[m].references--}for(var c=i(t,a),s=0;s<r.length;s++){var l=n(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),i=n(795),a=n.n(i),r=n(569),o=n.n(r),m=n(565),c=n.n(m),s=n(216),l=n.n(s),p=n(589),u=n.n(p),d=n(426),h={};function x(){let t=(new Date).getHours();return t>=0&&t<=3?8:t>=3&&t<=6?7:t>=6&&t<=9?6:t>=9&&t<=12?5:t>=12&&t<=15?4:t>=15&&t<=18?3:t>=18&&t<=21?2:t>=21&&t<=24?1:void 0}function f(){let t=document.querySelector("#searchBar").value;t=t.length<1?"Bucharest":document.querySelector("#searchBar").value,fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${t}&appid=ac4b3a21bc90e7e4ae8ef6cb4b06fc97&units=metric`,{mode:"cors"}).then((function(t){return t.json()})).then((function(t){!function(t){let e=x(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=document.querySelector("#max1"),a=Math.max(t.list[e].main.temp_max,t.list[e+1].main.temp_max,t.list[e+2].main.temp_max,t.list[e+3].main.temp_max,t.list[e+4].main.temp_max,t.list[e+5].main.temp_max,t.list[e+6].main.temp_max,t.list[e+7].main.temp_max);i.textContent=Math.round(a)+"°C";let r=document.querySelector("#day1"),o=t.list[e].dt,m=new Date(1e3*o);r.textContent=n[m.getDay()],document.querySelector("#icon1").src=`../src/WeatherIcons/${t.list[e+4].weather[0].icon}.png`;let c=document.querySelector("#max2"),s=Math.max(t.list[e+8].main.temp_max,t.list[e+9].main.temp_max,t.list[e+10].main.temp_max,t.list[e+11].main.temp_max,t.list[e+12].main.temp_max,t.list[e+13].main.temp_max,t.list[e+14].main.temp_max,t.list[e+15].main.temp_max);c.textContent=Math.round(s)+"°C";let l=document.querySelector("#day2"),p=t.list[e+8].dt,u=new Date(1e3*p);l.textContent=n[u.getDay()],document.querySelector("#icon2").src=`../src/WeatherIcons/${t.list[e+12].weather[0].icon}.png`;let d=document.querySelector("#max3"),h=Math.max(t.list[e+16].main.temp_max,t.list[e+17].main.temp_max,t.list[e+18].main.temp_max,t.list[e+19].main.temp_max,t.list[e+20].main.temp_max,t.list[e+22].main.temp_max,t.list[e+23].main.temp_max);d.textContent=Math.round(h)+"°C";let f=document.querySelector("#day3"),y=t.list[e+16].dt,g=new Date(1e3*y);f.textContent=n[g.getDay()],document.querySelector("#icon3").src=`../src/WeatherIcons/${t.list[e+20].weather[0].icon}.png`;let _=document.querySelector("#max4"),w=Math.max(t.list[e+24].main.temp_max,t.list[e+25].main.temp_max,t.list[e+26].main.temp_max,t.list[e+27].main.temp_max,t.list[e+28].main.temp_max,t.list[e+29].main.temp_max,t.list[e+30].main.temp_max,t.list[e+31].main.temp_max);_.textContent=Math.round(w)+"°C";let b=document.querySelector("#day4"),v=t.list[e+24].dt,C=new Date(1e3*v);b.textContent=n[C.getDay()],document.querySelector("#icon4").src=`../src/WeatherIcons/${t.list[e+28].weather[0].icon}.png`;let S=document.querySelector("#min1"),q=Math.min(t.list[e].main.temp_min,t.list[e+1].main.temp_min,t.list[e+2].main.temp_min,t.list[e+3].main.temp_min,t.list[e+4].main.temp_min,t.list[e+5].main.temp_min,t.list[e+6].main.temp_min,t.list[e+7].main.temp_min);S.textContent=Math.round(q)+"°C";let M=document.querySelector("#min2"),k=Math.min(t.list[e+8].main.temp_min,t.list[e+9].main.temp_min,t.list[e+10].main.temp_min,t.list[e+11].main.temp_min,t.list[e+12].main.temp_min,t.list[e+13].main.temp_min,t.list[e+14].main.temp_min,t.list[e+15].main.temp_min);M.textContent=Math.round(k)+"°C";let j=document.querySelector("#min3"),D=Math.min(t.list[e+16].main.temp_min,t.list[e+17].main.temp_min,t.list[e+18].main.temp_min,t.list[e+19].main.temp_min,t.list[e+20].main.temp_min,t.list[e+21].main.temp_min,t.list[e+22].main.temp_min,t.list[e+23].main.temp_min);j.textContent=Math.round(D)+"°C";let I=document.querySelector("#min4"),z=Math.min(t.list[e+24].main.temp_min,t.list[e+25].main.temp_min,t.list[e+26].main.temp_min,t.list[e+27].main.temp_min,t.list[e+28].main.temp_min,t.list[e+29].main.temp_min,t.list[e+30].main.temp_min,t.list[e+31].main.temp_min);I.textContent=Math.round(z)+"°C"}(t)}))}h.styleTagTransform=u(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;const y="ac4b3a21bc90e7e4ae8ef6cb4b06fc97";function g(t){document.querySelector("#cityName").textContent=t.name,document.querySelector("#mainImage");let e=t.weather[0].icon;weatherImage.src=`../src/WeatherIcons/${e}.png`,document.querySelector("#degrees").textContent=Math.round(t.main.temp)+"°C",document.querySelector("#feels").textContent="Feels like "+Math.round(t.main.feels_like)+"°C",document.querySelector("#humidity").textContent="Humidity: "+t.main.humidity+"%",document.querySelector("#wind").textContent="Wind: "+Math.round(t.wind.speed)+" km/h";let n=t.dt,i=document.querySelector("#date_time"),a=new Date(1e3*n);i.textContent=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()]+", "+a.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()]+" "+a.getFullYear()}function _(){let t=document.querySelector("#searchBar").value;t=t.length<1?"Bucharest":document.querySelector("#searchBar").value,fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${t}&appid=ac4b3a21bc90e7e4ae8ef6cb4b06fc97&units=metric`,{mode:"cors"}).then((function(t){return t.json()})).then((function(t){!function(t){document.querySelector("#hour0").textContent=t.list[0].dt_txt.substr(11,2)+":00",document.querySelector("#temp0").textContent=Math.round(t.list[0].main.temp)+"°C",document.querySelector("#temp1").textContent=Math.round(t.list[1].main.temp)+"°C",document.querySelector("#hour1").textContent=t.list[1].dt_txt.substr(11,2)+":00",document.querySelector("#temp2").textContent=Math.round(t.list[2].main.temp)+"°C",document.querySelector("#hour2").textContent=t.list[2].dt_txt.substr(11,2)+":00",document.querySelector("#temp3").textContent=Math.round(t.list[3].main.temp)+"°C",document.querySelector("#hour3").textContent=t.list[3].dt_txt.substr(11,2)+":00",document.querySelector("#temp4").textContent=Math.round(t.list[4].main.temp)+"°C",document.querySelector("#hour4").textContent=t.list[4].dt_txt.substr(11,2)+":00",document.querySelector("#temp5").textContent=Math.round(t.list[5].main.temp)+"°C",document.querySelector("#hour5").textContent=t.list[5].dt_txt.substr(11,2)+":00"}(t)}))}const w=document.querySelector("#searchButton");document.querySelector("#searchBar").value,w.addEventListener("click",(()=>{!function(){let t=document.querySelector("#searchBar").value;t=t.length<1?"Bucharest":document.querySelector("#searchBar").value,fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=${y}&units=metric`,{mode:"cors"}).then((function(t){return t.json()})).then((function(t){g(t)}))}(),_(),f()})),x(),fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=${y}&units=metric`,{mode:"cors"}).then((function(t){return t.json()})).then((function(t){g(t)})),_(),f()})()})();