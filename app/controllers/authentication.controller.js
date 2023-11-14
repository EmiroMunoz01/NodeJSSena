const usuarios = [{ user: "Emiro", email: "xd@gmail.com", password: "a" }];

async function login(req, res) {}

async function register(req, res) {
  console.log(req.body);
  const user = req.body.user;
  const password = req.body.password;

  const email = req.body.email;

  if (!user || !password || !email) {
    res
      .status(400)
      .send({ status: "Error", message: "Los campos estan incompletos" });
  }

  const usuarioARevisar = usuarios.find(usuario => usuario.user === user);

  if(usuarioARevisar){
    res
      .status(400)
      .send({ status: "Error", message: "Este usuario ya existe" });
  }
}


export const methods = {
  login,
  register,
};
