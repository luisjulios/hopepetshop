import React from "react";
import ItemList from "./ItemList";


const ItemListContainer = ({greeting}) => {
  return (
    <section>
      {greeting}
      <ItemList/>
    </section>
  )
}

export default ItemListContainer

