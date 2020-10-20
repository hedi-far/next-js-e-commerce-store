export function total(shoppingBag) {
  shoppingBag.reduce(function (prev, cur) {
    return prev + cur.price * cur.amount;
  }, 0);
}
