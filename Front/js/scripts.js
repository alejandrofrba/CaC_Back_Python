
/* 
BORRAR
 */


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miformulario");
  const formulario2 = document.getElementById("miformulario2");
  const botonBorrar = document.getElementById("boton-borrar");
  const botonEnviar = document.getElementById("boton-enviar"); 

    botonBorrar.addEventListener("click", function (event) {
      event.preventDefault();
  
      miformulario.reset();
      miformulario2.reset();
    });
  });


/*
  VALIDACIONES
 */

  document.addEventListener("DOMContentLoaded", function () {
    const enviarDatosButton = document.getElementById("boton-enviar"); // "enviar" is the HTML "ID"
    const nombreInput = document.getElementById("nombre");


    const emailInput = document.getElementById("email");
    const comentariosInput = document.getElementById("Comentarios");
    const huespInput = document.getElementById("huesp");
    const menoresInput = document.getElementById("menores");
  
  
  enviarDatosButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita la recarga de la página por defecto

      const nombre = nombreInput.value;
      console.log("nombre: ", nombre);

      const email = emailInput.value;
      console.log("email: ", email);
  
      const comentarios = comentariosInput.value;
      console.log("comentarios: ", comentarios);
  
      const huesp = huespInput.value;
      console.log("huesp: ", huesp);
  
      const menores = menoresInput.value;
      console.log("menores: ", menores);
  

        if (
          nombre === ""  ||
          email === ""  ||
          comentarios === ""   ||
          isNaN(huesp)  ||
          isNaN(menores)
            ) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }
      });
  });


