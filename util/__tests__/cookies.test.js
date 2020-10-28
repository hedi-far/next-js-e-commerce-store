import Cookies from 'js-cookie';

//Test functions for adding and removing info from cookie

let arrayofIds = [];
const id = '1';

const handleAddtoBag = () => {
  return arrayofIds.concat(id);
};

test('id is added to empty shopping cart', () => {
  expect(handleAddtoBag(id)).toStrictEqual((arrayofIds = ['1']));
});

test('first id is added to cookie', () => {
  expect(Cookies.set('arrayofIds', arrayofIds)).toBe(
    'arrayofIds=[%221%22]; path=/',
  );
});

const handleDelete = () => {
  for (let i = 0; i < arrayofIds.length; i++) {
    if (arrayofIds[i] === id) {
      arrayofIds.splice(i, 1);
      i--;
    }
    return arrayofIds;
  }
};

test('id is removed from shopping cart', () => {
  expect(handleDelete(id)).toStrictEqual((arrayofIds = []));
});

test('id is removed from cookie', () => {
  expect(Cookies.set('arrayofIds', arrayofIds)).toBe('arrayofIds=[]; path=/');
});
