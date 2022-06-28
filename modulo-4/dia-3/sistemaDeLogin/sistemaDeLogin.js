const contas = [
  {
    email: "astrodev@labenu.com",
    password: "abc123",
  },
  {
    email: "bananinha@gmail.com",
    password: "bana",
  },
];

const validateLogin = (data) => {
  loginEmail = data.email;
  loginPassword = data.password;
  if (loginEmail.indexOf("@") !== -1 && loginPassword.length > 6) {
    return `login de ${loginEmail} bem-sucedido`;
  } else if (loginEmail.indexOf("@") !== -1) return "e-mail inválido";
  else return "senha deve possuir no mínimo 6 caracteres";
};

console.log(
  validateLogin({
    email: "lucasmacedo@msn.com",
    password: "lucas123",
  })
);
