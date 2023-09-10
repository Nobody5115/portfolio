function header(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
     <header class="header">
      <a href="./index.html"
        ><img src="./header/header__logo-img3_Mesa de trabajo 1.png" alt="logo" class="header__logo"
      /></a>

      <button class="abre-ventana">
        <div class="burger-icon">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div></button>
      
 <div class="ventana">
 <div class="ventana__contenedor-boton">
 
 <button class="ventana__cierra-ventana "><div class="x-icon">X</div></button>
 </div>
 <div class="ventana__contenido">       <a href="./portafolio.html" class="header__links-link">Portafolio</a>
        <a href="./servicios.html" class="header__links-link">Servicios</a>
        <a href="./contactos.html" class="header__links-link">Contacto</a></div>
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
window.onload = function main() {
  const botonAbreVentanaEl = document.querySelector(".abre-ventana");
  const ventanaEl = document.querySelector(".ventana");
  const botonCierraVentanaEl = document.querySelector(
    ".ventana__cierra-ventana"
  );
  botonAbreVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });
  botonCierraVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "none";
  });
};
