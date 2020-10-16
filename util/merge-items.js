export function mergeItems(shoes, arrayofIds) {
  return shoes.map((shoe) => {
    // If the id of the shoe is in the
    // array, then set following to true

    return {
      ...shoe,
      inBag: arrayofIds.includes(shoe.id),
      amount: arrayofIds.reduce(
        (counter, obj) =>
          arrayofIds.includes(shoe.id) ? (counter += 1) : counter,
        0,
      ),
    };
  });
}
