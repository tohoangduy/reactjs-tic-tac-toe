(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[3],{28:function(e,t,r){},31:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}function c(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}r.r(t);var m=r(0),y=r.n(m),h=r(11);r(28);function b(e){return y.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return p(t,y.a.Component),u(t,[{key:"renderSquare",value:function(e){var t=this;return y.a.createElement(b,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),y.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),y.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(),v=function(e){function t(e){var r;return o(this,t),(r=c(this,l(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return p(t,y.a.Component),u(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();S(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history,r=t[this.state.stepNumber],n=S(r.squares),o=t.map(function(t,r){var n=r?"Go to move #".concat(r):"Go to game start";return y.a.createElement("li",{key:r},y.a.createElement("button",{onClick:function(){return e.jumpTo(r)}},n))}),a="Next player: "+(this.state.xIsNext?"X":"O");return n&&(a="Winner: "+n),y.a.createElement("div",null,y.a.createElement(h.b,{to:"/"},"Back"),y.a.createElement("div",{className:"game"},y.a.createElement("div",{className:"game-board"},y.a.createElement(d,{squares:r.squares,onClick:function(t){return e.handleClick(t)}})),y.a.createElement("div",{className:"game-info"},y.a.createElement("div",null,a),y.a.createElement("ol",null,o))))}}]),t}();function S(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var o=n(t[r],3),a=o[0],u=o[1],i=o[2];if(e[a]&&e[a]===e[u]&&e[a]===e[i])return e[a]}return null}t.default=v}}]);
//# sourceMappingURL=3.daca757c.chunk.js.map