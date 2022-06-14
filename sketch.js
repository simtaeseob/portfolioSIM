const navTag = document.querySelector("div.nav");
const bodysec1Tag = document.querySelector("div.body_sec1");

navTag.style.width = window.innerWidth +"px";
bodysec1Tag.style.top = (window.innerHeight)/2 +"px";

window.onresize = function(event){
    navTag.style.width = window.innerWidth +"px";
    bodysec1Tag.style.top = (window.innerHeight)/2 +"px";
}
window.onresize = function(event){
    navTag.style.width = window.innerWidth +"px";
}

