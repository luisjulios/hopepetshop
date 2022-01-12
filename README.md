# Hope Petshop😸!

Proyecto realizado con ReactJs para e-commerce dedicado a la venta de productos para mascotas.


## Link al proyecto

[Hope Petshop.cl](https://luisjulios.github.io/hopepetshop/)

## Navegación

La barra de navegación ofrece links a las distintas categorías de productos. En cualquier selección se renderiza el componente ItemListContainer, que muestra productos distintos según un filtro de la base de datos. Cada producto es un componente Item. La categoría a filtrar se toma usando useParams().

Ingresar manualmente las url permite acceder a las distintas secciones del sitio (/category, /cart, /checkout, etc.). Ingresar una url no reconocida renderiza componente 404.

## Tecnologías/librerías

 - ReactJs: Para el desarrollo general del proyecto.
 - Javascript: Para lógica de programación.
 - JSX: Extensión de sintaxis de Javascript.
 - CSS: Estilos de la app.
 - React-toastify: Notificaciones de agregar, eliminar, o vaciar el carrito. También para notificar el id de la orden.
 - Formik: Para validación del formulario de datos del cliente.
 - Bootstrap: Estilos de algunos componentes.
 - React-Router-Dom: Enrutado de la aplicación.
 - Firebase: Como base de datos para lectura y escritura de la aplicación.

## Componenetes destacados

### Item - ItemDetail
Cada componente Item ofrece la opción de VER MÁS lo que redirecciona al ItemDetail, que muestra un detalle del producto y la opción para agregar al carrito. Esto renderiza el componente ItemDetailContainer, que toma el ID del producto correspondiente usando useParams(), y hace un pedido a la base de datos de ese id. Con el resultado renderiza el componente ItemDetail que muestra el detalle del producto y la opción de agregar al carrito, ajustando la cantidad al stock disponible según la base de datos.
### Cart Context
Todos las funciones del carrito se encuentran en el contexto CartContext, que reúne la información del carrito, los productos seleccionados, y ofrece métodos para limpiar el carrito, calcular el total y agregar productos.
### Firebase
Todos los productos cargados se encuentran alojados en Firebase-Firestore, cada objeto posee las siguientes propiedades: id, name, price, image, description, stock, category.
Las ordenes generadas poseen los datos del clientes, los items comprados, id de la orden, status de la compra, y total de la compra.


## Secciones
### Inicio
La aplicación inicia con una vista del home, en el header en la parte izquierda se aprecia el logo y nombre de la marca, a la derecha iconos a las redes sociales, y un widget del carrito, con un state inicial de 0 tanto para la cantidad de ítems como para el total de la compra.
Debajo del header, un navbar con  2 enlaces, uno para volver al home, y otro para todos los productos, y sus categorías.
El saludo predeterminado del inicio.
Un poco más abajo un carrusel con 3 imágenes, debajo de este un párrafo llamativo, e información acerca del envío.
Por último, el footer, redes sociales de la marca, enlace para el catalogo de productos, información de contacto, y copyright del desarrollador.

### Productos
Lo primero que se observa al clickear en Productos, serán todos los productos ofrecidos por el cliente, sin ningún filtro.
### Categorías
Se mapean todas las categorías de la base de datos para crear los diferentes enlaces, es decir, en el caso que el cliente quiera agregar productos con una categoría que todavía no existe en la base de datos, se agregará automáticamente.

### Detalle de producto
Al ver el detalle de un producto, se podrá apreciar el nombre de producto, un imagen referencial, el precio del producto, stock disponible del mismo, contador para agregar la cantidad necesaria, sin exceder el stock, y un botón para agregar al carrito, el cual luego se renderizara como un enlace al carrito, y después de 2 segundos nuevamente un botón para agregar al carrito si el cliente lo requiere.
### Carrito de compras
En el carrito de compras se observa en detalle imagen del producto, nombre, precio,  y cantidad de ítems del producto, y luego subtotal por la cantidad de ítems de cada producto, un botón para eliminar el ítem del carrito.
Un poco mas abajo, un botón para vaciar el carrito por completo, luego el total de la compra, si la compra es inferior a $20.000 CLP, se le sumara $2.500 CLP por envió, y por ultimo un botón de terminar compra para ir al checkout.
### Checkout/Formulario de datos del usuario
En este formulario se usó la librería para formularios llamada [Formik](https://formik.org/docs/overview), para validación de cada uno de los inputs, en caso de estar vacío o no cumplir con las condiciones del campo, arrojara un mensaje de error para corregir el mismo.
En esta sección, si alguno de los campos no cumple con las condiciones, o al validar la cantidad de algún producto solicitado por el usuario, en contraste con el stock de dicho producto, no se podrá generar la orden, y Toastify arrojará una alerta invitando al usuario a validar la cantidad de productos solicitados.

### Resumen de compra
En esta sección, en la parte superior se encontrará una alerta de Toastify indicando que fue ingresada la orden y el id de la orden de compra.
En el resumen, habrán dos secciones, en la primera los datos del comprador, más el id nuevamente del la orden, estado de la orden, y la fecha de la compra.
En la siguiente columna, un resumen de los ítems comprados, su precio total de cada producto por la cantidad de ítems, y un total de la compra.
Por último, un botón para volver a la tienda.

## Instalación
*npm i*
___
*npm start*


## Developer
> Desarrollado por [Luis Julio](https://www.linkedin.com/in/antsth/).




