(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(e,t,a){e.exports=a(155)},154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=a(7),l=a(14),s=a(13),m=a(203),u=a(201),d=a(202),p=a(199),E=a(223),f=a(200),g=a(222),h=a(109),b=a(100),C=a.n(b),v=a(83),O=a.n(v),y=a(81),S=a.n(y),_=a(80),x=a.n(_),I=a(101),T=a.n(I),k=a(82),j=a.n(k),N=a(16),w=a(194),D=a(10),P=Object(w.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(D.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(D.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"black"},inputInput:Object(N.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(N.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(N.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),customBadge:{backgroundColor:"#880e4f",color:"white"}}})),W=Object(s.f)((function(e){var t=P(),a=r.a.useState(null),n=Object(o.a)(a,2),c=n[0],i=n[1],s=r.a.useState(null),m=Object(o.a)(s,2),b=m[0],v=m[1],y=Boolean(c),_=Boolean(b),I=function(e){i(e.currentTarget)},k=function(){v(null)},N=function(){i(null),k()},w="primary-search-account-menu",D=r.a.createElement(h.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:w,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:y,onClose:N},r.a.createElement(g.a,{onClick:N},r.a.createElement(l.b,{to:"/login",style:{textDecoration:"none",color:"black"}},"Log in")),r.a.createElement(g.a,{onClick:N},r.a.createElement(l.b,{to:"/signup",style:{textDecoration:"none",color:"black"}},"Sign up")),r.a.createElement(g.a,{onClick:function(){e.history.replace("/login"),N()}},"Log out")),W=r.a.createElement(h.a,{anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:_,onClose:k},r.a.createElement(g.a,{onClick:N},r.a.createElement(l.b,{to:"/",style:{color:"black",textDecoration:"none"}},r.a.createElement(p.a,{style:{color:"black"}},r.a.createElement(f.a,null,r.a.createElement(x.a,null))),"Home")),r.a.createElement(g.a,{onClick:N},r.a.createElement(l.b,{to:"/contact",style:{textDecoration:"none",color:"black"}},r.a.createElement(p.a,{color:"inherit"},r.a.createElement(f.a,{classes:{badge:t.customBadge}},r.a.createElement(S.a,null))),"Contact us")),r.a.createElement(g.a,{onClick:N},r.a.createElement(l.b,{to:"/cart",style:{textDecoration:"none",color:"black"}},r.a.createElement(p.a,{"aria-label":"show 1 new notifications",color:"inherit"},r.a.createElement(f.a,{badgeContent:e.itemsCount,color:"secondary"},r.a.createElement(j.a,null))),"Shopping cart")),r.a.createElement(g.a,{onClick:I},r.a.createElement(p.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(O.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:t.grow},r.a.createElement(u.a,{style:{margin:0,backgroundColor:"#263238"}},r.a.createElement(d.a,null,r.a.createElement(p.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(C.a,{style:{color:"#b2dfdb"}})),r.a.createElement(E.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(t){e.setSearch(t.target.value)}})),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop},r.a.createElement(p.a,null,r.a.createElement(l.b,{to:"/",style:{color:"#e3f2fd"}},r.a.createElement(x.a,null))),r.a.createElement(p.a,{color:"inherit"},r.a.createElement(l.b,{to:"/contact",style:{color:"#80cbc4"}},r.a.createElement(S.a,null))),r.a.createElement(p.a,{"aria-label":"show 0 new notifications",color:"inherit"},r.a.createElement(f.a,{badgeContent:e.itemsCount,classes:{badge:t.customBadge}},r.a.createElement(l.b,{to:"/cart",style:{color:"#e3f2fd"}},r.a.createElement(j.a,null)))),r.a.createElement(p.a,{style:{color:"#80cbc4"},edge:"end","aria-label":"account of current user","aria-controls":w,"aria-haspopup":"true",onClick:I},r.a.createElement(O.a,null))),r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(p.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){v(e.currentTarget)},color:"inherit"},r.a.createElement(T.a,null))))),W,D)})),A=a(209),R=a(205),L=a(208),Q=a(206),B=a(204),U=a(207),K=a(102),z=a.n(K),H=Object(w.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},sectionDesktop:Object(N.a)({display:"none",color:"black",textTransform:"uppercase"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(N.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),app:{margin:0,backgroundColor:"white",boxShadow:"none"},category:{backgroundColor:"#b2dfdb"},dehydrator:{backgroundColor:"#eeeeee"}}}));function G(e){var t=H(),a=r.a.useState(null),n=Object(o.a)(a,2),c=n[0],i=n[1],l=Boolean(c),s=function(){i(null)},m=r.a.createElement(h.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:s},r.a.createElement(g.a,{onClick:function(t){e.displayAll(),s()}},"Shop All"),r.a.createElement(g.a,{id:"blenders",onClick:function(t){e.displayItemCategory(t.currentTarget.id),s()}},"Blenders"),r.a.createElement(g.a,{id:"juicers",onClick:function(t){e.displayItemCategory(t.currentTarget.id),s()}},"Juicers"),r.a.createElement(g.a,{id:"dehydrators",onClick:function(t){e.displayItemCategory(t.currentTarget.id),s()}},"Dehydrators"),r.a.createElement(g.a,{id:"oilPresses",onClick:function(t){e.displayItemCategory(t.currentTarget.id),s()}},"Oil Presses"));return r.a.createElement("div",{className:t.grow},r.a.createElement(u.a,{position:"static",className:t.app},r.a.createElement(d.a,null,r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop},r.a.createElement(g.a,{className:t.category,id:"All",onClick:function(){e.displayAll()}},"Shop All"),r.a.createElement(g.a,{className:t.category,id:"blenders",onClick:function(t){return e.displayItemCategory(t.currentTarget.id)}},"Blenders"),r.a.createElement(g.a,{className:t.category,id:"juicers",onClick:function(t){return e.displayItemCategory(t.currentTarget.id)}},"Juicers"),r.a.createElement(g.a,{className:t.dehydrator,id:"dehydrators",onClick:function(t){return e.displayItemCategory(t.currentTarget.id)}},"Dehydrators"),r.a.createElement(g.a,{className:t.category,id:"oilPresses",onClick:function(t){return e.displayItemCategory(t.currentTarget.id)}},"Oil Presses")),r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(z.a,{style:{color:"black"},"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}})))),m)}var q=a(219),V=Object(w.a)((function(e){return{root:{display:"flex",backgroundColor:"white",flexWrap:"wrap",marginTop:150,width:1e3,marginLeft:150},list:{listStyleType:"none"},name:{textTransform:"uppercase",fontWeight:"bold"},close:{backgroundColor:"#eeeeee"},price:{color:"#880e4f"}}}));function M(e){var t=V();return r.a.createElement("div",null,r.a.createElement("div",{xs:12,key:e.product._id},r.a.createElement(q.a,{className:t.paper,open:e.product.open},r.a.createElement(m.a,{container:!0,spacing:3,className:t.root},r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement("img",{src:e.product.imgUrl,alt:"product",height:"300px",width:"300px"})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement("ul",{className:t.list},r.a.createElement("li",{className:t.name},e.product.name),r.a.createElement("br",null),r.a.createElement("li",{className:t.price},"Price: $",e.product.price),r.a.createElement("br",null),r.a.createElement("li",null,e.product.description))),r.a.createElement(m.a,{item:!0,xs:1},r.a.createElement(B.a,{className:t.close,onClick:function(){return e.handleShow(e.product)}},"x"))))))}var F=a(73),J=a(103),Y=a.n(J),$=a(19),X=a.n($),Z=function(e){return X.a.post("/api/users/signup",e)},ee=function(e){return X.a.post("/api/users/login",e).then((function(e){var t=e.data.accessToken;return X.a.defaults.headers.common["x-access-token"]=t,e}))},te=function(e){return X.a.post("/api/items",e)},ae=function(){return X.a.get("/api/items")},ne=function(e){return X.a.delete("/api/items/"+e)},re=function(){return X.a.get("/api/items/all")},ce=function(e){return X.a.get("/api/cart/"+e)},ie=function(e){return X.a.post("/api/cart",e)},oe=function(){return X.a.get("/api/cart")},le=function(e){return X.a.delete("/api/cart/"+e)},se=function(e,t){return X.a.put("/api/cart/"+e,t)},me=function(e,t){return X.a.put("/api/items/"+e,t)},ue=function(e){return X.a.post("/api/email",e)},de=Object(s.f)((function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),m=s[0],u=s[1];Object(n.useEffect)((function(){!0===m&&d()}),[m]);var d=function(){ie(c).then((function(t){e.setItemsCount(e.itemsCount+1),e.setCartItems([].concat(Object(F.a)(e.cartItems),[t.data])),e.setShouldGetCartContent(!0)})).catch((function(e){console.log(e)}))},p=function(t){var a=e.cartItems.find((function(e){return e.itemId===t}));console.log(a),se(a.itemId,{cartQuantity:a.cartQuantity+=1}).then((function(){e.setItemsCount(e.itemsCount+1)})).catch((function(e){console.log(e.response)}))},E=function(t,a){var n=JSON.parse(localStorage.getItem("items"))||[];if(n.find((function(e){return e._id===t})))n.find((function(e){return e._id===t})).cartQuantity+=1;else{var r={_id:a.data._id,image:a.data.image,name:a.data.name,price:a.data.price,dbQuantity:a.data.dbQuantity,cartQuantity:1};n.push(r)}localStorage.setItem("items",JSON.stringify(n)),e.setItemsCount(e.itemsCount+1),e.setCartItems(n),e.setShouldGetCartContent(!0)};return r.a.createElement("div",null,r.a.createElement(Y.a,{style:{color:"#880e4f",cursor:"pointer"},onClick:function(){return t=e.product._id,void ce(t).then((function(a){var n=e.cartItems.find((function(e){return e.itemId===t}));e.user.accessToken?n?p(t):(i({userId:e.user.data.userId,itemId:a.data._id,image:a.data.image,name:a.data.name,price:a.data.price,dbQuantity:a.data.dbQuantity,cartQuantity:1}),u(!0)):E(t,a)})).catch((function(e){console.log(e.response)}));var t}}))})),pe=Object(w.a)({root:{maxWidth:150},main:{marginTop:"50px"},learn:{textDecoration:"none",color:"black"},stock:{color:"#009688",textTransform:"uppercase",fontSize:"small"},itemName:{textAlign:"center",textTransform:"uppercase",fontSize:"small",fontWeight:"bold"},image:{paddingLeft:"20px",paddingTop:"5px"},price:{textTransform:"uppercase",fontSize:"small",color:"black",fontWeight:"bold"}}),Ee=a(46),fe=a.n(Ee),ge=a(68),he=a(104),be=a(84),Ce=a.n(be),ve=(a(156),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_APP_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_MEASUREMENT_ID}),Oe=new function e(){var t=this;Object(he.a)(this,e),this.setImageUrl=function(){var e=Object(ge.a)(fe.a.mark((function e(a){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.storage.ref("images/").child(a.image).getDownloadURL().then((function(e){return a.imgUrl=e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce.a.initializeApp(ve),this.storage=Ce.a.storage()},ye=function(e){var t=pe(),a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],l=c[1],s=Object(n.useState)([]),u=Object(o.a)(s,2),d=u[0],p=u[1];Object(n.useEffect)((function(){f()}),[]);var E=function(e){var t=i.map((function(t){return t._id===e._id&&(t.open=!t.open),t}));l(t)},f=function(){re().then((function(e){var t=e.data;t.forEach((function(e){e.open=!1})),Promise.all(t.map((function(e){return Oe.setImageUrl(e)}))).then((function(){l(t),p(t)}))})).catch((function(e){console.log(e.response.data)}))};return r.a.createElement("div",null,r.a.createElement(G,{displayItemCategory:function(e){var t=i;t=t.filter((function(t){return t.category.toLowerCase()===e.toLowerCase()})),p(t)},displayAll:f}),r.a.createElement(m.a,{container:!0,className:t.main,spacing:4},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(m.a,{container:!0,justify:"center",spacing:8},d.filter((function(t){return t.category.toLowerCase().includes(e.search.toLowerCase())||t.name.toLowerCase().includes(e.search.toLowerCase())})).map((function(a){return r.a.createElement(m.a,{key:a._id,item:!0},r.a.createElement(R.a,{className:t.root},r.a.createElement("img",{src:a.imgUrl,alt:"product",height:"100px",width:"100px",className:t.image}),r.a.createElement(Q.a,null,r.a.createElement(U.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.itemName},a.name),r.a.createElement("hr",null),r.a.createElement("div",{className:t.price},"$ ",a.price),0===a.dbQuantity?r.a.createElement("div",{className:t.stock},"Out of stock"):r.a.createElement("div",{className:t.stock},"In stock: ",a.dbQuantity)),r.a.createElement(L.a,null,a.dbQuantity>0?r.a.createElement(de,{product:a,user:e.user,cartItems:e.cartItems,setCartItems:e.setCartItems,itemsCount:e.itemsCount,setItemsCount:e.setItemsCount,setShouldGetCartContent:e.setShouldGetCartContent}):null,r.a.createElement(B.a,{size:"small",onClick:function(){return E(a)}},"Learn More"))),r.a.createElement(M,{product:a,handleShow:E}))}))))))},Se=Object(w.a)((function(e){return{main:{marginTop:80}}})),_e=function(e){var t=Se({});return r.a.createElement(A.a,{component:"main",className:t.main},r.a.createElement(ye,{search:e.search,image:e.image,user:e.user,cartItems:e.cartItems,setCartItems:e.setCartItems,itemsCount:e.itemsCount,setItemsCount:e.setItemsCount,setShouldGetCartContent:e.setShouldGetCartContent}))},xe=a(20),Ie=a(218),Te=a(210),ke=a(224),je=a(70),Ne=a.n(je),we=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(15),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},icon:{margin:e.spacing(1),backgroundColor:"#880e4f"},submit:{margin:e.spacing(2,0,2),backgroundColor:"#80cbc4",color:"black"},progress:{position:"absolute"}}})),De=Object(s.f)((function(e){var t=we({}),a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],s=c[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],E=d[1],f=function(e){var t=e.target,a=t.name,n=t.value;s(Object(xe.a)(Object(xe.a)({},i),{},Object(N.a)({},a,n)))};return r.a.createElement("div",null,r.a.createElement(A.a,{component:"main",maxWidth:"xs"},r.a.createElement(Te.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(ke.a,{className:t.icon},r.a.createElement(Ne.a,null)),r.a.createElement(U.a,{component:"h1",variant:"h5"},"Log in"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,id:"outlined-required",label:"Email",fullWidth:!0,defaultValue:" ",variant:"outlined",name:"email",autoComplete:"email",onChange:f})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,id:"outlined",label:"Password",fullWidth:!0,variant:"outlined",name:"password",type:"password",onChange:f}),p?r.a.createElement("div",{style:{color:"red"}},p,"!"):null),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(B.a,{type:"submit",fullWidth:!0,variant:"contained",className:t.submit,onClick:function(t){t.preventDefault(),ee(i).then((function(t){console.log(t),e.userLogin(t.data),"admin"!==t.data.data.role?e.history.replace("/"):e.history.replace("admin-dashboard")})).catch((function(e){E(e.response.data.status)}))}},"Log in")),r.a.createElement(m.a,null,"Don't have an account?",r.a.createElement(l.b,{to:"/signup",style:{textDecoration:"none"}},"Sign up")))))))})),Pe=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},icon:{margin:e.spacing(1),backgroundColor:"#880e4f"},submit:{margin:e.spacing(2,0,2),backgroundColor:"#80cbc4",color:"black"},progress:{position:"absolute"}}})),We=Object(s.f)((function(e){var t=Pe({}),a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],s=c[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],E=d[1],f=function(e){var t=e.target,a=t.name,n=t.value;s(Object(xe.a)(Object(xe.a)({},i),{},Object(N.a)({},a,n)))};return r.a.createElement("div",null,r.a.createElement(A.a,{component:"main",maxWidth:"xs"},r.a.createElement(Te.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(ke.a,{className:t.icon},r.a.createElement(Ne.a,null)),r.a.createElement(U.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,fullWidth:!0,id:"firstname",label:"First Name",variant:"outlined",name:"firstName",onChange:f})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{fullWidth:!0,required:!0,id:"lastname",label:"Last Name",variant:"outlined",name:"lastName",onChange:f})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,id:"email",label:"Email",fullWidth:!0,variant:"outlined",autoComplete:"email",name:"email",onChange:f})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,id:"password",label:"Password",fullWidth:!0,variant:"outlined",type:"password",name:"password",onChange:f}),p?r.a.createElement("div",{style:{color:"red"}},p,"!"):null),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(B.a,{type:"submit",fullWidth:!0,variant:"contained",className:t.submit,onClick:function(t){t.preventDefault(),Z(i).then((function(t){console.log(t),e.history.replace("/")})).catch((function(e){E(e.response.data.status)}))}},"Sign Up")),r.a.createElement(m.a,null,"Already have an account?",r.a.createElement(l.b,{to:"/login",style:{textDecoration:"none"}},"Log in")))))))})),Ae=a(213),Re=a(217),Le=a(216),Qe=a(212),Be=a(214),Ue=a(215),Ke=a(110),ze=a(107),He=a.n(ze),Ge=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},headers:{backgroundColor:"black",color:"white"},tableWidth:{width:180},description:{width:400},fab:{marginTop:e.spacing(11)},delete:{cursor:"pointer"},customBadge:{backgroundColor:"#880e4f",color:"white"}}})),qe=a(221),Ve=a(106),Me=a.n(Ve),Fe=a(211);function Je(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Ge();Object(n.useEffect)((function(){m()}),[]);var m=function(){ae().then((function(e){var t=e.data;Promise.all(t.map((function(e){return Oe.setImageUrl(e)}))).then((function(){i(t)}))})).catch((function(e){console.log(e.response)}))};return r.a.createElement(A.a,{component:"main"},r.a.createElement(Te.a,null),r.a.createElement(l.b,{to:"/admin-post-form"},r.a.createElement(qe.a,{title:"Add","aria-label":"add",className:s.fab},r.a.createElement(Fe.a,{style:{backgroundColor:"#880e4f",color:"white"}},r.a.createElement(Me.a,null)))),r.a.createElement("div",{className:s.paper},r.a.createElement(Qe.a,{component:Ke.a},r.a.createElement(Ae.a,{"aria-label":"simple table"},r.a.createElement(Be.a,null,r.a.createElement(Ue.a,null,[{idx:1,label:"Image"},{idx:2,label:"Name"},{idx:3,label:"Category"},{idx:4,label:"Quantity"},{idx:5,label:"Price"},{idx:6,label:"Description"},{idx:7,label:""}].map((function(e){return r.a.createElement(Le.a,{key:e.idx,className:s.headers},e.label)})))),r.a.createElement(Re.a,null,c.filter((function(t){return t.category.toLowerCase().includes(e.search.toLowerCase())||t.name.toLowerCase().includes(e.search.toLowerCase())})).map((function(e){return r.a.createElement(Ue.a,{key:e._id},r.a.createElement(Le.a,{className:s.tableWidth},r.a.createElement("img",{src:e.imgUrl,alt:"",width:"100px",height:"100px"})),r.a.createElement(Le.a,null,e.name),r.a.createElement(Le.a,null,e.category),r.a.createElement(Le.a,null,e.dbQuantity),r.a.createElement(Le.a,null,e.price),r.a.createElement(Le.a,{className:s.description},e.description),r.a.createElement(Le.a,null,r.a.createElement(He.a,{className:s.delete,onClick:function(){return t=e._id,void ne(t).then((function(e){c.map((function(e){return e._id===t&&Oe.storage.ref("images/").child(e.image).delete(),e}))})).then((function(){m()})).catch((function(e){console.log(e.response)}));var t}})))})))))))}var Ye=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(15),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(2,0,2),backgroundColor:"#ad1457",color:"#fafafa"},heading:{textTransform:"uppercase",fontSize:"large"}}})),$e=Object(w.a)((function(e){return{root:{"& > *":{margin:e.spacing(2,0,2)}},input:{display:"none"}}})),Xe=function(e){var t=$e({});return r.a.createElement("div",{className:t.root},r.a.createElement("input",{accept:"image/*",className:t.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(t){var a=t.target.files[0];e.setImage((function(){return a}))}}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(B.a,{variant:"contained",component:"span",fullWidth:!0,className:t.button},"Select image")))},Ze=Object(s.f)((function(e){var t=Ye({}),a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],l=c[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),d=u[0],p=u[1];Object(n.useEffect)((function(){!0===d&&f()}),[d]);var E=function(e){var t=e.target,a=t.name,n=t.value;l(Object(xe.a)(Object(xe.a)({},i),{},Object(N.a)({},a,n)))},f=function(){te(i).then(Object(ge.a)(fe.a.mark((function t(){return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Oe.storage.ref().child("images/"+e.image.name).put(e.image);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).then((function(){e.history.replace("/admin-dashboard")})).catch((function(e){console.log(e.response)}))};return r.a.createElement(A.a,{component:"main",maxWidth:"xs"},r.a.createElement(Te.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(U.a,{component:"h1",variant:"h5",className:t.heading},"Fill out a form to add item"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,fullWidth:!0,id:"name",label:"Name",variant:"outlined",name:"name",onChange:E})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,fullWidth:!0,select:!0,defaultValue:" ",label:"Category",name:"category",variant:"outlined",onChange:E},r.a.createElement(g.a,{value:" "},"..."),r.a.createElement(g.a,{value:"blenders"},"Blenders"),r.a.createElement(g.a,{value:"juicers"},"Juicers"),r.a.createElement(g.a,{value:"dehydrators"},"Dehydrators"),r.a.createElement(g.a,{value:"oilPresses"},"Oil Presses"))),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,fullWidth:!0,id:"dbQuantity",label:"Quantity",variant:"outlined",name:"dbQuantity",onChange:E})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,fullWidth:!0,id:"price",label:"Price",variant:"outlined",name:"price",onChange:E})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,fullWidth:!0,id:"description",label:"Description",variant:"outlined",multiline:!0,rows:4,name:"description",onChange:E})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Xe,{setImage:e.setImage})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(B.a,{type:"submit",fullWidth:!0,variant:"contained",className:t.submit,onClick:function(t){t.preventDefault(),l(Object(xe.a)(Object(xe.a)({},i),{},{image:e.image.name})),p(!0)}},"Submit"))))))})),et=Object(w.a)((function(e){return{root:{marginTop:50,display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}},paper:{padding:e.spacing(5),boxShadow:"none"},list:{listStyleType:"none"},name:{textTransform:"uppercase",fontWeight:"bold"},delete:{marginTop:40},heading:{marginTop:90,textTransform:"uppercase",textAlign:"center",fontWeight:"bold",textDecoration:"underline",textDecorationColor:"#0097a7"},subtotal:{textAlign:"center",textTransform:"uppercase"},checkout:{marginTop:50,width:"100%",backgroundColor:"#80cbc4",color:"black",borderRadius:0},card:{backgroundColor:"#eeeeee",borderRadius:0},quantity:{marginTop:40},stock:{color:"#00838f",textTransform:"uppercase",fontSize:"small"},message:{color:"red"},price:{textTransform:"uppercase",fontSize:"small",fontWeight:"bold"}}}));function tt(e){var t=et(),a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],l=c[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),d=u[0],p=u[1];Object(n.useEffect)((function(){b()}),[]);var E=function(t){var a=e.cartItems.filter((function(e){return e._id!==t}));e.user.accessToken?le(t).then((function(){e.setCartItems(a),e.setShouldGetCartContent(!0)})):(localStorage.setItem("items",JSON.stringify(a)),e.setCartItems(a),e.setShouldGetCartContent(!0))},f=function(e,t){var a=t.find((function(t){return e.itemId===t._id}));me(a._id,{dbQuantity:a.dbQuantity-=e.cartQuantity}).then((function(){E(e._id)})).catch((function(e){console.log(e.response)}))},h=function(t,a,n){var r=n.find((function(e){return t._id===e._id}));me(r._id,{dbQuantity:r.dbQuantity-=t.cartQuantity}).then((function(){a===e.cartItems.length-1&&(localStorage.removeItem("items"),e.setCartItems([]),e.setShouldGetCartContent(!0))})).catch((function(e){console.log(e)}))},b=function(){e.user.accessToken&&p(e.user.data.firstName)};return r.a.createElement("div",null,e.itemsCount>1?r.a.createElement(U.a,{className:t.heading},d," Your Shopping Cart Has ",e.itemsCount," Items"):1===e.itemsCount?r.a.createElement(U.a,{className:t.heading},d," Your Shopping Cart Has 1 Item"):r.a.createElement(U.a,{className:t.heading},d," Your shopping cart is empty"),r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{item:!0,xs:12,sm:8},e.cartItems.map((function(a){return r.a.createElement(Ke.a,{className:t.paper,key:a._id},r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement("img",{src:a.imgUrl,alt:"product",height:"100px",width:"100px"})),r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement("ul",{className:t.list},r.a.createElement("li",{className:t.name},a.name),r.a.createElement("br",null),r.a.createElement("li",{className:t.price}," $",a.price),0===a.dbQuantity?r.a.createElement("li",{className:t.stock},"Out of stock"):r.a.createElement("li",{className:t.stock},"In stock"))),r.a.createElement(m.a,{item:!0,xs:4,className:t.quantity},r.a.createElement(Ie.a,{select:!0,label:"Qty: ",value:a.cartQuantity,name:"cartQuantity",variant:"outlined",onChange:(n=a._id,function(t){t.preventDefault();var a=t.target,r=a.name,c=a.value;console.log(r);var o=e.cartItems.find((function(e){return e._id===n}));c>o.dbQuantity?(c=o.dbQuantity,l([].concat(Object(F.a)(i),[o._id]))):l(i.filter((function(e){return o._id!==e}))),e.user.accessToken?se(o._id,{cartQuantity:o.cartQuantity=c}).then((function(){e.setCartItems(e.cartItems),e.setShouldGetCartContent(!0)})):(o.cartQuantity=c,localStorage.setItem("items",JSON.stringify(e.cartItems)),e.setCartItems(e.cartItems),e.setShouldGetCartContent(!0))})},r.a.createElement(g.a,{value:1},"1"),r.a.createElement(g.a,{value:2},"2"),r.a.createElement(g.a,{value:3},"3"),r.a.createElement(g.a,{value:4},"4"),r.a.createElement(g.a,{value:5},"5")),i.includes(a._id)?r.a.createElement("div",{className:t.message},"Sorry, only ",a.dbQuantity," left items in stock!"):null),r.a.createElement(m.a,{item:!0,xs:1},r.a.createElement(B.a,{className:t.delete,onClick:function(){return E(a._id)}},"Delete"))),r.a.createElement("hr",null));var n}))),r.a.createElement(m.a,{item:!0,xs:12,sm:3},r.a.createElement(Ke.a,{className:t.card},r.a.createElement("br",null),r.a.createElement(U.a,{className:t.subtotal},"Subtotal: $",e.cartItems.reduce((function(e,t){return e+t.price*t.cartQuantity}),0)),r.a.createElement(B.a,{variant:"contained",className:t.checkout,onClick:function(){re().then((function(t){var a=t.data;e.cartItems.forEach((function(t,n){e.user.accessToken?f(t,a):h(t,n,a)}))}))}},"Proceed to checkout")))))}var at=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(12),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(2,0,2),backgroundColor:"#80cbc4",color:"black"},heading:{textTransform:"uppercase",fontSize:"large"}}})),nt=a(108),rt=a.n(nt),ct=function(){var e=at({}),t={name:"",email:"",message:""},a=Object(n.useState)(t),c=Object(o.a)(a,2),i=c[0],l=c[1],s=function(e){var t=e.target,a=t.name,n=t.value;l(Object(xe.a)(Object(xe.a)({},i),{},Object(N.a)({},a,n)))};return r.a.createElement("div",null,r.a.createElement(A.a,{component:"main",maxWidth:"xs"},r.a.createElement(Te.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(U.a,{component:"h1",variant:"h5",className:e.heading},"Contact Us"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,fullWidth:!0,label:"Full name",variant:"outlined",name:"name",value:i.name,onChange:s})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{required:!0,fullWidth:!0,label:"Email address",variant:"outlined",name:"email",value:i.email,onChange:s})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(Ie.a,{fullWidth:!0,label:"Message...",variant:"outlined",name:"message",value:i.message,multiline:!0,rows:8,onChange:s})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(B.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit,onClick:function(e){e.preventDefault(),ue(i).then((function(){l(t),rt()({title:"Email confirmation",text:"Thank you, your email has been sent!",icon:"success",button:"Ok"})})).catch((function(e){console.log(e.response)}))}},"Send message")))))))};a(154);var it=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({}),u=Object(o.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),g=f[0],h=f[1],b=Object(n.useState)(""),C=Object(o.a)(b,2),v=C[0],O=C[1],y=Object(n.useState)([]),S=Object(o.a)(y,2),_=S[0],x=S[1],I=Object(n.useState)(0),T=Object(o.a)(I,2),k=T[0],j=T[1],N=Object(n.useState)(!0),w=Object(o.a)(N,2),D=w[0],P=w[1];Object(n.useEffect)((function(){!0===D&&A()}),[d,_,D]);var A=function(){oe().then((function(e){var t=e.data,a=[];d.accessToken?t.forEach((function(e){e.userId===d.data.userId&&a.push(e)})):a=JSON.parse(localStorage.getItem("items"))||[],Promise.all(a.map((function(e){return Oe.setImageUrl(e)}))).then((function(){x(a)})),R(a),P(!1)}))},R=function(e){var t=e.reduce((function(e,t){return e+t.cartQuantity}),0);j(t)};return r.a.createElement(l.a,null,r.a.createElement(W,{setSearch:h,itemsCount:k,cartItems:_}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(_e,{search:g,image:v,user:d,cartItems:_,setCartItems:x,itemsCount:k,setItemsCount:j,setShouldGetCartContent:P})),r.a.createElement(s.a,{exact:!0,path:"/login"},r.a.createElement(De,{userLogin:function(e){p(e),P(!0),e.accessToken&&"admin"===e.data.role&&(console.log(!0),c(!0))}})),r.a.createElement(s.a,{exact:!0,path:"/signup"},r.a.createElement(We,null)),r.a.createElement(s.a,{exact:!0,path:"/admin-dashboard"},!0===a?r.a.createElement(Je,{search:g,image:v}):r.a.createElement("div",null,r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement("img",{src:"./images/401.gif",className:"unauthorized",alt:"unauthorized"})),r.a.createElement("div",{className:"no-access"},"You're not authorized to access this page"))),r.a.createElement(s.a,{exact:!0,path:"/admin-post-form"},!0===a?r.a.createElement(Ze,{setImage:O,image:v}):r.a.createElement("div",null,r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement("img",{src:"./images/401.gif",className:"unauthorized",alt:"unauthorized"})),r.a.createElement("div",{className:"no-access"},"You're not authorized to access this page"))),r.a.createElement(s.a,{exact:!0,path:"/cart"},r.a.createElement(tt,{user:d,cartItems:_,setCartItems:x,itemsCount:k,setItemsCount:j,setShouldGetCartContent:P})),r.a.createElement(s.a,{exact:!0,path:"/learn-more"},r.a.createElement(M,null)),r.a.createElement(s.a,{exact:!0,path:"/contact"},r.a.createElement(ct,null))))};i.a.render(r.a.createElement(it,null),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.2e0f0867.chunk.js.map