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

