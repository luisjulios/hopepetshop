import { memo } from 'react';
import Item from '../Item/Item'

const ItemList = memo(({products}) => {
  return (
    <section className="itemList">
      { products.map(product => <Item key={product.id} product={product}/>)}
    </section>
  )
})

export default ItemList;
