function footer(el) {
  console.log(el);
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
      <footer class="footer">
      <div class="img">
        <img
          class="footer__logo"
          src="header/header__logo-img3_Mesa de trabajo 1.png"
          alt=""
        />
      </div>
      <div class="links">
        <a href="" class="a-text"
          ><img class="footer__a-logo" src="./footer/home.svg" alt="" />Home</a
        >
        <a href="./servicios.html" class="a-text"
          ><img class="footer__a-logo" src="./footer/user.svg" alt="" />Servicios</a
        >
        <a href="" class="a-text"
          ><img class="footer__a-logo" src="./footer/phone.svg" alt="" />Contacto</a
        >
      </div>
      <div class="pastillas">
        <a href=""
          ><img
            class="pastillas__logo"
            src="./footer/linkedin-svgrepo-com (1) 1.svg"
            alt=""
        /></a>
        <a href=""
          ><img class="pastillas__logo" src="./footer/github-svgrepo-com 1.svg" alt=""
        /></a>
        <a href=""><img class="pastillas__logo" src="./footer/twitter.svg" alt="" /></a>
      </div>
      <p class="footer__text">©2023 - https://apx.school</p>
    </footer>
    `;
  el.appendChild(componentEl);
}
