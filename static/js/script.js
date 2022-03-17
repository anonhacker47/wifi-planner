let isDown = false;
var canvas = document.getElementById("canvas");
var x1;
var y1;
const svgns = "http://www.w3.org/2000/svg";
var materialBtn = document.getElementsByClassName("material");
var lineY = document.getElementById("lineY");
var lineX = document.getElementById("lineX");

num = 0;

const colors = {
  WOOD: "#CC9544",
  METAL: "#B2B1B9",
  CONCRETE: "#595260",
  GLASS: "#A2DBFA",
};
var COLOR = colors["CONCRETE"];


// changing color of line in svg while selecting each material
changeColor = (btn, clr) => {
  COLOR = colors[clr];
  for (const btn in materialBtn) {
    if (Object.hasOwnProperty.call(materialBtn, btn)) {
      const element = materialBtn[btn];
      element.classList.remove("active");
    }
  }
  btn.classList.add("active");
};


// translate client coordinate to canvas coordinate
svgPoint = (element, x, y) => {
  const pt = element.createSVGPoint();
  pt.x = x;
  pt.y = y;
  return pt.matrixTransform(element.getScreenCTM().inverse());
};


canvas.addEventListener("mousedown", (e) => {
  num = 1;
  let svgP = svgPoint(canvas, e.clientX, e.clientY);
  if (drawable) {
    if (!isDown) {
      x1 = svgP.x;
      y1 = svgP.y;
      let newLine = document.createElementNS(svgns, "line");
      newLine.setAttribute("x1", `${x1}`);
      newLine.setAttribute("y1", `${y1}`);
      newLine.setAttribute("x2", `${x1}`);
      newLine.setAttribute("y2", `${y1}`);
      
      newLine.setAttribute(
        "style",
        'stroke-width:10;stroke-linecap:square'
      );

      
      newLine.setAttribute('stroke', `${COLOR}`);

      canvas.append(newLine);
      isDown = true;
    }
  }
});

canvas.addEventListener('mouseup', ()=>{
  isDown = false;
  num = 0;
})

//endpoit of line
canvas.addEventListener("mousemove", (e) => {
  let svgP = svgPoint(canvas, e.clientX, e.clientY);
  if (isDown) {
    canvas.lastChild.setAttribute("x2", `${svgP.x}`); //e.layerx
    canvas.lastChild.setAttribute("y2", `${svgP.y}`); //e.layery
  }
});


// set initial scroll to middle
// not an optimal solution
var h = document.getElementById('canvas-box').scrollWidth;
var w = document.getElementById('canvas-box').scrollHeight;
document.getElementById('canvas-box').scrollTop = (h/2)-(h/3);
document.getElementById('canvas-box').scrollLeft =  (w/2)-(w/4);


// work in progress
canvas.onmousemove = (e)=>{
  for (let i = 7; i < svgInfo.childNodes.length - num; i++) {
    let element = svgInfo.childNodes[i];
    let p = svgPoint(canvas, e.clientX, e.clientY)
    if (p.x == element.attributes.x2.nodeValue && p.y == element.attributes.y2.nodeValue || p.x == element.attributes.x1.nodeValue && p.y == element.attributes.y1.nodeValue) {
      canvas.style.cursor = "all-scroll";
    }
    else{
      canvas.style.cursor = "crosshair";
    }
  }
}