function MaintainAspectRatioOf(canvas) {
  function resize() {
    let widthScale = window.innerWidth / canvas.width;
    let heightScale = window.innerHeight / canvas.height;

    if (heightScale < widthScale) {
      canvas.style.transform = "scale(" + heightScale + ")";
      let leftOverWidth = window.innerWidth - canvas.width * heightScale;
      canvas.style.left = "" + leftOverWidth / 2 + "px";
      canvas.style.top = "0px";
    } else {
      canvas.style.transform = "scale(" + widthScale + ")";
      let leftOverHeight = window.innerHeight - canvas.height * widthScale;
      canvas.style.top = "" + leftOverHeight / 2 + "px";
      canvas.style.left = "0px";
    }
  }

  window.addEventListener("resize", resize);

  resize();
}

if (typeof module === "object") {
  module.exports = MaintainAspectRatioOf;
}
