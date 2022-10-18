import "./styles.css";

let altura: number = document.getElementById("altura");
let resultado: number = document.getElementById("resultado");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  altura = Number(altura.value);
  console.log(altura);
  if (altura > 10) {
    console.log("Puede Ingresar");
    resultado.innerText = "Supera la altura permitida. Puede Ingresar.";
  } else {
    console.log("No puede Ingresar");
    resultado.innerText = "No puede Ingresar";
  }
});
