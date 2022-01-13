"use strict";

// localStorage.setItem("nombre", "Perico");

// console.log(localStorage);

// setTimeout(()=>{
//     // let nombre = localStorage.removeItem("nombre");
//     let nombre = localStorage.clear();
// },2000);

// // console.log(localStorage.getItem("volume"));

// // console.log(nombre);

// sessionStorage.setItem("apellido", "de los Palotes");

// console.log(sessionStorage);
// setTimeout(()=>{
//     // let apellido = sessionStorage.removeItem("apellido");
//     let apellido = sessionStorage.clear();
// },2000);

// // console.log(apellido);

const modal = document.querySelector(".modal-overlay");

const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal();
    });
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es")
        cerrarModal();
    });
}

const cerrarModal = ()=> {
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(()=>{modal.style.display = "none"}, 1000)
}

const idioma = localStorage.getItem("idioma");

if (idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);
    modal.style.display = "none";
}


// 336115 Aliansalud cancelación cita maxilofacial

