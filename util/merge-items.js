export function mergeItems(shoes, arrayOfIds) {
  return shoes.map((shoe) => {
    return {
      ...shoe,
      inBag: arrayOfIds.includes(shoe.id), //true or false
      amount: arrayOfIds.reduce((counter, id) => {
        return shoe.id === id ? (counter += 1) : counter;
      }, 0),
    };
  });
}

//merges the info about the individual shoe from the database with the array of ids (=shoes selected by user, inBag = true) and
// calculates the amount based on the same array. Returns ALL shoes from database with inBag true or false. >> final-bag.js
