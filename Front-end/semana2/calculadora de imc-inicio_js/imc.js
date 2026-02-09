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
  if (imc <= 18.5) {
    resultCategory.innerText = "Underweight";
    resultCategory.style.color = "#088ce4";
    resultBox.style.backgroundColor = "rgba(8, 140, 228, 0.5)";
    resultBox.style.border = "1px solid rgba(0, 0, 0, 0.08)";
    resultValue.style.color = "#088ce4";
  } else if (imc > 18.5 && imc <= 25) {
    resultCategory.innerText = "Normal weight";
    resultCategory.style.color = "#0d9987";
    resultBox.style.backgroundColor = "rgba(13, 153, 135, 0.5)";
    resultBox.style.border = "1px solid rgba(0, 0, 0, 0.08)";
    resultValue.style.color = "#0d9987";
  } else if (imc >= 25 && imc <= 29.9) {
    resultCategory.innerText = "Overweight";
    resultCategory.style.color = "#f5a623";
    resultBox.style.backgroundColor = "rgba(245, 166, 35, 0.5)";
    resultBox.style.border = "1px solid rgba(0, 0, 0, 0.08)";
    resultValue.style.color = "#f5a623";
  } else if (imc >= 30 && imc <= 34.9) {
    resultCategory.innerText = "Obesity I";
    resultCategory.style.color = "#f5a523a4";
    resultBox.style.backgroundColor = "rgba(245, 165, 35, 0.5)";
    resultBox.style.border = "1px solid rgba(0, 0, 0, 0.08)";
    resultValue.style.color = "#f5a523a4";
  } else if (imc >= 35 && imc <= 39.9) {
    resultCategory.innerText = "Obesity II";
    resultCategory.style.color = "#f03d3df6";
    resultBox.style.backgroundColor = "rgba(240, 61, 61, 0.5)";
    resultBox.style.border = "1px solid rgba(0, 0, 0, 0.08)";
    resultValue.style.color = "#f03d3df6";
  } else if (imc >= 40) {
    resultCategory.innerText = "Obesity III";
    resultCategory.style.color = "#ff0000";
    resultBox.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    resultBox.style.border = "1px solid rgba(0, 0, 0, 0.08)";
    resultValue.style.color = "#ff0000";
  }
}
const botaoClear = document.querySelector(".clear");
const inputHeight = document.getElementById("height");
const inputWeight = document.getElementById("weight");
const result = document.getElementById("result");

botaoClear.onclick = function () {
  inputHeight.value = "";
  inputWeight.value = "";

  result.classList.remove("show");
};
