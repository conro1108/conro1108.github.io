(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=(a(24),a(1)),i=a(2),s=a(4),u=a(3),m=a(5),d=a(17),b=a.n(d),h=new(a(18).a),p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={loginUrl:"",resourceOwnerKeyCookie:"",resourceOwnerSecretCookie:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.threadedtweeter.com/login?mode=webapp").then(function(t){e.setState({loginUrl:t.data.url,resourceOwnerKeyCookie:t.data.cookie_1,resourceOwnerSecretCookie:t.data.cookie_2});var a=e.state.resourceOwnerKeyCookie.split(";")[0].split("=")[1],n=e.state.resourceOwnerSecretCookie.split(";")[0].split("=")[1];h.set("resource_owner_key",a,{path:"/",expires:new Date("2020-1-1")}),h.set("resource_owner_secret",n,{path:"/",expires:new Date("2020-1-1")})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"login_button"},c.a.createElement("a",{className:"button",href:this.state.loginUrl},"Login with Twitter"))}}]),t}(n.Component),v={src:"src/logo.jpg",alt:"logo",style:"width:70px;"},E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"sub-header1"},c.a.createElement("div",{className:"h-1"},c.a.createElement("div",null,"Tweet"),c.a.createElement("div",null,"Together")),c.a.createElement("div",{className:"h-2"},c.a.createElement("img",{src:v.src,alt:v.alt,style:v.width})),c.a.createElement("div",{className:"h-3"},"Threaded Tweeter")),c.a.createElement("div",{className:"sub-header2"},c.a.createElement("div",{className:"h-4"},c.a.createElement(p,null))))}}]),t}(n.Component),O=a(7),j=c.a.createElement("div",{className:"b-5"},"0/280 characters used"),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("textarea",{type:"text2",id:"tweet",name:"tweet"}),c.a.createElement("div",{className:"sub-body2"},c.a.createElement("div",{className:"b-4"},"Add picture"),j))}}]),t}(n.Component),w=c.a.createElement("div",{className:"b-1"},"Auto splitting: off"),y=c.a.createElement("div",{className:"b-3"},c.a.createElement("input",{type:"submit2",value:"submit"})),g=c.a.createElement("div",{className:"b-2"},c.a.createElement("button",{type:"button",className:"notbutton","data-toggle":"modal","data-target":"#exampleModal"},"Splitting options")),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleaddbox=a.handleaddbox.bind(Object(O.a)(Object(O.a)(a))),a.handleremovebox=a.handleremovebox.bind(Object(O.a)(Object(O.a)(a))),a.state={boxnum:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleaddbox",value:function(){this.setState({boxnum:this.state.boxnum+1})}},{key:"handleremovebox",value:function(){this.setState({boxnum:this.state.boxnum-1})}},{key:"render",value:function(){var e;return e=1===this.state.boxnum?c.a.createElement("div",{className:"centeronebutton"},c.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+")):c.a.createElement("div",{className:"centeronebutton"},c.a.createElement("button",{className:"circlebutton",onClick:this.handleremovebox},"-")," ",c.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbutton},"+")),c.a.createElement("div",{className:"main-body"},c.a.createElement("div",{className:"sub-body"},c.a.createElement("div",{className:"sub-body1"},w,g),c.a.createElement("form",null,c.a.createElement(f,null),e,y)))}}]),t}(n.Component),k=c.a.createElement("form",{action:"http://google.com"},c.a.createElement("input",{type:"link",value:"contact us"})),x=c.a.createElement("form",{action:"http://google.com"},c.a.createElement("input",{type:"link",value:"help"})),C={src:"src/logo2.jpg",alt:"logo2",style:"width:55px;"},S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-footer"},c.a.createElement("div",{className:"h-1"},x),c.a.createElement("div",{className:"h-2"},c.a.createElement("img",{src:C.src,alt:C.alt,style:C.width})),c.a.createElement("div",{className:"h-5"},k))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(N,null),c.a.createElement(S,null))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(_,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.0555c0bf.chunk.js.map