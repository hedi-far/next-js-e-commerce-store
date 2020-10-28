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
  const filteredArrayofIds = arrayofIds.filter(
    (idtoRemove) => idtoRemove !== id,
  );
  return filteredArrayofIds;
};

test('id is removed from shopping cart', () => {
  expect(handleDelete(id)).toStrictEqual((arrayofIds = []));
});

test('id is removed from cookie', () => {
  expect(Cookies.set('arrayofIds', arrayofIds)).toBe('arrayofIds=[]; path=/');
});
