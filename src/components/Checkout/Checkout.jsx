import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc, getFirestore, query, documentId, writeBatch, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import  CheckoutSuccess  from "../CheckoutSuccess/CheckoutSuccess";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import './Checkout.css';
const Checkout = () => {
  const { cartList, totalCart, emptyCart } = useCartContext();
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState({
    date: new Date(),
    items: cartList.map((item) => ({
      id: item.id,
      title: item.name,
      quantity: item.quantity,
      price: item.price * item.quantity,
    })),
    status: "Generada, pendiente de envío",
    quantity: cartList.reduce((acc, item) => acc + item.quantity, 0),
    total: totalCart() < 20000 ? totalCart() + 2500 : totalCart(),
  });

  const createOrder = async (e) => {
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
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      emptyCart();
    }

    const updateStock = query(
      collection(db, "productos"),where(documentId(), "in", cartList.map((item) => item.id))
    )
    const batch = writeBatch(db);
    getDocs(updateStock)
    .then(resp => {resp.docs.forEach(res => batch.update(res.ref, { 
        stock: res.data().stock - cartList.find(item => item.id === res.id).quantity}))
      })
    .then(() => batch.commit())
  };
  const handleChange = (e) => {setOrder({...order, [e.target.name]: e.target.value,})};
  return (
    <section className="d-flex flex-column align-items-center p-5">
      <h2>CheckOut</h2>
      {cartList.length > 0 ? ( <CheckoutForm order={order} createOrder={createOrder} handleChange={handleChange}/>
      ) : (
        <div className="order">
          {orderId ? (<CheckoutSuccess orderId={orderId} order={order}/>)
          :
          (<Link to="/hopepetshop/all" className="backStore">Volver a la tienda</Link>)}
        </div>
      )}
    </section>
  );
};

export default Checkout;