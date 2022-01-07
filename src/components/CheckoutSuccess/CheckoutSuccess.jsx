const CheckoutSuccess = ({order, orderId}) => {
  return (
    <>
    <h3>Resumen de compra</h3>
    <p>Su orden {orderId} se ha ingresado exitosamente</p>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {order.items.map((item) => (
          <tr key={item.id}>
            <td className="d-flex flex-column align-items-center">
              <h6>{item.title}</h6>
            </td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${item.quantity * item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3>Total: ${order.total}</h3>
    </>
  )
}

export default CheckoutSuccess;
