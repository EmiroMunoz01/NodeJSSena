document
  .getElementById("register-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e.target.children.user.value);

    //nos comunicaremos con el backend para hacer le registro, para esto usaremos fetch, cuando usamos fetch sabemos que usamos funciones asincronicas, donde empieza la funcion flecha usaremos async

    const res = await fetch("http://localhost:4000/api/register", {
      //tendra un objeto de opciones
      method: "POST",
      headers:{
        //lo que enviaremos es de tipo JSON, por eso debe tener
        "Content-Type":"application/json"
      }
    });
  });
