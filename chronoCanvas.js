!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.chronoCanvas=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/sertel/projects/tools/ChronoCanvas/index.js":[function(require,module,exports){
module.exports = function set(params){

    var canvasTarget = params.canvasTarget;
    var color = [], start = [], end = [], canva = [], ctx = [];
    var portions = 0.001;
    var frequency = 10;
    var iteration = 4;
    var nbrTurn = 0;
    var timer = "";
    var visual = "fill MidnightBlue";
    color[0] = "transparent";
    color[1] = "#000";
    start[0] = 0;
    start[1] = 0;
    end[0] = 1;
    end[1] = 0;
    var startC = Math.PI / 2;
    var endC = Math.PI * 2;

    if(params.behind){color[0] = params.behind;}
    if(params.portions){portions = params.portions;}
    if(params.frequency){frequency = params.frequency;}
    if(params.iteration){iteration = params.iteration;}
    if(params.behind){color[1] = params.behind;}
    if(params.ahead){visual = params.ahead;}
    
    function rate(Paramrate){
        return ((endC) * Paramrate) - startC;
    }

    function setStockValue(elt, i){
        ctx[i] = elt.getContext('2d');
        canva[i] = [];
        canva[i].width = elt.width;
        canva[i].height = elt.height;
        canva[i].radius = elt.height/2;
    }

    // Loop on each canvas one time for keep each height and width value
    function stockCoords(allElt){
        Array.prototype.forEach.call(allElt,setStockValue);
    }

    function loopElt(allElt){
        Array.prototype.forEach.call(allElt,drawCircle);
    }

    function drawBackground(i, centerX, centerY, radius){
        ctx[i].beginPath();
        ctx[i].arc(centerX, centerY, radius, -(startC), rate(end[0]), false);
        ctx[i].lineTo(radius,radius);
        ctx[i].fillStyle = color[0];
        ctx[i].fill();
        ctx[i].closePath();
    }

    function parseVisualParam(){
        return visual.split(" ");
    }

    function reCalculateRadius(rad, sizeB){
        var semiBorder = Math.floor(sizeB/2);
        return Math.round(rad - semiBorder);
    }

    function drawPie(i, centerX, centerY, radius){
        var visuParams = parseVisualParam();
        var type = (visuParams[0] === "fill") ? "fill" : "stroke";
        var colorPie = (type === "fill") ? visuParams[1] : visuParams[2];
        if(type === "stroke"){
            radius = reCalculateRadius(radius, visuParams[1]);
        }
        end[1] = end[1]+portions;
        ctx[i].beginPath();
        ctx[i].arc(centerX, centerY, radius, -(startC), rate(end[1]), false);
        if(type=="fill"){
            ctx[i].lineTo(radius,radius);
            ctx[i].fillStyle = colorPie;
            ctx[i].fill();
        }else{
            ctx[i].stroke();
            ctx[i].lineWidth = visuParams[1];
            ctx[i].strokeStyle = colorPie;
        }
        ctx[i].closePath();
    }

    function drawCircle(elt, i){
        ctx[i].clearRect(0, 0, canva[i].width, canva[i].height);
        var centerX = canva[i].width/2;
        var centerY = canva[i].height/2;
        var radius = canva[i].radius;
        //0 draw background circle, 1 is the circle of time.
        nbrTurn++;
        drawBackground(i,centerX,centerY,radius);
        drawPie(i,centerX,centerY,radius);
    }

    function startTimer(allElt){
        timer = setInterval(function(){loopElt(allElt);}, frequency);
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
},{}]},{},["/home/sertel/projects/tools/ChronoCanvas/index.js"])("/home/sertel/projects/tools/ChronoCanvas/index.js")
});