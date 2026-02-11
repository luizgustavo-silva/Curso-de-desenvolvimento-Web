function validarEmail(email) {
  return email === "senai@gmail.com";
}
function validarPassword(password) {
  return password === "eosguri123";
}
function showpassword() {
  const inputpassword = document.getElementById("input-senha");
  // document.getElementById(senha).type = tipo_atual === "text" ? "password" : "text"
  if (inputpassword.type === "password") {
    inputpassword.type = "text";
  } else {
    inputpassword.type = "password";
  }
}
function perceberErro() {
  let inputPassword = document.getElementById("input-senha");
  let inputEmail = document.getElementById("input-email");
  // usando 3 sinais de === para comparar tanto o valor quanto o tipo da informacao
  if (inputPassword.value === "") {
    inputPassword.style.backgroundColor = "#cf101042";
  }
  if (inputEmail.value === "") {
    inputEmail.style.backgroundColor = "#cf101042";

  }
}
function validarAll() {
  const inputEmail = document.getElementById("input-email").value;
  const inputPassword = document.getElementById("input-senha").value;
  if (validarEmail(inputEmail) && validarPassword(inputPassword)) {
    window.location.href = "home.html";
  } else {
    alert("Senha ou Email Incorreto");
  }
}
