function validarEmail(email) {
  return email === "senai@gmail.com";
}
function validarPassword(password) {
  return password === "eosguri123";
}
function showpassword() {
  const inputpassword = document.getElementById("input-senha");

  if (inputpassword.type === "password") {
    inputpassword.type = "text";
  } else {
    inputpassword.type = "password";
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
