# ChronoCanvas

ChronoCanvas is a simple visual chronometer using canvas tag.

##How to use
  - Call JavaScript.
  - Create a canvas tag with equal width and height.
  - Configure chronoCanvas occurence with parameters.s

Html

Header :
```html
<script type="text/javascript" src="chronoCanvas.js"></script>
```
Canvas :
```html
<canvas width="150" height="150" class="chronometer1"></canvas>
```

Javascript
```Javascript
document.addEventListener('DOMContentLoaded', function(){

      chronoCanvas({
        canvasTarget: ".chronometer1"
      });

})
```

Will give:




### Version
0.0.0

### Tech

* [browserify] - HTML enhanced for web apps!




License
----

MIT


