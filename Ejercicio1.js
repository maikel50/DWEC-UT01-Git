"use strict"; 
function cuadrado(numero) { 
    return numero * numero;
} 

const btn = document.getElementById("btnCalcular"); 
btn.addEventListener("click", () => { 
    const input = document.getElementById("valor"); 
    const resDiv = document.getElementById("resultado"); 
    const val = Number(input.value); 
    console.log("val: " , val);
    resDiv.textContent = "El cuadrado de " + val + " es " + cuadrado(val); 
});