import * as characters from "./api/database.js";

const $containerCharacters = document.querySelector(".characters-container");
let listCharacters = characters.charactersList;

function mountCharactersComponent(character) {
  const charactersName = document.createElement("h1");
  charactersName.textContent = character.name;
  $containerCharacters.appendChild(charactersName);

  const charactersImage = document.createElement("img");
  charactersImage.src = character.image;
  charactersImage.style.width = "400px";
  charactersImage.style.height = "400px";
  $containerCharacters.appendChild(charactersImage);

  document.body.appendChild($containerCharacters);

  return { charactersName, charactersImage };
}

const displayCharacterUI = () => listCharacters.forEach(mountCharactersComponent);

displayCharacterUI();
