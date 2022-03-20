const exportBtn = document.getElementById('export');
const svgInfo = document.getElementById('canvas');
const svgInput = document.getElementById('svg-data');
const hgt = document.getElementById('height');
const wdh = document.getElementById('width');

exportBtn.addEventListener('click', ()=>{
    var svgText = svgInfo.childNodes;
    let myData = [];
    for (let i = 7; i < svgText.length; i++) {
        const element = svgText[i];
        console.log(element)
        let info = {
            'x1':element.attributes.x1.nodeValue,
            'x2':element.attributes.x2.nodeValue,
            'y1':element.attributes.y1.nodeValue,
            'y2':element.attributes.y2.nodeValue,
            'stroke': element.attributes.stroke.nodeValue,
        }
        myData = [...myData, info];
    }
    svgInput.value = JSON.stringify(myData);
    wdh.value = canvas.clientWidth;
    hgt.value = canvas.clientHeight;
    document.getElementById('svg-form').submit();
})