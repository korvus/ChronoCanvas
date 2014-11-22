# ChronoCanvas

ChronoCanvas is a simple visual chronometer using canvas tag.

##How to use
  - Install it manually or with npm.
  - Create a canvas tag with equal width and height.
  - Configure chronoCanvas occurence with parameters.

How it work

Install the package:
```shell
 npm install chronoCanvas
```

In your javascript:
```shell
var chronoCanvas = require('chronoCanvas');

document.addEventListener('DOMContentLoaded', function(){
  chronoCanvas({
    canvasTarget: ".chronometer1"
  });
})
```

In your HTML:
```html
<canvas width="150" height="150" class="chronometer1"></canvas>
```

Will give:

![instant pie!](http://simonertel.net/dossiers/chronoCanvas/examples/assets/pieChronoCanvas.png)

### Examples
See parameters in action, and differents instalation mods here:
http://simonertel.net/dossiers/chronoCanvas/examples/examples.html

### Params
* canvasTarget : a string. Designate DOM node.
* portions: number. for how much part you want.
* frequency: number. Interval between each refresh for the canvas.
* iteration: number. How many turns you want.
* outputEnd: a function. Will be call when terminate his cycle.
* ahead: a string. Must receive some keywords for style the canvas, in this orders:
 - "stroke width color". Example : "stroke 10 #0f0"
 - "fill color". Example : "fill blue"

* behind: a string. The same as previous, but for style the background.

### Version
0.0.1

### Tech
* Javascript

License
----

MIT


