import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import  CheckoutSuccess  from "../CheckoutSuccess/CheckoutSuccess";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const { cartList, totalCart, emptyCart } = useCartContext();
  const [orderId, setOrderId] = useState("");
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
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: true,
          closeButton: false,
        });
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


  return (
    <section className="d-flex flex-column align-items-center">
      <h2>CheckOut</h2>
      {cartList.length > 0 ? ( <CheckoutForm order={order} generarOrden={generarOrden} handleChange={handleChange}/>
      ) : (
        <div className="order-id">
          {orderId ? (<CheckoutSuccess orderId={orderId} order={order}/>)
          :
          (<Link to="/all" className="backStore">Volver a la tienda</Link>)}
        </div>
      )}
    </section>
  );
};

export default Checkout;
