!function(){function e(n,r,t){function u(i,a){if(!r[i]){if(!n[i]){var d="function"==typeof require&&require;if(!a&&d)return d(i,!0);if(o)return o(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=r[i]={exports:{}};n[i][0].call(l.exports,function(e){var r=n[i][1][e];return u(r||e)},l,l.exports,e,n,r,t)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<t.length;i++)u(t[i]);return u}return e}()({1:[function(e,n,r){"use strict";var t=5,u=Math.floor(50*Math.random()+1),o=document.getElementById("attempts"),i=document.getElementById("guessingInput"),a=document.getElementById("guessingBtn");o.innerHTML=t;var d=function(e){document.getElementById("alertMsg").innerHTML=e},s=function(){var e=i.value;if(e>=1&&e<=50)if(e==u)d("<strong>!!! CONGRATS !!!</strong> You have discovered the number!"),a.disabled=!0,i.value="";else{var n=u%2==0;e>u?(d("The number is lower than "+e+" and is an "+(n?"even":"odd")+" number"),t--,o.innerHTML=t,i.value=""):(d("The number is higher than "+e+" and is an "+(n?"even":"odd")+" number"),t--,o.innerHTML=t,i.value=""),0==t&&(d("Game Over! Your have runned out of attempts! The number was: "+u),a.disabled=!0,i.value="")}else e="",d("Insert a number between 1 and 50!")};document.getElementById("guessingBtn").addEventListener("click",s)},{}]},{},[1]);