let z_in = document.getElementById("z-in");
let z_out = document.getElementById("z-out");

//return scale parameter
const getTransformParameter = (element) => {
    const transform = element.style.transform;
    let scale = 0.4,
      x = 0,
      y = 0;
    if (transform.includes("scale"))
      scale = parseFloat(transform.slice(transform.indexOf("scale") + 6));
    if (transform.includes("translateX"))
      x = parseInt(transform.slice(transform.indexOf("translateX") + 11));
    if (transform.includes("translateY"))
      y = parseInt(transform.slice(transform.indexOf("translateY") + 11));
    return { scale, x, y };
  };

  // convert the data to string 
  const getTransformString = (scale, x, y) =>
    "scale(" + scale + ") " + "translateX(" + x + "%) translateY(" + y + "%)";
  
  
  const zoom = (val) => {
    const { scale, x, y } = getTransformParameter(canvas);
    let dScale = 0.1;
    if (val == -1) dScale *= -1;
    if (val == -1 && scale == 0.1) dScale = 0;
    if (val == 1 && scale == 1) dScale = 0;
    canvas.style.transform = getTransformString(scale + dScale, x, y);
  };
  

  // 1=zoom in, -1 = zoom out
  z_in.onclick = () => zoom(1);
  z_out.onclick = () => zoom(-1);