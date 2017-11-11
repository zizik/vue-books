webpackJsonp([1],{"/yCB":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("form",{staticClass:"login__form",on:{input:t.clearFormErrors}},[a("h1",{staticClass:"login__greet",domProps:{textContent:t._s(t.componentData.greetMsg)}}),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"login__input",attrs:{type:"text",name:"email",placeholder:"Введите почту"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.errors.has("email")?a("span",{staticClass:"login__error",domProps:{textContent:t._s(t.errors.first("email"))}}):t._e(),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6",expression:"'required|min:6'"},{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login__input",attrs:{type:"password",name:"password",placeholder:"Введите пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.errors.has("password")?a("span",{staticClass:"login__error",domProps:{textContent:t._s(t.errors.first("password"))}}):t._e(),t._v(" "),t.showServerErrors?a("span",{staticClass:"login__error",domProps:{textContent:t._s(t.showServerErrors)}}):t._e(),t._v(" "),a("button",{staticClass:"login__submit",domProps:{textContent:t._s(t.componentData.submitBtn)},on:{click:function(e){e.preventDefault(),t.submit(e)}}}),t._v(" "),t.isCreating?t._e():a("p",{staticClass:"login__message"},[t._v("Нет аккаунта? "),a("router-link",{staticClass:"login__link",attrs:{to:{name:"SignIn"}}},[t._v("Создайте аккаунт")])],1)])])},s=[],r={render:n,staticRenderFns:s};e.a=r},"1YFL":function(t,e,a){"use strict";function n(t){a("JkJp")}var s=a("hroH"),r=a("J7LK"),o=a("VU/8"),i=n,c=o(s.a,r.a,!1,i,null,null);e.a=c.exports},"9f2O":function(t,e,a){"use strict";var n=a("Zrlr"),s=a.n(n),r=a("wxAW"),o=a.n(r),i=a("Q3ln"),c=function(){function t(){s()(this,t),this.db=i.a.database(),this.user=i.a.auth().currentUser,this.booksRef=this.db.ref("books/manga")}return o()(t,[{key:"setRef",value:function(t){this.booksRef=this.db.ref("books/manga/"+t)}},{key:"getData",value:function(t){return this.booksRef.child(t)}},{key:"setData",value:function(t){return this.booksRef.push(t)}},{key:"removeData",value:function(t){return this.booksRef.child(t).remove()}},{key:"updateData",value:function(t,e){return this.booksRef.child(t).update(e)}}]),t}();e.a=new c},AcTw:function(t,e,a){t.exports=a.p+"static/img/loader.4cf2e48.gif"},DVcj:function(t,e){},HCTz:function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),r=a("NYxO"),o=a("NevM");e.a={methods:s()({},Object(r.b)(["setUser"]),{signOut:function(){var t=this;o.a.signOut().then(function(){return t.setUser("")}).catch(function(t){return console.log(t)})}})}},I11E:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"container"},[a("div",{staticClass:"header__wrap"},[a("router-link",{staticClass:"header__link",attrs:{to:{name:"Login"}}},[t._v("На главную")]),t._v(" "),a("button",{staticClass:"header__signout",on:{click:t.signOut}},[t._v("Выйти с аккаунта")])],1)])])},s=[],r={render:n,staticRenderFns:s};e.a=r},IMtv:function(t,e){},J7LK:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form",on:{input:t.$validator.reset}},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:t.bookData.name,expression:"bookData.name",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{autofocus:"",type:"text",name:"name",placeholder:"Введите название"},domProps:{value:t.bookData.name},on:{input:function(e){e.target.composing||t.$set(t.bookData,"name",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t.errors.has("name")?a("span",{staticClass:"form__error",domProps:{textContent:t._s(t.errors.first("name"))}}):t._e(),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.number",value:t.bookData.chapters,expression:"bookData.chapters",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"number",name:"chapters",placeholder:"Глав прочитано"},domProps:{value:t.bookData.chapters},on:{input:function(e){e.target.composing||t.$set(t.bookData,"chapters",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t.errors.has("chapters")?a("span",{staticClass:"form__error",domProps:{textContent:t._s(t.errors.first("chapters"))}}):t._e(),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:t.bookData.link,expression:"bookData.link",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",name:"link",placeholder:"Ссылка"},domProps:{value:t.bookData.link},on:{input:function(e){e.target.composing||t.$set(t.bookData,"link",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t.errors.has("link")?a("span",{staticClass:"form__error",domProps:{textContent:t._s(t.errors.first("link"))}}):t._e(),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.bookData.priority,expression:"bookData.priority"},{name:"validate",rawName:"v-validate",value:"required|in:1,2,3",expression:"'required|in:1,2,3'"}],staticClass:"form__select",attrs:{name:"priority"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.bookData,"priority",e.target.multiple?a:a[0])}}},[a("option",{staticClass:"form__option",attrs:{selected:"",disabled:"",hidden:"",value:""}},[t._v("Выберете приоритет")]),t._v(" "),a("option",{staticClass:"form__option",attrs:{value:"1"}},[t._v("Высокий")]),t._v(" "),a("option",{staticClass:"form__option",attrs:{value:"2"}},[t._v("Средний")]),t._v(" "),a("option",{staticClass:"form__option",attrs:{value:"3"}},[t._v("Низкий")])]),t._v(" "),t.errors.has("priority")?a("span",{staticClass:"form__error",domProps:{textContent:t._s(t.errors.first("priority"))}}):t._e(),t._v(" "),a("button",{staticClass:"form__submit",domProps:{textContent:t._s(t.submitText)},on:{click:function(e){e.preventDefault(),t.submit(e)}}})])},s=[],r={render:n,staticRenderFns:s};e.a=r},JU1R:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),r=a("NevM"),o=a("x1is"),i=a("1YFL"),c=a("xJsL");n.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",name:"Login",component:c.a,props:{isCreating:!1},beforeEnter:function(t,e,a){r.a.getUser()?a({name:"Books"}):a()}},{path:"/books",name:"Books",component:o.a},{path:"/form",name:"Form",component:i.a,props:{isEditing:!1}},{path:"/form/:id",name:"EditForm",component:i.a,props:{isEditing:!0}},{path:"/signin",name:"SignIn",component:c.a,props:{isCreating:!0}}]})},JkJp:function(t,e){},KuXy:function(t,e){},Lns1:function(t,e,a){"use strict";var n=a("bOdI"),s=a.n(n),r=a("TbzR"),o={isLoading:!1},i={getLoading:function(){return o.isLoading}},c={setLoading:function(t,e){(0,t.commit)(r.a,e)}},u=s()({},r.a,function(t,e){t.isLoading=e});e.a={state:o,getters:i,actions:c,mutations:u}},M93x:function(t,e,a){"use strict";function n(t){a("d1vc"),a("zETL"),a("VDng")}var s=a("xJD8"),r=a("PB8w"),o=a("VU/8"),i=n,c=o(s.a,r.a,!1,i,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("sUu7"),r=a("M93x"),o=a("JU1R"),i=a("wtEF"),c=a("NevM"),u=a("9f2O");n.a.config.productionTip=!1,n.a.use(s.a,{events:""});c.a.auth.onAuthStateChanged(function(t){t&&u.a.setRef(t.uid),new n.a({el:"#app",router:o.a,store:i.a,template:"<App/>",components:{App:r.a}})})},NevM:function(t,e,a){"use strict";var n=a("Zrlr"),s=a.n(n),r=a("wxAW"),o=a.n(r),i=a("Q3ln"),c=function(){function t(){s()(this,t),this.auth=i.a.auth()}return o()(t,[{key:"createUser",value:function(t){var e=t.email,a=t.password;return this.auth.createUserWithEmailAndPassword(e,a)}},{key:"signIn",value:function(t){var e=t.email,a=t.password;return this.auth.signInWithEmailAndPassword(e,a)}},{key:"signOut",value:function(){return this.auth.signOut()}},{key:"getUser",value:function(){return this.auth.currentUser}}]),t}();e.a=new c},NyMt:function(t,e){},PB8w:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main-header"),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"app__content"},[a("router-view"),t._v(" "),t.getUser?a("main-navigation"):t._e()],1)])],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},"Pja/":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{directives:[{name:"sticky",rawName:"v-sticky",value:{stickyTop:10},expression:"{stickyTop: 10 }"}],staticClass:"navigation"},[a("ul",{staticClass:"navigation__list"},[a("li",{staticClass:"navigation__list-item"},[a("router-link",{staticClass:"navigation__link",attrs:{to:{name:"Books"}}},[t._v("Книги")])],1),t._v(" "),a("li",{staticClass:"navigation__list-item"},[a("router-link",{staticClass:"navigation__link",attrs:{to:{name:"Form"}}},[t._v("Создать книгу")])],1)])])},s=[],r={render:n,staticRenderFns:s};e.a=r},Q3ln:function(t,e,a){"use strict";var n=a("Sazm"),s=(a.n(n),{apiKey:"AIzaSyAFwiSAedClmIi5jbkRMf-n765gUz2ye1c",authDomain:"v-books-d1b6d.firebaseapp.com",databaseURL:"https://v-books-d1b6d.firebaseio.com",projectId:"v-books-d1b6d",storageBucket:"v-books-d1b6d.appspot.com",messagingSenderId:"866011591496"}),r=n.initializeApp(s);e.a=r},TbzR:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s});var n="SET_LOADING",s="SET_USER"},VDng:function(t,e){},bREw:function(t,e,a){"use strict";var n=a("bOdI"),s=a.n(n),r=a("TbzR"),o={user:""},i={getUser:function(){return o.user}},c={setUser:function(t,e){(0,t.commit)(r.b,e)}},u=s()({},r.b,function(t,e){t.user=e});e.a={state:o,getters:i,actions:c,mutations:u}},"bVQ/":function(t,e,a){"use strict";var n=a("e45v"),s=a.n(n);e.a={directives:{sticky:s.a}}},bwGm:function(t,e,a){"use strict";function n(t){a("IMtv")}var s=a("bVQ/"),r=a("Pja/"),o=a("VU/8"),i=n,c=o(s.a,r.a,!1,i,null,null);e.a=c.exports},d1vc:function(t,e){},gNaO:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t.isLoading?n("div",{staticClass:"content__img-wrapper"},[n("img",{attrs:{src:a("AcTw"),alt:"loader"}})]):n("div",[t.hasBooks?n("div",[n("div",{staticClass:"content__search-wrapper"},[n("label",{staticClass:"content__label"},[t._v("\n          Найти книгу:\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBook,expression:"searchBook"}],staticClass:"content__search",attrs:{type:"text",placeholder:"Найти книгу"},domProps:{value:t.searchBook},on:{input:function(e){e.target.composing||(t.searchBook=e.target.value)}}})]),t._v(" "),n("label",{staticClass:"content__label"},[t._v("\n          Приоритет:\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.priorityFilter,expression:"priorityFilter"}],staticClass:"content__priority",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.priorityFilter=e.target.multiple?a:a[0]}}},[n("option",{attrs:{value:"all"}},[t._v("Все")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Высокий")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Средний")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("Низкий")])])]),t._v(" "),n("button",{staticClass:"content__save",on:{click:t.saveBooks}},[t._v("Сохранить список")])]),t._v(" "),n("table",{staticClass:"content__table"},[t._m(0),t._v(" "),n("tbody",t._l(t.filteredBooks,function(e){return n("tr",{key:e.id,staticClass:"content__table-row"},[n("td",{staticClass:"content__table-row-cell"},[n("a",{staticClass:"content__table-link",attrs:{href:e.link}},[t._v("\n                "+t._s(e.name)+"\n              ")])]),t._v(" "),n("td",{staticClass:"content__table-row-cell"},[t._v(t._s(e.chapters))]),t._v(" "),n("td",{staticClass:"content__table-row-cell"},[t._v(t._s(t._f("translatePriority")(e.priority)))]),t._v(" "),n("td",{staticClass:"content__table-row-cell"},[n("button",{staticClass:"content__btn content__btn_delete",on:{click:function(a){t.deleteBook(e.id)}}}),t._v(" "),n("button",{staticClass:"content__btn content__btn_edit",on:{click:function(a){t.editBook(e.id)}}})])])}))])]):n("div",{staticClass:"content__warn"},[t._v("Книг нет")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"content__table-head"},[a("tr",[a("th",{staticClass:"content__table-head-cell content__table-head-cell_name"},[t._v("Название")]),t._v(" "),a("th",{staticClass:"content__table-head-cell"},[t._v("Прочитано")]),t._v(" "),a("th",{staticClass:"content__table-head-cell"},[t._v("Приоритет")]),t._v(" "),a("th",{staticClass:"content__table-head-cell"},[t._v("Действия")])])])}],r={render:n,staticRenderFns:s};e.a=r},hroH:function(t,e,a){"use strict";var n=a("fZjL"),s=a.n(n),r=a("Dd8w"),o=a.n(r),i=a("NYxO"),c=a("9f2O");e.a={props:["isEditing"],data:function(){return{bookData:{name:"",link:"",chapters:"",priority:""}}},watch:{$route:function(){this.setFormStatus()}},created:function(){this.setFormStatus()},methods:o()({},Object(i.c)(["getUser"]),{submit:function(){var t=this;this.$validator.validateAll().then(function(e){e&&t.submitAction().then(function(){return t.$router.push("/books")})})},submitAction:function(){return this.isEditing?c.a.updateData(this.$route.params.id,this.bookData):c.a.setData(this.bookData)},setFormStatus:function(){var t=this;this.isEditing?c.a.getData(this.$route.params.id).once("value",function(e){t.bookData=e.val()}):(s()(this.bookData).forEach(function(e){t.bookData[e]=""}),this.$validator.reset())}}),computed:{submitText:function(){return this.isEditing?"Редактировать":"Создать"}}}},"nKb+":function(t,e,a){"use strict";var n=a("NevM");e.a={props:["isCreating"],data:function(){return{email:"",password:"",serverErrors:[]}},watch:{$route:function(){this.email="",this.password="",this.clearFormErrors()}},methods:{submit:function(){var t=this;this.$validator.validateAll().then(function(e){e&&t.componentData.action({email:t.email,password:t.password}).then(function(e){e&&t.$router.replace({name:"Books"})}).catch(function(e){t.serverErrors.push(e.message)})})},clearFormErrors:function(){this.$validator.reset(),this.serverErrors=[]}},computed:{componentData:function(){return{greetMsg:this.isCreating?"Создайте аккаунт":"Войдите, чтобы продолжить",submitBtn:this.isCreating?"Создать аккаунт":"Войти на сайт",action:this.isCreating?n.a.createUser.bind(n.a):n.a.signIn.bind(n.a)}},showServerErrors:function(){return!!this.serverErrors.length&&this.serverErrors[0]}}}},teIl:function(t,e,a){"use strict";function n(t){a("NyMt")}var s=a("HCTz"),r=a("I11E"),o=a("VU/8"),i=n,c=o(s.a,r.a,!1,i,null,null);e.a=c.exports},wtEF:function(t,e,a){"use strict";var n=a("7+uW"),s=a("NYxO"),r=a("Lns1"),o=a("bREw");n.a.use(s.a),e.a=new s.a.Store({strict:!1,modules:{loading:r.a,user:o.a}})},x1is:function(t,e,a){"use strict";function n(t){a("KuXy")}var s=a("xZxk"),r=a("gNaO"),o=a("VU/8"),i=n,c=o(s.a,r.a,!1,i,null,null);e.a=c.exports},xJD8:function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),r=a("NYxO"),o=a("teIl"),i=a("bwGm"),c=a("NevM");e.a={name:"app",components:{mainHeader:o.a,mainNavigation:i.a},data:function(){return{hasUser:!1}},created:function(){c.a.getUser()?this.setUser(c.a.getUser().uid):this.$router.push({name:"Login"})},methods:s()({},Object(r.b)(["setUser"])),computed:s()({},Object(r.c)(["getUser"]))}},xJsL:function(t,e,a){"use strict";function n(t){a("DVcj")}var s=a("nKb+"),r=a("/yCB"),o=a("VU/8"),i=n,c=o(s.a,r.a,!1,i,null,null);e.a=c.exports},xZxk:function(t,e,a){"use strict";var n=a("mvHQ"),s=a.n(n),r=a("Gu7T"),o=a.n(r),i=a("Dd8w"),c=a.n(i),u=a("NYxO"),l=a("9f2O");e.a={data:function(){return{books:[],searchBook:"",priorityFilter:"all"}},created:function(){var t=this;this.setLoading(!0),l.a.booksRef.once("value",function(e){e.val()||t.setLoading(!1)}),l.a.booksRef.on("child_added",function(e){t.books.push(c()({id:e.key},e.val())),t.setLoading(!1)}),l.a.booksRef.on("child_removed",function(e){t.books=t.books.filter(function(t){return t.id!==e.key})})},beforeDestroy:function(){l.a.booksRef.off()},computed:{isLoading:function(){return this.getLoading()},hasBooks:function(){return this.books.length>0},sortedBooks:function(){return[].concat(o()(this.books)).sort(function(t,e){var a=t.priority-e.priority;return a||(t.name>e.name?1:-1)})},filteredBooks:function(){var t=this,e="all"===this.priorityFilter;return!this.searchBook&&e?this.sortedBooks:this.sortedBooks.filter(function(a){return a.name.toLowerCase().includes(t.searchBook.toLowerCase())&&(e||t.priorityFilter===a.priority)})}},methods:c()({},Object(u.c)(["getLoading","getUser"]),Object(u.b)(["setLoading"]),{deleteBook:function(t){l.a.removeData(t)},editBook:function(t){this.$router.push({name:"EditForm",params:{id:t}})},saveBooks:function(){var t=this.sortedBooks.map(function(t){return{bookName:t.name,chapters:t.chapters,priority:t.priority}}),e=new Blob([s()(t,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(e),a.download="books.json",a.click()}}),filters:{translatePriority:function(t){return{1:"Высокий",2:"Средний",3:"Низкий"}[t]}}}},zETL:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e1a84f66859b454a01f2.js.map