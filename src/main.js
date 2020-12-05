import data from './data/rickandmorty/rickandmorty.js';
import { filterAllInfo, orderAZ, orderZA, elements, searchNames, statistics } from './data.js';
const getInfo = data.results
const showStatistics = document.getElementById("printCalculaations");

function charactersInfo(list) {
  let insertHtml = "";
  insertHtml += list.map((item) =>
    `<div class="cards">
     <img id="image" src="${item.image}" alt="${item.name}">
     <div id="name"> <strong>${item.name}</strong></div>
     <p class="info"> <strong>Gender:</strong>${item.gender}
     <br><strong>Status:</strong>${item.status}
     <br><strong>Species:</strong>${item.species}</p>
    </div>`).join("");
  document.getElementById("showCards").innerHTML = insertHtml;
}
charactersInfo(getInfo);
const genderSelector = document.getElementById("Gêneros-quantidade");
genderSelector.addEventListener("change", genderFilter);

function genderFilter() {
  if (genderSelector.value === "Femininos") {
    event.preventDefault()
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "gender", "Female")}`
    return charactersInfo(filterAllInfo(elements, "gender", "Female"));
  } else if (genderSelector.value === "Masculinos") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "gender", "Male")}`
    return charactersInfo(filterAllInfo(elements, "gender", "Male"));
  } else if (genderSelector.value === "Sem-gênero") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "gender", "unknown")}`
    return charactersInfo(filterAllInfo(elements, "gender", "unknown"));
  }
}

const statusSelector = document.getElementById("Caracteristicas-quantidade");
statusSelector.addEventListener("change", statusFilter);

function statusFilter() {
  if (statusSelector.value === "Vivos") {
    event.preventDefault()
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "status", "Alive")}`
    return charactersInfo(filterAllInfo(elements, "status", "Alive"))
  } else if (statusSelector.value === "Mortos") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "status", "Dead")}`
    return charactersInfo(filterAllInfo(elements, "status", "Dead"))
  } else if (statusSelector.value === "Desconhecidos") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "status", "unknown")}`
    return charactersInfo(filterAllInfo(elements, "status", "unknown"))
  }
}

const speciesSelector = document.getElementById("Especies-quantidade")
speciesSelector.addEventListener("change", speciesFilter)

function speciesFilter() {
  event.preventDefault()
  if (speciesSelector.value === "Humanos") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "species", "Human")}`
    return charactersInfo(filterAllInfo(elements, "species", "Human"))
  } else if (speciesSelector.value === "Humanoids") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "species", "Humanoid")}`
    return charactersInfo(filterAllInfo(elements, "species", "Humanoid"))
  } else if (speciesSelector.value === "Aliens") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "species", "Alien")}`
    return charactersInfo(filterAllInfo(elements, "species", "Alien"))
  } else if (speciesSelector.value === "Animais") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "species", "Animal")}`
    return charactersInfo(filterAllInfo(elements, "species", "Animal"))
  } else if (speciesSelector.value === "Cronenberg") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "species", "Cronenberg")}`
    return charactersInfo(filterAllInfo(elements, "species", "Cronenberg"))
  } else if (speciesSelector.value === "Robot") {
    showStatistics.innerHTML = `O número de personagens dessa categoria é ${statistics(elements, "species", "Robot")}`
    return charactersInfo(filterAllInfo(elements, "species", "Robot"))
  }
}

const sortSelector = document.getElementById("sort-characters");
sortSelector.addEventListener("change", sortBy);

function sortBy() {
  event.preventDefault()
  if (sortSelector.value === "sortAZ") {
    return charactersInfo(orderAZ(elements))
  } else if (sortSelector.value === "sortZA") {
    return charactersInfo(orderZA(elements))
  }
}

const searchInput = document.getElementById("nameSearch");
searchInput.addEventListener("keyup", () => charactersInfo(searchNames(searchInput.value.toUpperCase(), elements)));

