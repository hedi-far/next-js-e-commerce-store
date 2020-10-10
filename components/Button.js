import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';

export default function Button(props) {
  //set state for shoppingBag array
  const [shoppingBag, setShoppingBag] = useState([]);
  const [numberofItems, setNumberofItems] = useState();

  //set cookie for shopping bag
  useEffect(() => {
    Cookie.set('shoppingBag', JSON.stringify(shoppingBag));
  }, [shoppingBag]);

  //set cookie with number of shopping bag items
  useEffect(() => {
    Cookie.set('numberofItems', JSON.stringify(numberofItems));
  }, [numberofItems]);

  console.log(shoppingBag);
  console.log(numberofItems);

  //When 'Add to bag' button is clicked:
  const handleAddtoBag = (name, image, size, price) => {
    //creating new array newshoppingBag by adding incoming values to array "shoppingBag" (=inital state)
    const newShoppingBag = shoppingBag.concat({ name, image, size, price });

    setShoppingBag(newShoppingBag);

    //number of Items in the shopping bag
    setNumberofItems(newShoppingBag.length);
  };

  return (
    <button
      onClick={(item) =>
        handleAddtoBag(props.image, props.name, props.size, props.price)
      }
    >
      Add to bag
    </button>
  );
}
