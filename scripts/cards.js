const img = document.querySelectorAll('.card__img')
var modal = document.getElementById('myModal');
var modalImg = document.querySelector('.modal-content');
const span = document.getElementsByClassName("close")[0];

img.forEach((elemento) => {
    elemento.addEventListener('click', () =>{
        this.imgSrc = elemento.attributes.src.value
        trocaImg()
    })
})

function trocaImg(elemento){
    modal.style.display = "block";
    modalImg.setAttribute('src', imgSrc)
}
modal.addEventListener('click', (evento)=>{
        modal.style.display = "none";
})

// span.onclick = function(evento) {
//     modal.style.display = "none";
// }

