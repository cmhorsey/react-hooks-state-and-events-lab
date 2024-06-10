import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleClick() {
    setInCart((inCart) => !inCart)
  }

  const liClass = inCart ? "in-cart" : ""
  const buttonTxt = inCart ?  "Remove From Cart" : "Add to Cart"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonTxt}</button>
    </li>
  );
}

export default Item;
