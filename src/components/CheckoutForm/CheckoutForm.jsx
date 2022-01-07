import { useEffect, useState } from "react";

const CheckoutForm = ({order, generarOrden, handleChange}) => {
  const [comunas, setComunas] = useState([]);

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
      <form className="d-flex flex-column align-items-center" onSubmit={generarOrden} onChange={handleChange}>
          <input type="text" name="name" id="name" placeholder="Nombre" defaultValue={order.name} />
          <input type="text" name="lastname" id="lastname" placeholder="Apellido" defaultValue={order.lastname}/>
          <input type="number" name="rut" id="rut" placeholder="RUT" defaultValue={order.rut}/>
          <input type="email" name="email" id="email" placeholder="Correo electrónico" defaultValue={order.email} />
          <input type="tel" name="phone" id="phone" placeholder="Teléfono" defaultValue={order.phone} />
          <select name="comuna" id="comunas">
            {comunas.map((item) => (
              <option key={item.codigo} value={item.id}>{item.nombre}</option>))}
          </select>
          <input type="text" name="address" id="address" placeholder="Dirección" />
          <button type="submit" className="btn-order">Generar Orden </button>
        </form>
  )
}

export default CheckoutForm
