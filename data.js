import data from './data/rickandmorty/rickandmorty.js';
export const elements = data.results
// export const info = (vector) => {
//   return vector.map(function (item) {
//     return {name:item.name, image:item.image, gender:item.gender, status:item.status, species:item.species}
//   })
// };
export const orderAZ = (item) => {
  return filterAllInfo(item).sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }); 
};
export const orderZA = (item) => {
  return orderAZ(item).reverse();
}
// export const naturalOrder = (item) => {
//   return info(item);
// }
export const filterAllInfo = (list, data, value) => {
  let arrayFilters = [];
  arrayFilters = list.filter(item =>{
    if(item[data] === value){
      return item;
    }
  });
  return arrayFilters
}
export const status = (list) => {
  const data = list.map(function (item) {
    return item.status
  })
  const charactersNames = data.reduce(function (names, name) {
    if (name in names) {
      names[name]++;
    } else {
      names[name] = 1;
    }
    return names;
  }, {});
  return [
    ["Alive", charactersNames.Alive],
    ["Dead", charactersNames.Dead],
    ["unknown", charactersNames.unknow]
  ]
}
export const gender = (list) => {
  const data = list.map(function (item) {
    return item.gender
  })
  const charactersNames = data.reduce(function (names, name) {
    if (name in names) {
      names[name]++;
    } else {
      names[name] = 1;
    }
    return names;
  }, {});
  return [
    ["Female", charactersNames.Female],
    ["Male", charactersNames.Male],
    ["unknown", charactersNames.unknown]
  ]
}
export const species = (list) => {
  const data = list.map(function (item) {
    return item.species
  })
  const charactersNames = data.reduce(function (names, name) {
    if (name in names) {
      names[name]++;
    } else {
      names[name] = 1;
    }
    return names;
  }, {});
  return [
    ["Human", charactersNames.Human],
    ["Humanoid", charactersNames.Humanoid],
    ["Alien", charactersNames.Alien]["Cronenberg", charactersNames.Cronenberg],
    ["Animal", charactersNames.Animal],
    ["Robot", charactersNames.Robot]
  ]
}
export const searchNames = (input, characterName) => {
  const search = characterName.filter(item =>{
    return item.name.toUpperCase().substr(0, input.lenght).includes(input)
  });
  return filterAllInfo(search);
}
export const statistics = (data,typeData,condition) => data.reduce((initialType, totalType) => {
  return initialType + (totalType[typeData] === condition);
},0)
