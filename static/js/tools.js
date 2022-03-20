let undo = document.getElementById('undo');
let draw = document.getElementById('line');
let select = document.getElementById('select');
let materialBox = document.getElementById('mlbox');

let drawable = false

//choose draw or selection
window.onload = ()=>{
    select.checked = true;
    actualImage = new Image();
    let imgsrc = canvas.style.backgroundImage.replace(/url\(['"]*(.*?)['"]*\)/g, '$1');
    actualImage.src = imgsrc
    actualImage.onload = function(){
        canvas.style.width = `${actualImage.width}px`;
        canvas.style.height = `${actualImage.height}px`;
    }

}

draw.onchange = ()=>{
    if (draw.checked == true) {
        drawable = true;
        canvas.style.cursor = "crosshair";
        materialBox.style.visibility = "visible";
    }
}


select.onchange = ()=>{
    if (select.checked == true) {
        drawable = false;
        canvas.style.cursor = "pointer";
        materialBox.style.visibility = "hidden";
    }
}

// undo function
// pop elements from svg array
undo.addEventListener('click', ()=>{
    if (canvas.childElementCount > 3) {   
        canvas.lastChild.remove();
    }
});

//Transparency Slider

const range = document.getElementById("myRange")
const canva = document.getElementById("canva")

range.addEventListener("input", (e) => {
    canva.style.fillOpacity = e.target.value;
})