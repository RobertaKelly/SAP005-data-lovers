import { orderAZ, orderZA, filterAllInfo, status, gender, species, searchNames, statistics } from '../src/data.js';

describe('orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });
  it('returns array in aphabetic order', () => {
    const characters = [{"name": "Rick"}, {"name": "Morty"}];
    const order = orderAZ(characters, "A-Z");
    expect(order[0].name).toEqual("Morty");
  });
});
describe('orderZA', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('returns array in Z to A order', () => {
    const characters = [{"name": "Rick"}, {"name": "Morty"}];
    const order = orderZA(characters, "Z-A");
    expect(order[0].name).toEqual("Rick");
  });
});
describe('filterAllInfo', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });
  it('returns array of a character when searching for "name" and his/her/its name', () => {
    const characters = [{
      "name": "Rick",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Morty",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    }]
    expect(filterAllInfo(characters, "name", "Morty")).toEqual([{"name": "Morty", "gender": "Male", "status": "Alive", "species": "Human",
    }]);
  });
});
describe('status', () => {
  it('is a function', () => {
    expect(typeof status).toBe('function');
  });
  it('returns the status', () => {
    const characters = [{
      "name": "Rick",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Morty",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Summer",
      "gender": "Female",
      "status": "Alive",
      "species": "Human",
    },];
    expect(status(characters)).toEqual([["Alive", 3], ["Dead", undefined], ["unknown", undefined,]]);
  });
});
describe('gender', () => {
  it('is a function', () => {
    expect(typeof gender).toBe('function');
  });
  it('returns the gender', () => {
    const characters = [{
      "name": "Rick",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Morty",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Summer",
      "gender": "Female",
      "status": "Alive",
      "species": "Human",
    },];
    expect(gender(characters)).toEqual([["Female", 1], ["Male", 2], ["unknown", undefined]]);
  });
});
describe('species', () => {
  it('is a function', () => {
    expect(typeof species).toBe('function');
  });
  it('returns the species', () => {
    const characters = [{
      "name": "Rick",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Morty",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Summer",
      "gender": "Female",
      "status": "Alive",
      "species": "Human",
    },];
    expect(species(characters)).toEqual([["Human", 3], ["Humanoid", undefined], ["Alien", undefined], ["Cronenberg", undefined], ["Animal", undefined], ["Robot", undefined]]);
  });
});
describe('searchNames', () => {
  it('is a function', () => {
    expect(typeof searchNames).toBe('function');
  });

  it('should return an "Summer" for "Summer"', () => {
    const characters = [{
      "name": "Rick",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Morty",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Summer",
      "gender": "Female",
      "status": "Alive",
      "species": "Human",
    },];
    expect(searchNames("SUMMER", characters)).toEqual([{"name": "Summer", "gender": "Female", "status": "Alive", "species": "Human",
    }])
  });
});
describe('statistics', () => {
  it('should be a function', () => {
    expect(typeof statistics).toBe('function');
  });

  it('returns datas of chosen category in numbers', () => {
    const characters = [{
      "name": "Rick",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Morty",
      "gender": "Male",
      "status": "Alive",
      "species": "Human",
    },
    {
      "name": "Summer",
      "gender": "Female",
      "status": "Alive",
      "species": "Human",
    },];
    expect(statistics(characters, "status", "Alive")).toEqual(3);
  })
});