const characterInfoContainer = document.getElementById("characterInfo");
const planetInfoContainer = document.getElementById("planetInfo");
const translateBtn = document.getElementById("translateBtn");
const getInfoButton = document.getElementById("getInfoButton");
const nextButton = document.getElementById("nextButton");
const filmNumberInput = document.getElementById("filmNumber");

const wookieeTranslations = new Map([
  ["Name:", "Wookiee Name: Rrwraaarrwhrar"],
  ["Birth Year:", "Wookiee Birth Year: Rrrhrrrarrghr"],
  ["Gender:", "Wookiee Gender: Rrwraaoargh"],
  ["Planets", "Rrrrwhg!"],
  ["Star Wars API", "Wookiee Star Wars API"],
  ["Information about characters", "Rrrargh ooh ooh aah"],
  ["Translation to Wookie", "Rrrrrargh ooh ooh aah"],
]);

let nextPagePlanets = null;

async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

async function fetchItems(itemUrls) {
  try {
    const itemPromises = itemUrls.map(async function (itemUrl) {
      const response = await fetch(itemUrl);
      return await response.json();
    });
    return await Promise.all(itemPromises);
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
}

function getCharacterHTML(character) {
  const characterId = extractIdFromUrl(character.url);
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  return `
    <div class="character-card" style="background-image: url(${imageUrl})">
      <div class="character-name">${character.name}</div>
      <div>Birth Year: ${character.birth_year}</div>
      <div>Gender: ${character.gender}</div>
    </div>
  `;
}

function getPlanetHTML(planet) {
  const planetId = extractIdFromUrl(planet.url);
  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;
  return `
    <div class="planet-card" style="background-image: url(${imageUrl})">
      <div class="planet-name">${planet.name}</div>
      <div>Climate: ${planet.climate}</div>
      <div>Terrain: ${planet.terrain}</div>
    </div>
  `;
}

function extractIdFromUrl(url) {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : null;
}

async function getFilmInfo() {
  planetInfoContainer.innerHTML = "";
  const filmNumber = filmNumberInput.value;
  if (!filmNumber || isNaN(filmNumber)) {
    alert("Enter a valid film number.");
    return;
  }

  const filmData = await fetchData(
    `https://swapi.dev/api/films/${filmNumber}/`
  );
  if (!filmData) {
    alert("Film with this number not found.");
    return;
  }

  const charactersData = filmData.characters
    ? await fetchItems(filmData.characters)
    : [];
  if (!charactersData.length) {
    alert("This film does not have characters.");
    return;
  }

  const characterHTML = charactersData.map(getCharacterHTML).join("");
  characterInfoContainer.innerHTML = characterHTML;

  nextPagePlanets = filmData.planets;
  nextButton.style.display = nextPagePlanets ? "block" : "none";
}

async function getNextPlanets() {
  characterInfoContainer.innerHTML = "";

  if (!nextPagePlanets || nextPagePlanets.length === 0) {
    alert("No planets found for this film.");
    nextButton.style.display = "none";
    return;
  }

  const planetData = await fetchItems(nextPagePlanets);
  const planetHTML = planetData.map(getPlanetHTML).join("");
  planetInfoContainer.innerHTML += planetHTML;

  nextPagePlanets = planetData.next;
  nextButton.style.display = nextPagePlanets ? "block" : "none";
}

function translateToWookiee() {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    const textContent = element.textContent.trim();
    if (wookieeTranslations.has(textContent)) {
      element.textContent = wookieeTranslations.get(textContent);
    }
  });
}

getInfoButton.addEventListener("click", getFilmInfo);
nextButton.addEventListener("click", getNextPlanets);
translateBtn.addEventListener("click", translateToWookiee);
