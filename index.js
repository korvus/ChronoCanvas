module.exports = function set(params){

    var canvasTarget = params.canvasTarget;
    var color = [], start = [], end = [];
    color[0] = "tomato";
    color[1] = "#000";
    start[0] = Math.PI*1.5;
    start[1] = Math.PI*1.5;
    end[0] = (Math.PI*0.5)*-1;
    end[1] = Math.PI*1.6;

    if(params.color1){color[0] = params.color1;}
    if(params.color2){color[1] = params.color2;}
    
    function drawCircle(elt, i){
        var ctx = elt.getContext('2d');
        centerX = elt.width/2;
        centerY = elt.height/2;
        radius  = centerX;
        for(var a=0;a<2;a++){
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, start[a], end[a]);
            ctx.lineTo(radius,radius);
            ctx.fillStyle = color[a];
            ctx.fill();
            ctx.closePath();
        }

    }

    window.onload = function(){

        var elt = document.querySelectorAll(canvasTarget);
        if(elt.length>0){
            Array.prototype.forEach.call(elt,drawCircle);
        }
    }

};

