const form = document.querySelector("#searchForm");
const imgContainer = document.querySelector("#showImg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  console.log(res.data);
  addImages(res.data);
});
const addImages = (shows) => {
  for (result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      imgContainer.append(img);
    }
  }
};
const removeImages = () => {
  imgContainer.innerHTML = "";
};

form.addEventListener("input", removeImages);
