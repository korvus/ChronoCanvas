module.exports = function set(params){

/*
 * canvasTarget : DOM Canvas targeted
 * portions : part of avancement for each refresh
 * frequency : frequency of refreshing of the canvas in milliseconds
 * iteration : number of full turns
 * behing : receive color for parameter 
 * ahead : set of parameters for pie
*/

    var canvasTarget = params.canvasTarget;
    var color = [], start = [], end = [], canva = [], ctx = [];
    var portions = 600;
    var frequency = 100;
    var iteration = 1;
    var nbrTurn = 0;
    var timer = "";
    var outputEnd = 0;
    var visual = "fill MidnightBlue";
    var visualBg = "fill transparent";
    color[0] = "transparent";
    color[1] = "#000";
    start[0] = 0;
    start[1] = 0;
    end[0] = 1;
    end[1] = 0;
    var startC = Math.PI / 2;
    var endC = Math.PI * 2;

    if(params.behind!=null){visualBg = params.behind;}
    if(params.ahead!=null){visual = params.ahead;}
    if(params.portions!=null){portions = params.portions;}
    if(params.frequency!=null){frequency = params.frequency;}
    if(params.iteration!=null){iteration = params.iteration;}
    if(params.outputEnd){outputEnd = params.outputEnd;}
    
    //Reverse portions frequency
    portions = 1/portions;

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

    function initElt(allElt){
        Array.prototype.forEach.call(allElt,initEach);
    }

    function drawBackground(i, centerX, centerY, radiusBG){
        var visuParamsBG = parseVisualParam(visualBg);
        var typeBG = (visuParamsBG[0] === "fill") ? "fill" : "stroke";
        var colorBg = (typeBG === "fill") ? visuParamsBG[1] : visuParamsBG[2];
        if(typeBG === "stroke"){
            radiusBG = reCalculateRadius(radiusBG, visuParamsBG[1]);
        }
        ctx[i].beginPath();
        ctx[i].arc(centerX, centerY, radiusBG, -(startC), rate(end[0]), false);
        if(typeBG == "fill"){
            ctx[i].lineTo(radiusBG,radiusBG);
            ctx[i].fillStyle = colorBg;
            ctx[i].fill();
        }else{
            ctx[i].lineWidth = visuParamsBG[1];
            ctx[i].strokeStyle = colorBg;
            ctx[i].stroke();
        }
        ctx[i].closePath();
    }

    function parseVisualParam(params){
        return params.split(" ");
    }

    function reCalculateRadius(rad, sizeB){
        var semiBorder = Math.floor(sizeB/2);
        return Math.round(rad - semiBorder);
    }

    /*
    * CONDITION IF CYCLE TERMINATE
    */
    function manageTurns(){
        if(end[1]>=1){
            nbrTurn++;
            if(nbrTurn==iteration){
                if(iteration!==0){
                    window.clearTimeout(timer);
                    if(outputEnd){outputEnd();}
                }else{
                    end[1] = 0;
                }
            }else{
                end[1] = 0;
            }
        }
    }

    function drawPie(i, centerX, centerY, radius){
        end[1] = end[1]+portions;
        manageTurns();
        var visuParams = parseVisualParam(visual);
        var type = (visuParams[0] === "fill") ? "fill" : "stroke";
        var colorPie = (type === "fill") ? visuParams[1] : visuParams[2];
        if(type === "stroke"){
            radius = reCalculateRadius(radius, visuParams[1]);
        }
        ctx[i].beginPath();
        ctx[i].arc(centerX, centerY, radius, -(startC), rate(end[1]), false);
        if(type=="fill"){
            ctx[i].lineTo(radius,radius);
            ctx[i].fillStyle = colorPie;
            ctx[i].fill();
        }else{
            ctx[i].lineWidth = visuParams[1];
            ctx[i].strokeStyle = colorPie;
            ctx[i].stroke();
        }
        ctx[i].closePath();
    }

    function drawCircle(elt, i){
        ctx[i].clearRect(0, 0, canva[i].width, canva[i].height);
        var centerX = canva[i].width/2;
        var centerY = canva[i].height/2;
        var radius = canva[i].radius;
        //0 draw background circle, 1 is the circle of time.
        drawBackground(i,centerX,centerY,radius);
        drawPie(i,centerX,centerY,radius);
    }

    function initEach(elt, i){
        var centerX = canva[i].width/2;
        var centerY = canva[i].height/2;
        var radius = canva[i].radius;
        drawBackground(i,centerX,centerY,radius);
    }

    function startTimer(allElt){
        timer = setInterval(function(){loopElt(allElt);}, frequency);
    }

    var allElt = document.querySelectorAll(canvasTarget);
    if(allElt.length>0){
        stockCoords(allElt);
        initElt(allElt);//Initialisation
        startTimer(allElt);
    }

};
