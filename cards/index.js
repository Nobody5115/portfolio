function card(el) {
  console.log(el);
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
   <section class="services">
      <h2 class="soyLeo">
        <span class="services__title-mis">Mis</span> servicios
      </h2>
      <div class="conteiner-cards"></div>
      <template id="mi-template">
        <div class="services__card">
          <img
            src="pngwing.com (100).png"
            alt="technology"
            class="services__card-img"
          />
          <h3 class="services__card-title">Desarrollo de páginas web</h3>

          <p class="services__card-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            repellendus velit aut illo corrupti repudiandae labore adipisci
            enim, rerum maiores sapiente, molestias eum veniam nam incidunt
            aliquam qui sunt possimus?
          </p>
        </div>
      </template>
    </section>
    `;
  el.appendChild(componentEl);
}
