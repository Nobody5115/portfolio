function agregarItem(params = {}) {
  const template = document.getElementById("mi-template");
  const container = document.querySelector(".conteiner-cards");
  if (template) {
    let clone = document.importNode(template.content, true);
    clone.querySelector(".services__card-title").textContent = params.title;
    clone.querySelector(".services__card-description").textContent =
      params.description;
    clone.querySelector(".services__card-img").src = params.img;
    container.appendChild(clone);
  }
}
function info() {
  const SPACE_ID = "8xmknzuz0uyo";
  const ACCESS_TOKEN = "qO9AEd9gYvOD1DiTTTNPSQy_n3SLxDTaZ96Uy7-x9lQ";
  const CONTENT_TYPE = "services";

  return fetch(
    `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data;

      const collection = data.items.map((item) => {
        const assetId = item.fields.image.sys.id;
        const asset = data.includes.Asset.find((a) => a.sys.id == assetId);
        const imgUrl = asset.fields.file.url;
        return {
          title: item.fields.title,
          description: item.fields.description,
          img: imgUrl,
        };
      });
      return collection;
    });
}

function main() {
  header(document.querySelector(".container-header"));
  home(document.querySelector(".home-container"));
  card(document.querySelector(".container-cards"));
  footer(document.querySelector(".container-footer"));

  info().then((response) => {
    console.log(response);
    for (r of response) {
      agregarItem(r);
    }
  });
}
main();
