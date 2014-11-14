!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.chronoCanvas=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/sertel/projects/tools/ChronoCanvas/index.js":[function(require,module,exports){
module.exports = function set(params){

    var canvasTarget = params.canvasTarget;
    var color = [];
    color[0] = "tomato";
    color[1] = "ivory";

    if(params.color1){color[0] = params.color1;}
    if(params.color2){color[1] = params.color2;}
    
    function drawCircle(elt, i){
        var ctx = elt.getContext('2d');
        centerX = elt.width/2;
        centerY = elt.height/2;
        radius  = centerX;
        ctx.beginPath();
        for(var a=0;a<2;a++){
            ctx.arc(centerX, centerY, radius, 0, Math.PI*2);
            ctx.fillStyle = color[a];
        }
        ctx.fill();
        ctx.closePath();

    }

    window.onload = function(){

        var elt = document.querySelectorAll(canvasTarget);
        if(elt.length>0){
            Array.prototype.forEach.call(elt,drawCircle);
        }
    }

};


},{}]},{},["/home/sertel/projects/tools/ChronoCanvas/index.js"])("/home/sertel/projects/tools/ChronoCanvas/index.js")
});