const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");

const requestPage = (e) => {
  const id = e ? e.target.id : "";

  if (aboutBtn.classList.contains("selected")) {
    aboutBtn.classList.remove("selected");
  }
  if (homeBtn.classList.contains("selected")) {
    homeBtn.classList.remove("selected");
  }

  if (id.includes("about")) {
    fetch("src/pages/about.html")
      .then((res) => res.text())
      .then((html) => {
        content.innerHTML = html;

        aboutBtn.classList.add("selected");
      })
      .catch(() => {
        console.error("Ocorreu um erro ao tentar obter o arquivo html");
      });
    return;
  }

  fetch("src/pages/home.html")
    .then((res) => res.text())
    .then((html) => {
      content.innerHTML = html;

      homeBtn.classList.add("selected");
    })
    .catch(() => {
      console.error("Ocorreu um erro ao tentar obter o arquivo html");
    });
};

requestPage();

homeBtn.addEventListener("click", requestPage);
aboutBtn.addEventListener("click", requestPage);
