var chronoCanvas = require('../');

function thiscallback(){
  alert("end of turns!");
}

document.addEventListener('DOMContentLoaded', function(){

  chronoCanvas({
    canvasTarget: ".chronometer1"
  });

  chronoCanvas({
    canvasTarget: ".chronometer2",
    portions: 60,
    frequency: 1000
  });

  chronoCanvas({
    canvasTarget: ".chronometer3",
    frequency: 1,
    iteration: 0
  });

  document.getElementById('myButton').addEventListener("click", 
    function(){
      chronoCanvas({
        canvasTarget: ".chronometer4",
        iteration: 2,
        portions: 8,
        frequency: 500,
        outputEnd: thiscallback
      });
    }
  ,false);

  chronoCanvas({
    canvasTarget: ".chronometer5",
    ahead: "fill red",
    frequency: 10,
    iteration: 0
  });

  chronoCanvas({
    canvasTarget: ".chronometer6",
    ahead: "stroke 30 tomato",
    frequency: 10,
    iteration: 0
  });

  chronoCanvas({
    canvasTarget: ".chronometer7",
    behind: "stroke 30 #666",
    ahead: "stroke 30 #FF6347",
    frequency: 10,
    iteration: 0
  });

});
