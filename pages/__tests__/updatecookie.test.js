import Cookies from 'js-cookie';

// Test function for updating amount in item of cookie

let arrayofIds = ['1', '3'];
const id = ['3'];
Cookies.set('arrayofIds', arrayofIds);

//adding an item to the cart that already exists - when plus button is clicked
const handleIncrease = () => {
  return arrayofIds.concat(id);
};

test('amount of shoe with id="2" is increased in shopping cart', () => {
  expect(handleIncrease(id)).toStrictEqual((arrayofIds = ['1', '3', '3']));
});

test('existing id is added to cookie', () => {
  Cookies.set('arrayofIds', arrayofIds);
  expect(Cookies.get('arrayofIds', arrayofIds)).toBe('["1","3","3"]');
});

//when minus button is clicked, amount of shoe with id = "2" is removed from shopping cart
const handleDecrease = () => {
  const indexOfId = arrayofIds.indexOf(id);

  const newArrayofIds = arrayofIds.splice(indexOfId, 1);

  return arrayofIds;
};

test('existing id is removed from shopping cart', () => {
  expect(handleDecrease(id)).toStrictEqual((arrayofIds = ['1', '3']));
});

test('existing id is removed from cookie', () => {
  Cookies.set('arrayofIds', arrayofIds);
  expect(Cookies.get('arrayofIds', arrayofIds)).toBe('["1","3"]');
});
