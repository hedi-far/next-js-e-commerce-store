export function mergeItems(shoes, arrayofIds) {
  return shoes.map((shoe) => {
    return {
      ...shoe,
      inBag: arrayofIds.includes(shoe.id), //true or false
      amount: arrayofIds.reduce((acc, elem) => {
        return arrayofIds.includes(shoe.id) ? acc + 1 : acc;
      }, 0),
    };
  });
}
