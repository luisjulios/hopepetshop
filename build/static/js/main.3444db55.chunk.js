(this["webpackJsonphope-pet-shop"]=this["webpackJsonphope-pet-shop"]||[]).push([[0],Array(32).concat([function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/loading.ebbb7f26.svg"},,,,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/logo.208433ff.svg"},,,,,,,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){var s={"./firulais.png":65,"./loading.svg":32,"./logo.svg":36,"./michi.png":66,"./slide1.jpg":67,"./slide2.jpg":68,"./slide3.jpg":69};function a(e){var t=n(e);return c(t)}function n(e){if(!c.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id=64},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/firulais.1395ce67.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/michi.6cb5cead.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/slide1.b1106710.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/slide2.e3a356c7.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/slide3.a9b888ce.jpg"},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(35),n=c.n(a),r=c(13),i=c(12),o=c(25),l=(c(54),c(55),c(56),c(36)),j=c(21),d=c(9),b=c(20),u=c(0),O=Object(s.createContext)([]),m=function(){return Object(s.useContext)(O)};var h=function(e){var t=e.children,c=Object(s.useState)([]),a=Object(d.a)(c,2),n=a[0],r=a[1];return Object(u.jsx)(O.Provider,{value:{cartList:n,addToCart:function(e){var t=n.findIndex((function(t){return t.id===e.id}));if(t>-1){var c=n[t].quantity;n.splice(t,1),r([].concat(Object(j.a)(n),[Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity+c})]))}else r([].concat(Object(j.a)(n),[e]))},emptyCart:function(){r([]),Object(o.b)("Sin productos en el carrito",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,closeButton:!1})},deleteFromCart:function(e){r(n.filter((function(t){return t.id!==e.id}))),Object(o.b)("Has eliminado ".concat(e.name),{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,closeButton:!1})},totalItems:function(){return n.reduce((function(e,t){return e+t.quantity}),0)},totalCart:function(){return n.reduce((function(e,t){return e+t.price*t.quantity}),0)}},children:t})},p=c(19),x=(c(58),function(){var e=m(),t=e.cartList,c=e.totalItems;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("li",{className:"cartMD",children:Object(u.jsxs)(r.c,{className:function(e){return e.isActive?"isActive":""},to:"/cart",children:[Object(u.jsx)(p.g,{className:"icon"}),"CARRITO ",0===t.length?"":"(".concat(c(),")")]})})})}),f=c(14),g=(c(61),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){var e=Object(f.g)(),t=Object(f.b)(e,"productos");Object(f.f)(t).then((function(e){a(e.docs.map((function(e){return e.data().category})).reduce((function(e,t){return e.includes(t)?e:[].concat(Object(j.a)(e),[t])}),[]))}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsxs)(r.c,{className:function(e){return e.isActive?"isActive":""},to:"/hopepetshop",children:[Object(u.jsx)(p.b,{className:"icon"}),"INICIO"]})}),Object(u.jsxs)("li",{children:[Object(u.jsxs)(r.c,{className:function(e){return e.isActive?"isActive":""},to:"/all",children:[Object(u.jsx)(p.d,{className:"icon"}),"PRODUCTOS"]}),Object(u.jsx)("ul",{children:c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(r.c,{className:function(e){return e.isActive?"isActive":""},to:"/category/".concat(e),children:e})},e)}))})]}),Object(u.jsx)(x,{})]})})})}),N=(c(62),function(){var e=m(),t=e.totalCart,c=e.totalItems;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:"headerMD",children:[Object(u.jsx)(r.b,{className:"brand",to:"/hopepetshop",children:Object(u.jsxs)("h1",{children:["HopePetshop",Object(u.jsx)("img",{src:l.default,alt:"Logo de marca Hope Petshop",className:"logo"})]})}),Object(u.jsx)(g,{})]}),Object(u.jsxs)("header",{className:"headerL",children:[Object(u.jsx)(r.b,{className:"brand",to:"/hopepetshop",children:Object(u.jsxs)("h1",{children:["HopePetshop",Object(u.jsx)("img",{src:l.default,alt:"Logo de marca Hope Petshop",className:"logo"})]})}),Object(u.jsxs)("div",{className:"innerHeader",children:[Object(u.jsx)("div",{className:"rrss",children:Object(u.jsxs)("ul",{className:"fooUl",children:[Object(u.jsx)("li",{className:"fooUlLi",children:Object(u.jsx)("a",{href:"/",className:"link",children:Object(u.jsx)(p.a,{})})}),Object(u.jsx)("li",{className:"fooUlLL",children:Object(u.jsx)("a",{href:"/",className:"link",children:Object(u.jsx)(p.c,{})})})]})}),Object(u.jsxs)(r.c,{className:"cartL",to:"/cart",children:[Object(u.jsx)(p.g,{}),Object(u.jsx)("small",{children:c()}),Object(u.jsxs)("small",{children:["$",t()]})]})]})]}),Object(u.jsx)("div",{className:"navbarL",children:Object(u.jsx)(g,{})})]})}),v=(c(63),function(e){return c(64)("./".concat(e)).default}),C=function(){return Object(u.jsx)("div",{id:"carouselExampleFade",className:"carousel slide carousel-fade","data-bs-ride":"carousel",children:Object(u.jsxs)("div",{className:"carousel-inner",children:[Object(u.jsx)("div",{className:"carousel-item active",children:Object(u.jsx)("img",{src:v("slide1.jpg"),className:"d-block slide",alt:"slide carousel"})}),Object(u.jsx)("div",{className:"carousel-item",children:Object(u.jsx)("img",{src:v("slide2.jpg"),className:"d-block slide",alt:"slide carousel"})}),Object(u.jsx)("div",{className:"carousel-item",children:Object(u.jsx)("img",{src:v("slide3.jpg"),className:"d-block slide",alt:"slide carousel"})})]})})},y=(c(70),function(e){var t=e.greetings;return Object(u.jsxs)("main",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)(C,{}),Object(u.jsxs)("p",{className:"enunciado",children:["Los alimentos favoritos de tu mascota sin moverte de tu casa.",Object(u.jsx)("small",{children:"ENVIO GRATIS (Pedido m\xednimo $20.000)"})]})]})}),k=(c(71),Object(s.memo)((function(e){var t=e.product;return Object(u.jsxs)("div",{className:"cardProduct",children:[Object(u.jsxs)(r.b,{to:"/details/".concat(t.id),className:"linkItem",children:[Object(u.jsx)("img",{src:t.image,alt:"Imagen de producto",className:"imgCardProduct"}),Object(u.jsx)("h3",{className:"nameProduct",children:t.name}),Object(u.jsxs)("h3",{className:"priceProduct",children:["$ ",t.price]}),Object(u.jsx)("button",{className:"btnVerMas",children:"Detalles"})]}),Object(u.jsx)("hr",{})]},t.id)}))),E=(c(72),Object(s.memo)((function(e){var t=e.products;return Object(u.jsx)("section",{className:"itemList",children:t.map((function(e){return Object(u.jsx)(k,{product:e},e.id)}))})}))),P=c(32),I=(c(73),Object(s.memo)((function(e){var t=e.nameCategory,c=e.greetings,a=Object(s.useState)([]),n=Object(d.a)(a,2),r=n[0],o=n[1],l=Object(s.useState)(!0),j=Object(d.a)(l,2),O=j[0],m=j[1],h=Object(i.g)().idCategory;return Object(s.useEffect)((function(){var e=Object(f.g)();if(h){var t=Object(f.h)(Object(f.b)(e,"productos"),Object(f.i)("category","==",h));Object(f.f)(t).then((function(e){o(e.docs.map((function(e){return Object(b.a)({id:e.id},e.data())}))),m(!1)}))}else{var c=Object(f.b)(e,"productos");Object(f.f)(c).then((function(e){o(e.docs.map((function(e){return Object(b.a)({id:e.id},e.data())}))),m(!1)}))}}),[h]),"gatos"===h?t="Gatos":"perros"===h&&(t="Perros"),Object(u.jsxs)("main",{children:[Object(u.jsx)("h2",{children:t||c}),O?Object(u.jsx)("img",{src:P.default,alt:"Cargando",className:"loading"}):Object(u.jsx)(E,{products:r})]})}))),S=(c(74),function(e){var t=e.stock,c=e.initial,a=e.onAdd,n=Object(s.useState)(c),r=Object(d.a)(n,2),i=r[0],o=r[1];return Object(u.jsx)(u.Fragment,{children:0===t?Object(u.jsx)("button",{className:"outOfStock",disabled:!0,children:"No disponible"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"remove",onClick:function(){o((function(e){return e-1})),1===i&&o(1)},children:Object(u.jsx)(p.e,{className:"faQuantity"})}),Object(u.jsx)("input",{className:"quantity",value:i,readOnly:!0}),Object(u.jsx)("button",{className:"add",onClick:function(){o((function(e){return e+1})),i===t&&o(i)},children:Object(u.jsx)(p.f,{className:"faQuantity"})})]}),Object(u.jsx)("button",{type:"submit",className:"addCart",onClick:function(){return a(parseInt(i))},children:"Agregar al carrito"})]})})}),A=(c(75),function(e){var t=e.product,c=e.onAdd,a=Object(s.useState)(!1),n=Object(d.a)(a,2),i=n[0],l=n[1],j=m().addToCart;return c=function(e){j(Object(b.a)(Object(b.a)({},t),{},{quantity:e})),l(!0),Object(o.b)("Has agregado ".concat(e," ").concat(t.name),{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,closeButton:!1})},Object(u.jsxs)("div",{className:"itemDetail",children:[Object(u.jsx)("h2",{className:"nameDetailProduct",children:t.name}),Object(u.jsx)("img",{src:t.image,alt:"Imagen detalle de producto",className:"imgDetailProduct"}),Object(u.jsxs)("p",{className:"priceDetailProduct",children:["Precio: $",t.price]}),Object(u.jsxs)("p",{className:"stock",children:["Stock: ",t.stock]}),Object(u.jsx)("p",{className:"descriptionDetailProduct",children:t.description}),!1===i?Object(u.jsx)(S,{stock:t.stock,initial:1,onAdd:c}):Object(u.jsx)(r.b,{className:"goCart",to:"/cart",children:"Ir al carrito"})]},t.id)}),q=(c(76),function(){var e=Object(s.useState)({}),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),r=Object(d.a)(n,2),o=r[0],l=r[1],j=Object(i.g)().idProd;return Object(s.useEffect)((function(){var e=Object(f.g)(),t=Object(f.c)(e,"productos/".concat(j));Object(f.e)(t).then((function(e){a(Object(b.a)({id:e.id},e.data())),l(!1)}))}),[j]),Object(u.jsx)("section",{className:"sectionDetail",children:o?Object(u.jsx)("img",{src:P.default,alt:"loading",className:"loading"}):Object(u.jsx)(A,{product:c})})}),L=(c(77),function(){var e=m(),t=e.cartList,c=e.emptyCart,s=e.deleteFromCart,a=e.totalCart;return Object(u.jsxs)("main",{children:[Object(u.jsx)("h2",{children:"Carrito de Compras"}),t<1?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"No hay productos en el carrito"}),Object(u.jsx)(r.b,{to:"/all",className:"backStore",children:"Volver a la tienda"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Producto"}),Object(u.jsx)("th",{children:"Precio"}),Object(u.jsx)("th",{children:"Cantidad"}),Object(u.jsx)("th",{children:"Subtotal"}),Object(u.jsx)("th",{children:"Eliminar"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[Object(u.jsx)("img",{src:e.image,alt:e.name}),Object(u.jsx)("h6",{children:e.name})]}),Object(u.jsxs)("td",{children:["$",e.price]}),Object(u.jsx)("td",{children:e.quantity}),Object(u.jsxs)("td",{children:["$",e.quantity*e.price]}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return s(e)},className:"btn-delete",children:"X"})})]},e.id)}))})]}),Object(u.jsx)("button",{onClick:c,className:"btn-empty",children:"Vaciar carrito"}),Object(u.jsxs)("p",{children:["Total: $",a()<2e4?a()+2500:a()]}),Object(u.jsx)("p",{className:"infoCart",children:"Compras inferiores a $20.000, el env\xedo es de $2.500."}),Object(u.jsx)(r.b,{to:"/checkout",className:"checkout",children:"Terminar compra"})]})]})}),D=(c(78),function(){return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsxs)("div",{className:"rrss",children:[Object(u.jsx)("h4",{children:"Nuestras redes"}),Object(u.jsxs)("ul",{className:"fooUl",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",className:"link",children:Object(u.jsx)(p.a,{})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.instagram.com/hopepetshopcl/",className:"link",children:Object(u.jsx)(p.c,{})})})]})]}),Object(u.jsxs)("div",{className:"footerNav",children:[Object(u.jsx)("h4",{children:"Navegaci\xf3n"}),Object(u.jsx)("ul",{className:"fooUl",children:Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"link",to:"/all",children:"Todos los productos"})})})]}),Object(u.jsxs)("div",{className:"contacto",children:[Object(u.jsx)("h4",{children:"Contacto"}),Object(u.jsxs)("ul",{className:"fooUl",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"link",href:"/",children:"+569-55597600"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"link",href:"/",children:"hopepetshop@hopepetshop.cl"})})]})]}),Object(u.jsxs)("div",{className:"footerCopy",children:[Object(u.jsx)("p",{children:"Copyright HopePetshop.cl - 2021. Todos los derechos reservados."}),Object(u.jsxs)("p",{children:["Dise\xf1o y desarrollo por"," ",Object(u.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/antsth/",children:"Luis Julio"})]})]})]})}),w=(c(79),function(){return Object(u.jsxs)("div",{className:"notFound",children:[Object(u.jsx)("h2",{className:"error",children:"ERROR - 404"}),Object(u.jsx)("p",{children:"La p\xe1gina que est\xe1s buscando no existe"})]})}),$=c(10),F=c(1),H=c.n(F),T=c(5),R=(c(80),function(e){var t=e.order,c=e.orderId;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"GRACIAS POR COMPRAR EN HOPE PETSHOP.CL"}),Object(u.jsxs)("p",{children:[" Su orden ",Object(u.jsx)("b",{children:c})," se ha ingresado exitosamente."]}),Object(u.jsx)("h2",{children:"Resumen de compra"}),Object(u.jsxs)("div",{className:"order-success",children:[Object(u.jsx)("div",{className:"order-success-container",children:Object(u.jsxs)("div",{className:"buyerData",children:[Object(u.jsx)("h3",{children:"Datos del comprador"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Nombre y apellido:"})," ",t.name," ",t.lastname]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Email:"})," ",t.email]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Rut:"})," ",t.rut]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Telefono:"})," ",t.phone]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Direccion:"})," ",t.address]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Comuna:"})," ",t.comuna]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Orden ID:"})," ",c]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Estado:"})," ",t.status]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Fecha:"})," ",t.date.toLocaleDateString()]})]})}),Object(u.jsxs)("div",{className:"order-items",children:[Object(u.jsx)("h3",{children:"Items"}),Object(u.jsxs)("table",{className:"itemsOrder",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Producto"}),Object(u.jsx)("th",{children:"Precio"}),Object(u.jsx)("th",{children:"Cantidad"})]})}),Object(u.jsx)("tbody",{children:t.items.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"d-flex flex-column align-items-center",children:Object(u.jsx)("h6",{children:e.title})}),Object(u.jsxs)("td",{children:["$",e.price]}),Object(u.jsx)("td",{children:e.quantity})]},e.id)}))})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Total:"})," $",t.total]})]})]}),Object(u.jsx)(r.b,{to:"/all",children:Object(u.jsx)("button",{className:"backStore",children:"Volver a la tienda"})})]})}),B=c(16),U=(c(83),function(e){e.order;var t=e.createOrder,c=e.handleChange,a=Object(s.useState)([]),n=Object(d.a)(a,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(T.a)(H.a.mark((function e(){var t,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://apis.digital.gob.cl/dpa/regiones/13/comunas");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)(B.d,{initialValues:{name:"",lastname:"",rut:"",email:"",repeatEmail:"",phone:"",comuna:"",address:""},validate:function(e){var t={};return e.name?/^[a-zA-Z\xc0-\xff\s]{3,40}$/.test(e.name)||(t.name="El nombre debe contener solo letras"):t.name="El nombre es requerido",e.lastname?/^[a-zA-Z\xc0-\xff\s]{3,40}$/.test(e.lastname)||(t.lastname="El apellido debe contener solo letras"):t.lastname="El apellido es requerido",e.rut?/^[0-9]{7,8}-[0-9Kk]$/.test(e.rut)||(t.rut="El rut debe ser valido"):t.rut="El rut es requerido",e.email&&e.repeatEmail?e.email!==e.repeatEmail?t.repeatEmail="Los emails no coinciden":/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.email)||(t.email="El email debe ser valido"):(t.email="El email es requerido",t.repeatEmail="El email es requerido"),e.phone?/^[0-9]{9}$/.test(e.phone)||(t.phone="El telefono debe ser valido"):t.phone="El telefono es requerido",e.comuna&&"default"!==e.comuna?/^[a-zA-Z\xc0-\xff\s]{3,40}$/.test(e.comuna)||(t.comuna="La comuna debe contener solo letras"):t.comuna="La comuna es requerida",e.address?/^[a-zA-Z\xc0-\xff.\s]{3,40}$/.test(e.address)||(t.address="La direcci\xf3n debe contener solo letras"):t.address="La direcci\xf3n es requerida",t},onSubmit:function(e){(0,e.resetForm)()},children:function(){return Object(u.jsxs)(B.c,{className:"checkoutForm",onSubmit:t,onChange:c,children:[Object(u.jsx)(B.b,{type:"text",name:"name",id:"name",placeholder:"Nombre"}),Object(u.jsx)(B.a,{name:"name",component:"p",className:"errorInput"}),Object(u.jsx)(B.b,{type:"text",name:"lastname",id:"lastname",placeholder:"Apellido"}),Object(u.jsx)(B.a,{name:"lastname",component:"p",className:"errorInput"}),Object(u.jsx)(B.b,{type:"text",name:"rut",id:"rut",placeholder:"RUT"}),Object(u.jsx)(B.a,{name:"rut",component:"p",className:"errorInput"}),Object(u.jsx)(B.b,{type:"email",name:"email",id:"email",placeholder:"Correo electr\xf3nico"}),Object(u.jsx)(B.a,{name:"email",component:"p",className:"errorInput"}),Object(u.jsx)(B.b,{type:"email",name:"repeatEmail",id:"repeatEmail",placeholder:"Confirma tu correo electr\xf3nico"}),Object(u.jsx)(B.a,{name:"repeatEmail",component:"p",className:"errorInput"}),Object(u.jsx)(B.b,{type:"tel",name:"phone",id:"phone",placeholder:"Tel\xe9fono"}),Object(u.jsx)(B.a,{name:"phone",component:"p",className:"errorInput"}),Object(u.jsxs)(B.b,{as:"select",name:"comuna",id:"municipalities",children:[Object(u.jsx)("option",{value:"default",children:"Seleccione su comuna"}),r.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.nombre},e.codigo)}))]}),Object(u.jsx)(B.a,{name:"comuna",component:"p",className:"errorInput"}),Object(u.jsx)(B.b,{type:"text",name:"address",id:"address",placeholder:"Direcci\xf3n"}),Object(u.jsx)(B.a,{name:"address",component:"p",className:"errorInput"}),Object(u.jsxs)("button",{type:"submit",className:"btn-order",children:["Generar Orden"," "]})]})}})}),z=(c(84),function(){var e=m(),t=e.cartList,c=e.totalCart,a=e.emptyCart,n=Object(s.useState)(""),i=Object(d.a)(n,2),l=i[0],j=i[1],O=Object(s.useState)({date:new Date,items:t.map((function(e){return{id:e.id,title:e.name,quantity:e.quantity,price:e.price*e.quantity}})),status:"Generada, pendiente de env\xedo",quantity:t.reduce((function(e,t){return e+t.quantity}),0),total:c()<2e4?c()+2500:c()}),h=Object(d.a)(O,2),p=h[0],x=h[1],g=function(){var e=Object(T.a)(H.a.mark((function e(c){var s,n,r,i,l;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s=Object(f.g)(),n=Object(f.b)(s,"orders"),e.prev=3,e.next=6,Object(f.a)(n,p);case 6:r=e.sent,j(r.id),r.id&&Object(o.b)("Su orden ".concat(r.id," fue generada exitosamente"),{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,closeButton:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),o.b.error(e.t0.message);case 14:return e.prev=14,a(),e.finish(14);case 17:i=Object(f.h)(Object(f.b)(s,"productos"),Object(f.i)(Object(f.d)(),"in",t.map((function(e){return e.id})))),l=Object(f.j)(s),Object(f.f)(i).then((function(e){e.docs.forEach((function(e){return l.update(e.ref,{stock:e.data().stock-t.find((function(t){return t.id===e.id})).quantity})}))})).then((function(){return l.commit()}));case 20:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{className:"d-flex flex-column align-items-center p-5",children:[Object(u.jsx)("h2",{children:"CheckOut"}),t.length>0?Object(u.jsx)(U,{order:p,createOrder:g,handleChange:function(e){x(Object(b.a)(Object(b.a)({},p),{},Object($.a)({},e.target.name,e.target.value)))}}):Object(u.jsx)("div",{className:"order",children:l?Object(u.jsx)(R,{orderId:l,order:p}):Object(u.jsx)(r.b,{to:"/all",className:"backStore",children:"Volver a la tienda"})})]})});var M=function(){return Object(u.jsx)(h,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(N,{}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/hopepetshop",element:Object(u.jsx)(y,{greetings:"Bienvenido a HopePetshop, lo mejor para tu mascota!"})}),Object(u.jsx)(i.a,{path:"/all",element:Object(u.jsx)(I,{greetings:"Bienvenido a HopePetshop, lo mejor para tu mascota!"})}),Object(u.jsx)(i.a,{path:"/category/:idCategory",element:Object(u.jsx)(I,{})}),Object(u.jsx)(i.a,{path:"/details/:idProd",element:Object(u.jsx)(q,{})}),Object(u.jsx)(i.a,{path:"/cart",element:Object(u.jsx)(L,{})}),Object(u.jsx)(i.a,{path:"/checkout",element:Object(u.jsx)(z,{})}),Object(u.jsx)(i.a,{path:"*",element:Object(u.jsx)(w,{})})]}),Object(u.jsx)(D,{})]}),Object(u.jsx)(o.a,{})]})})},V=c(49);Object(V.a)({apiKey:"AIzaSyBPJMuM9L2DbCtD7dWn4d3wwF6jAQqK5UY",authDomain:"hope-pet-shop.firebaseapp.com",projectId:"hope-pet-shop",storageBucket:"hope-pet-shop.appspot.com",messagingSenderId:"985031501635",appId:"1:985031501635:web:b6c33ac7c6e09c79cd71f6"});n.a.render(Object(u.jsx)(M,{}),document.getElementById("root"))}]),[[85,1,2]]]);
//# sourceMappingURL=main.3444db55.chunk.js.map