const figure = document.getElementById('figure');
const imagen = document.getElementById('mainImage');
let arregloImagenes = [
    'img/imagen.jpg',
    'img/imagen2.jpg',
    'img/imagen3.jpg',
]
let index= 0

const link = document.getElementById('mainLink');

function circulo(){
    figure.style.borderRadius = '50%';
    figure.style.background = "pink";
    
}
function estrella() {
    figure.style.borderRadius = "0";
    figure.style.background= "purple"
    figure.style.clipPath =
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

}

function gif(){
    figure.style.backgroundImage = "url('img/wasp.gif')";
    figure.style.backgroundSize = "cover";
}

function animacion(){
    figure.classList.add('animado');

}
function arriba(){
    figure.classList.toggle("top");
    figure.style.background = "#eb865eff"
}
function abajo(){
    figure.classList.toggle("down");
    figure.style.background = "#b8daafff"
}

function izquierda(){
    figure.classList.toggle("left");
    figure.style.background = "#c0b2daff";
}
function derecha(){
    figure.classList.toggle("right");
    figure.style.background = "#75d1d9ff";
}

function titulo(){
    const mainTitle = document.getElementById("mainTitle");
    const nuevoTitulo = prompt("Escribe el nuevo título:");

    if (nuevoTitulo) {
        mainTitle.textContent = nuevoTitulo;
    }
}

function parrafo(){
    const parafo = document.getElementById("mainParagraph");
    const nuevoParafo = prompt("Escribe el nuevo párrafo:");

    if (nuevoParafo) {
        parafo.textContent = nuevoParafo;
    }
}

function agregarParrafo(){
    const adicionar = document.getElementById('extraParagraphs')
    const agregar= prompt("Escribe el texto para el nuevo párrafo")

    if (agregar) {
        adicionar.textContent = agregar;
    }
}

function eliminar(){
  const elimina = document.getElementById("extraParagraphs");
    if (elimina.lastChild) {
    elimina.removeChild(elimina.lastChild);
  } else {
    alert("No hay párrafos para eliminar.");
  }
}

function color(){
    const colore = document.getElementById("figure");
    const color = prompt("Agrega el nuevo Color:");

  if (color) { 
    colore.textContent = color; 
    colore.style.backgroundColor= color;
  }
}

function elegirFigura(){
    const figure = document.getElementById("figure");
    const opcion = prompt("Escribe la figura que quieres: círculo, estrella o cuadrado");

    switch (opcion) {
        case "circulo":
            figure.style.borderRadius = "50%";
            figure.style.background = "pink";
            figure.style.clipPath = "none";
            break;

        case "estrella":
            figure.style.borderRadius = "0";
            figure.style.background = "purple";
            figure.style.clipPath =
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            break;

        case "cuadrado":
            figure.style.borderRadius = "0";
            figure.style.background = "lightblue";
            figure.style.clipPath = "none";
            break;

        default:
            alert("Opción no válida. Escribe: circulo, estrella o cuadrado.");
    }
}

function imageNext(){
    index++
    if (index >= arregloImagenes.length) {
        index = 0
    }

    imagen.setAttribute('src', arregloImagenes[index])
}

function imagePrev() {
    index--;
    if (index < 0) {
        index = arregloImagenes.length - 1;
    }

    imagen.setAttribute('src', arregloImagenes[index]);
}

function toggleImage() {
    if (imagen.style.display === "none") {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}

function cambiarAlt(){
    const text = prompt('Ingresa un texto: ');
    imagen.setAttribute('alt', text);
}

function cambiarHref(){
    const newHref = prompt('Ingresa una nueva URL: ');
    link.setAttribute('href', newHref);
}

function abrirPestana() {
    link.setAttribute("target", "_blank");
    link.setAttribute("href", "https://github.com/JuanitaJimenez09");
}

function desLink() {
    link.removeAttribute("href"); 
}










document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella );
    document.getElementById('btnGif').addEventListener('click', gif );
    document.getElementById('btnAnim').addEventListener('click', animacion);
    document.getElementById('btnMoveUp').addEventListener('click', arriba);
    document.getElementById('btnMoveDown').addEventListener('click', abajo);
    document.getElementById('btnMoveLeft').addEventListener('click', izquierda);
    document.getElementById('btnMoveRight').addEventListener('click', derecha);
    document.getElementById('btnChangeTitle').addEventListener('click', titulo);
    document.getElementById('btnChangeParagraph').addEventListener('click', parrafo);
    document.getElementById("btnAddParagraph").addEventListener("click", agregarParrafo);
    document.getElementById('btnRemoveParagraph').addEventListener('click', eliminar);
    document.getElementById('btnHexColor').addEventListener('click',color );
    document.getElementById('btnChooseFigure').addEventListener('click',elegirFigura);
    document.getElementById('btnChangeImageNext').addEventListener('click', imageNext);
    document.getElementById('btnChangeImagePrev').addEventListener('click', imagePrev);
    document.getElementById('btnToggleImage').addEventListener('click',toggleImage);
    document.getElementById('btnChangeAlt').addEventListener('click', cambiarAlt);
    document.getElementById('btnChangeLink').addEventListener('click',cambiarHref);
    document.getElementById('btnOpenLink').addEventListener('click',abrirPestana);
     document.getElementById('btnDisableLink').addEventListener('click',desLink);
})



