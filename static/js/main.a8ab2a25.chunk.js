(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],[,,,,,,function(e,t){},,,function(e,t){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n.n(a),r=n(8),i=n.n(r),o=(n(15),n(2)),u=n(3),l=n(5),v=n(4),h=(n.p,n(16),n(9)),f=n.n(h),j=function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(s.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(f.a,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value,s=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:s})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"CitySearch",children:[Object(s.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(s.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(s.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(s.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(s.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={numberofevents:32},e.changeEventNumber=function(t){e.setState({numberofevents:t.target.value}),e.props.updateEvents(null,t.target.value)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"no-of-events",children:Object(s.jsx)("input",{type:"text",className:"numberOfEvents",value:this.state.numberofevents,onChange:this.changeEventNumber})})}}]),n}(a.Component),d=n(6),O=(n(17),function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numberofevents:32,currentLocation:"all"},e.updateEvents=function(t,n){var s=e.state,a=s.currentLocation,c=s.numberofevents;t?Object(d.getEvents)().then((function(n){var s=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,c);e.setState({events:s,currentLocation:t})})):Object(d.getEvents)().then((function(s){var c=("all"===t?s:s.filter((function(e){return e.location===a}))).slice(0,n);e.setState({events:c,numberofevents:n})}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(s.jsx)(j,{events:this.state.events}),Object(s.jsx)(p,{numberofevents:this.state.numberofevents,updateEvents:this.updateEvents})]})}}]),n}(a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.a8ab2a25.chunk.js.map