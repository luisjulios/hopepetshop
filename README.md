# Hope Petshop馃樃!

Proyecto realizado con ReactJs para e-commerce dedicado a la venta de productos para mascotas.


## Link al proyecto

[Hope Petshop.cl](https://luisjulios.github.io/hopepetshop/)

## Navegaci贸n

La barra de navegaci贸n ofrece links a las distintas categor铆as de productos. En cualquier selecci贸n se renderiza el componente ItemListContainer, que muestra productos distintos seg煤n un filtro de la base de datos. Cada producto es un componente Item. La categor铆a a filtrar se toma usando useParams().

Ingresar manualmente las url permite acceder a las distintas secciones del sitio (/category, /cart, /checkout, etc.). Ingresar una url no reconocida renderiza componente 404.

## Tecnolog铆as/librer铆as

 - ReactJs: Para el desarrollo general del proyecto.
 - Javascript: Para l贸gica de programaci贸n.
 - JSX: Extensi贸n de sintaxis de Javascript.
 - CSS: Estilos de la app.
 - React-toastify: Notificaciones de agregar, eliminar, o vaciar el carrito. Tambi茅n para notificar el id de la orden.
 - Formik: Para validaci贸n del formulario de datos del cliente.
 - Bootstrap: Estilos de algunos componentes.
 - React-Router-Dom: Enrutado de la aplicaci贸n.
 - Firebase: Como base de datos para lectura y escritura de la aplicaci贸n.

## Componenetes destacados

### Item - ItemDetail
Cada componente Item ofrece la opci贸n de VER M脕S lo que redirecciona al ItemDetail, que muestra un detalle del producto y la opci贸n para agregar al carrito. Esto renderiza el componente ItemDetailContainer, que toma el ID del producto correspondiente usando useParams(), y hace un pedido a la base de datos de ese id. Con el resultado renderiza el componente ItemDetail que muestra el detalle del producto y la opci贸n de agregar al carrito, ajustando la cantidad al stock disponible seg煤n la base de datos.
### Cart Context
Todos las funciones del carrito se encuentran en el contexto CartContext, que re煤ne la informaci贸n del carrito, los productos seleccionados, y ofrece m茅todos para limpiar el carrito, calcular el total y agregar productos.
### Firebase
Todos los productos cargados se encuentran alojados en Firebase-Firestore, cada objeto posee las siguientes propiedades: id, name, price, image, description, stock, category.
Las ordenes generadas poseen los datos del clientes, los items comprados, id de la orden, status de la compra, y total de la compra.


## Secciones
### Inicio
La aplicaci贸n inicia con una vista del home, en el header en la parte izquierda se aprecia el logo y nombre de la marca, a la derecha iconos a las redes sociales, y un widget del carrito, con un state inicial de 0 tanto para la cantidad de 铆tems como para el total de la compra.
Debajo del header, un navbar con  2 enlaces, uno para volver al home, y otro para todos los productos, y sus categor铆as.
El saludo predeterminado del inicio.
Un poco m谩s abajo un carrusel con 3 im谩genes, debajo de este un p谩rrafo llamativo, e informaci贸n acerca del env铆o.
Por 煤ltimo, el footer, redes sociales de la marca, enlace para el catalogo de productos, informaci贸n de contacto, y copyright del desarrollador.

### Productos
Lo primero que se observa al clickear en Productos, ser谩n todos los productos ofrecidos por el cliente, sin ning煤n filtro.
### Categor铆as
Se mapean todas las categor铆as de la base de datos para crear los diferentes enlaces, es decir, en el caso que el cliente quiera agregar productos con una categor铆a que todav铆a no existe en la base de datos, se agregar谩 autom谩ticamente.

### Detalle de producto
Al ver el detalle de un producto, se podr谩 apreciar el nombre de producto, un imagen referencial, el precio del producto, stock disponible del mismo, contador para agregar la cantidad necesaria, sin exceder el stock, y un bot贸n para agregar al carrito, el cual luego se renderizara como un enlace al carrito, y despu茅s de 2 segundos nuevamente un bot贸n para agregar al carrito si el cliente lo requiere.
### Carrito de compras
En el carrito de compras se observa en detalle imagen del producto, nombre, precio,  y cantidad de 铆tems del producto, y luego subtotal por la cantidad de 铆tems de cada producto, un bot贸n para eliminar el 铆tem del carrito.
Un poco mas abajo, un bot贸n para vaciar el carrito por completo, luego el total de la compra, si la compra es inferior a $20.000 CLP, se le sumara $2.500 CLP por envi贸, y por ultimo un bot贸n de terminar compra para ir al checkout.
### Checkout/Formulario de datos del usuario
En este formulario se us贸 la librer铆a para formularios llamada [Formik](https://formik.org/docs/overview), para validaci贸n de cada uno de los inputs, en caso de estar vac铆o o no cumplir con las condiciones del campo, arrojara un mensaje de error para corregir el mismo.
En esta secci贸n, si alguno de los campos no cumple con las condiciones, o al validar la cantidad de alg煤n producto solicitado por el usuario, en contraste con el stock de dicho producto, no se podr谩 generar la orden, y Toastify arrojar谩 una alerta invitando al usuario a validar la cantidad de productos solicitados.

### Resumen de compra
En esta secci贸n, en la parte superior se encontrar谩 una alerta de Toastify indicando que fue ingresada la orden y el id de la orden de compra.
En el resumen, habr谩n dos secciones, en la primera los datos del comprador, m谩s el id nuevamente del la orden, estado de la orden, y la fecha de la compra.
En la siguiente columna, un resumen de los 铆tems comprados, su precio total de cada producto por la cantidad de 铆tems, y un total de la compra.
Por 煤ltimo, un bot贸n para volver a la tienda.

## Instalaci贸n
*npm i*
___
*npm start*


## Developer
> Desarrollado por [Luis Julio](https://www.linkedin.com/in/antsth/).




