async function postData(nombre, email, mensaje, form) {
  try {
    const objData = {
      to: "leoreyes5115@gmail.com",
      message: `Nombre: ${nombre}, Email ${email}, Mensaje${mensaje}`,
    };
    const response = await fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objData),
    });
    form.reset();
    if (response.ok) {
      const responseData = await response.json();
      console.log("Respuesta exitosa:", responseData);
    } else {
      console.log(
        "La solicitud no fue exitosa. Código de estado:",
        response.status
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function formulario() {
  const form = document.querySelector(".formulario");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombreForm = form.querySelector(".form__input-nombre").value;
    const emailForm = form.querySelector(".form__input-email").value;
    const mensajeForm = form.querySelector(".form__textarea").value;
    postData(nombreForm, emailForm, mensajeForm, form);
  });
}
formulario();
