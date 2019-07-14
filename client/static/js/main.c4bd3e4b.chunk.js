(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(61)},39:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(30),r=a.n(c),s=(a(39),a(13)),i=a(5),o=a(6),u=a(8),m=a(7),d=a(9),p=a(12),h=a.n(p),f=a(1),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={item:e.item},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("li",{className:"collection-item"},l.a.createElement(f.b,{to:"/meetups/".concat(this.state.item.id)},this.state.item.name))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getMeetups=function(){h.a.get("http://localhost:3000/api/meetups").then(function(e){a.setState({meetups:e.data},function(){})}).catch(function(e){return console.log(e)})},a.state={meetups:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getMeetups()}},{key:"render",value:function(){var e=this.state.meetups.map(function(e,t){return l.a.createElement(E,{key:e.id,item:e})});return l.a.createElement("div",null,l.a.createElement("h2",null,"Meetups page."),l.a.createElement("ul",{className:"collection"},e))}}]),t}(n.Component),v=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"))},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={details:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getMeetup()}},{key:"getMeetup",value:function(){var e=this,t=this.props.match.params.id;h.a.get("http://localhost:3000/api/meetups/".concat(t)).then(function(t){e.setState({details:t.data},function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"onDelete",value:function(){var e=this,t=this.state.details.id;h.a.delete("http://localhost:3000/api/meetups/".concat(t)).then(function(t){e.props.history.push("/")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(f.b,{className:"btn grey",to:"/"},"Back"),l.a.createElement("h1",null,this.state.details.name),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"City: ",this.state.details.city),l.a.createElement("li",{className:"collection-item"},"Address: ",this.state.details.address)),l.a.createElement(f.b,{className:"btn",to:"/meetups/edit/".concat(this.state.details.id)}," Edit"),l.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red right"},"Delete"))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).addMeetup=function(e){h.a.request({method:"POST",url:"http://localhost:3000/api/meetups",data:e}).then(function(e){a.props.history.push("/")}).catch(function(e){return console.log(e)})},a.onSubmit=function(e){e.preventDefault();var t={name:a.refs.name.value,city:a.refs.city.value,address:a.refs.address.value};a.addMeetup(t)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.b,{to:"/",className:"btn grey"},"Back"),l.a.createElement("h1",null,"    Add Meetup!"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name"}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"city",ref:"city"}),l.a.createElement("label",{htmlFor:"city"},"City")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"address",ref:"address"}),l.a.createElement("label",{htmlFor:"address"},"Address")),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),t}(n.Component),N=a(33),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getMeetupDetails=function(){var e=a.props.match.params.id;h.a.get("http://localhost:3000/api/meetups/".concat(e)).then(function(e){a.setState({id:e.data.id,name:e.data.name,city:e.data.city,address:e.data.address},function(){console.log(a.state)})}).catch(function(e){return console.log(e)})},a.onSubmit=function(e){e.preventDefault();var t={name:a.refs.name.value,city:a.refs.city.value,address:a.refs.address.value};a.editMeetup(t)},a.handleInputChange=function(e){var t=e.target,n=t.value,l=t.name;a.setState(Object(N.a)({},l,n))},a.editMeetup=function(e){h.a.request({method:"put",url:"http://localhost:3000/api/meetups/".concat(a.state.id),data:e}).then(function(e){a.props.history.push("/")}).catch(function(e){return console.log(e)})},a.state={id:"",name:"",city:"",address:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getMeetupDetails()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(f.b,{className:"btn grey",to:"/"},"Back"),l.a.createElement("h1",null,"Edit Meetup"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name",value:this.state.name,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"city",ref:"city",value:this.state.city,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"city"},"City")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"address",ref:"address",value:this.state.address,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"address"},"Address")),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),t}(n.Component),j=function(){return l.a.createElement("main",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:b}),l.a.createElement(s.a,{exact:!0,path:"/about",component:v}),l.a.createElement(s.a,{exact:!0,path:"/meetups/add",component:g}),l.a.createElement(s.a,{exact:!0,path:"/meetups/:id",component:y}),l.a.createElement(s.a,{exact:!0,path:"/meetups/edit/:id",component:O})))},k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"blue darken-3"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("a",{href:"/",className:"brand-logo center"},"Meetupz"),l.a.createElement("a",{"data-activates":"main-menu",className:"button-collapse show-on-large"},l.a.createElement("i",{className:"fa fa-bars"})),l.a.createElement("ul",{className:"right hide-on-small-only"},l.a.createElement("li",null,l.a.createElement(f.b,{to:"/"},l.a.createElement("i",{className:"fa fa-users"})," Meetups"))),l.a.createElement("ul",{className:"side-nav",id:"main-menu"},l.a.createElement("li",null,l.a.createElement(f.b,{to:"/"},l.a.createElement("i",{className:"fa fa-users"})," Meetups")),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/meetups/add"},l.a.createElement("i",{className:"fa fa-plus"})," Add Meetup")),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/about"},l.a.createElement("i",{className:"fa fa-question-circle"})," About"))))))}}]),t}(n.Component),M=function(){return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("div",{className:"container"},l.a.createElement(j,null)),l.a.createElement("div",{className:"fixed-action-btn"},l.a.createElement(f.b,{to:"/meetups/add",className:"btn-floating btn-large red"},l.a.createElement("i",{className:"fa fa-plus"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.c4bd3e4b.chunk.js.map