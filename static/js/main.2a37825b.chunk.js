(this["webpackJsonpchat-room"]=this["webpackJsonpchat-room"]||[]).push([[0],{16:function(e,t,s){},24:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var c=s(8),n=s.n(c),a=s(18),r=s.n(a),i=(s(24),s(16),s(19)),o=s(12),l=s(10);l.a.initializeApp({apiKey:"AIzaSyC9npB9_9G9g_0XYWjzl_KuHCfZ5VBP214",authDomain:"chat-room-788c2.firebaseapp.com",projectId:"chat-room-788c2",storageBucket:"chat-room-788c2.appspot.com",messagingSenderId:"871609475000",appId:"1:871609475000:web:c4ab04a3a30971753ab94d",measurementId:"G-S0JGJ9VNEE"});var j=l.a.auth(),u=l.a.firestore(),d=s(2),m=Object(c.createContext)(),b=function(e){var t=Object(c.useState)(null),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!0),b=Object(o.a)(r,2),h=b[0],O=b[1],x=Object(c.useState)([]),g=Object(o.a)(x,2),p=g[0],v=g[1];return Object(c.useEffect)((function(){j.onAuthStateChanged((function(e){a(e),O(!1)})),u.collection("messages").orderBy("currentTime","asc").onSnapshot((function(e){v(e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())})))}))}),[]),Object(d.jsx)(m.Provider,{value:{register:function(){var e=new l.a.auth.GoogleAuthProvider;l.a.auth().signInWithPopup(e).then((function(t){l.a.auth().signInWithRedirect(e)}))},user:n,loader:h,logout:function(){j.signOut().then((function(){a(null)}))},sendMsg:function(e){u.collection("messages").add({msg:e,photo:n.photoURL,username:n.displayName,email:n.email,currentTime:l.a.firestore.FieldValue.serverTimestamp()})},allmsg:p},children:e.children})};var h=function(){var e=Object(c.useContext)(m),t=e.register,s=e.user,n=e.loader,a=e.logout,r=function(){t()},i=function(){a()};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar__container",children:[Object(d.jsx)("div",{className:"navbar__logo",children:"ChatRoom"}),n?".... ":s?Object(d.jsxs)("div",{className:"navbar__links",children:[Object(d.jsx)("li",{children:Object(d.jsx)("span",{className:"navbar__img",children:Object(d.jsx)("img",{src:s.photoURL,alt:""})})}),Object(d.jsx)("li",{children:Object(d.jsxs)("button",{className:"navbar__btn",onClick:i,children:["Logout"," "]})})]}):Object(d.jsxs)("div",{className:"navbar__links",children:[Object(d.jsx)("li",{children:Object(d.jsx)("span",{className:"navbar__img"})}),Object(d.jsx)("li",{children:Object(d.jsxs)("button",{className:"navbar__btn",onClick:r,children:["Register with Google"," "]})})]})]})})})};var O=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],n=t[1],a=Object(c.useContext)(m).sendMsg;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"input__form",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),a(s),n("")},children:Object(d.jsx)("input",{type:"text",className:"input__control",placeholder:"Write your Message here",onChange:function(e){return n(e.target.value)},value:s,required:!0})})})})};var x=function(){var e=Object(c.useContext)(m),t=e.allmsg,s=e.user;return Object(d.jsxs)("div",{className:"messages",children:[Object(d.jsx)(d.Fragment,{children:t.map((function(e){return e.email===s.email?Object(d.jsx)("div",{className:"messages__my",children:Object(d.jsx)("div",{className:"messages__my-p",children:Object(d.jsx)("p",{children:e.msg})})},e.id):Object(d.jsxs)("div",{className:"messages__other",children:[Object(d.jsx)("div",{className:"messages__other-img",children:Object(d.jsx)("img",{src:e.photo,alt:"other_user_img"})}),Object(d.jsxs)("div",{className:"messages__other-msg",children:[Object(d.jsx)("span",{children:e.username}),Object(d.jsx)("p",{children:e.msg})]})]},e.id)}))}),Object(d.jsx)(O,{})]})};var g=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"welcome",children:[Object(d.jsx)("h1",{children:"Welcome to the Chat Room.Please login to enter"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deserunt sit labore accusamus, nisi ipsa ut dolorem neque id nulla distinctio ratione consectetur ex atque corporis perspiciatis veniam maxime recusandae."})]})})};var p=function(){var e=Object(c.useContext)(m).user;return Object(d.jsx)(d.Fragment,{children:e?Object(d.jsx)(x,{}):Object(d.jsx)(g,{})})};var v=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"outermain__container",children:Object(d.jsxs)(b,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(p,{})]})})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2a37825b.chunk.js.map