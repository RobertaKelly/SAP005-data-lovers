import data from './data/rickandmorty/rickandmorty.js';
import { filterAllInfo, orderAZ, orderZA, elements, searchNames, naturalOrder} from './data.js';
const getInfo = data.results
function charactersInfo(list) {
    let insertHtml ="";
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
//filter: Gender
const genderSelector = document.getElementById("Gêneros-quantidade");
genderSelector.addEventListener("change", genderFilter);
function genderFilter(){
    if(genderSelector.value === "Femininos"){
        return charactersInfo(filterAllInfo(elements, "gender", "Female"));
    } else if(genderSelector.value === "Masculinos"){
        return charactersInfo(filterAllInfo(elements, "gender", "Male"));
    } else if(genderSelector.value === "Sem-gênero"){
        return charactersInfo(filterAllInfo(elements, "gender", "unknown"));
    } 
}
//filter: Status
const statusSelector = document.getElementById("Caracteristicas-quantidade");
statusSelector.addEventListener("change", statusFilter);
function statusFilter(){
    if(statusSelector.value === "Vivos"){
        return charactersInfo(filterAllInfo(elements, "status", "Alive"))
    } else if(statusSelector.value === "Mortos"){
        return charactersInfo(filterAllInfo(elements, "status", "Dead"))
    } else if(statusSelector.value === "Desconhecidos"){
        return charactersInfo(filterAllInfo(elements, "status", "unknown"))
    }
}
//filter: Species
const speciesSelector = document.getElementById("Especies-quantidade")
speciesSelector.addEventListener("change", speciesFilter)
function speciesFilter(){
    if(speciesSelector.value === "Humanos"){
        return charactersInfo(filterAllInfo(elements, "species", "Human"))
    } else if(speciesSelector.value === "Humanoids"){
        return charactersInfo(filterAllInfo(elements, "species", "Humanoid"))
    } else if (speciesSelector.value === "Aliens"){
        return charactersInfo(filterAllInfo(elements, "species", "Alien"))
    } else if (speciesSelector.value === "Animais"){
        return charactersInfo(filterAllInfo(elements, "species", "Animal"))
    } else if(speciesSelector.value === "Cronenberg"){
        return charactersInfo(filterAllInfo(elements, "species", "Cronenberg"))
    } else if(speciesSelector.value === "Robot"){
        return charactersInfo(filterAllInfo(elements, "species", "Robot"))
    }
}
//filter: order AZ/ZA
const sortSelector = document.getElementById("sort-characters");
sortSelector.addEventListener("change", sortBy);
function sortBy(){
    if(sortSelector.value === "sortAZ"){
        return charactersInfo(orderAZ(elements))
    } else if(sortSelector.value === "sortZA"){
        return charactersInfo(orderZA(elements))
    }
}
//function search
const searchInput = document.getElementById("nameSearch");
searchInput.addEventListener("keyup", search)
function search (){
    const charactersName = document.getElementById("nameSearch");
    const search = searchNames(data.results, charactersName);
    charactersInfo(search);
}
//fix the serachNames const on data.js