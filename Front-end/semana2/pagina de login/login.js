function validarEmail(email) {
  return email === "xkisol318@gmail.com";
}
function validarPassword(password) {
  return password === "eosguri123";
}
function showpassword() {
  const inputpassword = document.getElementById("input-senha")

  if (inputpassword.type === "password") {
    inputpassword.type = "text"
  } else {
    inputpassword.type = "password";
  }
}
function validarAll() {
  const inputEmail = document.getElementById("input-email").value;
  const inputPassword = document.getElementById("input-senha").value;
  if (validarEmail(inputEmail) && validarPassword(inputPassword)) {
    window.open("https://exemplo.com");
  } else {
     const formulario = document.getElementById("container_formulario")
    const p = document.createElement("p");
    p.id = "erro-login";
    p.textContent = "Senha ou Email incorreto";
    formulario.appendChild(p);
  }
}
