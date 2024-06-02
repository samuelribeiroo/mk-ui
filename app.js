import * as characters from "./api/database.js";

const $containerCharacters = document.querySelector(".characters-container");
$containerCharacters.classList.add(".characters-container");

const $mainContainer = document.querySelector(".main-container");
$mainContainer.classList.add(".main-container");

let listCharacters = characters.charactersList;

function mountCharactersComponent(character) {
  const boxWrapper = document.createElement("div");
  boxWrapper.style.display = "flex";
  boxWrapper.style.flexDirection = "column";
  boxWrapper.style.alignItems = "center";

  const charactersImage = document.createElement("img");
  charactersImage.src = character.image;
  charactersImage.style.width = "195px";
  charactersImage.style.height = "235px";

  const showCharacterName = document.createElement("button");
  showCharacterName.textContent = character.name;
  showCharacterName.style.width = "108px";
  showCharacterName.style.height = "48px";
  showCharacterName.style.marginTop = "32px";
  showCharacterName.classList.add("display-name");

  $containerCharacters.appendChild(charactersImage);
  charactersImage.after(showCharacterName);
  boxWrapper.appendChild(charactersImage);
  boxWrapper.appendChild(showCharacterName);
  $containerCharacters.appendChild(boxWrapper);
  $mainContainer.appendChild($containerCharacters);

  return { charactersImage };
}

const displayCharactersUI = () => listCharacters.forEach(mountCharactersComponent);

displayCharactersUI();
