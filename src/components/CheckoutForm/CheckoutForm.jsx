import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CheckoutForm.css";
const CheckoutForm = ({ order, createOrder, handleChange }) => {
  const [municipalities, setMunicipalities] = useState([]);
  useEffect(() => {
    const getMunicipalities = async () => {
      const response = await fetch(
        "https://apis.digital.gob.cl/dpa/regiones/13/comunas"
      );
      const data = await response.json();
      setMunicipalities(data);
    };
    getMunicipalities();
  }, []);
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        rut: "",
        email: "",
        repeatEmail: "",
        phone: "",
        comuna: "",
        address: "",
      }}
      validate={(values) => {
        let errors = {};

        if (!values.name) {
          errors.name = "El nombre es requerido";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.name)) {
          errors.name = "El nombre debe contener solo letras";
        }
        if (!values.lastname) {
          errors.lastname = "El apellido es requerido";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.lastname)) {
          errors.lastname = "El apellido debe contener solo letras";
        }
        if (!values.rut) {
          errors.rut = "El rut es requerido";
        } else if (!/^[0-9]{7,8}-[0-9Kk]$/.test(values.rut)) {
          errors.rut = "El rut debe ser valido";
        }
        if (!values.email || !values.repeatEmail) {
          errors.email = "El email es requerido";
          errors.repeatEmail = "El email es requerido";
        } else if ( values.email !== values.repeatEmail) {
          errors.repeatEmail = "Los emails no coinciden";
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
          errors.email = "El email debe ser valido";
        }
        if (!values.phone) {
          errors.phone = "El telefono es requerido";
        } else if (!/^[0-9]{9}$/.test(values.phone)) {
          errors.phone = "El telefono debe ser valido";
        }
        if (!values.comuna || values.comuna === "default") {
          errors.comuna = "La comuna es requerida";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.comuna)) {
          errors.comuna = "La comuna debe contener solo letras";
        }
        if (!values.address) {
          errors.address = "La dirección es requerida";
        } else if (!/^[a-zA-Z0-9_.+-\s]{3,40}$/.test(values.address)) {
          errors.address = "La dirección debe contener solo letras";
        }
        return errors;
      }}
      onSubmit={({ resetForm }) => {
        resetForm();
      }}
    >
      {() => (
        <Form
          className="checkoutForm"
          onSubmit={createOrder}
          onChange={handleChange}
        >
          <Field type="text" name="name" id="name" placeholder="Nombre" required/>
          <ErrorMessage name="name" component="p" className="errorInput" />
          <Field
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellido"
            required
          />
          <ErrorMessage name="lastname" component="p" className="errorInput" />
          <Field type="text" name="rut" id="rut" placeholder="RUT" required/>
          <ErrorMessage name="rut" component="p" className="errorInput" />
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            required
          />
          <ErrorMessage name="email" component="p" className="errorInput" />
          <Field
            type="email"
            name="repeatEmail"
            id="repeatEmail"
            placeholder="Confirma tu correo electrónico"
            required
          />
          <ErrorMessage name="repeatEmail" component="p" className="errorInput" />
          <Field type="tel" name="phone" id="phone" placeholder="Teléfono" required/>
          <ErrorMessage name="phone" component="p" className="errorInput" />
          <Field as="select" name="comuna" id="municipalities" required>
            <option value="default">Seleccione su comuna</option>
            {municipalities.map((item) => (
              <option key={item.codigo} value={item.id}>
                {item.nombre}
              </option>
            ))}
          </Field>
          <ErrorMessage name="comuna" component="p" className="errorInput" />
          <Field
            type="text"
            name="address"
            id="address"
            placeholder="Dirección"
            required
          />
          <ErrorMessage name="address" component="p" className="errorInput" />
          <button type="submit" className="btn-order">
            Generar Orden{" "}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
