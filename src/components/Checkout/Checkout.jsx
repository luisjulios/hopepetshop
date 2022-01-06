import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartList, totalCart, emptyCart } = useCartContext();
  const [orderId, setOrderId] = useState("");
  const [comunas, setComunas] = useState([]);
  const [order, setOrder] = useState({
    name: "",
    lastname: "",
    rut: "",
    email: "",
    phone: "",
    comuna: "",
    address: "",
    date: new Date(),
    items: cartList.map((item) => ({
      id: item.id,
      title: item.name,
      quantity: item.quantity,
      price: item.price * item.quantity,
    })),
    quantity: cartList.reduce((acc, item) => acc + item.quantity, 0),
    total: totalCart(),
  });

  const generarOrden = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    try {
      const response = await addDoc(orderCollection, order);
      setOrderId(response.id);
      if (response.id) {
        toast(`Su orden ${response.id} fue generada exitosamente`, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: false,
          closeButton: false,
        });
        emptyCart();
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      emptyCart();
    }
  };

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getComunas = async () => {
      const response = await fetch(
        "https://apis.digital.gob.cl/dpa/regiones/13/comunas"
      );
      const data = await response.json();
      setComunas(data);
    };
    getComunas();
  }, []);

  return (
    <section className="d-flex flex-column align-items-center">
      <h2>CheckOut</h2>
      {cartList.length > 0 ? (
        <form className="d-flex flex-column align-items-center" onSubmit={generarOrden} onChange={handleChange}>
          <input type="text" name="name" id="name" placeholder="Nombre" defaultValue={order.name} />
          <input type="text" name="lastname" id="lastname" placeholder="Apellido" defaultValue={order.lastname}/>
          <input type="text" name="rut" id="rut" placeholder="RUT" defaultValue={order.rut}/>
          <input type="email" name="email" id="email" placeholder="Correo electrónico" defaultValue={order.email} />
          <input type="tel" name="phone" id="phone" placeholder="Teléfono" defaultValue={order.phone} />
          <select name="comuna" id="comunas">
            {comunas.map((item) => (
              <option key={item.codigo} value={item.id}>{item.nombre}</option>))}
          </select>
          <input type="text" name="address" id="address" placeholder="Dirección" />
          <button type="submit" className="btn-order">Generar Orden </button>
        </form>
      ) : (
        <div className="order-id">
          {orderId ? (
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
          :
          (<Link to="/all" className="backStore">Volver a la tienda</Link>)}
        </div>
      )}
    </section>
  );
};

export default Checkout;
