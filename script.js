const section = document.getElementById("section");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");

const requestPage = (e) => {
  const id = e ? e.target.id : "";

  if (id.includes("about")) {
    fetch("pages/about.html")
      .then((res) => res.text())
      .then((html) => {
        console.log(html);
        section.innerHTML = html;
      })
      .catch(() => {
        console.error("Ocorreu um erro ao tentar obter o arquivo html");
      });
    return;
  }

  fetch("pages/home.html")
    .then((res) => res.text())
    .then((html) => {
      section.innerHTML = html;
    })
    .catch(() => {
      console.error("Ocorreu um erro ao tentar obter o arquivo html");
    });
};

requestPage();

homeBtn.addEventListener("click", requestPage);
aboutBtn.addEventListener("click", requestPage);
