import React from "react";
import ItemCount from "./ItemCount";


function ItemListContainer({greeting}) {
  return (
    <section>
      {greeting}
      <ItemCount/>
    </section>
  )
}

export default ItemListContainer

