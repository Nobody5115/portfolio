function home(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
     <section class="home">
      <h1 class="home__title">
        Hola,<br /><span class="soyLeo"> soy Leo</span>
      </h1>
      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
    </section>
    `;
  el.appendChild(componentEl);
}
