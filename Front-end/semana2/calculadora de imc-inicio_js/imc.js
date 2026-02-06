function calcularIMC() {
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);

  if (!height || !weight) return null;

  return weight / (height * height);
}

function exibirIMC() {
  const imc = calcularIMC();
  const resultValue = document.getElementById("imc-value");
  const resultCategory = document.getElementById("imc-category");
  const resultBox = document.getElementById("result");

  resultValue.innerText = imc.toFixed(2);
  resultBox.classList.add("show");
}