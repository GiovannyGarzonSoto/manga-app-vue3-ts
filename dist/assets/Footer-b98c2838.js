import{d as u,r,o as k,k as M,u as p,_ as m,a as c,c as _,b as n,w as $,m as b}from"./index-dc10c74a.js";import{u as d}from"./useTo-872da6cd.js";import C from"menu.svg";import I from"search.svg";import F from"logo.png";const T=u({name:"Nav",setup(){const t=M(),o=p(),a=r(null),i=r(""),e=r(null),l=r(null),{toTopRanking:s,toFavorites:f,toMain:v,toMangaList:g}=d(o),h=()=>{t.path!=="/"&&(a.value.style.background="rgba(0, 0, 0, 1)",a.value.style.background="linear-gradient(to bottom, black 16%, #0D0D0D 100%)"),t.path==="/manga-list"&&(e.value.style.opacity="0")};return k(()=>{h()}),{nav:a,searchInput:e,searchIcon:l,toMangaList:g,toMain:v,toFavorites:f,toTopRanking:s,searchInputText:i}}}),w="/assets/logo-full-1afb66f8.png",y={ref:"nav",class:"nav animated-banner"},D=n("img",{class:"menu-icon",src:C},null,-1),N=n("img",{src:w,alt:"logo"},null,-1),B=[N],L=n("a",{class:"nav__item",href:"https://medibang.com/mpc/",target:"__blank"},"Creators",-1),R=n("a",{class:"nav__item",href:"https://www.shonenjump.com/mangaplus/whatismangaplus/",target:"__blank"},"Sobre Nosotros",-1);function S(t,o,a,i,e,l){return c(),_("nav",y,[D,n("a",{onClick:o[0]||(o[0]=(...s)=>t.toMain&&t.toMain(...s)),class:"nav__logo"},B),n("a",{onClick:o[1]||(o[1]=(...s)=>t.toMain&&t.toMain(...s)),class:"nav__item"},"Reciente"),n("a",{onClick:o[2]||(o[2]=s=>t.toMangaList()),class:"nav__item"},"Descubre"),L,n("a",{onClick:o[3]||(o[3]=(...s)=>t.toFavorites&&t.toFavorites(...s)),class:"nav__item"},"Favoritos"),R,n("form",{onSubmit:o[5]||(o[5]=s=>t.toMangaList(t.searchInputText)),ref:"searchInput",class:"nav__search"},[$(n("input",{class:"nav__search-input input","onUpdate:modelValue":o[4]||(o[4]=s=>t.searchInputText=s),maxlength:"24",type:"text",placeholder:"Buscar por serie o autor"},null,512),[[b,t.searchInputText]])],544),n("img",{ref:"searchIcon",onClick:o[6]||(o[6]=s=>t.toMangaList()),class:"search-icon",src:I},null,512)],512)}const H=m(T,[["render",S]]),V=u({name:"Footer",setup(){const t=p(),{toMain:o}=d(t);return{toMain:o}}}),j={class:"footer"};function E(t,o,a,i,e,l){return c(),_("div",j,[n("img",{onClick:o[0]||(o[0]=(...s)=>t.toMain&&t.toMain(...s)),class:"footer__logo",src:F,alt:"logo"})])}const J=m(V,[["render",E]]);export{J as F,H as N};
