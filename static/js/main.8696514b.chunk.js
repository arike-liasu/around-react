(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),o=a.n(s),r=a(2),i=a(0),l=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("div",{className:"logo"})})},p=function(e){return Object(i.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),id:"popup_type_".concat(e.name),children:Object(i.jsxs)("form",{className:"popup__form",id:"popup__form_type_".concat(e.name),noValidate:!0,children:[Object(i.jsx)("button",{type:"reset",className:"popup__close-button","aria-label":"close",onClick:e.onClose}),Object(i.jsx)("h2",{className:"popup__heading",children:e.title||"Popup Title"}),e.children,Object(i.jsx)("button",{type:"submit",className:"popup__submit-button",children:"confirm"===e.name?"Yes":"Save"})]})})},u=a(5),d=a(6),j=new(function(){function e(t){Object(u.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(d.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.profileName,about:e.profileJob})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.profilePictureURL})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"uploadPlace",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"unlikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-11",headers:{authorization:"403bdafc-0a52-4e02-9b82-c7e8e4f7ffb1","Content-Type":"application/json"}}),b=function(e){return console.log(e.cardData),Object(i.jsx)("section",{className:"popup popup_type_image ".concat(e.isOpen?"popup_opened":""," "),id:"popup_type_image",children:Object(i.jsxs)("div",{className:"popup__container",children:[Object(i.jsx)("button",{type:"reset",className:"popup__close-button","aria-label":"close",onClick:e.onClose}),Object(i.jsx)("img",{src:e.cardData.link||"",alt:"popup",className:"popup__image"}),Object(i.jsx)("p",{className:"popup__image-location",children:e.cardData.name})]})})},_=function(e){var t=Object(c.useState)(!1),a=Object(r.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)(!1),l=Object(r.a)(o,2),p=l[0],u=l[1];return Object(c.useEffect)((function(){return e.cardData.owner._id!==e.userId&&u(!0),e.cardData.likes.some((function(t){return t._id===e.userId}))&&s(!0),function(){}}),[e]),Object(i.jsxs)("div",{className:"place",children:[Object(i.jsx)("button",{className:"place__delete-button ".concat(p?"hidden":""),onClick:function(){e.onDeleteButtonClick(!0)}}),Object(i.jsx)("img",{src:e.cardData.link||"",alt:e.cardData.name,className:"place__image",onClick:function(){e.onCardClick(e.cardData)}}),Object(i.jsx)("h2",{className:"place__title",children:e.cardData.name||"Title"}),Object(i.jsxs)("div",{className:"place__love-section",children:[Object(i.jsx)("button",{className:"place__love-button ".concat(n?"place__love-button_active":""),onClick:function(){s(!0)}}),Object(i.jsx)("p",{className:"place__love-count",children:e.cardData.likes.length})]})]})},m=function(e){var t=Object(c.useState)("Jacques Cousteau"),a=Object(r.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)("Explorer"),l=Object(r.a)(o,2),u=l[0],d=l[1],m=Object(c.useState)(""),f=Object(r.a)(m,2),h=f[0],O=f[1],x=Object(c.useRef)(""),C=Object(c.useState)([]),N=Object(r.a)(C,2),P=N[0],k=N[1];return Object(c.useEffect)((function(){return Promise.all([j.getUserInfo(),j.getInitialCards()]).then((function(e){s(e[0].name),d(e[0].about),O(e[0].avatar),x.current=e[0]._id,k(e[1])})).catch((function(e){console.log(e)})),function(){}}),[]),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsxs)(p,{title:"Edit Profile",name:"edit",isOpen:e.isEditProfilePopupOpen,onClose:e.onEditProfileClose,children:[Object(i.jsxs)("label",{className:"popup__label",children:[Object(i.jsx)("input",{type:"text",id:"profile-title",name:"profileName",className:"popup__field popup__field_el_title",minLength:"2",maxLength:"45",placeholder:"Name",required:!0}),Object(i.jsx)("span",{className:"popup__field-error",id:"profile-title-error"})]}),Object(i.jsxs)("label",{className:"popup__label",children:[Object(i.jsx)("input",{type:"text",id:"profile-subtitle",name:"profileJob",className:"popup__field popup__field_el_subtitle",minLength:"2",maxLength:"200",placeholder:"About",required:!0}),Object(i.jsx)("span",{className:"popup__field-error",id:"profile-subtitle-error"})]})]}),Object(i.jsxs)(p,{title:"New Place",name:"add",isOpen:e.isAddPlacePopupOpen,onClose:e.onAddPlaceClose,children:[Object(i.jsxs)("label",{className:"popup__label",children:[Object(i.jsx)("input",{type:"text",name:"placeName",id:"place-title",className:"popup__field popup__field_el_place-title",placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(i.jsx)("span",{className:"popup__field-error",id:"place-title-error"})]}),Object(i.jsxs)("label",{className:"popup__label",children:[Object(i.jsx)("input",{type:"url",name:"placeImageURL",id:"place-image-url",className:"popup__field popup__field_el_place-image-url",placeholder:"Image URL",required:!0}),Object(i.jsx)("span",{className:"popup__field-error",id:"place-image-url-error"})]})]}),Object(i.jsx)(p,{title:"Update Profile Picture",name:"change",isOpen:e.isEditAvatarPopupOpen,onClose:e.onEditAvatarClose,children:Object(i.jsxs)("label",{className:"popup__label",children:[Object(i.jsx)("input",{type:"url",name:"profilePictureURL",id:"profile-picture-url",className:"popup__field popup__field_el_profile-picture-url",placeholder:"Image URL",required:!0}),Object(i.jsx)("span",{className:"popup__field-error",id:"profile-picture-url-error"})]})}),Object(i.jsx)(p,{title:"Are you sure?",name:"confirm",isOpen:e.isDeletePlacePopupOpen,onClose:e.onDeletePlaceClose}),Object(i.jsx)(b,{cardData:e.selectedCard,isOpen:e.isImagePopupOpen,onClose:e.onImagePopupClose}),Object(i.jsxs)("section",{className:"profile",children:[Object(i.jsxs)("div",{className:"profile__content",children:[Object(i.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(h,")")},children:Object(i.jsx)("div",{className:"profile__overlay",onClick:e.onAvatarClick})}),Object(i.jsxs)("div",{className:"profile__info",children:[Object(i.jsxs)("div",{className:"profile__title-edit",children:[Object(i.jsx)("h1",{className:"profile__title",children:n}),Object(i.jsx)("button",{type:"submit",className:"profile__edit-button",onClick:e.onEditProfileClick})]}),Object(i.jsx)("p",{className:"profile__subtitle",children:u})]})]}),Object(i.jsx)("button",{type:"submit",className:"profile__add-button","aria-label":"add",onClick:e.onAddPlaceClick})]}),Object(i.jsx)("section",{className:"places",children:P.map((function(t){return Object(i.jsx)(_,{userId:x.current,cardData:t,onCardClick:e.onCardClick,onDeleteButtonClick:e.onDeletePlaceClick},t._id)}))})]})},f=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Around the U.S"})})};var h=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),o=Object(r.a)(s,2),p=o[0],u=o[1],d=Object(c.useState)(!1),j=Object(r.a)(d,2),b=j[0],_=j[1],h=Object(c.useState)(!1),O=Object(r.a)(h,2),x=O[0],C=O[1],N=Object(c.useState)(!1),P=Object(r.a)(N,2),k=P[0],g=P[1],v=Object(c.useState)(""),y=Object(r.a)(v,2),E=y[0],D=y[1];return Object(i.jsxs)("div",{className:"page",children:[Object(i.jsx)(l,{}),Object(i.jsx)(m,{isAddPlacePopupOpen:p,isEditAvatarPopupOpen:b,isEditProfilePopupOpen:a,isImagePopupOpen:x,isDeletePlacePopupOpen:k,selectedCard:E,onEditProfileClick:function(){n(!0)},onAddPlaceClick:function(){u(!0)},onAvatarClick:function(){_(!0)},onCardClick:function(e){D(e),C(!0)},onDeletePlaceClick:function(){g(!0)},onEditAvatarClose:function(){_(!1)},onEditProfileClose:function(){n(!1)},onAddPlaceClose:function(){u(!1)},onImagePopupClose:function(){C(!1)},onDeletePlaceClose:function(){g(!1)}}),Object(i.jsx)(f,{})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};a(12);o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.8696514b.chunk.js.map