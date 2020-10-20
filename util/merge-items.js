export function mergeItems(shoes, arrayofIds) {
  return shoes.map((shoe) => {
    return {
      ...shoe,
      inBag: arrayofIds.includes(shoe.id), //true or false
      amount: arrayofIds.reduce((counter, id) => {
        return shoe.id === id ? (counter += 1) : counter;
      }, 0),
    };
  });
}
