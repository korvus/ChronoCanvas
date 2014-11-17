!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.chronoCanvas=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\simon\\Desktop\\sites\\outils\\ChronoCanvas\\index.js":[function(require,module,exports){
module.exports = function set(params){

    var canvasTarget = params.canvasTarget;
    var color = [], start = [], end = [], canva = [], ctx = [];
    var portions = 0.01;
    var frequency = 10;
    color[0] = "tomato";
    color[1] = "#000";
    start[0] = 0;
    start[1] = 0;
    end[0] = 1;
    end[1] = 0;
    var startC = Math.PI / 2;
    var endC = Math.PI * 2;

    if(params.color1){color[0] = params.color1;}
    if(params.color2){color[1] = params.color2;}
    if(params.portions){portions = params.portions;}
    if(params.frequency){frequency = params.frequency;}
    
    function rate(Paramrate){
        return ((endC) * Paramrate) - startC;
    }

    function setStockValue(elt, i){
        ctx[i] = elt.getContext('2d');
        canva[i] = [];
        canva[i]["width"] = elt.width;
        canva[i]["height"] = elt.height;
        canva[i]["radius"] = elt.height/2;
    }

    // Loop on each canvas one time for keep each height and width value
    function stockCoords(allElt){
        Array.prototype.forEach.call(allElt,setStockValue);
    }

    function loopElt(allElt){
        Array.prototype.forEach.call(allElt,drawCircle);
    }

    function drawCircle(elt, i){
        ctx[i].clearRect(0, 0, canva[i]["width"], canva[i]["height"]);
        var centerX = canva[i]["width"]/2;
        var centerY = canva[i]["height"]/2;
        var radius = canva[i]["radius"];
        //0 draw background circle, 1 is the circle of time.
        for(var a=0;a<2;a++){
            if(a==1) end[a] = end[a]+portions;
            if(end[1]>=1) end[a] = 0;
            ctx[i].beginPath();
            ctx[i].arc(centerX, centerY, radius, -(startC), rate(end[a]), false);
            ctx[i].lineTo(radius,radius);
            ctx[i].fillStyle = color[a];
            ctx[i].fill();
            ctx[i].closePath();
        }
    }

    function startTimer(allElt){
        var timer = setInterval(function(){loopElt(allElt);}, frequency);
    }

    window.onload = function(){
        var allElt = document.querySelectorAll(canvasTarget);
        if(allElt.length>0){
            stockCoords(allElt);
            loopElt(allElt);//Initialisation
            startTimer(allElt);
        }
    };

};
},{}]},{},["C:\\Users\\simon\\Desktop\\sites\\outils\\ChronoCanvas\\index.js"])("C:\\Users\\simon\\Desktop\\sites\\outils\\ChronoCanvas\\index.js")
});