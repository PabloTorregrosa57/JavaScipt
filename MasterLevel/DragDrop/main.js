"use strict";

const circulo = document.querySelector(".circulo");

circulo.addEventListener("dragstart", ()=>console.log(1));
circulo.addEventListener("drag", ()=>console.log(2));
circulo.addEventListener("dragend", ()=>alert("Liberado"));
