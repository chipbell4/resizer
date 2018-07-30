# Resizer

A small helper function for maintaining a canvas' aspect ratio, and keeping it centered.

## Usage

Import via npm by adding to package.json

```javascript
"dependencies": {
  ...
  "resizer" : "git+https://github.com/chipbell4/resizer.git"
  ...
}
```

Include on your page and invoke it on a canvas element:

```html
<script src="node_modules/resizer/resize.js"></script>
<canvas id="my-canvas" width="1280" height="768"></canvas>
<script>
const canvas = document.getElementById('my-canvas');
MaintainAspectRatioOf(canvas);
</script>
```

The script is also available via CommonJS/Node if you use a bundler:

```javascript
const MaintainAspectRatioOf = require('resizer');
const element = document.getElementById('my-canvas');
MaintainAspectRatioOf(element);
```
