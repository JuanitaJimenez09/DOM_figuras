const figure = document.getElementById('figure');

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

})



