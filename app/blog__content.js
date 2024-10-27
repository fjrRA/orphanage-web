document.addEventListener("DOMContentLoaded", () => {
  const blogContentSection = document.querySelector(".blog__content");

  fetch("../../DATA/blog__pages.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON");
      }
      return response.json();
    })
    .then((data) => {
      let page;

      switch (true) {
        case window.location.pathname.includes("artikel__tiga"):
          page = "artikel__tiga";
          break;
        case window.location.pathname.includes("artikel__dua"):
          page = "artikel__dua";
          break;
        case window.location.pathname.includes("artikel__satu"):
          page = "artikel__satu";
          break;
        case window.location.pathname.includes("blog__dua"):
          page = "blog__dua";
          break;
        case window.location.pathname.includes("blog__tiga"):
          page = "blog__tiga";
          break;
        default:
          page = "blog__satu";
      }

      const contentData = data[page][0];
      displayBlogContent(blogContentSection, contentData);
    })
    .catch((error) => {
      console.error("Error:", error);
      blogContentSection.innerHTML = "<p>Data tidak ditemukan atau gagal dimuat.</p>";
    });
});

function displayBlogContent(container, blog) {
  container.innerHTML = `
    <h2>${blog.title}</h2>
    <p>oleh <span>${blog.author}</span> / ${blog.date}</p>
    <img src="${blog.image}" alt="Gambar Artikel">
    ${blog.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
  `;
}
