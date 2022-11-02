const URL_CHARACTERS = "https://rickandmortyapi.com/api/character/";

const users = axios.get(URL_CHARACTERS);
const responseAPIAxios = users.then((response) => {
  const results = response.data.results;
  let body = ``;
  results.map((character) => {
    const { name, image, species, location} = character;
    body += `
        <div class="cards__characters">
            <img src="${image}" class="card-image">
            <p class="card-name">${name}</p>
            <p class="paragraph">${species}</p>
            <p class="paragraph">${location.name}</p>
        </div>
        `;
    document.getElementById("characters").innerHTML = body;
  });
});