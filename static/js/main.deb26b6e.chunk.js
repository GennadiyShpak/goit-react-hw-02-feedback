(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(4),l=n.n(i),o=(n(16),n(5)),s=n(6),u=n(7),j=n(10),d=n(9);var b=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[t&&Object(c.jsx)("h2",{children:t}),n]})},p=n(8),h=n.n(p);var O=function(e){var t=e.onLeaveFeedback,n=e.options;return Object(c.jsx)(b,{className:h.a.feedbackControl,title:"Please leave feedback",children:n.map((function(e){return Object(c.jsx)("button",{type:"button",onClick:t,name:e,children:e},e)}))})},f=n(2),x=n.n(f);var m=function(e){var t=e.message;return Object(c.jsx)("p",{children:t})};var g=function(e){var t=e.good,n=e.bad,a=e.neutral,r=e.total,i=e.precent;return Object(c.jsxs)(b,{title:"Statistics",children:[0===r&&Object(c.jsx)(m,{message:"No feedback given"}),r>0&&Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:x.a.item,children:[Object(c.jsx)("p",{children:"Good:"}),Object(c.jsx)("p",{children:t})]}),Object(c.jsxs)("li",{className:x.a.item,children:[Object(c.jsx)("p",{children:"Neutral:"}),Object(c.jsx)("p",{children:a})]}),Object(c.jsxs)("li",{className:x.a.item,children:[Object(c.jsx)("p",{children:"Bad:"}),Object(c.jsx)("p",{children:n})]}),Object(c.jsxs)("li",{className:x.a.item,children:[Object(c.jsx)("p",{children:"Total:"}),Object(c.jsx)("p",{children:r})]}),Object(c.jsxs)("li",{className:x.a.item,children:[Object(c.jsx)("p",{children:"Precent:"}),Object(c.jsx)("p",{children:i})]})]})]})},v=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue,total:e.props.initialValue,precent:e.props.initialValue},e.incrementValue=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+=1)})),e.countTotalValue(),e.incrementPrecentValue()},e.countTotalValue=function(){e.setState((function(e){return{total:e.neutral+e.bad+e.good}}))},e.incrementPrecentValue=function(){e.setState((function(e){return{precent:Math.round(e.good/e.total*100)}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,a=e.neutral,r=e.total,i=e.precent;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{onLeaveFeedback:this.incrementValue,options:["good","neutral","bad"]}),Object(c.jsx)(g,{good:t,bad:n,neutral:a,total:r,precent:i})]})}}]),n}(a.Component);v.defaultProps={initialValue:0};var k=v,V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),V()},2:function(e,t,n){e.exports={item:"Statistics_item__2lbQ5"}},8:function(e,t,n){e.exports={feedbackControl:"Controls_feedbackControl__qbOSl"}}},[[17,1,2]]]);
//# sourceMappingURL=main.deb26b6e.chunk.js.map