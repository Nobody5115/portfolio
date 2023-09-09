function header(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
     <header class="header">
      <a href="./index.html"
        ><img src="./header/header__logo-img3_Mesa de trabajo 1.png" alt="logo" class="header__logo"
      /></a>
      <div class="background">
        <button class="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="header__links">
        <a href="./portafolio.html" class="header__links-link">Portafolio</a>
        <a href="./servicios.html" class="header__links-link">Servicios</a>
        <a href="./contactos.html" class="header__links-link">Contacto</a>
      </div>
    </header>
    `;
  el.appendChild(componentEl);
}
