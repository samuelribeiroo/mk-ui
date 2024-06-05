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

  showCharacterName.onclick = () => toggleModal(character);

  $containerCharacters.appendChild(charactersImage);
  charactersImage.after(showCharacterName);
  boxWrapper.appendChild(charactersImage);
  boxWrapper.appendChild(showCharacterName);
  $containerCharacters.appendChild(boxWrapper);
  $mainContainer.appendChild($containerCharacters);

  return { charactersImage };
}

function toggleModal(character) {
  const modalTemplate = document.getElementById("modal-template").content.cloneNode(true);
  const modalContainer = modalTemplate.querySelector(".modal");
  const modalContent = modalContainer.querySelector(".modal-content");
  const closeButton = modalContent.querySelector(".close");

  modalContent.querySelector("p").textContent = `${character.name}`;

  document.body.appendChild(modalContainer);

  const showModal = modalContainer.style.display = "block";

  closeButton.onclick = () => modalContainer.style.display = "none";

  const handleClickOutside = window.onclick = event => {
    if (event.target == modalContainer) {
      modalContainer.style.display = "none";
    }
  };

  return { showModal, handleClickOutside };
}

const displayCharactersUI = () => listCharacters.forEach(mountCharactersComponent);

displayCharactersUI();
