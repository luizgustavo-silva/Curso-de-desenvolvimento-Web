function calcularIMC() {
  let height = Number(document.getElementById("height").value);
  let weight = Number(document.getElementById("weight").value);
  let imc = weight / (height * height);
  return imc;
}
function exibirIMC() {
  let imc = calcularIMC();
  let resultimc = document.getElementById("imc-value");
  let showresultimc = (resultimc.innerText = imc.toFixed(2));
}
