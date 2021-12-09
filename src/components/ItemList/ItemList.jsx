import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <section className="itemList">
      { products.map(product => <Item key={product.id} product={product}/>)}
    </section>
  )
}

export default ItemList
