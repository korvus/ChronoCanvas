module.exports = function set(params){

    var canvasTarget = params.canvasTarget;
    var color = [], start = [], end = [], canva = [], ctx = [];
    var portions = 0.001;
    var frequency = 10;
    var iteration = 4;
    var nbrTurn = 0;
    var timer = "";
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
    if(params.iteration){iteration = params.iteration;}
    
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
            if(end[1]>=1){
                nbrTurn++;
                if(nbrTurn==iteration){
                    window.clearTimeout(timer);
                }else{
                    end[a] = 0;
                }
            }
            ctx[i].beginPath();
            ctx[i].arc(centerX, centerY, radius, -(startC), rate(end[a]), false);
            if(a==0){
                ctx[i].lineTo(radius,radius);
            }
            if(a==1){
                ctx[i].stroke();
                ctx[i].strokeStyle = 'black';
            }
            ctx[i].fillStyle = color[a];
            ctx[i].fill();
            ctx[i].closePath();
        }
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