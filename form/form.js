function form(el) {
  console.log(el);
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
   <section class="form">
      <div class="my-form">
        <h2 class="title-form soyLeo">Escribeme</h2>
        <form class="formulario">
          <label for="nombre">Nombre:</label>
          <input
            class="form__input-nombre"
            placeholder=" Tu nombre"
            type="text"
            id="nombre"
            name="nombre"
            required
          />
          <label for="Email">Email:</label>
          <input
            class="form__input-email"
            placeholder=" Ejemplo@gmail.com"
            type="email"
            id="email"
            name="email"
            required
          />
          <label for="textarea">Mensaje:</label>
          <textarea
            name="textarea"
            id=""
            cols="30"
            rows="10"
            class="form__textarea"
          ></textarea>

          <button type="submit" class="form__button">Enviar</button>
        </form>
      </div>
    </section>
    `;
  el.appendChild(componentEl);
}
