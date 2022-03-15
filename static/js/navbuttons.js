const exportBtn = document.getElementById('export');
const svgInfo = document.getElementById('canvas');
const svgInput = document.getElementById('svg-data');

exportBtn.addEventListener('click', ()=>{
    var svgText = svgInfo.childNodes;
    let myData = [];
    for (let i = 7; i < svgText.length; i++) {
        const element = svgText[i];
        let info = {
            'x1':element.attributes.x1.nodeValue,
            'x2':element.attributes.x2.nodeValue,
            'y1':element.attributes.y1.nodeValue,
            'y2':element.attributes.y2.nodeValue,
            'style':element.attributes.style.nodeValue,
        }
        myData = [...myData, info];
    }
    svgInput.value = JSON.stringify(myData);
    document.getElementById('svg-form').submit();
})