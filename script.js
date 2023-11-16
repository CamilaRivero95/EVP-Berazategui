var counter = 1;

setInterval(function() {
    
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4 ) {
        counter = 1;
    }

}, 5000)


console.log("Hola esta es la pagina de Camila Rivero");

let botonmas = document.getElementById("botonmas");
let textoculto = document.getElementById("textoculto");

botonmas.addEventListener("click", aparecerText);
function aparecerText(){
    textoculto.classList.toggle("show");
}
