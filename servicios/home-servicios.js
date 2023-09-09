function home(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
     <section class="home">
      <h1 class="home__title">
        Mis<br /><span class="soyLeo"> servicios</span>
      </h1>
      <div class="loader">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div>
    </section>
    `;
  el.appendChild(componentEl);
}
