import React from "react";
import ItemCount from "./ItemCount";


function ItemListContainer({greeting}) {
  return (
    <section>
      {greeting}
      <ItemCount stock={10} initial={1}/>
    </section>
  )
}

export default ItemListContainer

