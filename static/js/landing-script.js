const doi = document.getElementById('btn-doi');
const close = document.getElementById('close');
const uploadForm = document.getElementById('upload');
const opening = document.getElementById('opening');


doi.addEventListener('click', ()=>{
    opening.style.display = 'none';
    uploadForm.style.display = 'flex';
    close.style.display = 'block';
})

close.addEventListener('click', ()=>{
    opening.style.display = 'flex';
    uploadForm.style.display = 'none';
    close.style.display = 'none';
})
