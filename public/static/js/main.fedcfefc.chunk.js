(this.webpackJsonpcollage=this.webpackJsonpcollage||[]).push([[0],{73:function(e,a,s){},74:function(e,a,s){"use strict";s.r(a);var c=s(1),t=s.n(c),r=s(41),n=s.n(r),i=s(6),l=s(8),o=s(76),d=s(25),j=s(9),m=s.n(j),b=s(19),x=s(10),u=s(4),p=s(15),h=s(78),O=s(12),v=s.n(O);function f(e){var a=new FormData;for(var s in e)a.append(s,e[s]);return a}function g(e){var a=f(e);return v.a.post("/registro",a)}function N(e){var a=f(e);return v.a.post("/login",a)}var y=s.p+"static/media/logo.d965f968.svg",w=s.p+"static/media/logo1.dac58fe5.svg",E=s.p+"static/media/logo2.2215f4a8.svg",I=s(0),C=function(){var e=Object(h.a)("user",N,{enabled:!1,retry:!1,staleTime:1/0}),a=Object(c.useState)({user:"",password:"",Error:{}}),s=Object(p.a)(a,2),t=s[0],r=s[1],n=function(e){r(Object(u.a)(Object(u.a)({},t),{},Object(x.a)({},e.target.name,e.target.value)))},o=function(){var a=Object(b.a)(m.a.mark((function a(s){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),console.log(t),""===t.user||""===t.password){a.next=7;break}return a.next=5,e.mutate(t);case 5:a.next=8;break;case 7:r({Error:Object(u.a)(Object(u.a)({},t),{},{mensaje:"Rellene todos los campos"})});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(I.jsx)(c.Fragment,{children:Object(I.jsxs)("div",{className:"container-fluid p-0",children:[Object(I.jsx)("div",{className:"container position-relative vh-100",children:Object(I.jsxs)("div",{className:"row d-flex position-absolute top-50 start-50 translate-middle",style:{width:"1000px",height:"500px"},children:[Object(I.jsx)("div",{className:"col-12 col-sm-7 d-flex justify-content-center pt-5",children:Object(I.jsx)("div",{id:"carouselExampleSlidesOnly",className:"carousel slide","data-ride":"carousel",children:Object(I.jsxs)("div",{className:"carousel-inner",children:[Object(I.jsx)("div",{className:"carousel-item active",children:Object(I.jsx)("img",{src:y,className:"d-block w-100",alt:""})}),Object(I.jsx)("div",{className:"carousel-item",children:Object(I.jsx)("img",{src:w,classclassName:"d-block w-100",alt:""})}),Object(I.jsx)("div",{className:"carousel-item",children:Object(I.jsx)("img",{src:E,classclassName:"d-block w-100",alt:""})})]})})}),Object(I.jsxs)("div",{className:"col-12 col-sm-5",children:[Object(I.jsxs)("div",{className:"card",children:[Object(I.jsxs)("div",{className:"card-header text-center text-primary",children:[Object(I.jsx)("img",{src:E,alt:"",width:"50px",height:"50px"}),Object(I.jsx)("h2",{children:"Kollections Collage"})]}),Object(I.jsx)("div",{className:"card-body",children:Object(I.jsx)("div",{className:"container d-flex justify-content-center pt-3",children:Object(I.jsxs)("form",{onSubmit:o,children:[Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{for:"user",children:"Nombre de usuario o correo"}),Object(I.jsx)("input",{type:"text",className:"form-control",name:"user","aria-describedby":"emailHelp",placeholder:"Ingrese usuario o correo",onChange:n,value:t.user})]}),Object(I.jsxs)("div",{className:"form-group pt-3",children:[Object(I.jsx)("label",{for:"password",children:"Ingrese su contrase\xf1a"}),Object(I.jsx)("input",{type:"password",className:"form-control",name:"password",placeholder:"Ingrese su contrase\xf1a",onChange:n,value:t.password})]}),e.isError&&400===e.error.response.status?Object(I.jsx)("div",{class:"alert alert-danger mt-3",role:"alert",children:"Credenciales incorrectas"}):"",e.isLoading?Object(I.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(I.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):"",Object(I.jsx)("div",{className:"d-grid pt-4",children:Object(I.jsx)("button",{className:"btn btn-primary text-white",children:"Inciar sesi\xf3n"})})]})})}),Object(I.jsx)("div",{class:"card-footer text-muted text-center mt-4",children:"\xbfNo extra\xf1as los collages?"})]}),Object(I.jsxs)("div",{className:"card text-center mt-3 p-2",children:["\xbfNo tienes cuenta? ",Object(I.jsx)(i.b,{to:"/Registro",children:"Reg\xedstrate"})]})]}),Object(I.jsx)("div",{className:"text-muted text-center footer fixed pt-5",children:Object(I.jsx)("p",{children:"@Chappie_Tech offical company"})})]})}),e.isSuccess&&200===e.data.status?Object(I.jsx)(l.a,{to:"/Aplication/Home"}):""]})})},L=s(27),k=function(){var e=Object(h.a)(g,{enabled:!1,retry:3,retryDelay:2e3,stateTime:6e4,onSuccess:function(e){201===e.status?r(Object(u.a)(Object(u.a)({},t),{},{Exito:!0})):(r(Object(u.a)(Object(u.a)({},t),{},{Error:{email:"Correo se enceuntra en uso"}})),document.getElementsByName("email")[0].classList.add("is-invalid"))},onError:function(e){console.log(e)}}),a=Object(c.useState)({Error:{},Exito:!1}),s=Object(p.a)(a,2),t=s[0],r=s[1],n=function(e){r(Object(u.a)(Object(u.a)({},t),{},Object(x.a)({},e.target.name,e.target.value))),document.getElementsByName(e.target.name)[0].classList.remove("is-invalid")},o=function(e){var a={};return e.username||(a.username="Por favor escriba un nombre"),e.email||(a.email="Por favor ingrese un correo electronico"),e.password&&e.confpass?e.password.length>=8&&e.password.length<=16?e.password!==e.confpass&&(a.confpass="confirmacion no coincide"):a.password="Debe contener entre 8 a 16 caracteres":(a.password="Por favor ingrese una contrase\xf1a",a.confpass="Por favor confirme la contrase\xf1a"),a};return Object(I.jsx)(c.Fragment,{children:Object(I.jsx)("div",{className:"container-fluid  position-relative vh-100 p-0",children:Object(I.jsxs)("div",{className:"container d-flex justify-content-center mt-5",style:{width:"400px",height:"650px"},children:[Object(I.jsxs)("div",{className:"card",children:[Object(I.jsxs)("div",{className:"card-header text-center text-primary",children:[Object(I.jsx)("img",{src:E,alt:"",width:"50px",height:"50px"}),Object(I.jsx)("h2",{children:"Kollections Collage"}),Object(I.jsx)("p",{children:"Registrate para ver millones y millones de imagenes"})]}),Object(I.jsxs)("div",{className:"card-body",children:[Object(I.jsx)("div",{className:"container d-flex justify-content-center pt-3",children:Object(I.jsxs)("form",{className:"needs-validation",onSubmit:function(a){a.preventDefault();t.Error;var s=Object(L.a)(t,["Error"]),c=o(s);if(Object.keys(c).length){for(var n in c)document.getElementsByName(n)[0].classList.add("is-invalid");r(Object(u.a)(Object(u.a)({},t),{},{Error:c}))}else e.mutate(t),console.log(e.data)},children:[Object(I.jsxs)("div",{class:"form-group",children:[Object(I.jsx)("label",{for:"username",children:"Nombre de usuario"}),Object(I.jsx)("input",{type:"text",class:"form-control",name:"username",id:"username",onChange:n,value:t.username,placeholder:"Nombre de usuario"}),Object(I.jsx)("div",{className:"valid-feedback",children:"nombre disponible"}),Object(I.jsx)("div",{className:"invalid-feedback",children:t.Error.username})]}),Object(I.jsxs)("div",{class:"form-group pt-3",children:[Object(I.jsx)("label",{for:"email",children:"Ingrese su correo electronico"}),Object(I.jsx)("input",{type:"email",class:"form-control",name:"email","aria-describedby":"emailHelp",onChange:n,value:t.email,placeholder:"Correo electronico"}),Object(I.jsx)("div",{className:"valid-feedback",children:"correo disponible"}),Object(I.jsx)("div",{className:"invalid-feedback",children:t.Error.email})]}),Object(I.jsxs)("div",{class:"form-group pt-3",children:[Object(I.jsx)("label",{for:"password",children:"Ingrese su contrase\xf1a"}),Object(I.jsx)("input",{type:"password",class:"form-control",name:"password",onChange:n,value:t.password,placeholder:"Ingrese su contrase\xf1a"}),Object(I.jsx)("div",{className:"valid-feedback",children:"contrase\xf1a valdia"}),Object(I.jsx)("div",{className:"invalid-feedback",children:t.Error.password})]}),Object(I.jsxs)("div",{class:"form-group pt-3",children:[Object(I.jsx)("label",{for:"confpass",children:"Ingrese su contrase\xf1a"}),Object(I.jsx)("input",{type:"password",class:"form-control",name:"confpass",onChange:n,value:t.confpass,placeholder:"Ingrese su contrase\xf1a"}),Object(I.jsx)("div",{className:"valid-feedback",children:"verificacion coincide"}),Object(I.jsx)("div",{className:"invalid-feedback",children:t.Error.confpass})]}),e.isLoading?Object(I.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(I.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):"",Object(I.jsx)("div",{className:"d-grid pt-4",children:Object(I.jsx)("button",{className:"btn btn-primary text-white",children:"Registrarse"})})]})}),Object(I.jsx)("div",{class:"card-footer text-muted text-center mt-4",children:"\xbfListo apra un mundo de colecciones?"})]}),Object(I.jsxs)("div",{className:"card text-center mt-4 p-2",children:["\xbfYa tienes cuenta? ",Object(I.jsx)(i.b,{to:"/",children:"Iniciar sesi\xf3n"})]}),Object(I.jsx)("div",{className:"text-muted text-center footer fixed pt-5",children:Object(I.jsx)("p",{children:"@Chappie_Tech offical company"})})]}),e.isSuccess&&201===e.data.status?Object(I.jsx)(l.a,{to:"/Exitoregistro"}):""]})})})},S=function(){return Object(I.jsx)(c.Fragment,{children:Object(I.jsx)("div",{className:"container-fluid position-relative vh-100 p-0",children:Object(I.jsx)("div",{className:"container position-absolute top-50 start-50 translate-middle",style:{width:"500px"},children:Object(I.jsxs)("div",{className:"card",children:[Object(I.jsxs)("div",{className:"card-header text-center text-primary",children:[Object(I.jsx)("img",{src:E,alt:"",width:"50px",height:"50px"}),Object(I.jsx)("h2",{children:"Kollections Collage"}),Object(I.jsx)("p",{children:"Registrate para ver millones y millones de imagenes"})]}),Object(I.jsxs)("div",{className:"card-body text-center",children:[Object(I.jsx)("h2",{className:"text-center text-primary",children:"\xa1Registro realizado con exito!"}),Object(I.jsx)("p",{children:"Inicia sesion para comenzar"}),Object(I.jsx)(i.b,{className:"btn btn-outline-primary",to:"/",children:"\xa1Vamos!"})]})]})})})})},D=s.p+"static/media/userIcon.d24a10f3.svg",B=function(){var e=Object(l.h)().url;return Object(I.jsx)("div",{className:"container-fluid",children:Object(I.jsx)("div",{className:"row",children:Object(I.jsx)("nav",{class:"navbar navbar-light bg-light border border-buttom fixed-top",children:Object(I.jsx)("div",{class:"container-fluid d-flex justify-content-center",children:Object(I.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsxs)(i.b,{class:"navbar-brand text-primary d-flex align-items-center",to:"".concat(e,"/Home"),children:[Object(I.jsx)("img",{src:E,alt:"",width:"33px",height:"33px"}),Object(I.jsx)("span",{className:"ms-2",children:"Kollections Collage"})]})}),Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsx)("form",{class:"d-flex ps-2 ms-5",children:Object(I.jsx)("input",{class:"form-control",type:"search",placeholder:"Buscar...","aria-label":"Search"})})}),Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsxs)("div",{className:"d-flex ps-5 ms-5 align-items-center",children:[Object(I.jsx)(i.b,{className:"btn btn-outline-primary ms-4",to:"".concat(e,"/Home"),children:"HOME"}),Object(I.jsx)(i.b,{className:"btn btn-outline-primary ms-4",to:"".concat(e,"/AddImage"),children:"ADD"}),Object(I.jsx)(i.b,{className:"ms-4",to:"".concat(e,"/userprin"),children:Object(I.jsx)("img",{src:D,alt:"",width:"33px",height:"33px"})})]})})]})})})})})},R=s(77),U=s.p+"static/media/logo2-w.b2b00d63.svg",K=function(e){return console.log(e.portada),""!==e.portada?Object(I.jsxs)("div",{className:"card",style:{width:"18rem",height:"14rem"},children:[Object(I.jsx)("img",{src:e.portada,class:"card-img",alt:""}),Object(I.jsx)("div",{class:"card-body",children:Object(I.jsx)("h5",{class:"card-title text-center text-primary",children:e.name})})]}):Object(I.jsxs)("div",{className:"card",style:{width:"18rem",height:"14rem"},children:[Object(I.jsx)("img",{src:U,className:"card-img-top bg-primary p-4",alt:"",width:"75%",height:"75%"}),Object(I.jsx)("div",{className:"card-body",children:Object(I.jsx)("p",{className:"card-text text-center text-primary",children:Object(I.jsx)("b",{children:e.name})})})]})};function H(){return(H=Object(b.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(a=l.g.id)){e.next=7;break}return e.next=4,v.a.get("/dataUser?id=".concat(a));case 4:return e.abrupt("return",e.sent);case 7:return e.next=9,v.a.get("/dataUser");case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return P.apply(this,arguments)}function P(){return(P=Object(b.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/changePassword",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return T.apply(this,arguments)}function T(){return(T=Object(b.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("/editBasicData",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return z.apply(this,arguments)}function z(){return(z=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("/editBasicData");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(){return H.apply(this,arguments)},V=function(e){var a=Object(l.h)().url;return Object(I.jsxs)("div",{className:"row d-flex",children:[e.collections.map((function(e){return Object(I.jsx)("div",{className:"col-12 col-sm-3 mt-3",children:Object(I.jsx)(i.b,{children:Object(I.jsx)(K,{name:e.name,portada:e.portada})})})})),e.edit?Object(I.jsx)(i.b,{className:"col-12 col-sm-3 mt-3",to:"".concat(a,"/CreateKo"),children:Object(I.jsxs)("div",{className:"card border-primary border-3 mb-3 p-5",style:{width:"18rem"},children:[Object(I.jsx)("div",{className:"container d-flex justify-content-center align-items-center",children:Object(I.jsx)("img",{src:y,className:"card-img",alt:"...",style:{width:"70%",height:"70%"}})}),Object(I.jsx)("p",{className:"card-text text-primary text-center",children:"Crear Kolleccion"})]})}):""]})},J=function(){var e=Object(l.h)().url,a=Object(R.a)("UserInfo",Q,{onSuccess:function(e){console.log(e)}}),s=a.data,c=a.isLoading,t=a.isError;return c?Object(I.jsx)("div",{className:"container-fluid position-relative vh-100",children:Object(I.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(I.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}):t?Object(I.jsx)("div",{className:"container-fluid position-relative vh-100",children:Object(I.jsxs)("div",{className:"position-absolute top-50 start-50 translate-middle mb-5",children:[Object(I.jsx)("h1",{className:"text-center text-primary",children:"Error al obtener informacion del usuario... :("}),Object(I.jsx)(i.b,{className:"btn btn-outline-primary",children:"Volver"})]})}):Object(I.jsx)("div",{className:"container-fluid",children:Object(I.jsxs)("div",{className:"container-fluid p-5 mt-5",children:[Object(I.jsx)("div",{className:"row d-flex justify-content-center",children:Object(I.jsxs)("div",{className:"row d-flex ps-5 ms-5 justify-content-center align-items-center",children:[Object(I.jsx)("div",{className:"col-12 col-sm-3 ",children:Object(I.jsx)("img",{src:s.data.user.profileImg||D,className:"rounded-circle",alt:"",width:"200px",height:"200px"})}),Object(I.jsxs)("div",{className:"col-12 col-sm-4",children:[Object(I.jsxs)("div",{className:"d-flex align-items-center",children:[Object(I.jsx)("h2",{children:s.data.user.name}),s.data.edit?Object(I.jsx)(i.b,{className:"btn btn-outline-primary ms-3",to:"".concat(e,"/editInfo"),children:"Editar perfil"}):""]}),Object(I.jsx)("div",{children:Object(I.jsx)("p",{children:s.data.user.descripcion})})]})]})}),Object(I.jsxs)("div",{className:"row justify-content-center mt-5",children:[Object(I.jsx)("hr",{}),Object(I.jsx)("div",{children:Object(I.jsx)(V,{collections:s.data.user.collections,edit:s.data.edit})})]})]})})},_=function(){return Object(I.jsx)("div",{className:"container-fluid mt-5",children:Object(I.jsx)("h1",{className:"mt-5 text-center text-primary",children:"HOME"})})},Y=function(e){var a=Object(c.useState)({username:e.info.name,email:e.info.email,descripcion:e.info.descripcion,profileImg:e.info.profileImg,Error:{}}),s=Object(p.a)(a,2),t=s[0],r=s[1],n=Object(d.b)(),i=Object(h.a)(F,{enabled:!1,retry:!1,onSuccess:function(e){201===e.data.status&&(n.invalidateQueries("UserInfo"),n.refetchQueries("UserInfo"))},onError:function(e){var a={};"username"===e.response.data.input&&(a.username=e.response.data.mensaje,document.getElementsByName(e.response.data.input)[0].classList.add("is-invalid")),"email"===e.response.data.input&&(a.email=e.response.data.mensaje,document.getElementsByName(e.response.data.input)[0].classList.add("is-invalid")),r(Object(u.a)(Object(u.a)({},t),{},{Error:a}))}}),l=function(e){if(r(Object(u.a)(Object(u.a)({},t),{},Object(x.a)({},e.target.name,e.target.value))),"profileImg"===e.target.name){var a=URL.createObjectURL(e.target.files[0]);r(Object(u.a)(Object(u.a)({},t),{},{profileImg:a}))}document.getElementsByName(e.target.name)[0].classList.remove("is-invalid")};return Object(I.jsx)("div",{className:"container-fluid",children:Object(I.jsxs)("form",{id:"form",onSubmit:function(e){if(e.preventDefault(),""!==t.username&&""!==t.email)i.mutate(new FormData(e.target));else{var a={};""===t.username&&(a.username="Campo obligatorio",document.getElementsByName("username")[0].classList.add("is-invalid")),""===t.email&&(a.email="Campo obligatorio",document.getElementsByName("email")[0].classList.add("is-invalid")),r(Object(u.a)(Object(u.a)({},t),{},{Error:a}))}},children:[Object(I.jsxs)("div",{className:"row d-flex m-3 align-items-center",children:[Object(I.jsx)("div",{className:"col-12 col-sm-3",children:Object(I.jsx)("img",{src:t.profileImg||D,alt:"",className:"rounded-circle",width:"95px",height:"90px"})}),Object(I.jsxs)("div",{className:"col-12 col-sm-9",children:[Object(I.jsx)("h4",{children:t.username}),Object(I.jsxs)("label",{name:"profileImg ",className:"text-primary border border-0 bg bg-white",role:"button",children:[Object(I.jsx)("input",{type:"file",name:"profileImg",accept:"image/*",style:{display:"none"},onChange:l,src:t.profileImg}),"Cambiar foto de perfil"]})]})]}),Object(I.jsx)("div",{className:"row d-flex m-3 pt-2",children:Object(I.jsxs)("div",{className:"col-12",children:[Object(I.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsx)("label",{for:"username",className:"col-form-label",children:"Nombre de usuario"})}),Object(I.jsxs)("div",{className:"col-12 col-sm-8",children:[Object(I.jsx)("input",{type:"text",className:"form-control",name:"username",value:t.username,onChange:l}),Object(I.jsx)("div",{className:"invalid-feedback",children:t.Error.username})]})]}),Object(I.jsxs)("div",{className:"row g-3 align-items-center mt-2",children:[Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsx)("label",{for:"email",className:"col-form-label",children:"Correo electronico"})}),Object(I.jsxs)("div",{className:"col-12 col-sm-8",children:[Object(I.jsx)("input",{type:"email",className:"form-control","aria-describedby":"passwordHelpInline",name:"email",value:t.email,onChange:l}),Object(I.jsx)("div",{className:"invalid-feedback",children:t.Error.email})]})]}),Object(I.jsxs)("div",{className:"row g-3 mt-2",children:[Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsx)("label",{for:"descripcion",className:"col-form-label",children:"Descripcion pefil"})}),Object(I.jsx)("div",{className:"col-12 col-sm-8",children:Object(I.jsx)("textarea",{name:"descripcion",className:"form-control",value:t.descripcion,onChange:l})})]}),i.isLoading?Object(I.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(I.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):"",i.isSuccess&&201===i.data.data.status?Object(I.jsx)("div",{className:"alert alert-success mt-3",children:i.data.data.mensaje}):"",Object(I.jsx)("div",{className:"row g-3 mt-2 d-flex justify-content-center",children:Object(I.jsx)("button",{className:"btn btn-outline-primary",children:"Editar informacion"})})]})})]})})},q=function(e){var a=Object(h.a)(A,{enabled:!1,onError:function(){var e=Object(b.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:400===a.response.status&&(n(Object(u.a)(Object(u.a)({},r),{},{Error:{oldpassword:"Contrase\xf1a antigua incorrecta"}})),document.getElementsByName("oldpassword")[0].classList.add("is-invalid"));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}),s=Object(c.useState)({username:e.info.name,profileImg:e.info.profileImg,Error:{},newpassword:"",oldpassword:"",confpassword:""}),t=Object(p.a)(s,2),r=t[0],n=t[1],i=function(e){n(Object(u.a)(Object(u.a)({},r),{},Object(x.a)({},e.target.name,e.target.value))),document.getElementsByName(e.target.name)[0].classList.remove("is-invalid")},l=function(e){var a={};return e.oldpassword||(a.oldpassword="Por favor ingrese la antigua clave"),e.newpassword?e.newpassword.length>=8&&e.newpassword.length<=16?e.confpassword?e.newpassword!==e.confpassword&&(a.confpassword="No concide con la nueva clane ingresada"):a.confpassword="Por favor confirme la nueva clave a establecer":a.newpassword="Debe contener entre 8 a 16 caracteres":a.newpassword="Por favor ingrese la nueva clave a establecer",console.log(e.confpassword),e.confpassword||(a.confpassword="Por favor confirme la nueva clave a establecer"),a};return Object(I.jsxs)("div",{className:"container-fluid",children:[Object(I.jsxs)("div",{className:"row d-flex m-3 align-items-center",children:[Object(I.jsx)("div",{className:"col-12 col-sm-3",children:Object(I.jsx)("img",{src:r.profileImg||D,alt:"",className:"rounded-circle",width:"95px",height:"90px"})}),Object(I.jsx)("div",{className:"col-12 col-sm-9",children:Object(I.jsx)("h4",{children:r.username})})]}),Object(I.jsx)("div",{className:"row d-flex m-3 pt-2",children:Object(I.jsxs)("form",{className:"col-12",onSubmit:function(e){e.preventDefault();r.username,r.profileImg;var s=Object(L.a)(r,["username","profileImg"]),c=l(s);if(Object.keys(c).length){for(var t in c)console.log(t),document.getElementsByName(t)[0].classList.add("is-invalid");n(Object(u.a)(Object(u.a)({},r),{},{Error:c}))}else a.mutate(new FormData(e.target))},children:[Object(I.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsx)("label",{for:"oldpassword",className:"col-form-label",children:"Contrase\xf1a anterior"})}),Object(I.jsxs)("div",{className:"col-12 col-sm-8",children:[Object(I.jsx)("input",{type:"password",className:"form-control",name:"oldpassword",value:r.oldpassword,onChange:i}),Object(I.jsx)("div",{className:"invalid-feedback",children:r.Error.oldpassword})]})]}),Object(I.jsxs)("div",{className:"row g-3 align-items-center mt-2",children:[Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsx)("label",{for:"newpassword",className:"col-form-label",children:"Nueva contrase\xf1a"})}),Object(I.jsxs)("div",{className:"col-12 col-sm-8",children:[Object(I.jsx)("input",{type:"password",className:"form-control",name:"newpassword",value:r.newpassword,onChange:i}),Object(I.jsx)("div",{className:"invalid-feedback",children:r.Error.newpassword})]})]}),Object(I.jsxs)("div",{className:"row g-3 align-items-center mt-2",children:[Object(I.jsx)("div",{className:"col-12 col-sm-4",children:Object(I.jsx)("label",{for:"confpassword",className:"col-form-label",children:"Confirmar"})}),Object(I.jsxs)("div",{class:"col-12 col-sm-8",children:[Object(I.jsx)("input",{type:"password",className:"form-control",name:"confpassword",value:r.confpassword,onChange:i}),Object(I.jsx)("div",{className:"invalid-feedback",children:r.Error.confpassword})]})]}),a.isLoading?Object(I.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(I.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):"",a.isSuccess&&200===a.data.data.status?Object(I.jsx)("div",{class:"alert alert-success mt-3",role:"alert",children:"Contrase\xf1a cambiada con exito"}):"",Object(I.jsx)("div",{className:"row g-3 mt-2 d-flex justify-content-center",children:Object(I.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Cambiar contrase\xf1a"})})]})})]})},G=function(){var e=Object(h.a)(M,{enabled:!1,retry:!1,onSuccess:function(e){},onError:function(e){}});return e.isLoading?Object(I.jsx)("div",{className:"container-fluid",children:Object(I.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(I.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}):e.isSuccess&&200===e.data.data.status?Object(I.jsxs)("div",{className:"container-fluid",children:[Object(I.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(I.jsx)("div",{className:"alert alert-warning mt-3",children:"Su cuenta ha sido eliminada"})}),Object(I.jsx)(l.a,{to:"/"})]}):Object(I.jsxs)("div",{className:"container-fluid",children:[Object(I.jsxs)("div",{className:"row d-flex m-3 align-items-center",children:[Object(I.jsx)("h2",{className:"text-center text-danger",children:"ELIMINAR CUENTA"}),Object(I.jsx)("p",{className:"text-center",children:"\xbfEsta seguro de hacer est\xe1 accion?"}),Object(I.jsxs)("p",{children:["Al eliminar su cuenta, no podr\xe1 recuperar sus colecciones ni imagenes almacenadas, ",Object(I.jsx)("b",{children:"toda su informacion ser\xe1 eliminada."})]}),Object(I.jsx)("p",{className:"text-center",children:Object(I.jsx)("b",{children:"ES IRREVERSIBLE"})})]}),Object(I.jsx)("div",{className:"row g-3 mt-2 mb-5 d-flex justify-content-center",children:Object(I.jsx)("button",{className:"btn btn-outline-danger",onClick:function(a){a.preventDefault(),e.mutate()},children:"Eliminar mi cuenta"})})]})},W=function(){var e=Object(l.h)(),a=e.path,s=e.url,c=Object(d.b)().getQueryData("UserInfo");return Object(I.jsx)("div",{className:"container-fluid d-flex justify-content-center mt-5",children:Object(I.jsx)("div",{className:"container w-75 mt-5",children:Object(I.jsxs)("div",{className:"row d-flex border",children:[Object(I.jsx)("div",{className:"col-12 col-sm-4 border border-end-1",children:Object(I.jsx)("nav",{className:"navbar navbar-inverse",role:"navigation",children:Object(I.jsxs)("ul",{className:"nav",children:[Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(i.b,{className:"nav-link",to:"".concat(s,"/basicInfo"),children:"Informacion basica"})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(i.b,{className:"nav-link",to:"".concat(s,"/modPass"),children:"Cambiar contrase\xf1a"})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(i.b,{className:"nav-link",to:"".concat(s,"/deleteAcount"),children:"Eliminar cuenta"})})]})})}),Object(I.jsx)("div",{className:"col-12 col-sm-8",children:Object(I.jsxs)(l.d,{children:[Object(I.jsx)(l.b,{exact:!0,path:"".concat(a,"/basicInfo"),children:Object(I.jsx)(Y,{info:c.data.user})}),Object(I.jsx)(l.b,{exact:!0,path:"".concat(a,"/modPass"),children:Object(I.jsx)(q,{info:c.data.user})}),Object(I.jsx)(l.b,{exact:!0,path:"".concat(a,"/deleteAcount"),component:G})]})})]})})})};function X(e){return v.a.post("/Collection",e)}var Z=function(){var e=Object(c.useState)({name:"",portada:""}),a=Object(p.a)(e,2),s=a[0],t=a[1],r=Object(h.a)(X,{enabled:!1,retry:!1}),n=function(e){if(t(Object(u.a)(Object(u.a)({},s),{},Object(x.a)({},e.target.name,e.target.value))),"portada"===e.target.name){var a=URL.createObjectURL(e.target.files[0]);t(Object(u.a)(Object(u.a)({},s),{},{portada:a}))}document.getElementsByName(e.target.name)[0].classList.remove("is-invalid")};return Object(I.jsx)("div",{className:"container-fluid position-relative vh-100",children:Object(I.jsx)("div",{className:"row ms-5 ps-5 d-flex position-absolute top-50 start-50 translate-middle",style:{width:"1000px",height:"500px"},children:Object(I.jsxs)("div",{className:"row ms-4 d-flex justify-content-center",children:[Object(I.jsx)("div",{className:"col-12 col-sm-5",children:Object(I.jsxs)("div",{className:"card",children:[Object(I.jsx)("div",{className:"card-header text-center text-primary",children:Object(I.jsx)("h3",{children:"Krear Kolleccion"})}),Object(I.jsx)("div",{className:"card-body",children:Object(I.jsx)("div",{className:"container d-flex justify-content-center pt-3",children:Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s.name?r.mutate(new FormData(e.target)):document.getElementsByName("name")[0].classList.add("is-invalid")},children:[Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{for:"name",children:"Nombre de Kolleccion"}),Object(I.jsx)("input",{type:"text",className:"form-control",name:"name","aria-describedby":"emailHelp",placeholder:"Nombre de kolleccion",onChange:n,value:s.name})]}),Object(I.jsx)("div",{className:"invalid-feedback",children:"Campo obligatorio"}),Object(I.jsxs)("div",{className:"form-group pt-3",children:[Object(I.jsx)("label",{for:"portada",children:"Imagen de portada"}),Object(I.jsx)("input",{type:"file",className:"form-control",name:"portada",accept:"image/*",onChange:n,src:s.portada})]}),Object(I.jsx)("div",{className:"d-grid mt-4",children:Object(I.jsx)("button",{className:"btn btn-primary text-white",type:"submit",children:"Krear Kollecion"})})]})})}),Object(I.jsx)("div",{class:"card-footer text-muted text-center mt-4",children:"Las Kolecciones funcionan para almacenar images"})]})}),Object(I.jsxs)("div",{className:"col-12 col-sm-7 ps-5 mt-5 pt-4",children:[r.isLoading?Object(I.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(I.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(I.jsx)(K,{name:s.name,portada:s.portada}),r.isSuccess&&201===r.data.data.status?Object(I.jsx)("div",{className:"alert alert-success mt-3",style:{width:"18rem"},children:r.data.data.mensaje}):"",r.isError?Object(I.jsx)("div",{className:"alert alert-danger mt-3",style:{width:"18rem"},children:r.data.data.mensaje}):""]})]})})})},$=s(43),ee=function(e){return Object(I.jsxs)("div",{className:"card",children:[Object(I.jsx)("div",{classname:"card-body",children:Object(I.jsxs)("div",{className:"d-flex align-items-center pt-3 ps-3 mb-2",children:[Object(I.jsx)("img",{src:e.profileImg||D,className:"rounded-circle",alt:" ",width:"40px",height:"40px"}),Object(I.jsx)("h5",{className:"card-title text-primary ms-3 pt-1",children:e.username})]})}),""!==e.imgUrl?Object(I.jsx)("img",{src:e.imgUrl,classname:"card-img-bottom",alt:"..."}):Object(I.jsx)("div",{className:"bg-primary d-flex justify-content-center",children:Object(I.jsx)("img",{src:U,classname:"card-img-bottom",alt:"..."})}),Object(I.jsx)("div",{classname:"card-body",children:Object(I.jsxs)("div",{className:"container pt-1 ps-3 pb-3 mt-2",children:[Object(I.jsx)("p",{className:"card-text",children:e.descripcion||"Descripcion de la publicacion"}),Object(I.jsx)("p",{className:"card-text",children:Object(I.jsx)("small",{class:"text-muted",children:"Last updated 3 mins ago"})})]})})]})},ae=function(){var e=Object(c.useState)({descripccion:"",idCollecion:"",image:"",tags:"",username:"",profileImg:""}),a=Object(p.a)(e,2),s=a[0],t=a[1],r=Object(h.a)((function(e){return console.log(e),v.a.post("/Images",e)}),{enabled:!1,retry:!1,onSuccess:function(e){},onError:function(e){console.log("error:"+e)}}),n=Object(R.a)("UserInfo",Q,{staleTime:$.infinity,onSuccess:function(e){t(Object(u.a)(Object(u.a)({},s),{},{username:e.data.user.name,profileImg:e.data.user.profileImg}))}}),i=n.data,l=function(e){if(t(Object(u.a)(Object(u.a)({},s),{},Object(x.a)({},e.target.name,e.target.value))),"image"===e.target.name){var a=URL.createObjectURL(e.target.files[0]);t(Object(u.a)(Object(u.a)({},s),{},{image:a}))}document.getElementsByName(e.target.name)[0].classList.remove("is-invalid")};return n.isLoading?Object(I.jsx)("div",{className:"container-fluid position-relative vh-100",children:Object(I.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(I.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}):Object(I.jsx)("div",{className:"container-fluid p-0",children:Object(I.jsx)("div",{className:"container position-relative vh-100",children:Object(I.jsxs)("div",{className:"row d-flex position-absolute top-50 start-50 translate-middle",style:{width:"1000px",height:"500px"},children:[Object(I.jsx)("div",{className:"col-12 col-sm-5",children:Object(I.jsxs)("div",{className:"card",children:[Object(I.jsx)("div",{className:"card-header text-center text-primary",children:Object(I.jsx)("h2",{children:"Realizar publikacion"})}),Object(I.jsx)("div",{className:"card-body",children:Object(I.jsx)("div",{className:"container d-flex justify-content-center pt-3",children:Object(I.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==s.idCollecion&&""!==s.image&&""!==s.tags){var a=new FormData(e.target);r.mutate(a)}else""===s.image&&document.getElementsByName("image")[0].classList.add("is-invalid"),""===s.tags&&document.getElementsByName("tags")[0].classList.add("is-invalid"),""===s.idCollecion&&document.getElementsByName("idCollecion")[0].classList.add("is-invalid")},children:[Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{for:"user",children:"Descripcion de publciacion"}),Object(I.jsx)("textarea",{className:"form-control",name:"descripccion","aria-describedby":"emailHelp",placeholder:"Ingrese una descripcion",onChange:l,value:s.descripcion})]}),Object(I.jsxs)("div",{className:"form-group pt-3",children:[Object(I.jsx)("label",{for:"password",children:"Seleccione Kolleccion"}),Object(I.jsxs)("select",{name:"idCollecion",className:"form-control",onChange:l,children:[Object(I.jsx)("option",{value:"0",children:"Seleccionar kollecion"}),i.data.user.collections.map((function(e){return Object(I.jsx)("option",{value:e.id,children:e.name})}))]}),Object(I.jsx)("div",{className:"invalid-feedback",children:"Debe seleccionar una Kollecion"})]}),Object(I.jsxs)("div",{className:"form-group pt-3",children:[Object(I.jsx)("label",{for:"image",children:"Imagen de portada"}),Object(I.jsx)("input",{type:"file",className:"form-control",name:"image",accept:"image/*",onChange:l,src:s.image}),Object(I.jsx)("div",{className:"invalid-feedback",children:"Debe seleccionar una imagen"})]}),Object(I.jsxs)("div",{className:"form-group pt-3",children:[Object(I.jsx)("label",{for:"tags",children:"Descripcion de publciacion"}),Object(I.jsx)("textarea",{className:"form-control",name:"tags",placeholder:"tags de publicacion ej: #Hoy #Noticia",onChange:l,value:s.tags}),Object(I.jsx)("div",{className:"invalid-feedback",children:"Debe colocar almenos un tag"})]}),Object(I.jsx)("div",{className:"d-grid pt-4",children:Object(I.jsx)("button",{className:"btn btn-primary text-white",type:"submit",children:"Agregar publikacion"})})]})})})]})}),Object(I.jsxs)("div",{className:"col-12 col-sm-7",children:[Object(I.jsx)(ee,{username:s.username,profileImg:s.profileImg,descripcion:s.descripccion,imgUrl:s.image}),r.isSuccess&&201===r.data.data.status?Object(I.jsx)("div",{className:"alert alert-success mt-3",children:r.data.data.mensaje}):""]})]})})})},se=function(){var e=Object(l.h)().path;return Object(I.jsx)(c.Fragment,{children:Object(I.jsxs)("div",{className:"container-fluid",children:[Object(I.jsx)("div",{className:"row",children:Object(I.jsx)(B,{})}),Object(I.jsx)("div",{className:"row",children:Object(I.jsxs)(l.d,{children:[Object(I.jsx)(l.b,{path:"".concat(e,"/userprin/editInfo"),component:W}),Object(I.jsx)(l.b,{exact:!0,path:"".concat(e,"/userprin/CreateKo"),component:Z}),Object(I.jsx)(l.b,{exact:!0,path:"".concat(e,"/AddImage"),component:ae}),Object(I.jsx)(l.b,{exact:!0,path:"".concat(e,"/Home"),component:_}),Object(I.jsx)(l.b,{path:"".concat(e,"/userprin"),component:J})]})})]})})},ce=function(){var e=new o.a;return Object(I.jsx)(c.Fragment,{children:Object(I.jsx)(d.a,{client:e,children:Object(I.jsxs)(i.a,{children:[Object(I.jsx)(l.b,{exact:!0,path:"/",component:C}),Object(I.jsx)(l.b,{exact:!0,path:"/Registro",component:k}),Object(I.jsx)(l.b,{exact:!0,path:"/Exitoregistro",component:S}),Object(I.jsx)(l.b,{path:"/Aplication",component:se})]})})})};s(73);n.a.render(Object(I.jsx)(t.a.StrictMode,{children:Object(I.jsx)(ce,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.fedcfefc.chunk.js.map