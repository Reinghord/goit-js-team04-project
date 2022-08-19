!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o.register("ke5Oc",(function(e,t){"use strict";var n=o("c4C4W"),r=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=r(i.prototype.request,o);return n.extend(s,i.prototype,o),n.extend(s,o),s.create=function(n){return e(a(t,n))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var n,r=o("lGmLA"),i=Object.prototype.toString,a=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function h(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=s("Date"),p=s("File"),v=s("Blob"),y=s("FileList");function m(e){return"[object Function]"===i.call(e)}var g=s("URLSearchParams");function _(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var k,b=(k="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return k&&e instanceof k});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||m(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:h,isPlainObject:f,isUndefined:c,isDate:d,isFile:p,isBlob:v,isFunction:m,isStream:function(e){return h(e)&&m(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:_,merge:function e(){var t={};function n(n,r){f(t[r])&&f(n)?t[r]=e(t[r],n):f(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)_(arguments[r],n);return t},extend:function(e,t,n){return _(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,o,a={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)a[o=r[i]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:b,isFileList:y}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),o.register("9jbh3",(function(e,t){"use strict";var n=o("c4C4W"),r=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),l=c.validators;function h(e){this.defaults=e,this.interceptors={request:new i,response:new i}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var h=[a,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(u),o=Promise.resolve(t);h.length;)o=o.then(h.shift(),h.shift());return o}for(var f=t;r.length;){var d=r.shift(),p=r.shift();try{f=d(f)}catch(e){p(e);break}}try{o=a(f)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},h.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h})),o.register("6d5Pb",(function(e,t){"use strict";var n=o("c4C4W");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(n.isURLSearchParams(t))o=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var n=o("c4C4W");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),o.register("k04r0",(function(e,t){"use strict";var n=o("c4C4W"),r=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var n=o("c4C4W"),r=o("c74ni");e.exports=function(e,t,i){var o=this||r;return n.forEach(i,(function(n){e=n.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var n=o("6qd2L"),r=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,f={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=o("btSY7")),h),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),a=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return u(n?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(c)})),e.exports=f})),o.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),o.register("5TB86",(function(e,t){"use strict";var n=o("c4C4W");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(r,a),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,o,a,s,u){var c=Object.create(i);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,o,a,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=r})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var n=o("3aNd6").Buffer,r=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,a){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+a);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var s,u=a?a+"."+i:i;if(n&&!a&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(s=r.toArray(n)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),i.pop()}else t.append(a,o(n))}(e),t}})),o.register("3aNd6",(function(n,r){e(n.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(n.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var i,a,s=o("ds8z5"),u=o("8MBJY"),c=o("a2hTj"),l=o("eYQtU"),h=o("l5bVx"),f=o("2MbLg"),d=o("5d11t"),p=o("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=g,a=50;var y=2147483647;function m(e){if(e>y)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,g.prototype),t}function g(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return b(e)}return _(e,t,n)}function _(e,n,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!g.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|C(e,t),r=m(n),i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,n);if(ArrayBuffer.isView(e))return function(e){if(oe(e,Uint8Array)){var t=new Uint8Array(e);return I(t.buffer,t.byteOffset,t.byteLength)}return w(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(h)(e)));if(oe(e,ArrayBuffer)||e&&oe(e.buffer,ArrayBuffer))return I(e,n,r);if("undefined"!=typeof SharedArrayBuffer&&(oe(e,SharedArrayBuffer)||e&&oe(e.buffer,SharedArrayBuffer)))return I(e,n,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return g.from(i,n,r);var o=function(e){if(g.isBuffer(e)){var t=0|x(e.length),n=m(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||ae(e.length)?m(0):w(e);if("Buffer"===e.type&&Array.isArray(e.data))return w(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return g.from(e[Symbol.toPrimitive]("string"),n,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(h)(e)))}function k(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function b(e){return k(e),m(e<0?0:0|x(e))}function w(e){for(var t=e.length<0?0:0|x(e.length),n=m(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function I(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,g.prototype),r}function x(e){if(e>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return 0|e}function C(e,n){if(g.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||oe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":t(h)(e)));var r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var o=!1;;)switch(n){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return ne(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return re(e).length;default:if(o)return i?-1:ne(e).length;n=(""+n).toLowerCase(),o=!0}}function T(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return B(this,t,n);case"utf8":case"utf-8":return M(this,t,n);case"ascii":return F(this,t,n);case"latin1":case"binary":return j(this,t,n);case"base64":return D(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return q(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function E(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function S(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ae(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=g.from(t,r)),g.isBuffer(t))return 0===t.length?-1:R(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):R(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function R(e,t,n,r,i){var o,a=1,s=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,n/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var l=-1;for(o=n;o<s;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else-1!==l&&(o-=o-l),l=-1}else for(n+u>s&&(n=s-u),o=n;o>=0;o--){for(var h=!0,f=0;f<u;f++)if(c(e,o+f)!==c(t,f)){h=!1;break}if(h)return o}return-1}function N(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o,a=t.length;for(r>a/2&&(r=a/2),o=0;o<r;++o){var s=parseInt(t.substr(2*o,2),16);if(ae(s))return o;e[n+o]=s}return o}function O(e,t,n,r){return ie(ne(t,e.length-n),e,n,r)}function P(e,t,n,r){return ie(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function A(e,t,n,r){return ie(re(t),e,n,r)}function L(e,t,n,r){return ie(function(e,t){for(var n,r,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=(n=e.charCodeAt(a))>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function D(e,t,n){return 0===t&&n===e.length?d.fromByteArray(e):d.fromByteArray(e.slice(t,n))}function M(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o=e[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=n){var u=void 0,c=void 0,l=void 0,h=void 0;switch(s){case 1:o<128&&(a=o);break;case 2:128==(192&(u=e[i+1]))&&(h=(31&o)<<6|63&u)>127&&(a=h);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(h=(15&o)<<12|(63&u)<<6|63&c)>2047&&(h<55296||h>57343)&&(a=h);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(h=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&h<1114112&&(a=h)}}null===a?(a=65533,s=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|1023&a),r.push(a),i+=s}return function(e){var t=e.length;if(t<=U)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=U));return n}(r)}g.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),g.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.buffer}}),Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.byteOffset}}),g.poolSize=8192,g.from=function(e,t,n){return _(e,t,n)},Object.setPrototypeOf(g.prototype,Uint8Array.prototype),Object.setPrototypeOf(g,Uint8Array),g.alloc=function(e,t,n){return function(e,t,n){return k(e),e<=0?m(e):void 0!==t?"string"==typeof n?m(e).fill(t,n):m(e).fill(t):m(e)}(e,t,n)},g.allocUnsafe=function(e){return b(e)},g.allocUnsafeSlow=function(e){return b(e)},g.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==g.prototype},g.compare=function(e,t){if(oe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(e)||!g.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},g.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},g.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return g.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=g.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(oe(o,Uint8Array))i+o.length>r.length?(g.isBuffer(o)||(o=g.from(o)),o.copy(r,i)):Uint8Array.prototype.set.call(r,o,i);else{if(!g.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i)}i+=o.length}return r},g.byteLength=C,g.prototype._isBuffer=!0,g.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)E(this,t,t+1);return this},g.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)E(this,t,t+3),E(this,t+1,t+2);return this},g.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)E(this,t,t+7),E(this,t+1,t+6),E(this,t+2,t+5),E(this,t+3,t+4);return this},g.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?M(this,0,e):T.apply(this,arguments)},g.prototype.toLocaleString=g.prototype.toString,g.prototype.equals=function(e){if(!g.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===g.compare(this,e)},g.prototype.inspect=function(){var e="",t=a;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(g.prototype[v]=g.prototype.inspect),g.prototype.compare=function(e,n,r,i,o){if(oe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),!g.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":t(h)(e)));if(void 0===n&&(n=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),n<0||r>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&n>=r)return 0;if(i>=o)return-1;if(n>=r)return 1;if(this===e)return 0;for(var a=(o>>>=0)-(i>>>=0),s=(r>>>=0)-(n>>>=0),u=Math.min(a,s),c=this.slice(i,o),l=e.slice(n,r),f=0;f<u;++f)if(c[f]!==l[f]){a=c[f],s=l[f];break}return a<s?-1:s<a?1:0},g.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},g.prototype.indexOf=function(e,t,n){return S(this,e,t,n,!0)},g.prototype.lastIndexOf=function(e,t,n){return S(this,e,t,n,!1)},g.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return N(this,e,t,n);case"utf8":case"utf-8":return O(this,e,t,n);case"ascii":case"latin1":case"binary":return P(this,e,t,n);case"base64":return A(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function F(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function j(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function B(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=se[e[o]];return i}function q(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length-1;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function z(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function W(e,t,n,r,i,o){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function H(e,t,n,r,i){X(t,r,i,e,n,7);var o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function V(e,t,n,r,i){X(t,r,i,e,n,7);var o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function K(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function G(e,t,n,r,i){return t=+t,n>>>=0,i||K(e,0,n,4),p.write(e,t,n,r,23,4),n+4}function Y(e,t,n,r,i){return t=+t,n>>>=0,i||K(e,0,n,8),p.write(e,t,n,r,52,8),n+8}g.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,g.prototype),r},g.prototype.readUintLE=g.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||z(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},g.prototype.readUintBE=g.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||z(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},g.prototype.readUint8=g.prototype.readUInt8=function(e,t){return e>>>=0,t||z(e,1,this.length),this[e]},g.prototype.readUint16LE=g.prototype.readUInt16LE=function(e,t){return e>>>=0,t||z(e,2,this.length),this[e]|this[e+1]<<8},g.prototype.readUint16BE=g.prototype.readUInt16BE=function(e,t){return e>>>=0,t||z(e,2,this.length),this[e]<<8|this[e+1]},g.prototype.readUint32LE=g.prototype.readUInt32LE=function(e,t){return e>>>=0,t||z(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},g.prototype.readUint32BE=g.prototype.readUInt32BE=function(e,t){return e>>>=0,t||z(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},g.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+n*Math.pow(2,24);return BigInt(r)+(BigInt(i)<<BigInt(32))})),g.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),g.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||z(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},g.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||z(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},g.prototype.readInt8=function(e,t){return e>>>=0,t||z(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},g.prototype.readInt16LE=function(e,t){e>>>=0,t||z(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},g.prototype.readInt16BE=function(e,t){e>>>=0,t||z(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},g.prototype.readInt32LE=function(e,t){return e>>>=0,t||z(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},g.prototype.readInt32BE=function(e,t){return e>>>=0,t||z(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},g.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),g.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n)})),g.prototype.readFloatLE=function(e,t){return e>>>=0,t||z(e,4,this.length),p.read(this,e,!0,23,4)},g.prototype.readFloatBE=function(e,t){return e>>>=0,t||z(e,4,this.length),p.read(this,e,!1,23,4)},g.prototype.readDoubleLE=function(e,t){return e>>>=0,t||z(e,8,this.length),p.read(this,e,!0,52,8)},g.prototype.readDoubleBE=function(e,t){return e>>>=0,t||z(e,8,this.length),p.read(this,e,!1,52,8)},g.prototype.writeUintLE=g.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||W(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},g.prototype.writeUintBE=g.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||W(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},g.prototype.writeUint8=g.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,1,255,0),this[t]=255&e,t+1},g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);W(this,e,t,n,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<n&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},g.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);W(this,e,t,n,i-1,-i)}var o=n-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},g.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},g.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},g.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||W(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeFloatLE=function(e,t,n){return G(this,e,t,!0,n)},g.prototype.writeFloatBE=function(e,t,n){return G(this,e,t,!1,n)},g.prototype.writeDoubleLE=function(e,t,n){return Y(this,e,t,!0,n)},g.prototype.writeDoubleBE=function(e,t,n){return Y(this,e,t,!1,n)},g.prototype.copy=function(e,t,n,r){if(!g.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},g.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!g.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var i=e.charCodeAt(0);("utf8"===r&&i<128||"latin1"===r)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var a=g.isBuffer(e)?e:g.from(e,r),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=a[o%s]}return this};var J={};function Q(e,n,r){J[e]=function(r){t(l)(o,r);var i=t(f)(o);function o(){var r;return t(u)(this,o),r=i.call(this),Object.defineProperty(t(s)(r),"message",{value:n.apply(t(s)(r),arguments),writable:!0,configurable:!0}),r.name="".concat(r.name," [").concat(e,"]"),r.stack,delete r.name,r}return t(c)(o,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),o}(r)}function $(e){for(var t="",n=e.length,r="-"===e[0]?1:0;n>=r+4;n-=3)t="_".concat(e.slice(n-3,n)).concat(t);return"".concat(e.slice(0,n)).concat(t)}function X(e,n,r,i,o,a){if(e>r||e<n){var s,u="bigint"===(void 0===n?"undefined":t(h)(n))?"n":"";throw s=a>3?0===n||n===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(a+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(a+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(u):">= ".concat(n).concat(u," and <= ").concat(r).concat(u),new J.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,n){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||ee(t,e.length-(n+1))}(i,o,a)}function Z(e,t){if("number"!=typeof e)throw new J.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,n){if(Math.floor(e)!==e)throw Z(e,n),new J.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new J.ERR_BUFFER_OUT_OF_BOUNDS;throw new J.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}Q("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),Q("ERR_INVALID_ARG_TYPE",(function(e,n){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===n?"undefined":t(h)(n))}),TypeError),Q("ERR_OUT_OF_RANGE",(function(e,n,r){var i='The value of "'.concat(e,'" is out of range.'),o=r;return Number.isInteger(r)&&Math.abs(r)>Math.pow(2,32)?o=$(String(r)):"bigint"===(void 0===r?"undefined":t(h)(r))&&(o=String(r),(r>Math.pow(BigInt(2),BigInt(32))||r<-Math.pow(BigInt(2),BigInt(32)))&&(o=$(o)),o+="n"),i+=" It must be ".concat(n,". Received ").concat(o)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function ne(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function re(e){return d.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,n,r){var i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function oe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ae(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n}})),o.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,o=r.default(e);if(t){var a=r.default(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i.default(this,n)}};var n=a(o("aTHs7")),r=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(o("ds8z5")),r=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("5d11t",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=h(e),i=r[0],o=r[1],u=new s(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=a[e.charCodeAt(n)]<<18|a[e.charCodeAt(n+1)]<<12|a[e.charCodeAt(n+2)]<<6|a[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=a[e.charCodeAt(n)]<<2|a[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=a[e.charCodeAt(n)]<<10|a[e.charCodeAt(n+1)]<<4|a[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],a=16383,s=0,u=n-r;s<u;s+=a)i.push(f(e,s,s+a>u?u:s+a));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],a[u.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function f(e,t,n){for(var r,i,a=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,c=u>>1,l=-7,h=n?i-1:0,f=n?-1:1,d=e[t+h];for(h+=f,o=d&(1<<-l)-1,d>>=-l,l+=s;l>0;o=256*o+e[t+h],h+=f,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=r;l>0;a=256*a+e[t+h],h+=f,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,r),o-=c}return(d?-1:1)*a*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,h=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+h>=1?f/u:f*Math.pow(2,1-h))*u>=2&&(a++,u/=2),a+h>=l?(s=0,a=l):a+h>=1?(s=(t*u-1)*Math.pow(2,i),a+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;e[n+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[n+d]=255&a,d+=p,a/=256,c-=8);e[n+d-p]|=128*v}})),o.register("btSY7",(function(e,t){"use strict";var n=o("c4C4W"),r=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),l=o("gWbUy"),h=o("5TB86"),f=o("dW1zJ"),d=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var p,v=e.data,y=e.headers,m=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(v)&&n.isStandardBrowserEnv()&&delete y["Content-Type"];var _=new XMLHttpRequest;if(e.auth){var k=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.Authorization="Basic "+btoa(k+":"+b)}var w=s(e.baseURL,e.url);function I(){if(_){var n="getAllResponseHeaders"in _?u(_.getAllResponseHeaders()):null,i={data:m&&"text"!==m&&"json"!==m?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:e,request:_};r((function(e){t(e),g()}),(function(e){o(e),g()}),i),_=null}}if(_.open(e.method.toUpperCase(),a(w,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=I:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(I)},_.onabort=function(){_&&(o(new h("Request aborted",h.ECONNABORTED,e,_)),_=null)},_.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,_,_)),_=null},_.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,_)),_=null},n.isStandardBrowserEnv()){var x=(e.withCredentials||c(w))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;x&&(y[e.xsrfHeaderName]=x)}"setRequestHeader"in _&&n.forEach(y,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete y[t]:_.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),m&&"json"!==m&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){_&&(o(!e||e&&e.type?new f:e),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),v||(v=null);var C=d(w);C&&-1===["http","https","file"].indexOf(C)?o(new h("Unsupported protocol "+C+":",h.ERR_BAD_REQUEST,e)):_.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var n=o("5TB86");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),o.register("jFG8L",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(i)&&s.push("path="+i),n.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var n=o("7xjuH"),r=o("ftRZn");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var n=o("c4C4W"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),i=n.trim(e.substr(o+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([i]):a[t]?a[t]+", "+i:i}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var n=o("5TB86");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function a(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function s(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)})),r}})),o.register("9SeBc",(function(e,n){var r=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,n){s[e]=function(i){return(void 0===i?"undefined":t(r)(i))===e||"a"+(n<1?"n ":" ")+e}}));var u={};s.transitional=function(e,t,n){function r(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,o){if(!1===e)throw new a(r(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var n=o("dW1zJ");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=o("fVNic"))&&n.__esModule?n:{default:n}})),o("iE7OH").register(JSON.parse('{"EVgbq":"favourite_cocktails.ab3b69f8.js","49eZ3":"noresults.d0fe06ce.png","9IYgm":"noresults@2x.cc48e1f3.png","410VS":"icons.851cc789.svg","5UbS1":"favourite_cocktails.05da54c4.css"}'));var a={};function s(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)}))}};var u={},c=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var _={};u(_,o,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(R([])));b&&b!==n&&r.call(b,o)&&(_=b);var w=g.prototype=y.prototype=Object.create(_);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function C(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return m.prototype=g,u(w,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},I(x.prototype),u(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new x(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(u);try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var l,h=o("l5bVx"),f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,y=parseInt,m="object"==typeof n&&n&&n.Object===Object&&n,g="object"==typeof self&&self&&self.Object===Object&&self,_=m||g||Function("return this")(),k=Object.prototype.toString,b=Math.max,w=Math.min,I=function(){return _.Date.now()};function x(e){var n=void 0===e?"undefined":t(h)(e);return!!e&&("object"==n||"function"==n)}function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(h)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==k.call(e)}(e))return NaN;if(x(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var r=p.test(e);return r||v.test(e)?y(e.slice(2),r?2:8):d.test(e)?NaN:+e}l=function(e,t,n){var r,i,o,a,s,u,c=0,l=!1,h=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){return c=e,s=setTimeout(y,t),l?d(e):a}function v(e){var n=e-u;return void 0===u||n>=t||n<0||h&&e-c>=o}function y(){var e=I();if(v(e))return m(e);s=setTimeout(y,function(e){var n=t-(e-u);return h?w(n,o-(e-c)):n}(e))}function m(e){return s=void 0,f&&r?d(e):(r=i=void 0,a)}function g(){var e=I(),n=v(e);if(r=arguments,i=this,u=e,n){if(void 0===s)return p(u);if(h)return s=setTimeout(y,t),d(u)}return void 0===s&&(s=setTimeout(y,t)),a}return t=C(t)||0,x(n)&&(l=!!n.leading,o=(h="maxWait"in n)?b(C(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=u=i=s=void 0},g.flush=function(){return void 0===s?a:m(I())},g};var T;T=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("49eZ3");var E;E=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9IYgm");var S,R={backdrop:document.querySelector("[data-modal]"),modalWrapper:document.querySelector(".modal-wrapper"),cocktailsListCloseBtn:document.querySelector(".cocktails-learn-more__modal__close__btn"),cocktailsList:document.querySelector(".cocktails-list"),letterList:document.querySelector(".hero-list-button"),heroButtonRef:document.querySelector(".hero-list-button"),heroSelectRef:document.querySelector('[name="search"]'),titleCocktails:document.querySelector(".title-cocktails"),btnLoadMore:document.querySelector(".btn_load-more"),btnLogIn:document.querySelector(".btn-login")},N=R.backdrop,O=R.modalWrapper,P=R.cocktailsList,A=R.cocktailsListCloseBtn,L=R.letterList,D=R.heroButtonRef,M=R.heroSelectRef,U=R.titleCocktails,F=R.btnLoadMore,j=R.btnLogIn;S=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("410VS");var B=function(e){return e.data.drinks.map((function(e){return'<li class="cocktails-item" id="'.concat(e.idDrink,'" >\n  <img class="cocktails-img" src="').concat(e.strDrinkThumb,'" alt="').concat(e.strDrink,'" />\n  <p class="cocktails-name">').concat(e.strDrink,'</p>\n<div class="cocktails-btn__wrapper">  \n  <button class="cocktails-btn cocktails-learn" data-action="learn-more">Learn more</button>\n  <button class="cocktails-btn cocktails-add" data-action="favourite">\n    Add to\n    <svg width="21px" height="19px" class="cocktails-svg">\n      <use  href="').concat(S,'#icon-icon-fav"></use>\n    </svg>\n  </button>\n    </div>\n</li>')}))};function q(e){return window.screen.width<768?e.filter((function(e,t){return t<=2})).join(""):window.screen.width>=768&&window.screen.width<1280?e.filter((function(e,t){return t<=5})).join(""):e.filter((function(e,t){return t<=8})).join("")}function z(){return'<img class="image_no-result" srcset="'.concat(T," 1x, ").concat(E,' 2x" src="').concat(T,'" alt="No Results"></img>')}var W;W=o("ke5Oc");var H="https://www.thecocktaildb.com/api/json/v1/1";function V(){return K.apply(this,arguments)}function K(){return(K=t(a)(t(u).mark((function e(){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new URLSearchParams({f:"a"}),e.next=4,t(W).get("".concat(H,"/search.php?").concat(n));case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function G(e){return Y.apply(this,arguments)}function Y(){return(Y=t(a)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new URLSearchParams({f:"".concat(n)}),e.next=4,t(W).get("".concat(H,"/search.php?").concat(r));case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function J(e){return Q.apply(this,arguments)}function Q(){return(Q=t(a)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new URLSearchParams({i:"".concat(n)}),e.next=4,t(W).get("".concat(H,"/lookup.php?").concat(r));case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var $=document.querySelector(".mob-btn-open"),X=document.querySelector(".mob-btn-close"),Z=document.querySelector("[data-menu]"),ee=document.getElementById("checkbox"),te=document.querySelector(".theme-name__light"),ne=document.querySelector(".theme-name__dark"),re=document.querySelector(".favorite-acctive"),ie=document.querySelector(".favorite-wrapper"),oe=document.querySelectorAll("div.navigation-wrapper, div.theme-wrapper, form.search__form");function ae(){Z.classList.toggle("is-hidden"),oe.forEach((function(e){return e.classList.toggle("active")}))}function se(e){localStorage.setItem("theme",e),document.documentElement.className=e}$.addEventListener("click",ae),X.addEventListener("click",ae),ee.addEventListener("change",(function(e){te.classList.toggle("theme-acctive"),ne.classList.toggle("theme-acctive"),e.target.checked,"theme-dark"===localStorage.getItem("theme")?se("theme-light"):se("theme-dark")})),re.addEventListener("click",(function(){ie.classList.toggle("favorite-wrapper__close")})),"theme-dark"===localStorage.getItem("theme")?se("theme-dark"):se("theme-light");var ue=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];function ce(e){var t=e.map((function(e){return'<button type = "button" class="hero__button">'.concat(e,"</button>")})).join("");D.innerHTML=t}function le(e){var t=e.map((function(e){return'<option value="'.concat(e,'">').concat(e,"</option>")})).join("");M.innerHTML=t}D.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.currentTarget.children;var t=!0,n=!1,r=void 0;try{for(var i,o=e.currentTarget.children[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(a.classList.contains("hero-button-color")){a.classList.remove("hero-button-color");break}}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}e.target.classList.add("hero-button-color")}));var he,fe={};void 0!==n||(window||fe.window||fe.global),he=function(e){"use strict";var t={},n="iziToast",r=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),o="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,s=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],u=568,c={};t.children={};var l={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var h=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};h.prototype=window.Event.prototype,window.CustomEvent=h}var f=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(n,e[r],r,e);else if(e)for(var i=0,o=e.length;i<o;i++)t.call(n,e[i],i,e)},d=function(e,t){var n={};return f(e,(function(t,r){n[r]=e[r]})),f(t,(function(e,r){n[r]=t[r]})),n},p=function(e){var t=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=e;n.firstChild;)t.appendChild(n.firstChild);return t},v={move:function(e,t,n,r){var a,s=.3,u=180;0!==r&&(e.classList.add("iziToast-dragged"),e.style.transform="translateX("+r+"px)",r>0?(a=(u-r)/u)<s&&t.hide(d(n,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),e,"drag"):(a=(u+r)/u)<s&&t.hide(d(n,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),e,"drag"),e.style.opacity=a,a<s&&((i||o)&&(e.style.left=r+"px"),e.parentNode.style.opacity=s,this.stopMoving(e,null)))},startMoving:function(e,t,n,r){r=r||window.event;var i=a?r.touches[0].clientX:r.clientX,o=e.style.transform.replace("px)",""),s=i-(o=o.replace("translateX(",""));n.transitionIn&&e.classList.remove(n.transitionIn),n.transitionInMobile&&e.classList.remove(n.transitionInMobile),e.style.transition="",a?document.ontouchmove=function(r){r.preventDefault();var i=(r=r||window.event).touches[0].clientX-s;v.move(e,t,n,i)}:document.onmousemove=function(r){r.preventDefault();var i=(r=r||window.event).clientX-s;v.move(e,t,n,i)}},stopMoving:function(e,t){a?document.ontouchmove=function(){}:document.onmousemove=function(){},e.style.opacity="",e.style.transform="",e.classList.contains("iziToast-dragged")&&(e.classList.remove("iziToast-dragged"),e.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout((function(){e.style.transition=""}),400))}};return t.setSetting=function(e,n,r){t.children[e][n]=r},t.getSetting=function(e,n){return t.children[e][n]},t.destroy=function(){f(document.querySelectorAll(".iziToast-overlay"),(function(e,t){e.remove()})),f(document.querySelectorAll(".iziToast-wrapper"),(function(e,t){e.remove()})),f(document.querySelectorAll(".iziToast"),(function(e,t){e.remove()})),this.children={},document.removeEventListener("iziToast-opened",{},!1),document.removeEventListener("iziToast-opening",{},!1),document.removeEventListener("iziToast-closing",{},!1),document.removeEventListener("iziToast-closed",{},!1),document.removeEventListener("keyup",{},!1),c={}},t.settings=function(e){t.destroy(),c=e,l=d(l,e||{})},f({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},(function(e,n){t[n]=function(t){var n=d(c,t||{});n=d(e,n||{}),this.show(n)}})),t.progress=function(e,t,n){var r=this,i=t.getAttribute("data-iziToast-ref"),o=d(this.children[i],e||{}),a=t.querySelector(".iziToast-progressbar div");return{start:function(){void 0===o.time.REMAINING&&(t.classList.remove("iziToast-reseted"),null!==a&&(a.style.transition="width "+o.timeout+"ms "+o.progressBarEasing,a.style.width="0%"),o.time.START=(new Date).getTime(),o.time.END=o.time.START+o.timeout,o.time.TIMER=setTimeout((function(){clearTimeout(o.time.TIMER),t.classList.contains("iziToast-closing")||(r.hide(o,t,"timeout"),"function"==typeof n&&n.apply(r))}),o.timeout),r.setSetting(i,"time",o.time))},pause:function(){if(void 0!==o.time.START&&!t.classList.contains("iziToast-paused")&&!t.classList.contains("iziToast-reseted")){if(t.classList.add("iziToast-paused"),o.time.REMAINING=o.time.END-(new Date).getTime(),clearTimeout(o.time.TIMER),r.setSetting(i,"time",o.time),null!==a){var e=window.getComputedStyle(a).getPropertyValue("width");a.style.transition="none",a.style.width=e}"function"==typeof n&&setTimeout((function(){n.apply(r)}),10)}},resume:function(){void 0!==o.time.REMAINING?(t.classList.remove("iziToast-paused"),null!==a&&(a.style.transition="width "+o.time.REMAINING+"ms "+o.progressBarEasing,a.style.width="0%"),o.time.END=(new Date).getTime()+o.time.REMAINING,o.time.TIMER=setTimeout((function(){clearTimeout(o.time.TIMER),t.classList.contains("iziToast-closing")||(r.hide(o,t,"timeout"),"function"==typeof n&&n.apply(r))}),o.time.REMAINING),r.setSetting(i,"time",o.time)):this.start()},reset:function(){clearTimeout(o.time.TIMER),delete o.time.REMAINING,r.setSetting(i,"time",o.time),t.classList.add("iziToast-reseted"),t.classList.remove("iziToast-paused"),null!==a&&(a.style.transition="none",a.style.width="100%"),"function"==typeof n&&setTimeout((function(){n.apply(r)}),10)}}},t.hide=function(e,t,n){"object"!=typeof t&&(t=document.querySelector(t));var i=this,o=d(this.children[t.getAttribute("data-iziToast-ref")],e||{});o.closedBy=n||null,delete o.time.REMAINING,t.classList.add("iziToast-closing"),function(){var e=document.querySelector(".iziToast-overlay");if(null!==e){var t=e.getAttribute("data-iziToast-ref"),n=(t=t.split(",")).indexOf(String(o.ref));-1!==n&&t.splice(n,1),e.setAttribute("data-iziToast-ref",t.join()),0===t.length&&(e.classList.remove("fadeIn"),e.classList.add("fadeOut"),setTimeout((function(){e.remove()}),700))}}(),o.transitionIn&&t.classList.remove(o.transitionIn),o.transitionInMobile&&t.classList.remove(o.transitionInMobile),r||window.innerWidth<=u?o.transitionOutMobile&&t.classList.add(o.transitionOutMobile):o.transitionOut&&t.classList.add(o.transitionOut);var a=t.parentNode.offsetHeight;t.parentNode.style.height=a+"px",t.style.pointerEvents="none",(!r||window.innerWidth>u)&&(t.parentNode.style.transitionDelay="0.2s");try{var s=new CustomEvent("iziToast-closing",{detail:o,bubbles:!0,cancelable:!0});document.dispatchEvent(s)}catch(e){console.warn(e)}setTimeout((function(){t.parentNode.style.height="0px",t.parentNode.style.overflow="",setTimeout((function(){delete i.children[o.ref],t.parentNode.remove();try{var e=new CustomEvent("iziToast-closed",{detail:o,bubbles:!0,cancelable:!0});document.dispatchEvent(e)}catch(e){console.warn(e)}void 0!==o.onClosed&&o.onClosed.apply(null,[o,t,n])}),1e3)}),200),void 0!==o.onClosing&&o.onClosing.apply(null,[o,t,n])},t.show=function(e){var i,o=this,h=d(c,e||{});if((h=d(l,h)).time={},null===h.id&&(h.id=(i=h.title+h.message+h.color,btoa(encodeURIComponent(i)).replace(/=/g,""))),1===h.displayMode||"once"==h.displayMode)try{if(document.querySelectorAll(".iziToast#"+h.id).length>0)return!1}catch(e){console.warn("[iziToast] Could not find an element with this selector: #"+h.id+". Try to set an valid id.")}if(2===h.displayMode||"replace"==h.displayMode)try{f(document.querySelectorAll(".iziToast#"+h.id),(function(e,t){o.hide(h,e,"replaced")}))}catch(e){console.warn("[iziToast] Could not find an element with this selector: #"+h.id+". Try to set an valid id.")}h.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),t.children[h.ref]=h;var y,m={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:h.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};m.toast.setAttribute("data-iziToast-ref",h.ref),m.toast.appendChild(m.toastBody),m.toastCapsule.appendChild(m.toast),function(){if(m.toast.classList.add(n),m.toast.classList.add("iziToast-opening"),m.toastCapsule.classList.add("iziToast-capsule"),m.toastBody.classList.add("iziToast-body"),m.toastTexts.classList.add("iziToast-texts"),r||window.innerWidth<=u?h.transitionInMobile&&m.toast.classList.add(h.transitionInMobile):h.transitionIn&&m.toast.classList.add(h.transitionIn),h.class){var e=h.class.split(" ");f(e,(function(e,t){m.toast.classList.add(e)}))}var t;h.id&&(m.toast.id=h.id),h.rtl&&(m.toast.classList.add("iziToast-rtl"),m.toast.setAttribute("dir","rtl")),h.layout>1&&m.toast.classList.add("iziToast-layout"+h.layout),h.balloon&&m.toast.classList.add("iziToast-balloon"),h.maxWidth&&(isNaN(h.maxWidth)?m.toast.style.maxWidth=h.maxWidth:m.toast.style.maxWidth=h.maxWidth+"px"),""===h.theme&&"light"===h.theme||m.toast.classList.add("iziToast-theme-"+h.theme),h.color&&("#"==(t=h.color).substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)?m.toast.style.background=h.color:m.toast.classList.add("iziToast-color-"+h.color)),h.backgroundColor&&(m.toast.style.background=h.backgroundColor,h.balloon&&(m.toast.style.borderColor=h.backgroundColor))}(),h.image&&(m.cover.classList.add("iziToast-cover"),m.cover.style.width=h.imageWidth+"px",function(e){try{return btoa(atob(e))==e}catch(e){return!1}}(h.image.replace(/ /g,""))?m.cover.style.backgroundImage="url(data:image/png;base64,"+h.image.replace(/ /g,"")+")":m.cover.style.backgroundImage="url("+h.image+")",h.rtl?m.toastBody.style.marginRight=h.imageWidth+10+"px":m.toastBody.style.marginLeft=h.imageWidth+10+"px",m.toast.appendChild(m.cover)),h.close?(m.buttonClose=document.createElement("button"),m.buttonClose.type="button",m.buttonClose.classList.add("iziToast-close"),m.buttonClose.addEventListener("click",(function(e){e.target,o.hide(h,m.toast,"button")})),m.toast.appendChild(m.buttonClose)):h.rtl?m.toast.style.paddingLeft="18px":m.toast.style.paddingRight="18px",h.progressBar&&(m.progressBar=document.createElement("div"),m.progressBarDiv=document.createElement("div"),m.progressBar.classList.add("iziToast-progressbar"),m.progressBarDiv.style.background=h.progressBarColor,m.progressBar.appendChild(m.progressBarDiv),m.toast.appendChild(m.progressBar)),h.timeout&&(h.pauseOnHover&&!h.resetOnHover&&(m.toast.addEventListener("mouseenter",(function(e){o.progress(h,m.toast).pause()})),m.toast.addEventListener("mouseleave",(function(e){o.progress(h,m.toast).resume()}))),h.resetOnHover&&(m.toast.addEventListener("mouseenter",(function(e){o.progress(h,m.toast).reset()})),m.toast.addEventListener("mouseleave",(function(e){o.progress(h,m.toast).start()})))),h.iconUrl?(m.icon.setAttribute("class","iziToast-icon"),m.icon.setAttribute("src",h.iconUrl)):h.icon&&(m.icon.setAttribute("class","iziToast-icon "+h.icon),h.iconText&&m.icon.appendChild(document.createTextNode(h.iconText)),h.iconColor&&(m.icon.style.color=h.iconColor)),(h.icon||h.iconUrl)&&(h.rtl?m.toastBody.style.paddingRight="33px":m.toastBody.style.paddingLeft="33px",m.toastBody.appendChild(m.icon)),h.title.length>0&&(m.strong=document.createElement("strong"),m.strong.classList.add("iziToast-title"),m.strong.appendChild(p(h.title)),m.toastTexts.appendChild(m.strong),h.titleColor&&(m.strong.style.color=h.titleColor),h.titleSize&&(isNaN(h.titleSize)?m.strong.style.fontSize=h.titleSize:m.strong.style.fontSize=h.titleSize+"px"),h.titleLineHeight&&(isNaN(h.titleSize)?m.strong.style.lineHeight=h.titleLineHeight:m.strong.style.lineHeight=h.titleLineHeight+"px")),h.message.length>0&&(m.p=document.createElement("p"),m.p.classList.add("iziToast-message"),m.p.appendChild(p(h.message)),m.toastTexts.appendChild(m.p),h.messageColor&&(m.p.style.color=h.messageColor),h.messageSize&&(isNaN(h.titleSize)?m.p.style.fontSize=h.messageSize:m.p.style.fontSize=h.messageSize+"px"),h.messageLineHeight&&(isNaN(h.titleSize)?m.p.style.lineHeight=h.messageLineHeight:m.p.style.lineHeight=h.messageLineHeight+"px")),h.title.length>0&&h.message.length>0&&(h.rtl?m.strong.style.marginLeft="10px":2===h.layout||h.rtl||(m.strong.style.marginRight="10px")),m.toastBody.appendChild(m.toastTexts),h.inputs.length>0&&(m.inputs.classList.add("iziToast-inputs"),f(h.inputs,(function(e,t){m.inputs.appendChild(p(e[0])),(y=m.inputs.childNodes)[t].classList.add("iziToast-inputs-child"),e[3]&&setTimeout((function(){y[t].focus()}),300),y[t].addEventListener(e[1],(function(t){return(0,e[2])(o,m.toast,this,t)}))})),m.toastBody.appendChild(m.inputs)),h.buttons.length>0&&(m.buttons.classList.add("iziToast-buttons"),f(h.buttons,(function(e,t){m.buttons.appendChild(p(e[0]));var n=m.buttons.childNodes;n[t].classList.add("iziToast-buttons-child"),e[2]&&setTimeout((function(){n[t].focus()}),300),n[t].addEventListener("click",(function(t){return t.preventDefault(),(0,e[1])(o,m.toast,this,t,y)}))}))),m.toastBody.appendChild(m.buttons),h.message.length>0&&(h.inputs.length>0||h.buttons.length>0)&&(m.p.style.marginBottom="0"),(h.inputs.length>0||h.buttons.length>0)&&(h.rtl?m.toastTexts.style.marginLeft="10px":m.toastTexts.style.marginRight="10px",h.inputs.length>0&&h.buttons.length>0&&(h.rtl?m.inputs.style.marginLeft="8px":m.inputs.style.marginRight="8px")),m.toastCapsule.style.visibility="hidden",setTimeout((function(){var e=m.toast.offsetHeight,t=m.toast.currentStyle||window.getComputedStyle(m.toast),n=t.marginTop;n=n.split("px"),n=parseInt(n[0]);var r=t.marginBottom;r=r.split("px"),r=parseInt(r[0]),m.toastCapsule.style.visibility="",m.toastCapsule.style.height=e+r+n+"px",setTimeout((function(){m.toastCapsule.style.height="auto",h.target&&(m.toastCapsule.style.overflow="visible")}),500),h.timeout&&o.progress(h,m.toast).start()}),100),function(){var e=h.position;if(h.target)m.wrapper=document.querySelector(h.target),m.wrapper.classList.add("iziToast-target"),h.targetFirst?m.wrapper.insertBefore(m.toastCapsule,m.wrapper.firstChild):m.wrapper.appendChild(m.toastCapsule);else{if(-1==s.indexOf(h.position))return void console.warn("[iziToast] Incorrect position.\nIt can be › "+s);e=r||window.innerWidth<=u?"bottomLeft"==h.position||"bottomRight"==h.position||"bottomCenter"==h.position?"iziToast-wrapper-bottomCenter":"topLeft"==h.position||"topRight"==h.position||"topCenter"==h.position?"iziToast-wrapper-topCenter":"iziToast-wrapper-center":"iziToast-wrapper-"+e,m.wrapper=document.querySelector(".iziToast-wrapper."+e),m.wrapper||(m.wrapper=document.createElement("div"),m.wrapper.classList.add("iziToast-wrapper"),m.wrapper.classList.add(e),document.body.appendChild(m.wrapper)),"topLeft"==h.position||"topCenter"==h.position||"topRight"==h.position?m.wrapper.insertBefore(m.toastCapsule,m.wrapper.firstChild):m.wrapper.appendChild(m.toastCapsule)}isNaN(h.zindex)?console.warn("[iziToast] Invalid zIndex."):m.wrapper.style.zIndex=h.zindex}(),h.overlay&&(null!==document.querySelector(".iziToast-overlay.fadeIn")?(m.overlay=document.querySelector(".iziToast-overlay"),m.overlay.setAttribute("data-iziToast-ref",m.overlay.getAttribute("data-iziToast-ref")+","+h.ref),isNaN(h.zindex)||null===h.zindex||(m.overlay.style.zIndex=h.zindex-1)):(m.overlay.classList.add("iziToast-overlay"),m.overlay.classList.add("fadeIn"),m.overlay.style.background=h.overlayColor,m.overlay.setAttribute("data-iziToast-ref",h.ref),isNaN(h.zindex)||null===h.zindex||(m.overlay.style.zIndex=h.zindex-1),document.querySelector("body").appendChild(m.overlay)),h.overlayClose?(m.overlay.removeEventListener("click",{}),m.overlay.addEventListener("click",(function(e){o.hide(h,m.toast,"overlay")}))):m.overlay.removeEventListener("click",{})),function(){if(h.animateInside){m.toast.classList.add("iziToast-animateInside");var e=[200,100,300];"bounceInLeft"!=h.transitionIn&&"bounceInRight"!=h.transitionIn||(e=[400,200,400]),h.title.length>0&&setTimeout((function(){m.strong.classList.add("slideIn")}),e[0]),h.message.length>0&&setTimeout((function(){m.p.classList.add("slideIn")}),e[1]),(h.icon||h.iconUrl)&&setTimeout((function(){m.icon.classList.add("revealIn")}),e[2]);var t=150;h.buttons.length>0&&m.buttons&&setTimeout((function(){f(m.buttons.childNodes,(function(e,n){setTimeout((function(){e.classList.add("revealIn")}),t),t+=150}))}),h.inputs.length>0?150:0),h.inputs.length>0&&m.inputs&&(t=150,f(m.inputs.childNodes,(function(e,n){setTimeout((function(){e.classList.add("revealIn")}),t),t+=150})))}}(),h.onOpening.apply(null,[h,m.toast]);try{var g=new CustomEvent("iziToast-opening",{detail:h,bubbles:!0,cancelable:!0});document.dispatchEvent(g)}catch(e){console.warn(e)}setTimeout((function(){m.toast.classList.remove("iziToast-opening"),m.toast.classList.add("iziToast-opened");try{var e=new CustomEvent("iziToast-opened",{detail:h,bubbles:!0,cancelable:!0});document.dispatchEvent(e)}catch(e){console.warn(e)}h.onOpened.apply(null,[h,m.toast])}),1e3),h.drag&&(a?(m.toast.addEventListener("touchstart",(function(e){v.startMoving(this,o,h,e)}),!1),m.toast.addEventListener("touchend",(function(e){v.stopMoving(this,e)}),!1)):(m.toast.addEventListener("mousedown",(function(e){e.preventDefault(),v.startMoving(this,o,h,e)}),!1),m.toast.addEventListener("mouseup",(function(e){e.preventDefault(),v.stopMoving(this,e)}),!1))),h.closeOnEscape&&document.addEventListener("keyup",(function(e){27==(e=e||window.event).keyCode&&o.hide(h,m.toast,"esc")})),h.closeOnClick&&m.toast.addEventListener("click",(function(e){o.hide(h,m.toast,"toast")})),o.toast=m.toast},t},"function"==typeof define&&define.amd?define([],he()):fe=he();var de=function(){t(fe).error({title:"Error",message:"Oops... something went wrong!",position:"topRight"})},pe=function(){t(fe).error({title:"Error",message:"You need to login to do that!",position:"topRight"})};function ve(e){return e.data.drinks.map((function(e){return'<div class="img-and-text-wrapper"><img\n      class="learn-more__image"\n      src="'.concat(e.strDrinkThumb,'"\n      alt="').concat(e.strDrink,'"\n    />\n    <div class="ingr-wrapper">\n      <h3 class="ingr-wrapper__name">').concat(e.strDrink,'</h3>\n      <h4 class="ingr-wrapper__components">INGREDIENTS</h4>\n      <p class="ingr-wrapper__subtitle">Per cocktail</p>\n      <ul class="ingr-wrapper__list"></ul>\n      </div>\n    </div>\n    <div class="instructions">\n      <h3 class="instructions__name">Instractions:</h3>\n      <p class="instructions__text">').concat(e.strInstructions,'</p>\n    </div>\n    <button type="button" class="cocktails-learn cocktails-learn-more__modal__btn">\n      Add to favorite\n    </button>\n')})).join("")}function ye(e){return me.apply(this,arguments)}function me(){return(me=t(a)(t(u).mark((function e(n){var r,i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("learn-more"!==n.target.dataset.action){e.next=16;break}return e.prev=1,r=n.target.parentElement.parentElement.id,e.next=5,J(r);case 5:i=e.sent,o=ve(i),O.innerHTML=o,_e(i),document.body.classList.toggle("modal-open"),N.classList.toggle("is-hidden"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),de();case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function ge(){document.body.classList.toggle("modal-open"),N.classList.toggle("is-hidden")}function _e(e){for(var t=document.querySelector(".ingr-wrapper__list"),n=e.data.drinks[0],r=Object.values(n),i=[],o=17;o<r.length;o++)o<31&&i.push(r[o]);var a=i.filter((function(e){return e})).map((function(e){return'<li class="ingr-wrapper__ingredient"><button class="ingr-wrapper__btn">'.concat(e,"</button></li>")})).join("");t.innerHTML=a}function ke(){var e=JSON.parse(localStorage.getItem("markup"));if(!(P.childElementCount<e.length-1))return F.classList.add("btn_hidden");F.classList.remove("btn_hidden")}function be(e){return we.apply(this,arguments)}function we(){return(we=t(a)(t(u).mark((function e(n){var r,i,o,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"!==n.target.nodeName){e.next=22;break}return e.prev=1,r=n.target.textContent,e.next=5,G(r);case 5:if(!(i=e.sent).data.drinks){e.next=14;break}return o=B(i),localStorage.setItem("markup",JSON.stringify(o)),a=q(o),U.innerHTML="Cocktails",P.innerHTML=a,ke(),e.abrupt("return");case 14:return U.innerHTML="Sorry, we didn't find any cocktail for you",F.classList.add("btn_hidden"),e.abrupt("return",P.innerHTML=z());case 19:e.prev=19,e.t0=e.catch(1),de();case 22:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}function Ie(){return xe.apply(this,arguments)}function xe(){return(xe=t(a)(t(u).mark((function e(){var n,r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V();case 3:n=e.sent,r=B(n),localStorage.setItem("markup",JSON.stringify(r)),i=q(r),P.innerHTML=i,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),de();case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}F.addEventListener("click",(function(){var e=q(JSON.parse(localStorage.getItem("markup")).filter((function(e,t){return t>P.childElementCount})));P.insertAdjacentHTML("beforeend",e),ke()}));var Ce=o("8MBJY"),Te=o("a2hTj"),Ee=o("hKHmD"),Se={};Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=function(e){return Re.default(e)||Ne.default(e)||Pe.default(e)||Oe.default()};var Re=Ae(o("kMC0W")),Ne=Ae(o("7AJDX")),Oe=Ae(o("8CtQK")),Pe=Ae(o("auk6i"));function Ae(e){return e&&e.__esModule?e:{default:e}}Ce=o("8MBJY"),Te=o("a2hTj");var Le={};Object.defineProperty(Le,"__esModule",{value:!0}),Le.default=function(e,t){return De.default(e)||Me.default(e,t)||Fe.default(e,t)||Ue.default()};var De=je(o("8slrw")),Me=je(o("7AJDX")),Ue=je(o("ifqQW")),Fe=je(o("auk6i"));function je(e){return e&&e.__esModule?e:{default:e}}var Be=o("ds8z5"),qe=(Ce=o("8MBJY"),Te=o("a2hTj"),o("eYQtU")),ze={};Object.defineProperty(ze,"__esModule",{value:!0}),ze.default=function(e){return Ye(e)};var We=Ge(o("ge8co")),He=Ge(o("cZGw3")),Ve=Ge(o("fVNic")),Ke=Ge(o("gD1JV"));function Ge(e){return e&&e.__esModule?e:{default:e}}function Ye(e){var t="function"==typeof Map?new Map:void 0;return Ye=function(e){if(null===e||!He.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return We.default(e,arguments,Ve.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Ke.default(n,e)},Ye(e)}var Je=o("2MbLg"),Qe=!1,$e=!1,Xe="${JSCORE_VERSION}",Ze=function(e,t){if(!e)throw et(t)},et=function(e){return new Error("Firebase Database ("+Xe+") INTERNAL ASSERT FAILED: "+e)},tt=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},nt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,h=(3&o)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,a||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tt(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},rt=function(e){var t=tt(e);return nt.encodeByteArray(t,!0)},it=function(e){return rt(e).replace(/\./g,"")},ot=function(e){try{return nt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(e){return st(void 0,e)}function st(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=st(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ut=function(){"use strict";function e(){var n=this;t(Ce)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(Te)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function lt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function ht(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ft(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function dt(){return!0===Qe||!0===$e}function pt(){return"object"==typeof indexedDB}function vt(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function yt(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mt=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e,i,o){var a;return t(Ce)(this,r),(a=n.call(this,i)).code=e,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(t(Be)(a),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(Be)(a),gt.prototype.create),a}return r}(t(ze)(Error)),gt=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(Te)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?_t(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new mt(o,u,i);return c}}]),e}();function _t(e,t){return e.replace(kt,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var kt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return JSON.parse(e)}function wt(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=bt(ot(o[0])||""),n=bt(ot(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},xt=function(e){var t=It(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Tt(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Et(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function St(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Rt(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(Nt(l)&&Nt(h)){if(!Rt(l,h))return!1}else if(l!==h)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var f=!0,d=!1,p=void 0;try{for(var v,y=r[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){var m=v.value;if(!n.includes(m))return!1}}catch(e){d=!0,p=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw p}}return!0}function Nt(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(e,r){var i=t(Le)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){n.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(e)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n.length?"&"+n.join("&"):""}function Pt(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(Le)(e.split("="),2),i=r[0],o=r[1];n[decodeURIComponent(i)]=decodeURIComponent(o)}})),n}function At(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt=function(){"use strict";function e(){t(Ce)(this,e),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return t(Te)(e,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var o=16;o<80;o++){var a=n[o-3]^n[o-8]^n[o-14]^n[o-16];n[o]=4294967295&(a<<1|a>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],f=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=f^l&(h^f),u=1518500249):(s=l^h^f,u=1859775393):p<60?(s=l&h|f&(l|h),u=2400959708):(s=l^h^f,u=3395469782);var v=(c<<5|c>>>27)+s+d+u+n[p]&4294967295;d=f,f=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}]),e}();var Dt=function(){"use strict";function e(n,r){var i=this;t(Ce)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(Te)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Mt),void 0===r.error&&(r.error=Mt),void 0===r.complete&&(r.complete=Mt);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Mt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ft=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,Ze(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},jt=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},Bt=144e5;function qt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(Bt,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e){return e&&e._delegate?e._delegate:e}var Wt=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(Te)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Ht="[DEFAULT]",Vt=function(){"use strict";function e(n,r){t(Ce)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(Te)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new ut;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=t(Le)(o.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(Se)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(Se)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=t(Le)(c.value,2),f=h[0],d=h[1],p=this.normalizeInstanceIdentifier(f);i===p&&d.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ht?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht;return this.component?this.component.multipleInstances?e:Ht:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt,Gt,Yt=function(){"use strict";function e(n){t(Ce)(this,e),this.name=n,this.providers=new Map}return t(Te)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Vt(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),Jt=(Ce=o("8MBJY"),Te=o("a2hTj"),Ee=o("hKHmD"),[]);(Gt=Kt||(Kt={}))[Gt.DEBUG=0]="DEBUG",Gt[Gt.VERBOSE=1]="VERBOSE",Gt[Gt.INFO=2]="INFO",Gt[Gt.WARN=3]="WARN",Gt[Gt.ERROR=4]="ERROR",Gt[Gt.SILENT=5]="SILENT";var Qt,$t={debug:Kt.DEBUG,verbose:Kt.VERBOSE,info:Kt.INFO,warn:Kt.WARN,error:Kt.ERROR,silent:Kt.SILENT},Xt=Kt.INFO,Zt=(Qt={},t(Ee)(Qt,Kt.DEBUG,"log"),t(Ee)(Qt,Kt.VERBOSE,"log"),t(Ee)(Qt,Kt.INFO,"info"),t(Ee)(Qt,Kt.WARN,"warn"),t(Ee)(Qt,Kt.ERROR,"error"),Qt),en=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=Zt[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(e.name,":")].concat(t(Se)(i)))}},tn=function(){"use strict";function e(n){t(Ce)(this,e),this.name=n,this._logLevel=Xt,this._logHandler=en,this._userLogHandler=null,Jt.push(this)}return t(Te)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Kt))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?$t[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Kt.DEBUG].concat(t(Se)(n))),this._logHandler.apply(this,[this,Kt.DEBUG].concat(t(Se)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Kt.VERBOSE].concat(t(Se)(n))),this._logHandler.apply(this,[this,Kt.VERBOSE].concat(t(Se)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Kt.INFO].concat(t(Se)(n))),this._logHandler.apply(this,[this,Kt.INFO].concat(t(Se)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Kt.WARN].concat(t(Se)(n))),this._logHandler.apply(this,[this,Kt.WARN].concat(t(Se)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Kt.ERROR].concat(t(Se)(n))),this._logHandler.apply(this,[this,Kt.ERROR].concat(t(Se)(n)))}}]),e}();var nn={};Object.defineProperty(nn,"__esModule",{value:!0}),nn.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){on.default(e,t,n[t])}))}return e};var rn,on=(rn=o("hKHmD"))&&rn.__esModule?rn:{default:rn};var an,sn;var un=new WeakMap,cn=new WeakMap,ln=new WeakMap,hn=new WeakMap,fn=new WeakMap;var dn={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return cn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ln.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function pn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(sn||(sn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(mn(this),n),yn(un.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return yn(e.apply(mn(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,s=(a=e).call.apply(a,[mn(this),n].concat(t(Se)(i)));return ln.set(s,n.sort?n.sort():[n]),yn(s)}}function vn(e){return"function"==typeof e?pn(e):(e instanceof IDBTransaction&&function(e){if(!cn.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));cn.set(e,t)}}(e),t=e,(an||(an=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,dn):e);var t}function yn(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(yn(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&un.set(e,t)})).catch((function(){})),fn.set(n,t),n;var t,n;if(hn.has(e))return hn.get(e);var r=vn(e);return r!==e&&(hn.set(e,r),fn.set(r,e)),r}var mn=function(e){return fn.get(e)};function gn(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=yn(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(yn(s.result),e.oldVersion,e.newVersion,yn(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var _n=["get","getKey","getAll","getAllKeys","count"],kn=["put","add","delete","clear"],bn=new Map;function wn(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(bn.get(n))return bn.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=kn.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||_n.includes(r))){var s,c=(s=t(a)(t(u).mark((function e(n){var a,s,c,l,h,f,d=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=d.length,s=new Array(a>1?a-1:0),c=1;c<a;c++)s[c-1]=d[c];return h=this.transaction(n,o?"readwrite":"readonly"),f=h.store,i&&(f=f.index(s.shift())),e.next=7,Promise.all([(l=f)[r].apply(l,t(Se)(s)),o&&h.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)});return bn.set(n,c),c}}}dn=function(e){return t(nn)({},e,{get:function(t,n,r){return wn(t,n)||e.get(t,n,r)},has:function(t,n){return!!wn(t,n)||e.has(t,n)}})}(dn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var In=function(){"use strict";function e(n){t(Ce)(this,e),this.container=n}return t(Te)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var xn,Cn,Tn="@firebase/app",En="0.7.30",Sn=new tn("@firebase/app"),Rn="[DEFAULT]",Nn=(xn={},t(Ee)(xn,Tn,"fire-core"),t(Ee)(xn,"@firebase/app-compat","fire-core-compat"),t(Ee)(xn,"@firebase/analytics","fire-analytics"),t(Ee)(xn,"@firebase/analytics-compat","fire-analytics-compat"),t(Ee)(xn,"@firebase/app-check","fire-app-check"),t(Ee)(xn,"@firebase/app-check-compat","fire-app-check-compat"),t(Ee)(xn,"@firebase/auth","fire-auth"),t(Ee)(xn,"@firebase/auth-compat","fire-auth-compat"),t(Ee)(xn,"@firebase/database","fire-rtdb"),t(Ee)(xn,"@firebase/database-compat","fire-rtdb-compat"),t(Ee)(xn,"@firebase/functions","fire-fn"),t(Ee)(xn,"@firebase/functions-compat","fire-fn-compat"),t(Ee)(xn,"@firebase/installations","fire-iid"),t(Ee)(xn,"@firebase/installations-compat","fire-iid-compat"),t(Ee)(xn,"@firebase/messaging","fire-fcm"),t(Ee)(xn,"@firebase/messaging-compat","fire-fcm-compat"),t(Ee)(xn,"@firebase/performance","fire-perf"),t(Ee)(xn,"@firebase/performance-compat","fire-perf-compat"),t(Ee)(xn,"@firebase/remote-config","fire-rc"),t(Ee)(xn,"@firebase/remote-config-compat","fire-rc-compat"),t(Ee)(xn,"@firebase/storage","fire-gcs"),t(Ee)(xn,"@firebase/storage-compat","fire-gcs-compat"),t(Ee)(xn,"@firebase/firestore","fire-fst"),t(Ee)(xn,"@firebase/firestore-compat","fire-fst-compat"),t(Ee)(xn,"fire-js","fire-js"),t(Ee)(xn,"firebase","fire-js-all"),xn),On=new Map,Pn=new Map;function An(e,t){try{e.container.addComponent(t)}catch(n){Sn.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Ln(e){var t=e.name;if(Pn.has(t))return Sn.debug("There were multiple attempts to register component ".concat(t,".")),!1;Pn.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=On.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){An(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function Dn(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mn=(Cn={},t(Ee)(Cn,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(Ee)(Cn,"bad-app-name","Illegal App name: '{$appName}"),t(Ee)(Cn,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(Ee)(Cn,"app-deleted","Firebase App named '{$appName}' already deleted"),t(Ee)(Cn,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(Ee)(Cn,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(Ee)(Cn,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(Ee)(Cn,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(Ee)(Cn,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(Ee)(Cn,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Cn),Un=new gt("app","Firebase",Mn),Fn=function(){"use strict";function e(n,r,i){var o=this;t(Ce)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Wt("app",(function(){return o}),"PUBLIC"))}return t(Te)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}]),e}(),jn="9.9.2";function Bn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rn,t=On.get(e);if(!t)throw Un.create("no-app",{appName:e});return t}function qn(e,t,n){var r,i=null!==(r=Nn[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Sn.warn(s.join(" "))}Ln(new Wt("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zn="firebase-heartbeat-store",Wn=null;function Hn(){return Wn||(Wn=gn("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(zn)}}).catch((function(e){throw Un.create("idb-open",{originalErrorMessage:e.message})}))),Wn}function Vn(e){return Kn.apply(this,arguments)}function Kn(){return(Kn=t(a)(t(u).mark((function e(n){var r,i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Hn();case 4:return i=e.sent,e.abrupt("return",i.transaction(zn).objectStore(zn).get(Jn(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof mt?Sn.warn(e.t0.message):(o=Un.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),Sn.warn(o.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Gn(e,t){return Yn.apply(this,arguments)}function Yn(){return(Yn=t(a)(t(u).mark((function e(n,r){var i,o,a,s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Hn();case 4:return o=e.sent,a=o.transaction(zn,"readwrite"),s=a.objectStore(zn),e.next=9,s.put(r,Jn(n));case 9:return e.abrupt("return",a.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof mt?Sn.warn(e.t0.message):(c=Un.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),Sn.warn(c.message));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function Jn(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn=function(){"use strict";function e(n){var r=this;t(Ce)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new er(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(Te)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r,i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=$n(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==o&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r,i,o,a,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=$n(),i=Xn(e._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=it(JSON.stringify({version:2,heartbeats:o})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=a,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function $n(){return(new Date).toISOString().substring(0,10)}function Xn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),tr(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),tr(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var Zn,er=function(){"use strict";function e(n){t(Ce)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(Te)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(pt()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",vt().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,Vn(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return o=t.sent,t.abrupt("return",Gn(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return o=r.sent,r.abrupt("return",Gn(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t(Se)(o.heartbeats).concat(t(Se)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function tr(e){return it(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn="",Ln(new Wt("platform-logger",(function(e){return new In(e)}),"PRIVATE")),Ln(new Wt("heartbeat",(function(e){return new Qn(e)}),"PRIVATE")),qn(Tn,En,Zn),qn(Tn,En,"esm2017"),qn("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
qn("firebase","9.9.2","app");Ce=o("8MBJY"),Te=o("a2hTj"),Ee=o("hKHmD"),Ee=o("hKHmD");var nr,rr="@firebase/installations",ir="0.5.12",or=1e4,ar="w:".concat(ir),sr="FIS_v2",ur=36e5,cr=(nr={},t(Ee)(nr,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),t(Ee)(nr,"not-registered","Firebase Installation is not registered."),t(Ee)(nr,"installation-not-found","Firebase Installation not found."),t(Ee)(nr,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),t(Ee)(nr,"app-offline","Could not process request. Application offline."),t(Ee)(nr,"delete-pending-registration","Can't delete installation while there is a pending registration request."),nr),lr=new gt("installations","Installations",cr);function hr(e){return e instanceof mt&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function dr(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function pr(e,t){return vr.apply(this,arguments)}function vr(){return(vr=t(a)(t(u).mark((function e(n,r){var i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,o=i.error,e.abrupt("return",lr.create("request-failed",{requestName:n,serverCode:o.code,serverMessage:o.message,serverStatus:o.status}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function yr(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mr(e,t){var n=t.refreshToken,r=yr(e);return r.append("Authorization",function(e){return"".concat(sr," ").concat(e)}(n)),r}function gr(e){return _r.apply(this,arguments)}function _r(){return(_r=t(a)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function kr(e,t){return br.apply(this,arguments)}function br(){return(br=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){var i,o,a,s,c,l,h,f,d,p,v,y;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,o=n.heartbeatServiceProvider,a=r.fid,s=fr(i),c=yr(i),!(l=o.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(h=e.sent)&&c.append("x-firebase-client",h);case 9:return f={fid:a,authVersion:sr,appId:i.appId,sdkVersion:ar},d={method:"POST",headers:c,body:JSON.stringify(f)},e.next=13,gr((function(){return fetch(s,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return v=e.sent,y={fid:v.fid||a,registrationStatus:2,refreshToken:v.refreshToken,authToken:dr(v.authToken)},e.abrupt("return",y);case 22:return e.next=24,pr("Create Installation",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ir=/^[cdef][\w-]{21}$/;function xr(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var n=function(e){return(n=e,btoa((r=String).fromCharCode.apply(r,t(Se)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Ir.test(n)?n:""}catch(e){return""}}function Cr(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr=new Map;function Er(e,t){var n=Cr(e);Sr(n,t),function(e,t){var n=Nr();n&&n.postMessage({key:e,fid:t});Or()}(n,t)}function Sr(e,t){var n=Tr.get(e);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}var Rr=null;function Nr(){return!Rr&&"BroadcastChannel"in self&&((Rr=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Sr(e.data.key,e.data.fid)}),Rr}function Or(){0===Tr.size&&Rr&&(Rr.close(),Rr=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr="firebase-installations-store",Ar=null;function Lr(){return Ar||(Ar=gn("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Pr)}})),Ar}function Dr(e,t){return Mr.apply(this,arguments)}function Mr(){return(Mr=t(a)(t(u).mark((function e(n,r){var i,o,a,s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Cr(n),e.next=3,Lr();case 3:return o=e.sent,a=o.transaction(Pr,"readwrite"),s=a.objectStore(Pr),e.next=8,s.get(i);case 8:return c=e.sent,e.next=11,s.put(r,i);case 11:return e.next=13,a.done;case 13:return c&&c.fid===r.fid||Er(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ur(e){return Fr.apply(this,arguments)}function Fr(){return(Fr=t(a)(t(u).mark((function e(n){var r,i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Cr(n),e.next=3,Lr();case 3:return i=e.sent,o=i.transaction(Pr,"readwrite"),e.next=7,o.objectStore(Pr).delete(r);case 7:return e.next=9,o.done;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jr(e,t){return Br.apply(this,arguments)}function Br(){return(Br=t(a)(t(u).mark((function e(n,r){var i,o,a,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Cr(n),e.next=3,Lr();case 3:return o=e.sent,a=o.transaction(Pr,"readwrite"),s=a.objectStore(Pr),e.next=8,s.get(i);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(l,i);case 17:return e.next=19,a.done;case 19:return!l||c&&c.fid===l.fid||Er(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qr(e){return zr.apply(this,arguments)}function zr(){return(zr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,jr(n.appConfig,(function(e){var t=Wr(e),i=Hr(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Wr(e){return Jr(e||{fid:xr(),registrationStatus:0})}function Hr(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(lr.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return Vr.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Kr(e)}:{installationEntry:t}}function Vr(){return(Vr=t(a)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,kr(n,r);case 3:return i=e.sent,e.abrupt("return",Dr(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!hr(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,Ur(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,Dr(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Kr(e){return Gr.apply(this,arguments)}function Gr(){return(Gr=t(a)(t(u).mark((function e(n){var r,i,o,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Yr(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,wr(100);case 6:return e.next=8,Yr(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,qr(n);case 14:if(i=e.sent,o=i.installationEntry,!(a=i.registrationPromise)){e.next=21;break}return e.abrupt("return",a);case 21:return e.abrupt("return",o);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Yr(e){return jr(e,(function(e){if(!e)throw lr.create("installation-not-found");return Jr(e)}))}function Jr(e){return 1===(t=e).registrationStatus&&t.registrationTime+or<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Qr(e,t){return $r.apply(this,arguments)}function $r(){return($r=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){var i,o,a,s,c,l,h,f,d,p,v;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,o=n.heartbeatServiceProvider,a=Xr(i,r),s=mr(i,r),!(c=o.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&s.append("x-firebase-client",l);case 9:return h={installation:{sdkVersion:ar,appId:i.appId}},f={method:"POST",headers:s,body:JSON.stringify(h)},e.next=13,gr((function(){return fetch(a,f)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return p=e.sent,v=dr(p),e.abrupt("return",v);case 22:return e.next=24,pr("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xr(e,t){var n=t.fid;return"".concat(fr(e),"/").concat(n,"/authTokens:generate")}function Zr(e){return ei.apply(this,arguments)}function ei(){return ei=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n){var r,i,o,a,s=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,jr(n.appConfig,(function(e){if(!ai(e))throw lr.create("not-registered");var t=e.authToken;if(!r&&si(t))return e;if(1===t.requestStatus)return i=ti(n,r),e;if(!navigator.onLine)throw lr.create("app-offline");var o=ui(e);return i=ii(n,o),o}));case 4:if(o=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=o.authToken;case 12:return a=e.t0,e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)}))),ei.apply(this,arguments)}function ti(e,t){return ni.apply(this,arguments)}function ni(){return(ni=t(a)(t(u).mark((function e(n,r){var i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ri(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,wr(100);case 6:return e.next=8,ri(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(o=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",Zr(n,r));case 16:return e.abrupt("return",o);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ri(e){return jr(e,(function(e){if(!ai(e))throw lr.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+or<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function ii(e,t){return oi.apply(this,arguments)}function oi(){return(oi=t(a)(t(u).mark((function e(n,r){var i,o,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Qr(n,r);case 3:return i=e.sent,o=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,Dr(n.appConfig,o);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!hr(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,Ur(n.appConfig);case 15:e.next=20;break;case 17:return a=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,Dr(n.appConfig,a);case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function ai(e){return void 0!==e&&2===e.registrationStatus}function si(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ur}(e)}function ui(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ci(){return(ci=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n){var r,i,o,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,qr(r);case 3:return i=e.sent,o=i.installationEntry,(a=i.registrationPromise)?a.catch(console.error):Zr(r).catch(console.error),e.abrupt("return",o.fid);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function li(){return li=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n){var r,i,o,a=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]&&a[1],i=n,e.next=4,hi(i);case 4:return e.next=6,Zr(i,r);case 6:return o=e.sent,e.abrupt("return",o.token);case 8:case"end":return e.stop()}}),e)}))),li.apply(this,arguments)}function hi(e){return fi.apply(this,arguments)}function fi(){return(fi=t(a)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qr(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function di(e){return lr.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi="installations",vi=function(e){var t=Dn(e.getProvider("app").getImmediate(),pi).getImmediate(),n={getId:function(){return function(e){return ci.apply(this,arguments)}(t)},getToken:function(e){return function(e){return li.apply(this,arguments)}(t,e)}};return n};Ln(new Wt(pi,(function(e){var t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw di("App Configuration");if(!e.name)throw di("App Name");var t=!0,n=!1,r=void 0;try{for(var i,o=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(!e.options[a])throw di(a)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Dn(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),Ln(new Wt("installations-internal",vi,"PRIVATE")),qn(rr,ir),qn(rr,ir,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yi,mi="analytics",gi=6e4,_i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ki="https://www.googletagmanager.com/gtag/js",bi=new tn("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wi(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function Ii(e,t){var n=document.createElement("script");n.src="".concat(ki,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function xi(e,t,n,r,i,o){return Ci.apply(this,arguments)}function Ci(){return(Ci=t(a)(t(u).mark((function e(n,r,i,o,a,s){var c,l,h;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=o[a],e.prev=1,!c){e.next=7;break}return e.next=5,r[c];case 5:e.next=14;break;case 7:return e.next=9,wi(i);case 9:if(l=e.sent,!(h=l.find((function(e){return e.measurementId===a})))){e.next=14;break}return e.next=14,r[h.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),bi.error(e.t0);case 19:n("config",a,s);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function Ti(e,t,n,r,i){return Ei.apply(this,arguments)}function Ei(){return(Ei=t(a)(t(u).mark((function e(n,r,i,o,a){var s,c,l,h,f,d,p,v,y,m,g;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!a||!a.send_to){e.next=38;break}return c=a.send_to,Array.isArray(c)||(c=[c]),e.next=7,wi(i);case 7:l=e.sent,h=!0,f=!1,d=void 0,e.prev=9,p=c[Symbol.iterator]();case 11:if(h=(v=p.next()).done){e.next=24;break}if(y=v.value,m=l.find((function(e){return e.measurementId===y})),!(g=m&&r[m.appId])){e.next=19;break}s.push(g),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:h=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,d=e.t0;case 30:e.prev=30,e.prev=31,h||null==p.return||p.return();case 33:if(e.prev=33,!f){e.next=36;break}throw d;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",o,a||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),bi.error(e.t1);case 47:case"end":return e.stop()}}),e,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Si(e,n,r,i,o){var s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[o]&&"function"==typeof window[o]&&(s=window[o]),window[o]=function(e,n,r,i){function o(){return(o=t(a)(t(u).mark((function o(a,s,c){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"event"!==a){t.next=6;break}return t.next=4,Ti(e,n,r,s,c);case 4:t.next=12;break;case 6:if("config"!==a){t.next=11;break}return t.next=9,xi(e,n,r,i,s,c);case 9:t.next=12;break;case 11:"consent"===a?e("consent","update",c):e("set",s);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),bi.error(t.t0);case 17:case"end":return t.stop()}}),o,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return o.apply(this,arguments)}}(s,e,n,r),{gtagCore:s,wrappedGtag:window[o]}}function Ri(){var e=window.document.getElementsByTagName("script"),t=!0,n=!1,r=void 0;try{for(var i,o=Object.values(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(a.src&&a.src.includes(ki))return a}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ni=(yi={},t(Ee)(yi,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),t(Ee)(yi,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),t(Ee)(yi,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),t(Ee)(yi,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),t(Ee)(yi,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(Ee)(yi,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(Ee)(yi,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),t(Ee)(yi,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),t(Ee)(yi,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),t(Ee)(yi,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),yi),Oi=new gt("analytics","Analytics",Ni),Pi=function(){"use strict";function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t(Ce)(this,e),this.throttleMetadata=n,this.intervalMillis=r}return t(Te)(e,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),e}(),Ai=new Pi;function Li(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Di(e){return Mi.apply(this,arguments)}function Mi(){return(Mi=t(a)(t(u).mark((function e(n){var r,i,o,a,s,c,l,h;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,o=n.apiKey,a={method:"GET",headers:Li(o)},s=_i.replace("{app-id}",i),e.next=6,fetch(s,a);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return l="",e.prev=9,e.next=12,c.json();case 12:h=e.sent,(null===(r=h.error)||void 0===r?void 0:r.message)&&(l=h.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw Oi.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function Ui(e){return Fi.apply(this,arguments)}function Fi(){return Fi=t(a)(t(u).mark((function e(n){var r,i,o,s,c,l,h,f,d=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=d.length>1&&void 0!==d[1]?d[1]:Ai,i=d.length>2?d[2]:void 0,o=n.options,s=o.appId,c=o.apiKey,l=o.measurementId,s){e.next=4;break}throw Oi.create("no-app-id");case 4:if(c){e.next=8;break}if(!l){e.next=7;break}return e.abrupt("return",{measurementId:l,appId:s});case 7:throw Oi.create("no-api-key");case 8:return h=r.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Vi,setTimeout(t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),e)}))),void 0!==i?i:gi),e.abrupt("return",ji({appId:s,apiKey:c,measurementId:l},h,f,r));case 12:case"end":return e.stop()}}),e)}))),Fi.apply(this,arguments)}function ji(e,t,n){return Bi.apply(this,arguments)}function Bi(){return Bi=t(a)(t(u).mark((function e(n,r,i){var o,a,s,c,l,h,f,d,p,v,y,m=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.throttleEndTimeMillis,a=r.backoffCount,s=m.length>3&&void 0!==m[3]?m[3]:Ai,h=n.appId,f=n.measurementId,e.prev=3,e.next=6,qi(i,o);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return bi.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===(c=e.t0)||void 0===c?void 0:c.message,"]")),e.abrupt("return",{appId:h,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,Di(n);case 17:return d=e.sent,s.deleteThrottleMetadata(h),e.abrupt("return",d);case 22:if(e.prev=22,e.t1=e.catch(14),zi(p=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(h),!f){e.next=32;break}return bi.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==p?void 0:p.message,"]")),e.abrupt("return",{appId:h,measurementId:f});case 32:throw e.t1;case 33:return v=503===Number(null===(l=null==p?void 0:p.customData)||void 0===l?void 0:l.httpStatus)?qt(a,s.intervalMillis,30):qt(a,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+v,backoffCount:a+1},s.setThrottleMetadata(h,y),bi.debug("Calling attemptFetch again in ".concat(v," millis")),e.abrupt("return",ji(n,y,i,s));case 38:case"end":return e.stop()}}),e,null,[[3,8],[14,22]])}))),Bi.apply(this,arguments)}function qi(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((function(){clearTimeout(o),r(Oi.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function zi(e){if(!(e instanceof mt&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var Wi,Hi,Vi=function(){"use strict";function e(){t(Ce)(this,e),this.listeners=[]}return t(Te)(e,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(){return(Ki=t(a)(t(u).mark((function e(n,r,i,o,a){var s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!a.global){e.next=5;break}return n("event",i,o),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,c=Object.assign(Object.assign({},o),{send_to:s}),n("event",i,c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Gi(e){Hi=e}function Yi(e){Wi=e}function Ji(){return Qi.apply(this,arguments)}function Qi(){return(Qi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(pt()){e.next=6;break}return bi.warn(Oi.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,vt();case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(6),bi.warn(Oi.create("indexeddb-unavailable",{errorInfo:null===(n=e.t0)||void 0===n?void 0:n.toString()}).message),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[6,11]])})))).apply(this,arguments)}function $i(){return($i=t(a)(t(u).mark((function e(n,r,i,o,a,s,c){var l,h,f,d,p,v,y;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(h=Ui(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&bi.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return bi.error(e)})),r.push(h),f=Ji().then((function(e){return e?o.getId():void 0})),e.t0=t(Le),e.next=8,Promise.all([h,f]);case 8:return e.t1=e.sent,d=(0,e.t0)(e.t1,2),p=d[0],v=d[1],Ri()||Ii(s,p.measurementId),Hi&&(a("consent","default",Hi),Gi(void 0)),a("js",new Date),(y=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",y.update=!0,null!=v&&(y.firebase_id=v),a("config",p.measurementId,y),Wi&&(a("set",Wi),Yi(void 0)),e.abrupt("return",p.measurementId);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi,Zi,eo=function(){"use strict";function e(n){t(Ce)(this,e),this.app=n}return t(Te)(e,[{key:"_delete",value:function(){return delete to[this.app.options.appId],Promise.resolve()}}]),e}(),to={},no=[],ro={},io="dataLayer",oo="gtag",ao=!1;function so(e,t,n){!function(){var e=[];if(ht()&&e.push("This is a browser extension environment."),yt()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=Oi.create("invalid-analytics-context",{errorInfo:t});bi.warn(n.message)}}();var r,i,o=e.options.appId;if(!o)throw Oi.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Oi.create("no-api-key");bi.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=to[o])throw Oi.create("already-exists",{id:o});if(!ao){r=io,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var a=Si(to,no,ro,io,oo),s=a.wrappedGtag,u=a.gtagCore;Zi=s,Xi=u,ao=!0}return to[o]=function(e,t,n,r,i,o,a){return $i.apply(this,arguments)}(e,no,ro,t,Xi,io,n),new eo(e)}function uo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Dn(e,mi);if(n.isInitialized()){var r=n.getImmediate();if(Rt(t,n.getOptions()))return r;throw Oi.create("already-initialized")}var i=n.initialize({options:t});return i}function co(e,t,n,r){e=zt(e),function(e,t,n,r,i){return Ki.apply(this,arguments)}(Zi,to[e.app.options.appId],t,n,r).catch((function(e){return bi.error(e)}))}var lo="@firebase/analytics",ho="0.8.0";Ln(new Wt(mi,(function(e,t){var n=t.options;return so(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),Ln(new Wt("analytics-internal",(function(e){try{var t=e.getProvider(mi).getImmediate();return{logEvent:function(e,n,r){return co(t,e,n,r)}}}catch(e){throw Oi.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),qn(lo,ho),qn(lo,ho,"esm2017");Be=o("ds8z5"),Ce=o("8MBJY"),Te=o("a2hTj"),Ee=o("hKHmD");var fo={};Object.defineProperty(fo,"__esModule",{value:!0}),fo.default=function(e,t,n){return vo(e,t,n)};var po=function(e){return e&&e.__esModule?e:{default:e}}(o("2mz0K"));function vo(e,t,n){return(vo="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=po.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var yo=o("fVNic");qe=o("eYQtU"),Je=o("2MbLg");function mo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function go(){return t(Ee)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var _o=go,ko=new gt("auth","Firebase",go()),bo=new tn("@firebase/auth");function wo(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;bo.logLevel<=Kt.ERROR&&(o=bo).error.apply(o,["Auth (".concat(jn,"): ").concat(e)].concat(t(Se)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Eo.apply(void 0,[e].concat(t(Se)(r)))}function xo(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Eo.apply(void 0,[e].concat(t(Se)(r)))}function Co(e,n,r){var i=Object.assign(Object.assign({},_o()),t(Ee)({},n,r));return new gt("auth","Firebase",i).create(n,{appName:e.name})}function To(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Io(e,"argument-error"),Co(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Eo(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;if("string"!=typeof e){var a,s=r[0],u=t(Se)(r.slice(1));return u[0]&&(u[0].appName=e.name),(a=e._errorFactory).create.apply(a,[s].concat(t(Se)(u)))}return(o=ko).create.apply(o,[e].concat(t(Se)(r)))}function So(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!e)throw Eo.apply(void 0,[n].concat(t(Se)(i)))}function Ro(e){var t="INTERNAL ASSERTION FAILED: "+e;throw wo(t),new Error(t)}function No(e,t){e||Ro(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oo=new Map;function Po(e){No(e instanceof Function,"Expected a class definition");var t=Oo.get(e);return t?(No(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Oo.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e,t){var n=Dn(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Rt(n.getOptions(),null!=t?t:{}))return r;Io(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Do(){return"http:"===Mo()||"https:"===Mo()}function Mo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Uo=function(){"use strict";function e(n,r){t(Ce)(this,e),this.shortDelay=n,this.longDelay=r,No(r>n,"Short delay should be less than long delay!"),this.isMobile=lt()||ft()}return t(Te)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Do()||ht()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(e,t){No(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo,Bo=function(){"use strict";function e(){t(Ce)(this,e)}return t(Te)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ro("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ro("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ro("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),qo=(jo={},t(Ee)(jo,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(Ee)(jo,"MISSING_CUSTOM_TOKEN","internal-error"),t(Ee)(jo,"INVALID_IDENTIFIER","invalid-email"),t(Ee)(jo,"MISSING_CONTINUE_URI","internal-error"),t(Ee)(jo,"INVALID_PASSWORD","wrong-password"),t(Ee)(jo,"MISSING_PASSWORD","internal-error"),t(Ee)(jo,"EMAIL_EXISTS","email-already-in-use"),t(Ee)(jo,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(Ee)(jo,"INVALID_IDP_RESPONSE","invalid-credential"),t(Ee)(jo,"INVALID_PENDING_TOKEN","invalid-credential"),t(Ee)(jo,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(Ee)(jo,"MISSING_REQ_TYPE","internal-error"),t(Ee)(jo,"EMAIL_NOT_FOUND","user-not-found"),t(Ee)(jo,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(Ee)(jo,"EXPIRED_OOB_CODE","expired-action-code"),t(Ee)(jo,"INVALID_OOB_CODE","invalid-action-code"),t(Ee)(jo,"MISSING_OOB_CODE","internal-error"),t(Ee)(jo,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(Ee)(jo,"INVALID_ID_TOKEN","invalid-user-token"),t(Ee)(jo,"TOKEN_EXPIRED","user-token-expired"),t(Ee)(jo,"USER_NOT_FOUND","user-token-expired"),t(Ee)(jo,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(Ee)(jo,"INVALID_CODE","invalid-verification-code"),t(Ee)(jo,"INVALID_SESSION_INFO","invalid-verification-id"),t(Ee)(jo,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(Ee)(jo,"MISSING_SESSION_INFO","missing-verification-id"),t(Ee)(jo,"SESSION_EXPIRED","code-expired"),t(Ee)(jo,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(Ee)(jo,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(Ee)(jo,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(Ee)(jo,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(Ee)(jo,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(Ee)(jo,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(Ee)(jo,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(Ee)(jo,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(Ee)(jo,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(Ee)(jo,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(Ee)(jo,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),jo),zo=new Uo(3e4,6e4);function Wo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Ho(e,t,n,r){return Vo.apply(this,arguments)}function Vo(){return Vo=t(a)(t(u).mark((function e(n,r,i,o){var s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",Ko(n,s,t(a)(t(u).mark((function e(){var a,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),c=Ot(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Bo.fetch()(Qo(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Vo.apply(this,arguments)}function Ko(e,t,n){return Go.apply(this,arguments)}function Go(){return(Go=t(a)(t(u).mark((function e(n,r,i){var o,a,s,c,l,h,f,d,p;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,o=Object.assign(Object.assign({},qo),r),e.prev=2,a=new $o(n),e.next=6,Promise.race([i(),a.promise]);case 6:return s=e.sent,a.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw Xo(n,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,h=t(Le)(l.split(" : "),2),f=h[0],d=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw Xo(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw Xo(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw Xo(n,"user-disabled",c);case 29:if(p=o[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){e.next=34;break}throw Co(n,p,d);case 34:Io(n,p);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof mt)){e.next=41;break}throw e.t0;case 41:Io(n,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Yo(e,t,n,r){return Jo.apply(this,arguments)}function Jo(){return Jo=t(a)(t(u).mark((function e(n,r,i,o){var a,s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Ho(n,r,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&Io(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Jo.apply(this,arguments)}function Qo(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Fo(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var $o=function(){"use strict";function e(n){var r=this;t(Ce)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(xo(n.auth,"network-request-failed"))}),zo.get())}))}return t(Te)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Xo(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=xo(e,t,r);return i.customData._tokenResponse=n,i}function Zo(e,t){return ea.apply(this,arguments)}function ea(){return(ea=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ho(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ta(e,t){return na.apply(this,arguments)}function na(){return(na=t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ho(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(){return ia=t(a)(t(u).mark((function e(n){var r,i,o,a,s,c,l=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=zt(n),e.next=4,i.getIdToken(r);case 4:return o=e.sent,So((a=aa(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:ra(oa(a.auth_time)),issuedAtTime:ra(oa(a.iat)),expirationTime:ra(oa(a.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ia.apply(this,arguments)}function oa(e){return 1e3*Number(e)}function aa(e){var n,r=t(Le)(e.split("."),3),i=r[0],o=r[1],a=r[2];if(void 0===i||void 0===o||void 0===a)return wo("JWT malformed, contained fewer than 3 sections"),null;try{var s=ot(o);return s?JSON.parse(s):(wo("Failed to decode base64 JWT payload"),null)}catch(e){return wo("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function sa(e,t){return ua.apply(this,arguments)}function ua(){return ua=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){var i=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof mt&&ca(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),ua.apply(this,arguments)}function ca(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var la=function(){"use strict";function e(n){t(Ce)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(Te)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,e.user.getIdToken(!0);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(r=t.t0)||void 0===r?void 0:r.code)&&e.schedule(!0),t.abrupt("return");case 10:e.schedule();case 11:case"end":return t.stop()}}),n,null,[[1,6]])})))()}}]),e}(),ha=function(){"use strict";function e(n,r){t(Ce)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(Te)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e){return da.apply(this,arguments)}function da(){return(da=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n){var r,i,o,a,s,c,l,h,f,d,p;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return o=e.sent,e.next=7,sa(n,ta(i,{idToken:o}));case 7:So(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],n._notifyReloadListener(s),c=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?ya(s.providerUserInfo):[],l=va(n.providerData,c),h=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ha(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pa(){return(pa=t(a)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=zt(n),e.next=3,fa(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function va(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(Se)(r).concat(t(Se)(n))}function ya(e){return e.map((function(e){var t=e.providerId,n=mo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ma(e,t){return ga.apply(this,arguments)}function ga(){return(ga=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ko(n,{},t(a)(t(u).mark((function e(){var i,o,a,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ot({grant_type:"refresh_token",refresh_token:r}).slice(1),o=n.config,a=o.tokenApiHost,s=o.apiKey,c=Qo(n,a,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Bo.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _a=function(){"use strict";function e(){t(Ce)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(Te)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){So(e.idToken,"internal-error"),So(void 0!==e.idToken,"internal-error"),So(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,So(n=aa(t),"internal-error"),So(void 0!==n.exp,"internal-error"),So(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(So(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(a)(t(u).mark((function i(){var o,a,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ma(e,n);case 2:o=t.sent,a=o.accessToken,s=o.refreshToken,c=o.expiresIn,r.updateTokensAndExpiration(a,s,Number(c));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return Ro("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new e;return r&&(So("string"==typeof r,"internal-error",{appName:t}),a.refreshToken=r),i&&(So("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(So("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(e,t){So("string"==typeof e||void 0===e,"internal-error",{appName:t})}var ba=function(){"use strict";function e(n){t(Ce)(this,e);var r=n.uid,i=n.auth,o=n.stsTokenManager,a=mo(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new la(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?t(Se)(a.providerData):[],this.metadata=new ha(a.createdAt||void 0,a.lastLoginAt||void 0)}return t(Te)(e,[{key:"getIdToken",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,sa(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(So(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ia.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return pa.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(So(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){So(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(u).mark((function i(){var o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),o=!0),!n){t.next=5;break}return t.next=5,fa(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,sa(e,Zo(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,o,a,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,p=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;So(_&&I,t,"internal-error");var x=_a.fromJSON(this.name,I);So("string"==typeof _,t,"internal-error"),ka(h,t.name),ka(f,t.name),So("boolean"==typeof k,t,"internal-error"),So("boolean"==typeof b,t,"internal-error"),ka(d,t.name),ka(p,t.name),ka(v,t.name),ka(y,t.name),ka(m,t.name),ka(g,t.name);var C=new e({uid:_,auth:t,email:f,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:x,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(C.providerData=w.map((function(e){return Object.assign({},e)}))),y&&(C._redirectEventId=y),C}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(a)(t(u).mark((function o(){var a,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new _a).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),t.next=5,fa(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),o)})))()}}]),e}(),wa=function(){"use strict";function e(){t(Ce)(this,e),this.type="NONE",this.storage={}}return t(Te)(e,[{key:"_isAvailable",value:function(){return t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wa.type="NONE";var Ia=wa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ca=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=xa(this.userKey,a.apiKey,s),this.fullPersistenceKey=xa("persistence",a.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(Te)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?ba._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(a)(t(u).mark((function o(){var s,c,l,h,f,d,p,v,y,m,g,_,k;return t(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new e(Po(Ia),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var e=t(a)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),c=s[0]||Po(Ia),l=xa(i,n.config.apiKey,n.name),h=null,f=!0,d=!1,p=void 0,o.prev=9,v=r[Symbol.iterator]();case 11:if(f=(y=v.next()).done){o.next=29;break}return m=y.value,o.prev=13,o.next=16,m._get(l);case 16:if(!(g=o.sent)){o.next=22;break}return _=ba._fromJSON(n,g),m!==c&&(h=_),c=m,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:f=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),d=!0,p=o.t1;case 35:o.prev=35,o.prev=36,f||null==v.return||v.return();case 38:if(o.prev=38,!d){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new e(c,n,i));case 46:if(c=k[0],!h){o.next=50;break}return o.next=50,c._set(l,h.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var e=t(a)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return o.abrupt("return",new e(c,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Na(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ea(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pa(t))return"Blackberry";if(Aa(t))return"Webos";if(Sa(t))return"Safari";if((t.includes("chrome/")||Ra(t))&&!t.includes("edge/"))return"Chrome";if(Oa(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ea(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return/firefox\//i.test(e)}function Sa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ra(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return/crios\//i.test(e)}function Na(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return/iemobile/i.test(e)}function Oa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return/android/i.test(e)}function Pa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return/blackberry/i.test(e)}function Aa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return/webos/i.test(e)}function La(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Da(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return La(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ma(){return((e=ct()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Ua(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct();return La(e)||Oa(e)||Aa(e)||Pa(e)||/windows phone/i.test(e)||Na(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fa(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ta(ct());break;case"Worker":t="".concat(Ta(ct()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(jn,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ja=function(){"use strict";function e(n){t(Ce)(this,e),this.auth=n,this.queue=[]}return t(Te)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o,a,s,c,l,h,f,d,p,v,y,m,g;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=3;break}return t.abrupt("return");case 3:o=[],t.prev=4,a=!0,s=!1,c=void 0,t.prev=6,l=n.queue[Symbol.iterator]();case 8:if(a=(h=l.next()).done){t.next=16;break}return f=h.value,t.next=12,f(e);case 12:f.onAbort&&o.push(f.onAbort);case 13:a=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),s=!0,c=t.t0;case 22:t.prev=22,t.prev=23,a||null==l.return||l.return();case 25:if(t.prev=25,!s){t.next=28;break}throw c;case 28:return t.finish(25);case 29:return t.finish(22);case 30:t.next=53;break;case 32:for(t.prev=32,t.t1=t.catch(4),o.reverse(),d=!0,p=!1,v=void 0,t.prev=36,y=o[Symbol.iterator]();!(d=(m=y.next()).done);d=!0){g=m.value;try{g()}catch(e){}}t.next=44;break;case 40:t.prev=40,t.t2=t.catch(36),p=!0,v=t.t2;case 44:t.prev=44,t.prev=45,d||null==y.return||y.return();case 47:if(t.prev=47,!p){t.next=50;break}throw v;case 50:return t.finish(47);case 51:return t.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=t.t1)||void 0===i?void 0:i.message});case 53:case"end":return t.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),Ba=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new za(this),this.idTokenSubscription=new za(this),this.beforeStateQueue=new ja(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ko,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return t(Te)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=Po(n));var r=this;return this._initializationPromise=this.queue(t(a)(t(u).mark((function i(){var o,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Ca.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o,a,s,c,l,h;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(o=t.sent,a=o,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==a?void 0:a._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:h=t.sent,c&&c!==l||!(null==h?void 0:h.user)||(a=h.user,s=!0);case 15:if(a){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(a._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(a);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),a=o,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!a){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return So(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==a._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(a));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,fa(e);case 4:t.next=10;break;case 6:if(t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(i=t.t0)||void 0===i?void 0:i.code)){t.next=10;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 10:return t.abrupt("return",n.directlySetCurrentUser(e));case 11:case"end":return t.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?zt(e):null)&&So(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&So(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(Po(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new gt("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(a)(t(u).mark((function i(){var o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return o=t.sent,t.abrupt("return",null===e?o.removeCurrentUser():o.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return So(i=e&&Po(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Ca.create(n,[Po(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return So(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&(n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh()),n.currentUser=e,!e){t.next=7;break}return t.next=5,n.assertedPersistence.setCurrentUser(e);case 5:t.next=9;break;case 7:return t.next=9,n.assertedPersistence.removeCurrentUser();case 9:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return So(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fa(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r,i,o;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(Ee)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=n.sent)&&(i["X-Firebase-Client"]=o),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e){return zt(e)}var za=function(){"use strict";function e(n){var r,i,o=this;t(Ce)(this,e),this.auth=n,this.observer=null,this.addObserver=(i=new Dt((function(e){return o.observer=e}),r)).subscribe.bind(i)}return t(Te)(e,[{key:"next",get:function(){return So(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wa=function(){"use strict";function e(n,r){t(Ce)(this,e),this.providerId=n,this.signInMethod=r}return t(Te)(e,[{key:"toJSON",value:function(){return Ro("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Ro("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Ro("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Ro("not implemented")}}]),e}();function Ha(e,t){return Va.apply(this,arguments)}function Va(){return(Va=t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ho(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ka(e,t){return Ga.apply(this,arguments)}function Ga(){return(Ga=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Yo(n,"POST","/v1/accounts:signInWithPassword",Wo(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ya(e,t){return Ja.apply(this,arguments)}function Ja(){return(Ja=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Yo(n,"POST","/v1/accounts:signInWithEmailLink",Wo(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qa(e,t){return $a.apply(this,arguments)}function $a(){return($a=t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Yo(n,"POST","/v1/accounts:signInWithEmailLink",Wo(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xa=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(Ce)(this,r),(a=n.call(this,"password",o))._email=e,a._password=i,a._tenantId=s,a}return t(Te)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Ka(e,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",Ya(e,{email:n._email,oobCode:n._password}));case 5:Io(e,"internal-error");case 6:case"end":return t.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Ha(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",Qa(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:Io(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Wa);function Za(e,t){return es.apply(this,arguments)}function es(){return(es=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Yo(n,"POST","/v1/accounts:signInWithIdp",Wo(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ts=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){var e;return t(Ce)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(Te)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Za(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Za(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Za(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ot(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Io("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=mo(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(Wa);function ns(e,t){return rs.apply(this,arguments)}function rs(){return(rs=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ho(n,"POST","/v1/accounts:sendVerificationCode",Wo(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function is(){return(is=t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Yo(n,"POST","/v1/accounts:signInWithPhoneNumber",Wo(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function os(){return(os=t(a)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Yo(n,"POST","/v1/accounts:signInWithPhoneNumber",Wo(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Xo(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var as=t(Ee)({},"USER_NOT_FOUND","user-not-found");function ss(){return(ss=t(a)(t(u).mark((function e(n,r){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Yo(n,"POST","/v1/accounts:signInWithPhoneNumber",Wo(n,i),as));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var us=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e){var i;return t(Ce)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(Te)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return is.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return os.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return ss.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(Wa);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cs=function(){"use strict";function e(n){var r,i,o,a,s,u;t(Ce)(this,e);var c=Pt(At(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);So(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return t(Te)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=Pt(At(e)).link,n=t?Pt(At(t)).deep_link_id:null,r=Pt(At(e)).deep_link_id;return(r?Pt(At(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ls=function(){"use strict";function e(){t(Ce)(this,e),this.providerId=e.PROVIDER_ID}return t(Te)(e,null,[{key:"credential",value:function(e,t){return Xa._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=cs.parseLink(t);return So(n,"argument-error"),Xa._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();ls.PROVIDER_ID="password",ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hs=function(){"use strict";function e(n){t(Ce)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(Te)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),fs=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){var e;return t(Ce)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(Te)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(Se)(this.scopes)}}]),r}(hs),ds=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){return t(Ce)(this,r),n.call(this,"facebook.com")}return t(Te)(r,null,[{key:"credential",value:function(e){return ts._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(fs);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ds.FACEBOOK_SIGN_IN_METHOD="facebook.com",ds.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ps=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){var e;return t(Ce)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(Te)(r,null,[{key:"credential",value:function(e,t){return ts._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(fs);ps.GOOGLE_SIGN_IN_METHOD="google.com",ps.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vs=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){return t(Ce)(this,r),n.call(this,"github.com")}return t(Te)(r,null,[{key:"credential",value:function(e){return ts._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(fs);vs.GITHUB_SIGN_IN_METHOD="github.com",vs.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ys=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){return t(Ce)(this,r),n.call(this,"twitter.com")}return t(Te)(r,null,[{key:"credential",value:function(e,t){return ts._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(fs);ys.TWITTER_SIGN_IN_METHOD="twitter.com",ys.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ms=function(){"use strict";function e(n){t(Ce)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(Te)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(a)(t(u).mark((function a(){var s,c,l;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ba._fromIdTokenResponse(n,i,o);case 2:return s=t.sent,c=gs(i),l=new e({user:s,providerId:c,_tokenResponse:i,operationType:r}),t.abrupt("return",l);case 6:case"end":return t.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return t(a)(t(u).mark((function o(){var a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=gs(i),t.abrupt("return",new e({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),o)})))()}}]),e}();function gs(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _s=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e,i,o,a){var s,u;return t(Ce)(this,r),(s=n.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(t(Be)(s),r.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return t(Te)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(mt);function ks(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw _s._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(e,t){return ws.apply(this,arguments)}function ws(){return ws=t(a)(t(u).mark((function e(n,r){var i,o,a=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=sa,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",ms._forOperation(n,"link",o));case 14:case"end":return e.stop()}}),e)}))),ws.apply(this,arguments)}function Is(e,t){return xs.apply(this,arguments)}function xs(){return xs=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){var i,o,a,s,c,l,h,f=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=n.auth,s="reauthenticate",e.prev=4,e.next=7,sa(n,ks(a,s,r,n),i);case 7:return So((c=e.sent).idToken,a,"internal-error"),So(l=aa(c.idToken),a,"internal-error"),h=l.sub,So(n.uid===h,a,"user-mismatch"),e.abrupt("return",ms._forOperation(n,s,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&Io(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),xs.apply(this,arguments)}function Cs(e,t){return Ts.apply(this,arguments)}function Ts(){return Ts=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n,r){var i,o,a,s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o="signIn",e.next=4,ks(n,o,r);case 4:return a=e.sent,e.next=7,ms._fromIdTokenResponse(n,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Ts.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Es(e,t){return Ho(e,"POST","/v2/accounts/mfaEnrollment:start",Wo(e,t))}new WeakMap;var Ss="__sak",Rs=function(){"use strict";function e(n,r){t(Ce)(this,e),this.storageRetriever=n,this.type=r}return t(Te)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ns=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){var e,i;return t(Ce)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Sa(i=ct())||La(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Ua(),e._shouldAllowMigration=!0,e}return t(Te)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);Ma()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,o=this;return t(a)(t(u).mark((function a(){return t(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(fo)(t(yo)(r.prototype),"_set",i).call(o,e,n);case 2:o.localCache[e]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(a)(t(u).mark((function o(){var a;return t(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(fo)(t(yo)(r.prototype),"_get",n).call(i,e);case 2:return a=o.sent,i.localCache[e]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(a)(t(u).mark((function o(){return t(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(fo)(t(yo)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(Rs);Ns.type="LOCAL";var Os=Ns,Ps=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){return t(Ce)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(Te)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Rs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ps.type="SESSION";var As=Ps;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){return Promise.all(e.map((n=t(a)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ds=function(){"use strict";function e(n){t(Ce)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(Te)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o,s,c,l,h,f,d;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=e).data,s=o.eventId,c=o.eventType,l=o.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:c}),f=Array.from(h).map(function(){var e=t(a)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,Ls(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ms(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ds.receivers=[];var Us=function(){"use strict";function e(n){t(Ce)(this,e),this.target=n,this.handlers=new Set}return t(Te)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(a)(t(u).mark((function o(){var a,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,o){var u=Ms("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);c={messageChannel:a,onMessage:function(e){var n=e;if(n.data.eventId===u)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(c),a.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:u,data:n},[a.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return t.stop()}}),o)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function js(){return void 0!==Fs().WorkerGlobalScope&&"function"==typeof Fs().importScripts}function Bs(){return qs.apply(this,arguments)}function qs(){return(qs=t(a)(t(u).mark((function e(){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zs="firebaseLocalStorageDb",Ws="firebaseLocalStorage",Hs="fbase_key",Vs=function(){"use strict";function e(n){t(Ce)(this,e),this.request=n}return t(Te)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Ks(e,t){return e.transaction([Ws],t?"readwrite":"readonly").objectStore(Ws)}function Gs(){var e=indexedDB.deleteDatabase(zs);return new Vs(e).toPromise()}function Ys(){var e=indexedDB.open(zs,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Ws,{keyPath:Hs})}catch(e){r(e)}})),e.addEventListener("success",t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(Ws)){t.next=12;break}return i.close(),t.next=5,Gs();case 5:return t.t0=n,t.next=8,Ys();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Js(e,t,n){return Qs.apply(this,arguments)}function Qs(){return(Qs=t(a)(t(u).mark((function e(n,r,i){var o,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ks(n,!0).put((o={},t(Ee)(o,Hs,r),t(Ee)(o,"value",i),o)),e.abrupt("return",new Vs(a).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $s(e,t){return Xs.apply(this,arguments)}function Xs(){return(Xs=t(a)(t(u).mark((function e(n,r){var i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ks(n,!1).get(r),e.next=3,new Vs(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Zs(e,t){var n=Ks(e,!0).delete(t);return new Vs(n).toPromise()}var eu=function(){"use strict";function e(){t(Ce)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(Te)(e,[{key:"_openDb",value:function(){var e=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Ys();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return o=t.sent,t.next=8,e(o);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",js()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=Ds._getInstance(js()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(a)(t(u).mark((function n(r,i){var o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return o=t.sent,t.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(a)(t(u).mark((function e(n,r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r,i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Bs();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Us(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(o=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(a)(t(u).mark((function e(){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ys();case 5:return n=e.sent,e.next=8,Js(n,Ss,"1");case 8:return e.next=10,Zs(n,Ss);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(a)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Js(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return $s(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Zs(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r,i,o,a,s,c,l,h,f,d,p,v,y,m,g,_,k;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Ks(e,!1).getAll();return new Vs(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,c=void 0,t.prev=10,l=r[Symbol.iterator]();!(a=(h=l.next()).done);a=!0)f=h.value,d=f.fbase_key,p=f.value,o.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(p)&&(e.notifyListeners(d,p),i.push(d));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,c=t.t0;case 18:t.prev=18,t.prev=19,a||null==l.return||l.return();case 21:if(t.prev=21,!s){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,y=!1,m=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(v=(_=g.next()).done);v=!0)k=_.value,e.localCache[k]&&!o.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),y=!0,m=t.t1;case 35:t.prev=35,t.prev=36,v||null==g.return||g.return();case 38:if(t.prev=38,!y){t.next=41;break}throw m;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();eu.type="LOCAL";var tu=eu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e,t){return Ho(e,"POST","/v2/accounts/mfaSignIn:start",Wo(e,t))}function ru(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=xo("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function iu(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
iu("rcb"),new Uo(3e4,6e4);var ou="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e,t,n){return su.apply(this,arguments)}function su(){return(su=t(a)(t(u).mark((function e(n,r,i){var o,a,s,c,l,h,f,d;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,So("string"==typeof a,n,"argument-error"),So(i.type===ou,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return So("enroll"===c.type,n,"internal-error"),e.next=15,Es(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return So("signin"===c.type,n,"internal-error"),So(h=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,nu(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:a}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ns(n,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uu=function(){"use strict";function e(n){t(Ce)(this,e),this.providerId=e.PROVIDER_ID,this.auth=qa(n)}return t(Te)(e,[{key:"verifyPhoneNumber",value:function(e,t){return au(this.auth,e,zt(t))}}],[{key:"credential",value:function(e,t){return us._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?us._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cu(e,t){return t?Po(t):(So(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uu.PROVIDER_ID="phone",uu.PHONE_SIGN_IN_METHOD="phone";var lu=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e){var i;return t(Ce)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(Te)(r,[{key:"_getIdTokenResponse",value:function(e){return Za(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Za(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Za(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Wa);function hu(e){return Cs(e.auth,new lu(e),e.bypassAuthState)}function fu(e){var t=e.auth,n=e.user;return So(n,t,"internal-error"),Is(n,new lu(e),e.bypassAuthState)}function du(e){return pu.apply(this,arguments)}function pu(){return(pu=t(a)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,So(i=n.user,r,"internal-error"),e.abrupt("return",bs(i,new lu(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vu=function(){"use strict";function e(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(Ce)(this,e),this.auth=n,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(Te)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(a)(t(u).mark((function e(r,i){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o,a,s,c,l,h;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,o=e.sessionId,a=e.postBody,s=e.tenantId,c=e.error,l=e.type,!c){t.next=4;break}return n.reject(c),t.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(l)(h);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hu;case"linkViaPopup":case"linkViaRedirect":return du;case"reauthViaPopup":case"reauthViaRedirect":return fu;default:Io(this.auth,"internal-error")}}},{key:"resolve",value:function(e){No(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){No(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),yu=new Uo(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e,t,n){return gu.apply(this,arguments)}function gu(){return(gu=t(a)(t(u).mark((function e(n,r,i){var o,a,s;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=qa(n),To(n,r,hs),a=cu(o,i),s=new _u(o,"signInViaPopup",r,a),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _u=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e,i,o,a,s){var u;return t(Ce)(this,r),(u=n.call(this,e,i,a,s)).provider=o,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(Be)(u),u}return t(Te)(r,[{key:"executeNotNull",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return So(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return No(1===e.filter.length,"Popup operations only handle one event"),r=Ms(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(xo(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(xo(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(xo(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,yu.get())};t()}}]),r}(vu);_u.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ku=new Map,bu=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(Ce)(this,r),(o=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return t(Te)(r,[{key:"execute",value:function(){var e=this,n=this;return t(a)(t(u).mark((function i(){var o,a;return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=ku.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,wu(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(fo)(t(yo)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:ku.set(n.auth._key(),o);case 21:return n.bypassAuthState||ku.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,o=function(){return t(fo)(t(yo)(r.prototype),"onAuthEvent",n)};return t(a)(t(u).mark((function n(){var r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",o().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",o().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(vu);function wu(e,t){return Iu.apply(this,arguments)}function Iu(){return(Iu=t(a)(t(u).mark((function e(n,r){var i,o,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Tu(r),o=Cu(n),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xu(e,t){ku.set(e._key(),t)}function Cu(e){return Po(e._redirectPersistence)}function Tu(e){return xa("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e,t){return Su.apply(this,arguments)}function Su(){return Su=t(a)(t(u).mark((function e(n,r){var i,o,a,s,c,l=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],o=qa(n),a=cu(o,r),s=new bu(o,a,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,o._persistUserIfCurrent(c.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),Su.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ru=function(){"use strict";function e(n){t(Ce)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(Te)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ou(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Ou(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(xo(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nu(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Nu(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Nu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Ou(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Pu(e){return Au.apply(this,arguments)}function Au(){return Au=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(n){var r,i=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Ho(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),Au.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Du=/^https?/;function Mu(){return(Mu=t(a)(t(u).mark((function e(n){var r,i,o,a,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Pu(n);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Uu(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Io(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Uu(e){var t=Lo(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!Du.test(r))return!1;if(Lu.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fu=new Uo(3e4,6e4);function ju(){var e=Fs().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var o,a=Object.keys(e.H)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(Se)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}var Bu=null;function qu(e){return Bu=Bu||function(e){return new Promise((function(t,n){var r,i,o;function a(){ju(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ju(),n(xo(e,"network-request-failed"))},timeout:Fu.get()})}if(null===(i=null===(r=Fs().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Fs().gapi)||void 0===o?void 0:o.load)){var s=iu("iframefcb");return Fs()[s]=function(){gapi.load?a():n(xo(e,"network-request-failed"))},ru("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw Bu=null,e}))}(e),Bu}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zu=new Uo(5e3,15e3),Wu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vu(e){var t=e.config;So(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Fo(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:jn},i=Hu.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(Ot(r).slice(1))}function Ku(e){return Gu.apply(this,arguments)}function Gu(){return Gu=t(a)(t(u).mark((function e(n){var r,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qu(n);case 2:return r=e.sent,So(i=Fs().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Vu(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wu,dontclear:!0},(function(e){return new Promise((r=t(a)(t(u).mark((function r(i,o){var a,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){Fs().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:a=xo(n,"network-request-failed"),s=Fs().setTimeout((function(){o(a)}),zu.get()),e.ping(c).then(c,(function(){o(a)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Gu.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ju="_blank",Qu="http://localhost",$u=function(){"use strict";function e(n){t(Ce)(this,e),this.window=n,this.associatedEvent=null}return t(Te)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Xu(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Yu),{width:i.toString(),height:o.toString(),top:a,left:s}),l=ct().toLowerCase();r&&(u=Ra(l)?Ju:r),Ea(l)&&(n=n||Qu,c.scrollbars="yes");var h=Object.entries(c).reduce((function(e,n){var r=t(Le)(n,2),i=r[0],o=r[1];return"".concat(e).concat(i,"=").concat(o,",")}),"");if(Da(l)&&"_self"!==u)return Zu(n||"",u),new $u(null);var f=window.open(n||"",u,h);So(f,e,"popup-blocked");try{f.focus()}catch(e){}return new $u(f)}function Zu(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ec="__/auth/handler",tc="emulator/auth/handler";function nc(e,n,r,i,o,a){So(e.config.authDomain,e,"auth-domain-config-required"),So(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:jn,eventId:o};if(n instanceof hs){n.setDefaultLanguage(e.languageCode),s.providerId=n.providerId||"",Et(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(a||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=t(Le)(h.value,2),p=d[0],v=d[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof fs){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}e.tenantId&&(s.tid=e.tenantId);var m,g,_=s,k=!0,b=!1,w=void 0;try{for(var I,x=Object.keys(_)[Symbol.iterator]();!(k=(I=x.next()).done);k=!0){var C=I.value;void 0===_[C]&&delete _[C]}}catch(e){b=!0,w=e}finally{try{k||null==x.return||x.return()}finally{if(b)throw w}}return"".concat((m=e,g=m.config,g.emulator?Fo(g,tc):"https://".concat(g.authDomain,"/").concat(ec)),"?").concat(Ot(_).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rc="webStorageSupport",ic=function(){"use strict";function e(){t(Ce)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=As,this._completeRedirectFn=Eu,this._overrideRedirectResult=xu}return t(Te)(e,[{key:"_openPopup",value:function(e,n,r,i){var o=this;return t(a)(t(u).mark((function a(){var s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return No(null===(s=o.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=nc(e,n,r,Lo(),i),t.abrupt("return",Xu(e,c,Ms()));case 4:case"end":return t.stop()}}),a)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var o=this;return t(a)(t(u).mark((function a(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o._originValidation(e);case 2:return a=nc(e,n,r,Lo(),i),Fs().location.href=a,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(No(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ku(e);case 2:return i=t.sent,o=new Ru(e),i.register("authEvent",(function(t){return So(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:o.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:o},n.iframes[e._key()]=i,t.abrupt("return",o);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(rc,{type:rc},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Io(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Mu.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Ua()||Sa()||La()}}]),e}(),oc=ic,ac=function(){"use strict";function e(n){t(Ce)(this,e),this.factorId=n}return t(Te)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ro("unexpected MultiFactorSessionType")}}}]),e}(),sc=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e){var i;return t(Ce)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(Te)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Ho(e,"POST","/v2/accounts/mfaEnrollment:finalize",Wo(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Ho(e,"POST","/v2/accounts/mfaSignIn:finalize",Wo(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(ac);(function(){"use strict";function e(){t(Ce)(this,e)}return t(Te)(e,null,[{key:"assertion",value:function(e){return sc._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var uc,cc="@firebase/auth",lc="0.20.5",hc=function(){"use strict";function e(n){t(Ce)(this,e),this.auth=n,this.internalListeners=new Map}return t(Te)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(a)(t(u).mark((function r(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){So(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();uc="Browser",Ln(new Wt("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){So(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),So(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:uc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fa(uc)},i=new Ba(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Po);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Ln(new Wt("auth-internal",(function(e){var t=qa(e.getProvider("auth").getImmediate());return new hc(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),qn(cc,lc,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(uc)),qn(cc,lc,"esm2017");Be=o("ds8z5"),Ce=o("8MBJY"),Te=o("a2hTj"),qe=o("eYQtU"),h=o("l5bVx"),Je=o("2MbLg");var fc=o("6qd2L"),dc="@firebase/database",pc="0.13.4",vc="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yc,mc=function(){"use strict";function e(n){t(Ce)(this,e),this.domStorage_=n,this.prefix_="firebase:"}return t(Te)(e,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),wt(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:bt(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),e}(),gc=function(){"use strict";function e(){t(Ce)(this,e),this.cache_={},this.isInMemoryStorage=!0}return t(Te)(e,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return Ct(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),e}(),_c=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new mc(t)}}catch(e){}return new gc},kc=_c("localStorage"),bc=_c("sessionStorage"),wc=new tn("@firebase/database"),Ic=(yc=1,function(){return yc++}),xc=function(e){var t=Ft(e),n=new Lt;n.update(t);var r=n.digest();return nt.encodeByteArray(r)},Cc=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var o=t[i];Array.isArray(o)||o&&"object"==typeof o&&"number"==typeof o.length?r+=Cc.apply(null,o):r+="object"==typeof o?wt(o):o,r+=" "}return r},Tc=null,Ec=!0,Sc=function(e,t){Ze(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(wc.logLevel=Kt.VERBOSE,Tc=wc.log.bind(wc),t&&bc.set("logging_enabled",!0)):"function"==typeof e?Tc=e:(Tc=null,bc.remove("logging_enabled"))},Rc=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===Ec&&(Ec=!1,null===Tc&&!0===bc.get("logging_enabled")&&Sc(!0)),Tc){var r=Cc.apply(null,t);Tc(r)}},Nc=function(e){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];Rc.apply(void 0,[e].concat(t(Se)(r)))}},Oc=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+Cc.apply(void 0,t(Se)(n));wc.error(i)},Pc=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(Cc.apply(void 0,t(Se)(n)));throw wc.error(i),new Error(i)},Ac=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+Cc.apply(void 0,t(Se)(n));wc.warn(i)},Lc=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Dc="[MIN_NAME]",Mc="[MAX_NAME]",Uc=function(e,t){if(e===t)return 0;if(e===Dc||t===Mc)return-1;if(t===Dc||e===Mc)return 1;var n=Gc(e),r=Gc(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Fc=function(e,t){return e===t?0:e<t?-1:1},jc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+wt(t))},Bc=function(e){if("object"!=typeof e||null===e)return wt(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=wt(t[i]),r+=":",r+=Bc(e[t[i]]);return r+="}"},qc=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Wc=function(e){Ze(!Lc(e),"Invalid JSON number");var t,n,r,i,o,a=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),a))+a,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(o=0;o<64;o+=8){var l=parseInt(u.substr(o,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Hc=new RegExp("^-?(0*)\\d{1,10}$"),Vc=-2147483648,Kc=2147483647,Gc=function(e){if(Hc.test(e)){var t=Number(e);if(t>=Vc&&t<=Kc)return t}return null},Yc=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw Ac("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Jc=function(e,t){var n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n},Qc=function(){"use strict";function e(n,r){var i=this;t(Ce)(this,e),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return t(Te)(e,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){Ac('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),e}(),$c=function(){"use strict";function e(n,r,i){var o=this;t(Ce)(this,e),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return o.auth_=e}))}return t(Te)(e,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(Rc("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ac(e)}}]),e}(),Xc=function(){"use strict";function e(n){t(Ce)(this,e),this.accessToken=n}return t(Te)(e,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),e}();Xc.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zc="5",el=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,tl="websocket",nl="long_polling",rl=function(){"use strict";function e(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];t(Ce)(this,e),this.secure=r,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kc.get("host:"+n)||this._host}return t(Te)(e,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kc.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),e}();function il(e,t,n){var r;if(Ze("string"==typeof t,"typeof type must == string"),Ze("object"==typeof n,"typeof params must == object"),t===tl)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==nl)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return zc(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ol=function(){"use strict";function e(){t(Ce)(this,e),this.counters_={}}return t(Te)(e,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return at(this.counters_)}}]),e}(),al={},sl={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(e){var t=e.toString();return al[t]||(al[t]=new ol),al[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cl=function(){"use strict";function e(n){t(Ce)(this,e),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t(Te)(e,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Yc((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var o=0;o<i.length;++o)n(o);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),e}(),ll="start",hl="close",fl=function(){"use strict";function e(n,r,i,o,a,s,u){var c=this;t(Ce)(this,e),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nc(n),this.stats_=ul(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),il(r,nl,e)}}return t(Te)(e,[{key:"open",value:function(e,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(dt()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var e=r;if(!r.isClosed_){r.scriptTagHolder=new dl((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=t(Le)(r,5),a=o[0],s=o[1],u=o[2];o[3],o[4];if(e.incrementIncomingBytes_(r),e.scriptTagHolder)if(e.connectTimeoutTimer_&&(clearTimeout(e.connectTimeoutTimer_),e.connectTimeoutTimer_=null),e.everConnected_=!0,a===ll)e.id=s,e.password=u;else{if(a!==hl)throw new Error("Unrecognized command received: "+a);if(s){var c=e;e.scriptTagHolder.sendNewPolls=!1,e.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else e.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=t(Le)(r,2),a=o[0],s=o[1];e.incrementIncomingBytes_(r),e.myPacketOrderer.handleResponse(a,s)}),(function(){e.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=Zc,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&el.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=rt(t),r=qc(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!dt()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){e.forceAllow_=!0}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!dt()&&(!!e.forceAllow_||!(e.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),e}(),dl=function(){"use strict";function e(n,r,i,o){if(t(Ce)(this,e),this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,dt())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=Ic(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=e.createIFrame_();var a="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))a='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){Rc("frame writing exception"),e.stack&&Rc(e.stack),Rc(e)}}}return t(Te)(e,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;dt()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){Rc("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Rc("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),e}(),pl=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"undefined"!=typeof MozWebSocket?pl=MozWebSocket:"undefined"!=typeof WebSocket&&(pl=WebSocket);var vl=function(){"use strict";function e(n,r,i,o,a,s,u){t(Ce)(this,e),this.connId=n,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nc(this.connId),this.stats_=ul(r),this.connURL=e.connectionURL_(r,s,u,o,i),this.nodeAdmin=r.nodeAdmin}return t(Te)(e,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kc.set("previous_websocket_failure",!0);try{var r;if(dt()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(Zc,"/").concat(vc,"/").concat(fc.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var o={},a=0===this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy;a&&(r.proxy={origin:a})}this.mySock=new pl(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){kc.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=bt(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(Ze(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=qc(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var o={};return o.v=Zc,!dt()&&"undefined"!=typeof location&&location.hostname&&el.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),il(e,tl,o)}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){var t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==pl&&!e.forceDisallow_}},{key:"previouslyFailed",value:function(){return kc.isInMemoryStorage||!0===kc.get("previous_websocket_failure")}}]),e}();vl.responsesRequiredToBeHealthy=2,vl.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yl=function(){"use strict";function e(n){t(Ce)(this,e),this.initTransports_(n)}return t(Te)(e,[{key:"initTransports_",value:function(t){var n=vl&&vl.isAvailable(),r=n&&!vl.previouslyFailed();if(t.webSocketOnly&&(n||Ac("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vl];else{var i=this.transports_=[],o=!0,a=!1,s=void 0;try{for(var u,c=e.ALL_TRANSPORTS[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}e.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[fl,vl]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),e}();yl.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ml=function(){"use strict";function e(n,r,i,o,a,s,u,c,l,h){t(Ce)(this,e),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nc("c:"+this.id+":"),this.transportManager_=new yl(r),this.log_("Connection created"),this.start_()}return t(Te)(e,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Jc((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=jc("t",e),n=jc("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=jc("t",e),n=jc("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=jc("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Oc("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Oc("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zc!==n&&Ac("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Jc((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jc((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kc.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),e}(),gl=function(){"use strict";function e(){t(Ce)(this,e)}return t(Te)(e,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),e}(),_l=function(){"use strict";function e(n){t(Ce)(this,e),this.allowedEvents_=n,this.listeners_={},Ze(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return t(Te)(e,[{key:"trigger",value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[e]))for(var o=t(Se)(this.listeners_[e]),a=0;a<o.length;a++)o[a].callback.apply(o[a].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){Ze(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),e}(),kl=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){var e;return t(Ce)(this,r),(e=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||lt()||(window.addEventListener("online",(function(){e.online_||(e.online_=!0,e.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){e.online_&&(e.online_=!1,e.trigger("online",!1))}),!1)),e}return t(Te)(r,[{key:"getInitialEvent",value:function(e){return Ze("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(_l),bl=function(){"use strict";function e(n,r){if(t(Ce)(this,e),void 0===r){this.pieces_=n.split("/");for(var i=0,o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return t(Te)(e,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),e}();function wl(){return new bl("")}function Il(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function xl(e){return e.pieces_.length-e.pieceNum_}function Cl(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new bl(e.pieces_,t)}function Tl(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function El(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Sl(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new bl(t,0)}function Rl(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof bl)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var o=t.split("/"),a=0;a<o.length;a++)o[a].length>0&&n.push(o[a]);return new bl(n,0)}function Nl(e){return e.pieceNum_>=e.pieces_.length}function Ol(e,t){var n=Il(e),r=Il(t);if(null===n)return t;if(n===r)return Ol(Cl(e),Cl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Pl(e,t){for(var n=El(e,0),r=El(t,0),i=0;i<n.length&&i<r.length;i++){var o=Uc(n[i],r[i]);if(0!==o)return o}return n.length===r.length?0:n.length<r.length?-1:1}function Al(e,t){if(xl(e)!==xl(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ll(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(xl(e)>xl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Dl=function e(n,r){"use strict";t(Ce)(this,e),this.errorPrefix_=r,this.parts_=El(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=jt(this.parts_[i]);Ml(this)};function Ml(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ul(e))}function Ul(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fl=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){var e,i,o;return t(Ce)(this,r),e=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(o="visibilitychange",i="hidden"):void 0!==document.mozHidden?(o="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(o="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(o="webkitvisibilitychange",i="webkitHidden")),e.visible_=!0,o&&document.addEventListener(o,(function(){var t=!document[i];t!==e.visible_&&(e.visible_=t,e.trigger("visible",t))}),!1),e}return t(Te)(r,[{key:"getInitialEvent",value:function(e){return Ze("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(_l),jl=1e3,Bl=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e,i,o,a,s,u,c,l){var h;if(t(Ce)(this,r),(h=n.call(this)).repoInfo_=e,h.applicationId_=i,h.onDataUpdate_=o,h.onConnectStatus_=a,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=l,h.id=r.nextPersistentConnectionId_++,h.log_=Nc("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=jl,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,l&&!dt())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return Fl.getInstance().on("visible",h.onVisible_,t(Be)(h)),-1===e.host.indexOf("fblocal")&&kl.getInstance().on("online",h.onOnline_,t(Be)(h)),h}return t(Te)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(wt(i)),Ze(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new ut,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Ze(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ze(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);var a={p:i};e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest("q",a,(function(a){var s=a.d,u=a.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(o))===e&&(t.log_("listen response",a),"ok"!==u&&t.removeListen_(i,o),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=It(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=xt(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Ze(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+wt(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Oc("Unrecognized action received from server: "+wt(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;Ze(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=jl),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var e=this;return t(a)(t(u).mark((function n(){var i,o,a,s,c,l,h,f,d,p,v,y,m;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.shouldReconnect_()){n.next=31;break}return e.log_("Making a connection attempt"),e.lastConnectionAttemptTime_=(new Date).getTime(),e.lastConnectionEstablishedTime_=null,i=e.onDataMessage_.bind(e),o=e.onReady_.bind(e),a=e.onRealtimeDisconnect_.bind(e),s=e.id+":"+r.nextConnectionId_++,c=e.lastSessionId,l=!1,h=null,f=function(){h?h.close():(l=!0,a())},d=function(e){Ze(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},e.realtime_={close:f,sendRequest:d},p=e.forceTokenRefresh_,e.forceTokenRefresh_=!1,n.prev=16,n.t0=t(Le),n.next=20,Promise.all([e.authTokenProvider_.getToken(p),e.appCheckTokenProvider_.getToken(p)]);case 20:n.t1=n.sent,v=(0,n.t0)(n.t1,2),y=v[0],m=v[1],l?Rc("getToken() completed but was canceled"):(Rc("getToken() completed. Creating connection."),e.authToken_=y&&y.accessToken,e.appCheckToken_=m&&m.token,h=new ml(s,e.repoInfo_,e.applicationId_,e.appCheckToken_,e.authToken_,i,o,a,(function(t){Ac(t+" ("+e.repoInfo_.toString()+")"),e.interrupt("server_kill")}),c)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),e.log_("Failed to get token: "+n.t2),l||(e.repoInfo_.nodeAdmin&&Ac(n.t2),f());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){Rc("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){Rc("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Et(this.interruptReasons_)&&(this.reconnectDelay_=jl,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Bc(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new bl(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){Rc("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){Rc("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,o=void 0;try{for(var a,s=this.listens.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}for(var f=0;f<this.outstandingPuts_.length;f++)this.outstandingPuts_[f]&&this.sendPut_(f);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";dt()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+vc.replace(/\./g,"-")]=1,lt()?e["framework.cordova"]=1:ft()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=kl.getInstance().currentlyOnline();return Et(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&Ct(e,"w")){var n=Tt(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Ac("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(gl);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bl.nextPersistentConnectionId_=0,Bl.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ql,zl=function(){"use strict";function e(n,r){t(Ce)(this,e),this.name=n,this.node=r}return t(Te)(e,null,[{key:"Wrap",value:function(t,n){return new e(t,n)}}]),e}(),Wl=function(){"use strict";function e(){t(Ce)(this,e)}return t(Te)(e,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new zl(Dc,e),r=new zl(Dc,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return zl.MIN}}]),e}(),Hl=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){return t(Ce)(this,r),n.apply(this,arguments)}return t(Te)(r,[{key:"compare",value:function(e,t){return Uc(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw et("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return zl.MIN}},{key:"maxPost",value:function(){return new zl(Mc,ql)}},{key:"makePost",value:function(e,t){return Ze("string"==typeof e,"KeyIndex indexValue must always be a string."),new zl(e,ql)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return ql},set:function(e){ql=e}}]),r}(Wl),Vl=new Hl,Kl=function(){"use strict";function e(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;t(Ce)(this,e),this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,o&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return t(Te)(e,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),e}(),Gl=function(){"use strict";function e(n,r,i,o,a){t(Ce)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=o?o:Ql.EMPTY_NODE,this.right=null!=a?a:Ql.EMPTY_NODE}return t(Te)(e,[{key:"copy",value:function(t,n,r,i,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Ql.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ql.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight_",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gl.RED=!0,Gl.BLACK=!1;var Yl,Jl=function(){"use strict";function e(){t(Ce)(this,e)}return t(Te)(e,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Gl(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),e}(),Ql=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.EMPTY_NODE;t(Ce)(this,e),this.comparator_=n,this.root_=r}return t(Te)(e,[{key:"insert",value:function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Gl.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Gl.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Kl(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Kl(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Kl(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Kl(this.root_,null,this.comparator_,!0,e)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $l(e,t){return Uc(e.name,t.name)}function Xl(e,t){return Uc(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ql.EMPTY_NODE=new Jl;var Zl,eh,th,nh=function(e){return"number"==typeof e?"number:"+Wc(e):"string:"+e},rh=function(e){if(e.isLeafNode()){var t=e.val();Ze("string"==typeof t||"number"==typeof t||"object"==typeof t&&Ct(t,".sv"),"Priority must be a string or number.")}else Ze(e===Yl||e.isEmpty(),"priority of unexpected type.");Ze(e===Yl||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},ih=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.__childrenNodeConstructor.EMPTY_NODE;t(Ce)(this,e),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,Ze(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),rh(this.priorityNode_)}return t(Te)(e,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(t){return new e(this.value_,t)}},{key:"getImmediateChild",value:function(t){return".priority"===t?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(t){return Nl(t)?this:".priority"===Il(t)?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(t,n){var r=Il(t);return null===r?n:n.isEmpty()&&".priority"!==r?this:(Ze(".priority"!==r||1===xl(t),".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Cl(t),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+nh(this.priorityNode_.val())+":");var n=t(h)(this.value_);e+=n+":",e+="number"===n?Wc(this.value_):this.value_,this.lazyHash_=xc(e)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(Ze(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}},{key:"compareToLeafNode_",value:function(n){var r=t(h)(n.value_),i=t(h)(this.value_),o=e.VALUE_TYPE_ORDER.indexOf(r),a=e.VALUE_TYPE_ORDER.indexOf(i);return Ze(o>=0,"Unknown leaf type: "+r),Ze(a>=0,"Unknown leaf type: "+i),o===a?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:a-o}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Zl},set:function(e){Zl=e}}]),e}();ih.VALUE_TYPE_ORDER=["object","boolean","number","string"];var oh,ah,sh=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){return t(Ce)(this,r),n.apply(this,arguments)}return t(Te)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Uc(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return zl.MIN}},{key:"maxPost",value:function(){return new zl(Mc,new ih("[PRIORITY-POST]",th))}},{key:"makePost",value:function(e,t){var n=eh(e);return new zl(t,new ih("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Wl),uh=new sh,ch=Math.log(2),lh=function(){"use strict";function e(n){t(Ce)(this,e);var r;this.count=(r=n+1,parseInt(Math.log(r)/ch,10)),this.current_=this.count-1;var i,o=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&o}return t(Te)(e,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),e}(),hh=function(e,t,n,r){e.sort(t);var i=function(t,r){var o,a,s=r-t;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Gl(a,o.node,Gl.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return o=e[u],a=n?n(o):o,new Gl(a,o.node,Gl.BLACK,c,l)},o=function(t){for(var r=null,o=null,a=e.length,s=function(t,r){var o=a-t,s=a;a-=t;var c=i(o+1,s),l=e[o],h=n?n(l):l;u(new Gl(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Gl.BLACK):(s(h,Gl.BLACK),s(h,Gl.RED))}return o}(new lh(e.length));return new Ql(r||t,o)},fh={},dh=function(){"use strict";function e(n,r){t(Ce)(this,e),this.indexes_=n,this.indexSet_=r}return t(Te)(e,[{key:"get",value:function(e){var t=Tt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ql?t:null}},{key:"hasIndex",value:function(e){return Ct(this.indexSet_,e.toString())}},{key:"addIndex",value:function(t,n){Ze(t!==Vl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],o=!1,a=n.getIterator(zl.Wrap),s=a.getNext();s;)o=o||t.isDefinedOn(s.node),i.push(s),s=a.getNext();r=o?hh(i,t.getCompare()):fh;var u=t.toString(),c=Object.assign({},this.indexSet_);c[u]=t;var l=Object.assign({},this.indexes_);return l[u]=r,new e(l,c)}},{key:"addToIndexes",value:function(t,n){var r=this;return new e(St(this.indexes_,(function(e,i){var o=Tt(r.indexSet_,i);if(Ze(o,"Missing index implementation for "+i),e===fh){if(o.isDefinedOn(t.node)){for(var a=[],s=n.getIterator(zl.Wrap),u=s.getNext();u;)u.name!==t.name&&a.push(u),u=s.getNext();return a.push(t),hh(a,o.getCompare())}return fh}var c=n.get(t.name),l=e;return c&&(l=l.remove(new zl(t.name,c))),l.insert(t,t.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(t,n){return new e(St(this.indexes_,(function(e){if(e===fh)return e;var r=n.get(t.name);return r?e.remove(new zl(t.name,r)):e})),this.indexSet_)}}],[{key:"Default",get:function(){return Ze(fh&&uh,"ChildrenNode.ts has not been loaded"),oh=oh||new e({".priority":fh},{".priority":uh})}}]),e}(),ph=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&rh(this.priorityNode_),this.children_.isEmpty()&&Ze(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return t(Te)(e,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||ah}},{key:"updatePriority",value:function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?ah:t}},{key:"getChild",value:function(e){var t=Il(e);return null===t?this:this.getImmediateChild(t).getChild(Cl(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(t,n){if(Ze(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);var r,i,o=new zl(t,n);n.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(o,this.children_)):(r=this.children_.insert(t,n),i=this.indexMap_.addToIndexes(o,this.children_));var a=r.isEmpty()?ah:this.priorityNode_;return new e(r,a,i)}},{key:"updateChild",value:function(e,t){var n=Il(e);if(null===n)return t;Ze(".priority"!==Il(e)||1===xl(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(Cl(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(uh,(function(a,s){n[a]=s.val(t),r++,o&&e.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1})),!t&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+nh(this.getPriority().val())+":"),this.forEachChild(uh,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":xc(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new zl(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new zl(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new zl(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,zl.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,zl.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vh?-1:0}},{key:"withIndex",value:function(t){if(t===Vl||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Vl||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(uh),r=t.getIterator(uh),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Vl?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return ah||(ah=new e(new Ql(Xl),null,dh.Default))}}]),e}();ph.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var vh=new(function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){return t(Ce)(this,r),n.call(this,new Ql(Xl),ph.EMPTY_NODE,dh.Default)}return t(Te)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return ph.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(ph));Object.defineProperties(zl,{MIN:{value:new zl(Dc,ph.EMPTY_NODE)},MAX:{value:new zl(Mc,vh)}}),Hl.__EMPTY_NODE=ph.EMPTY_NODE,ih.__childrenNodeConstructor=ph,Yl=vh,function(e){th=e}(vh);function yh(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===e)return ph.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(n=e[".priority"]),Ze(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":t(h)(n))),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){var r=e;return new ih(r,yh(n))}if(e instanceof Array){var i=ph.EMPTY_NODE;return zc(e,(function(t,n){if(Ct(e,t)&&"."!==t.substring(0,1)){var r=yh(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(t,r))}})),i.updatePriority(yh(n))}var o=[],a=!1,s=e;if(zc(s,(function(e,t){if("."!==e.substring(0,1)){var n=yh(t);n.isEmpty()||(a=a||!n.getPriority().isEmpty(),o.push(new zl(e,n)))}})),0===o.length)return ph.EMPTY_NODE;var u=hh(o,$l,(function(e){return e.name}),Xl);if(a){var c=hh(o,uh.getCompare());return new ph(u,yh(n),new dh({".priority":c},{".priority":uh}))}return new ph(u,yh(n),dh.Default)}!function(e){eh=e}(yh);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mh,gh,_h=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e){var i;return t(Ce)(this,r),(i=n.call(this)).indexPath_=e,Ze(!Nl(e)&&".priority"!==Il(e),"Can't create PathIndex with empty path or .priority key"),i}return t(Te)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Uc(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=yh(e),r=ph.EMPTY_NODE.updateChild(this.indexPath_,n);return new zl(t,r)}},{key:"maxPost",value:function(){var e=ph.EMPTY_NODE.updateChild(this.indexPath_,vh);return new zl(Mc,e)}},{key:"toString",value:function(){return El(this.indexPath_,0).join("/")}}]),r}(Wl),kh=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(){return t(Ce)(this,r),n.apply(this,arguments)}return t(Te)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?Uc(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return zl.MIN}},{key:"maxPost",value:function(){return zl.MAX}},{key:"makePost",value:function(e,t){var n=yh(e);return new zl(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Wl),bh=new kh,wh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mh=0,gh=[];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ih(e){return{type:"value",snapshotNode:e}}function xh(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ch(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Th(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Eh=function(){"use strict";function e(n){t(Ce)(this,e),this.index_=n}return t(Te)(e,[{key:"updateChild",value:function(e,t,n,r,i,o){Ze(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Ch(t,a)):Ze(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(xh(t,n)):o.trackChildChange(Th(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}},{key:"updateFullNode",value:function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(uh,(function(e,r){t.hasChild(e)||n.trackChildChange(Ch(e,r))})),t.isLeafNode()||t.forEachChild(uh,(function(t,r){if(e.hasChild(t)){var i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Th(t,r,i))}else n.trackChildChange(xh(t,r))}))),t.withIndex(this.index_)}},{key:"updatePriority",value:function(e,t){return e.isEmpty()?ph.EMPTY_NODE:e.updatePriority(t)}},{key:"filtersNodes",value:function(){return!1}},{key:"getIndexedFilter",value:function(){return this}},{key:"getIndex",value:function(){return this.index_}}]),e}(),Sh=function(){"use strict";function e(n){t(Ce)(this,e),this.indexedFilter_=new Eh(n.getIndex()),this.index_=n.getIndex(),this.startPost_=e.getStartPost_(n),this.endPost_=e.getEndPost_(n)}return t(Te)(e,[{key:"getStartPost",value:function(){return this.startPost_}},{key:"getEndPost",value:function(){return this.endPost_}},{key:"matches",value:function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}},{key:"updateChild",value:function(e,t,n,r,i,o){return this.matches(new zl(t,n))||(n=ph.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}},{key:"updateFullNode",value:function(e,t,n){t.isLeafNode()&&(t=ph.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(ph.EMPTY_NODE);var i=this;return t.forEachChild(uh,(function(e,t){i.matches(new zl(e,t))||(r=r.updateImmediateChild(e,ph.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.indexedFilter_}},{key:"getIndex",value:function(){return this.index_}}],[{key:"getStartPost_",value:function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}},{key:"getEndPost_",value:function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}]),e}(),Rh=function(){"use strict";function e(n){t(Ce)(this,e),this.rangedFilter_=new Sh(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft()}return t(Te)(e,[{key:"updateChild",value:function(e,t,n,r,i,o){return this.rangedFilter_.matches(new zl(t,n))||(n=ph.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}},{key:"updateFullNode",value:function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=ph.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){var i;r=ph.EMPTY_NODE.withIndex(this.index_),i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var o=0;i.hasNext()&&o<this.limit_;){var a=i.getNext();if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:this.index_.compare(a,this.rangedFilter_.getEndPost())<=0))break;r=r.updateImmediateChild(a.name,a.node),o++}}else{var s,u,c,l;if(r=(r=t.withIndex(this.index_)).updatePriority(ph.EMPTY_NODE),this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();c=function(e,t){return h(t,e)}}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),c=this.index_.getCompare();for(var f=0,d=!1;l.hasNext();){var p=l.getNext();!d&&c(s,p)<=0&&(d=!0),d&&f<this.limit_&&c(p,u)<=0?f++:r=r.updateImmediateChild(p.name,ph.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.rangedFilter_.getIndexedFilter()}},{key:"getIndex",value:function(){return this.index_}},{key:"fullLimitUpdateChild_",value:function(e,t,n,r,i){var o;if(this.reverse_){var a=this.index_.getCompare();o=function(e,t){return a(t,e)}}else o=this.index_.getCompare();var s=e;Ze(s.numChildren()===this.limit_,"");var u=new zl(t,n),c=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(u);if(s.hasChild(t)){for(var h=s.getImmediateChild(t),f=r.getChildAfterChild(this.index_,c,this.reverse_);null!=f&&(f.name===t||s.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);var d=null==f?1:o(f,u);if(l&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(Th(t,n,h)),s.updateImmediateChild(t,n);null!=i&&i.trackChildChange(Ch(t,h));var p=s.updateImmediateChild(t,ph.EMPTY_NODE);return null!=f&&this.rangedFilter_.matches(f)?(null!=i&&i.trackChildChange(xh(f.name,f.node)),p.updateImmediateChild(f.name,f.node)):p}return n.isEmpty()?e:l&&o(c,u)>=0?(null!=i&&(i.trackChildChange(Ch(c.name,c.node)),i.trackChildChange(xh(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(c.name,ph.EMPTY_NODE)):e}}]),e}(),Nh=function(){"use strict";function e(){t(Ce)(this,e),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=uh}return t(Te)(e,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return Ze(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return Ze(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dc}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return Ze(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return Ze(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mc}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return Ze(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===uh}},{key:"copy",value:function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(e){var t,n={};return e.isDefault()||(e.index_===uh?t="$priority":e.index_===bh?t="$value":e.index_===Vl?t="$key":(Ze(e.index_ instanceof _h,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=wt(t),e.startSet_&&(n.startAt=wt(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+wt(e.indexStartName_))),e.endSet_&&(n.endAt=wt(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+wt(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function Ph(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==uh&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ah=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e,i,o,a){var s;return t(Ce)(this,r),(s=n.call(this)).repoInfo_=e,s.onDataUpdate_=i,s.authTokenProvider_=o,s.appCheckTokenProvider_=a,s.log_=Nc("p:rest:"),s.listens_={},s}return t(Te)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var o=this,a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=Oh(e._queryParams);this.restRequest_(a+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&o.onDataUpdate_(a,r,!1,n),Tt(o.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=Oh(e._queryParams),r=e._path.toString(),i=new ut;return this.restRequest_(r+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(r,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(o){var a=t(Le)(o,2),s=a[0],u=a[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+e+"?ns="+i.repoInfo_.namespace+Ot(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=bt(h.responseText)}catch(e){Ac("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&Ac("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(Ze(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(gl),Lh=function(){"use strict";function e(){t(Ce)(this,e),this.rootNode_=ph.EMPTY_NODE}return t(Te)(e,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dh(){return{value:null,children:new Map}}function Mh(e,t,n){if(Nl(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Il(t);e.children.has(r)||e.children.set(r,Dh()),Mh(e.children.get(r),t=Cl(t),n)}}function Uh(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(function(e,r){Uh(r,new bl(t.toString()+"/"+e),n)}))}var Fh,jh,Bh=function(){"use strict";function e(n){t(Ce)(this,e),this.collection_=n,this.last_=null}return t(Te)(e,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&zc(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),e}(),qh=function(){"use strict";function e(n,r){t(Ce)(this,e),this.server_=r,this.statsToReport_={},this.statsListener_=new Bh(n);var i=1e4+2e4*Math.random();Jc(this.reportStats_.bind(this),Math.floor(i))}return t(Te)(e,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;zc(t,(function(t,i){i>0&&Ct(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Jc(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(jh=Fh||(Fh={}))[jh.OVERWRITE=0]="OVERWRITE",jh[jh.MERGE=1]="MERGE",jh[jh.ACK_USER_WRITE=2]="ACK_USER_WRITE",jh[jh.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Wh,Hh=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.path=n,this.affectedTree=r,this.revert=i,this.type=Fh.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return t(Te)(e,[{key:"operationForChild",value:function(t){if(Nl(this.path)){if(null!=this.affectedTree.value)return Ze(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new bl(t));return new e(wl(),n,this.revert)}return Ze(Il(this.path)===t,"operationForChild called for unrelated child."),new e(Cl(this.path),this.affectedTree,this.revert)}}]),e}(),Vh=function(){"use strict";function e(n,r){t(Ce)(this,e),this.source=n,this.path=r,this.type=Fh.LISTEN_COMPLETE}return t(Te)(e,[{key:"operationForChild",value:function(t){return Nl(this.path)?new e(this.source,wl()):new e(this.source,Cl(this.path))}}]),e}(),Kh=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.source=n,this.path=r,this.snap=i,this.type=Fh.OVERWRITE}return t(Te)(e,[{key:"operationForChild",value:function(t){return Nl(this.path)?new e(this.source,wl(),this.snap.getImmediateChild(t)):new e(this.source,Cl(this.path),this.snap)}}]),e}(),Gh=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.source=n,this.path=r,this.children=i,this.type=Fh.MERGE}return t(Te)(e,[{key:"operationForChild",value:function(t){if(Nl(this.path)){var n=this.children.subtree(new bl(t));return n.isEmpty()?null:n.value?new Kh(this.source,wl(),n.value):new e(this.source,wl(),n)}return Ze(Il(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,Cl(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),e}(),Yh=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return t(Te)(e,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(Nl(e))return this.isFullyInitialized()&&!this.filtered_;var t=Il(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),e}(),Jh=function e(n){"use strict";t(Ce)(this,e),this.query_=n,this.index_=this.query_._queryParams.getIndex()};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(e,t,n,r,i,o){var a=r.filter((function(e){return e.type===n}));a.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw et("Should only compare child_ events.");var r=new zl(t.childName,t.snapshotNode),i=new zl(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)})),a.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function $h(e,t){return{eventCache:e,serverCache:t}}function Xh(e,t,n,r){return $h(new Yh(t,n,r),e.serverCache)}function Zh(e,t,n,r){return $h(e.eventCache,new Yh(t,n,r))}function ef(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tf(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nf=function(){return Wh||(Wh=new Ql(Fc)),Wh},rf=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nf();t(Ce)(this,e),this.value=n,this.children=r}return t(Te)(e,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:wl(),value:this.value};if(Nl(e))return null;var n=Il(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(Cl(e),t);return null!=i?{path:Rl(new bl(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(t){if(Nl(t))return this;var n=Il(t),r=this.children.get(n);return null!==r?r.subtree(Cl(t)):new e(null)}},{key:"set",value:function(t,n){if(Nl(t))return new e(n,this.children);var r=Il(t),i=(this.children.get(r)||new e(null)).set(Cl(t),n),o=this.children.insert(r,i);return new e(this.value,o)}},{key:"remove",value:function(t){if(Nl(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=Il(t),r=this.children.get(n);if(r){var i,o=r.remove(Cl(t));return i=o.isEmpty()?this.children.remove(n):this.children.insert(n,o),null===this.value&&i.isEmpty()?new e(null):new e(this.value,i)}return this}},{key:"get",value:function(e){if(Nl(e))return this.value;var t=Il(e),n=this.children.get(t);return n?n.get(Cl(e)):null}},{key:"setTree",value:function(t,n){if(Nl(t))return n;var r,i=Il(t),o=(this.children.get(i)||new e(null)).setTree(Cl(t),n);return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new e(this.value,r)}},{key:"fold",value:function(e){return this.fold_(wl(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(Rl(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,wl(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(Nl(e))return null;var i=Il(e),o=this.children.get(i);return o?o.findOnPath_(Cl(e),Rl(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,wl(),t)}},{key:"foreachOnPath_",value:function(t,n,r){if(Nl(t))return this;this.value&&r(n,this.value);var i=Il(t),o=this.children.get(i);return o?o.foreachOnPath_(Cl(t),Rl(n,i),r):new e(null)}},{key:"foreach",value:function(e){this.foreach_(wl(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(Rl(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(t){var n=new e(null);return zc(t,(function(e,t){n=n.set(new bl(e),t)})),n}}]),e}(),of=function(){"use strict";function e(n){t(Ce)(this,e),this.writeTree_=n}return t(Te)(e,null,[{key:"empty",value:function(){return new e(new rf(null))}}]),e}();function af(e,t,n){if(Nl(t))return new of(new rf(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,o=r.value,a=Ol(i,t);return o=o.updateChild(a,n),new of(e.writeTree_.set(i,o))}var s=new rf(n),u=e.writeTree_.setTree(t,s);return new of(u)}function sf(e,t,n){var r=e;return zc(n,(function(e,n){r=af(r,Rl(t,e),n)})),r}function uf(e,t){if(Nl(t))return of.empty();var n=e.writeTree_.setTree(t,new rf(null));return new of(n)}function cf(e,t){return null!=lf(e,t)}function lf(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ol(n.path,t)):null}function hf(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(uh,(function(e,n){t.push(new zl(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new zl(e,n.value))})),t}function ff(e,t){if(Nl(t))return e;var n=lf(e,t);return new of(null!=n?new rf(n):e.writeTree_.subtree(t))}function df(e){return e.writeTree_.isEmpty()}function pf(e,t){return vf(wl(),e.writeTree_,t)}function vf(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(Ze(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=vf(Rl(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Rl(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e,t){return Nf(t,e)}function mf(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function gf(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));Ze(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=e.allWrites.length-1;i&&a>=0;){var s=e.allWrites[a];s.visible&&(a>=n&&_f(s,r.path)?i=!1:Ll(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=bf(e.allWrites,kf,wl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=uf(e.visibleWrites,r.path):zc(r.children,(function(t){e.visibleWrites=uf(e.visibleWrites,Rl(r.path,t))}));return!0}return!1}function _f(e,t){if(e.snap)return Ll(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Ll(Rl(e.path,n),t))return!0;return!1}function kf(e){return e.visible}function bf(e,t,n){for(var r=of.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var a=o.path,s=void 0;if(o.snap)Ll(n,a)?r=af(r,s=Ol(n,a),o.snap):Ll(a,n)&&(s=Ol(a,n),r=af(r,wl(),o.snap.getChild(s)));else{if(!o.children)throw et("WriteRecord should have .snap or .children");if(Ll(n,a))r=sf(r,s=Ol(n,a),o.children);else if(Ll(a,n))if(Nl(s=Ol(a,n)))r=sf(r,wl(),o.children);else{var u=Tt(o.children,Il(s));if(u){var c=u.getChild(Cl(s));r=af(r,wl(),c)}}}}}return r}function wf(e,t,n,r,i){if(r||i){var o=ff(e.visibleWrites,t);if(!i&&df(o))return n;if(i||null!=n||cf(o,wl())){return pf(bf(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ll(e.path,t)||Ll(t,e.path))}),t),n||ph.EMPTY_NODE)}return null}var a=lf(e.visibleWrites,t);if(null!=a)return a;var s=ff(e.visibleWrites,t);return df(s)?n:null!=n||cf(s,wl())?pf(s,n||ph.EMPTY_NODE):null}function If(e,t,n,r){return wf(e.writeTree,e.treePath,t,n,r)}function xf(e,t){return function(e,t,n){var r=ph.EMPTY_NODE,i=lf(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(uh,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var o=ff(e.visibleWrites,t);return n.forEachChild(uh,(function(e,t){var n=pf(ff(o,new bl(e)),t);r=r.updateImmediateChild(e,n)})),hf(o).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return hf(ff(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Cf(e,t,n,r){return function(e,t,n,r,i){Ze(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=Rl(t,n);if(cf(e.visibleWrites,o))return null;var a=ff(e.visibleWrites,o);return df(a)?i.getChild(n):pf(a,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function Tf(e,t){return function(e,t){return lf(e.visibleWrites,t)}(e.writeTree,Rl(e.treePath,t))}function Ef(e,t,n,r,i,o){return function(e,t,n,r,i,o,a){var s,u=ff(e.visibleWrites,t),c=lf(u,wl());if(null!=c)s=c;else{if(null==n)return[];s=pf(u,n)}if((s=s.withIndex(a)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=a.getCompare(),f=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),d=f.getNext();d&&l.length<i;)0!==h(d,r)&&l.push(d),d=f.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,o)}function Sf(e,t,n){return function(e,t,n,r){var i=Rl(t,n),o=lf(e.visibleWrites,i);return null!=o?o:r.isCompleteForChild(n)?pf(ff(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Rf(e,t){return Nf(Rl(e.treePath,t),e.writeTree)}function Nf(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Of=function(){"use strict";function e(){t(Ce)(this,e),this.changeMap=new Map}return t(Te)(e,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;Ze("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Ze(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Th(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Ch(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,xh(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw et("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Th(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),e}(),Pf=new(function(){"use strict";function e(){t(Ce)(this,e)}return t(Te)(e,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),e}()),Af=function(){"use strict";function e(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t(Ce)(this,e),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return t(Te)(e,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Yh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sf(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tf(this.viewCache_),i=Ef(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(e,t,n,r,i){var o,a,s=new Of;if(n.type===Fh.OVERWRITE){var u=n;u.source.fromUser?o=Uf(e,t,u.path,u.snap,r,i,s):(Ze(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Nl(u.path),o=Mf(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===Fh.MERGE){var c=n;c.source.fromUser?o=function(e,t,n,r,i,o,a){var s=t;return r.foreach((function(r,u){var c=Rl(n,r);Ff(t,Il(c))&&(s=Uf(e,s,c,u,i,o,a))})),r.foreach((function(r,u){var c=Rl(n,r);Ff(t,Il(c))||(s=Uf(e,s,c,u,i,o,a))})),s}(e,t,c.path,c.children,r,i,s):(Ze(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Bf(e,t,c.path,c.children,r,i,a,s))}else if(n.type===Fh.ACK_USER_WRITE){var l=n;o=l.revert?function(e,t,n,r,i,o){var a;if(null!=Tf(r,n))return t;var s,u=new Af(r,t,i),c=t.eventCache.getNode();if(Nl(n)||".priority"===Il(n)){var l;if(t.serverCache.isFullyInitialized())l=If(r,tf(t));else{var h=t.serverCache.getNode();Ze(h instanceof ph,"serverChildren would be complete if leaf node"),l=xf(r,h)}s=e.filter.updateFullNode(c,l,o)}else{var f=Il(n),d=Sf(r,f,t.serverCache);null==d&&t.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),(s=null!=d?e.filter.updateChild(c,f,d,Cl(n),u,o):t.eventCache.getNode().hasChild(f)?e.filter.updateChild(c,f,ph.EMPTY_NODE,Cl(n),u,o):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(a=If(r,tf(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,a,o))}return a=t.serverCache.isFullyInitialized()||null!=Tf(r,wl()),Xh(t,s,a,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,o,a){if(null!=Tf(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(Nl(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Mf(e,t,n,u.getNode().getChild(n),i,o,s,a);if(Nl(n)){var c=new rf(null);return u.getNode().forEachChild(Vl,(function(e,t){c=c.set(new bl(e),t)})),Bf(e,t,n,c,i,o,s,a)}return t}var l=new rf(null);return r.foreach((function(e,t){var r=Rl(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Bf(e,t,n,l,i,o,s,a)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Fh.LISTEN_COMPLETE)throw et("Unknown operation type: "+n.type);o=function(e,t,n,r,i){var o=t.serverCache,a=Zh(t,o.getNode(),o.isFullyInitialized()||Nl(n),o.isFiltered());return Df(e,a,n,r,Pf,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=ef(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Ih(ef(t)))}}(t,o,h),{viewCache:o,changes:h}}function Df(e,t,n,r,i,o){var a,s,u=t.eventCache;if(null!=Tf(r,n))return t;if(Nl(n))if(Ze(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=tf(t),l=xf(r,c instanceof ph?c:ph.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),l,o)}else{var h=If(r,tf(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var f=Il(n);if(".priority"===f){Ze(1===xl(n),"Can't have a priority with additional path components");var d=u.getNode(),p=Cf(r,n,d,s=t.serverCache.getNode());a=null!=p?e.filter.updatePriority(d,p):u.getNode()}else{var v,y=Cl(n);if(u.isCompleteForChild(f)){s=t.serverCache.getNode();var m=Cf(r,n,u.getNode(),s);v=null!=m?u.getNode().getImmediateChild(f).updateChild(y,m):u.getNode().getImmediateChild(f)}else v=Sf(r,f,t.serverCache);a=null!=v?e.filter.updateChild(u.getNode(),f,v,y,i,o):u.getNode()}}return Xh(t,a,u.isFullyInitialized()||Nl(n),e.filter.filtersNodes())}function Mf(e,t,n,r,i,o,a,s){var u,c=t.serverCache,l=a?e.filter:e.filter.getIndexedFilter();if(Nl(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var f=Il(n);if(!c.isCompleteForPath(n)&&xl(n)>1)return t;var d=Cl(n),p=c.getNode().getImmediateChild(f).updateChild(d,r);u=".priority"===f?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),f,p,d,Pf,null)}var v=Zh(t,u,c.isFullyInitialized()||Nl(n),l.filtersNodes());return Df(e,v,n,i,new Af(i,v,o),s)}function Uf(e,t,n,r,i,o,a){var s,u,c=t.eventCache,l=new Af(i,t,o);if(Nl(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,a),s=Xh(t,u,!0,e.filter.filtersNodes());else{var h=Il(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Xh(t,u,c.isFullyInitialized(),c.isFiltered());else{var f,d=Cl(n),p=c.getNode().getImmediateChild(h);if(Nl(d))f=r;else{var v=l.getCompleteChild(h);f=null!=v?".priority"===Tl(d)&&v.getChild(Sl(d)).isEmpty()?v:v.updateChild(d,r):ph.EMPTY_NODE}if(p.equals(f))s=t;else s=Xh(t,e.filter.updateChild(c.getNode(),h,f,d,l,a),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function Ff(e,t){return e.eventCache.isCompleteForChild(t)}function jf(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Bf(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=Nl(n)?r:new rf(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=jf(0,t.serverCache.getNode().getImmediateChild(n),r);c=Mf(e,c,new bl(n),u,i,o,a,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!u){var h=jf(0,t.serverCache.getNode().getImmediateChild(n),r);c=Mf(e,c,new bl(n),h,i,o,a,s)}})),c}var qf,zf=function(){"use strict";function e(n,r){t(Ce)(this,e),this.query_=n,this.eventRegistrations_=[];var i,o=this.query_._queryParams,a=new Eh(o.getIndex()),s=(i=o).loadsAllData()?new Eh(i.getIndex()):i.hasLimit()?new Rh(i):new Sh(i);this.processor_=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return{filter:e}}(s);var u=r.serverCache,c=r.eventCache,l=a.updateFullNode(ph.EMPTY_NODE,u.getNode(),null),h=s.updateFullNode(ph.EMPTY_NODE,c.getNode(),null),f=new Yh(l,u.isFullyInitialized(),a.filtersNodes()),d=new Yh(h,c.isFullyInitialized(),s.filtersNodes());this.viewCache_=$h(d,f),this.eventGenerator_=new Jh(this.query_)}return t(Te)(e,[{key:"query",get:function(){return this.query_}}]),e}();function Wf(e,t){var n=tf(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Nl(t)&&!n.getImmediateChild(Il(t)).isEmpty())?n.getChild(t):null}function Hf(e){return 0===e.eventRegistrations_.length}function Vf(e,t,n){var r=[];if(n){Ze(null==t,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){for(var o=[],a=0;a<e.eventRegistrations_.length;++a){var s=e.eventRegistrations_[a];if(s.matches(t)){if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(a+1));break}}else o.push(s)}e.eventRegistrations_=o}else e.eventRegistrations_=[];return r}function Kf(e,t,n,r){t.type===Fh.MERGE&&null!==t.source.queryId&&(Ze(tf(e.viewCache_),"We should always have a full cache before handling merges"),Ze(ef(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,o,a=e.viewCache_,s=Lf(e.processor_,a,t,n,r);return i=e.processor_,o=s.viewCache,Ze(o.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),Ze(o.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),Ze(s.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Gf(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Gf(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],o=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Qh(e,i,"child_removed",t,r,n),Qh(e,i,"child_added",t,r,n),Qh(e,i,"child_moved",o,r,n),Qh(e,i,"child_changed",t,r,n),Qh(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yf,Jf=function e(){"use strict";t(Ce)(this,e),this.views=new Map};function Qf(e,t,n,r){var i=t.source.queryId;if(null!==i){var o=e.views.get(i);return Ze(null!=o,"SyncTree gave us an op for an invalid query."),Kf(o,t,n,r)}var a=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a=a.concat(Kf(f,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return a}function $f(e,t,n,r,i){var o=t._queryIdentifier,a=e.views.get(o);if(!a){var s=If(n,i?r:null),u=!1;s?u=!0:r instanceof ph?(s=xf(n,r),u=!1):(s=ph.EMPTY_NODE,u=!1);var c=$h(new Yh(s,u,!1),new Yh(r,i,!1));return new zf(t,c)}return a}function Xf(e,t,n,r,i,o){var a=$f(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,a),function(e,t){e.eventRegistrations_.push(t)}(a,n),function(e,t){var n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(uh,(function(e,t){r.push(xh(e,t))})),n.isFullyInitialized()&&r.push(Ih(n.getNode())),Gf(e,r,n.getNode(),t)}(a,n)}function Zf(e,n,r,i){var o=n._queryIdentifier,a=[],s=[],u=id(e),c=!0,l=!1,h=void 0;if("default"===o)try{for(var f,d=e.views.entries()[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var p=t(Le)(f.value,2),v=p[0],y=p[1];s=s.concat(Vf(y,r,i)),Hf(y)&&(e.views.delete(v),y.query._queryParams.loadsAllData()||a.push(y.query))}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}else{var m=e.views.get(o);m&&(s=s.concat(Vf(m,r,i)),Hf(m)&&(e.views.delete(o),m.query._queryParams.loadsAllData()||a.push(m.query)))}return u&&!id(e)&&a.push(new(Ze(qf,"Reference.ts has not been loaded"),qf)(n._repo,n._path)),{removed:a,events:s}}function ed(e){var t=[],n=!0,r=!1,i=void 0;try{for(var o,a=e.views.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;s.query._queryParams.loadsAllData()||t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}function td(e,t){var n=null,r=!0,i=!1,o=void 0;try{for(var a,s=e.views.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;n=n||Wf(u,t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}function nd(e,t){if(t._queryParams.loadsAllData())return od(e);var n=t._queryIdentifier;return e.views.get(n)}function rd(e,t){return null!=nd(e,t)}function id(e){return null!=od(e)}function od(e){var t=!0,n=!1,r=void 0;try{for(var i,o=e.views.values()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(a.query._queryParams.loadsAllData())return a}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ad=1,sd=function e(n){"use strict";t(Ce)(this,e),this.listenProvider_=n,this.syncPointTree_=new rf(null),this.pendingWriteTree_={visibleWrites:of.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function ud(e,t,n,r,i){return function(e,t,n,r,i){Ze(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=af(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?md(e,new Kh({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function cd(e,t,n,r){!function(e,t,n,r){Ze(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=sf(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);var i=rf.fromObject(n);return md(e,new Gh({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function ld(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=mf(e.pendingWriteTree_,t),i=gf(e.pendingWriteTree_,t);if(i){var o=new rf(null);return null!=r.snap?o=o.set(wl(),!0):zc(r.children,(function(e){o=o.set(new bl(e),!0)})),md(e,new Hh(r.path,o,n))}return[]}function hd(e,t,n){return md(e,new Kh({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function fd(e,t,n,r){var i=t._path,o=e.syncPointTree_.get(i),a=[];if(o&&("default"===t._queryIdentifier||rd(o,t))){var s=Zf(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));var u=s.removed;a=s.events;var c=-1!==u.findIndex((function(e){return e._queryParams.loadsAllData()})),l=e.syncPointTree_.findOnPath(i,(function(e,t){return id(t)}));if(c&&!l){var h=e.syncPointTree_.subtree(i);if(!h.isEmpty())for(var f=function(e){return e.fold((function(e,t,n){if(t&&id(t))return[od(t)];var r=[];return t&&(r=ed(t)),zc(n,(function(e,t){r=r.concat(t)})),r}))}(h),d=0;d<f.length;++d){var p=f[d],v=p.query,y=kd(e,p);e.listenProvider_.startListening(Td(v),bd(e,v),y.hashFn,y.onComplete)}}if(!l&&u.length>0&&!r)if(c){e.listenProvider_.stopListening(Td(t),null)}else u.forEach((function(t){var n=e.queryToTagMap.get(wd(t));e.listenProvider_.stopListening(Td(t),n)}));!function(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=wd(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}(e,u)}return a}function dd(e,t,n,r){var i=Id(e,r);if(null!=i){var o=xd(i),a=o.path,s=o.queryId,u=Ol(a,t);return Cd(e,a,new Kh(zh(s),u,n))}return[]}function pd(e,t){var n=e._path,r=null,i=!1;t.syncPointTree_.foreachOnPath(n,(function(e,t){var o=Ol(e,n);r=r||td(t,o),i=i||id(t)}));var o,a=t.syncPointTree_.get(n);(a?(i=i||id(a),r=r||td(a,wl())):(a=new Jf,t.syncPointTree_=t.syncPointTree_.set(n,a)),null!=r)?o=!0:(o=!1,r=ph.EMPTY_NODE,t.syncPointTree_.subtree(n).foreachChild((function(e,t){var n=td(t,wl());n&&(r=r.updateImmediateChild(e,n))})));var s=rd(a,e);if(!s&&!e._queryParams.loadsAllData()){var u=wd(e);Ze(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");var c=ad++;t.queryToTagMap.set(u,c),t.tagToQueryMap.set(c,u)}return{syncPoint:a,writesCache:yf(t.pendingWriteTree_,n),serverCache:r,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:s}}function vd(e,t,n){var r=pd(t,e),i=r.syncPoint,o=r.serverCache,a=r.writesCache,s=r.serverCacheComplete,u=r.viewAlreadyExists,c=r.foundAncestorDefaultView,l=Xf(i,t,n,a,o,s);if(!u&&!c){var h=nd(i,t);l=l.concat(function(e,t,n){var r=t._path,i=bd(e,t),o=kd(e,n),a=e.listenProvider_.startListening(Td(t),i,o.hashFn,o.onComplete),s=e.syncPointTree_.subtree(r);if(i)Ze(!id(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold((function(e,t,n){if(!Nl(e)&&t&&id(t))return[od(t).query];var r=[];return t&&(r=r.concat(ed(t).map((function(e){return e.query})))),zc(n,(function(e,t){r=r.concat(t)})),r})),c=0;c<u.length;++c){var l=u[c];e.listenProvider_.stopListening(Td(l),bd(e,l))}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,h))}return l}function yd(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=td(n,Ol(e,t));if(r)return r}));return wf(r,t,i,n,!0)}function md(e,t){return gd(t,e.syncPointTree_,null,yf(e.pendingWriteTree_,wl()))}function gd(e,t,n,r){if(Nl(e.path))return _d(e,t,n,r);var i=t.get(wl());null==n&&null!=i&&(n=td(i,wl()));var o=[],a=Il(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var c=n?n.getImmediateChild(a):null,l=Rf(r,a);o=o.concat(gd(s,u,c,l))}return i&&(o=o.concat(Qf(i,e,r,n))),o}function _d(e,t,n,r){var i=t.get(wl());null==n&&null!=i&&(n=td(i,wl()));var o=[];return t.children.inorderTraversal((function(t,i){var a=n?n.getImmediateChild(t):null,s=Rf(r,t),u=e.operationForChild(t);u&&(o=o.concat(_d(u,i,a,s)))})),i&&(o=o.concat(Qf(i,e,r,n))),o}function kd(e,t){var n=t.query,r=bd(e,n);return{hashFn:function(){var e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ph.EMPTY_NODE;return e.hash()},onComplete:function(t){if("ok"===t)return r?function(e,t,n){var r=Id(e,n);if(r){var i=xd(r),o=i.path,a=i.queryId,s=Ol(o,t);return Cd(e,o,new Vh(zh(a),s))}return[]}(e,n._path,r):function(e,t){return md(e,new Vh({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);var i=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return fd(e,n,null,i)}}}function bd(e,t){var n=wd(t);return e.queryToTagMap.get(n)}function wd(e){return e._path.toString()+"$"+e._queryIdentifier}function Id(e,t){return e.tagToQueryMap.get(t)}function xd(e){var t=e.indexOf("$");return Ze(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new bl(e.substr(0,t))}}function Cd(e,t,n){var r=e.syncPointTree_.get(t);return Ze(r,"Missing sync point for query tag that we're tracking"),Qf(r,n,yf(e.pendingWriteTree_,t),null)}function Td(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ze(Yf,"Reference.ts has not been loaded"),Yf)(e._repo,e._path):e}var Ed=function(){"use strict";function e(n){t(Ce)(this,e),this.node_=n}return t(Te)(e,[{key:"getImmediateChild",value:function(t){return new e(this.node_.getImmediateChild(t))}},{key:"node",value:function(){return this.node_}}]),e}(),Sd=function(){"use strict";function e(n,r){t(Ce)(this,e),this.syncTree_=n,this.path_=r}return t(Te)(e,[{key:"getImmediateChild",value:function(t){var n=Rl(this.path_,t);return new e(this.syncTree_,n)}},{key:"node",value:function(){return yd(this.syncTree_,this.path_)}}]),e}(),Rd=function(e,t,n){return e&&"object"==typeof e?(Ze(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Nd(e[".sv"],t,n):"object"==typeof e[".sv"]?Od(e[".sv"],t):void Ze(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Nd=function(e,t,n){if("timestamp"===e)return n.timestamp;Ze(!1,"Unexpected server value: "+e)},Od=function(e,t,n){e.hasOwnProperty("increment")||Ze(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&Ze(!1,"Unexpected increment value: "+r);var i=t.node();if(Ze(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i.getValue();return"number"!=typeof o?r:o+r},Pd=function(e,t,n,r){return Ld(t,new Sd(n,e),r)},Ad=function(e,t,n){return Ld(e,new Ed(t),n)};function Ld(e,t,n){var r,i=e.getPriority().val(),o=Rd(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var a=e,s=Rd(a.getValue(),t,n);return s!==a.getValue()||o!==a.getPriority().val()?new ih(s,yh(o)):e}var u=e;return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new ih(o))),u.forEachChild(uh,(function(e,i){var o=Ld(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dd=function e(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};t(Ce)(this,e),this.name=n,this.parent=r,this.node=i};function Md(e,t){for(var n=t instanceof bl?t:new bl(t),r=e,i=Il(n);null!==i;){var o=Tt(r.node.children,i)||{children:{},childCount:0};r=new Dd(i,r,o),i=Il(n=Cl(n))}return r}function Ud(e){return e.node.value}function Fd(e,t){e.node.value=t,Wd(e)}function jd(e){return e.node.childCount>0}function Bd(e,t){zc(e.node.children,(function(n,r){t(new Dd(n,e,r))}))}function qd(e,t,n,r){n&&!r&&t(e),Bd(e,(function(e){qd(e,t,!0,r)})),n&&r&&t(e)}function zd(e){return new bl(null===e.parent?e.name:zd(e.parent)+"/"+e.name)}function Wd(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Ud(e)&&!jd(e)}(n),i=Ct(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Wd(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Wd(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}var Hd=/[\[\].#$\/\u0000-\u001F\u007F]/,Vd=/[\[\].#$\u0000-\u001F\u007F]/,Kd=10485760,Gd=function(e){return"string"==typeof e&&0!==e.length&&!Hd.test(e)},Yd=function(e){return"string"==typeof e&&0!==e.length&&!Vd.test(e)},Jd=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Lc(e)||e&&"object"==typeof e&&Ct(e,".sv")},Qd=function(e,t,n){var r=n instanceof bl?new Dl(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ul(r));if("function"==typeof t)throw new Error(e+"contains a function "+Ul(r)+" with contents = "+t.toString());if(Lc(t))throw new Error(e+"contains "+t.toString()+" "+Ul(r));if("string"==typeof t&&t.length>3495253.3333333335&&jt(t)>Kd)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Ul(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,o=!1;if(zc(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!Gd(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ul(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,s;s=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(s),a.byteLength_+=jt(s),Ml(a),Qd(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=jt(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&o)throw new Error(e+' contains ".value" child '+Ul(r)+" in addition to actual children.")}},$d=function(e,t,n,r){if(!r||void 0!==t){var i=Ut(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var o=[];zc(t,(function(e,t){var r=new bl(e);if(Qd(i,t,Rl(n,r)),".priority"===Tl(r)&&!Jd(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(r)})),function(e,t){var n,r;for(n=0;n<t.length;n++)for(var i=El(r=t[n]),o=0;o<i.length;o++)if(".priority"===i[o]&&o===i.length-1);else if(!Gd(i[o]))throw new Error(e+"contains an invalid key ("+i[o]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');t.sort(Pl);var a=null;for(n=0;n<t.length;n++){if(r=t[n],null!==a&&Ll(a,r))throw new Error(e+"contains a path "+a.toString()+" that is ancestor of another path "+r.toString());a=r}}(i,o)}},Xd=function(e,t,n,r){if(!(r&&void 0===n||Yd(n)))throw new Error(Ut(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Zd=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Gd(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Yd(e)}(n))throw new Error(Ut(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},ep=function e(){"use strict";t(Ce)(this,e),this.eventLists_=[],this.recursionDepth_=0};function tp(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();null===n||Al(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function np(e,t,n){tp(e,n),ip(e,(function(e){return Al(e,t)}))}function rp(e,t,n){tp(e,n),ip(e,(function(e){return Ll(e,t)||Ll(t,e)}))}function ip(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(op(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function op(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();Tc&&Rc("event: "+n.toString()),Yc(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ap="repo_interrupt",sp=function(){"use strict";function e(n,r,i,o){t(Ce)(this,e),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ep,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dh(),this.transactionQueueTree_=new Dd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return t(Te)(e,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),e}();function up(e,t,n){if(e.stats_=ul(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ah(e.repoInfo_,(function(t,n,r,i){hp(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return fp(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wt(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Bl(e.repoInfo_,t,(function(t,n,r,i){hp(e,t,n,r,i)}),(function(t){fp(e,t)}),(function(t){!function(e,t){zc(t,(function(t,n){dp(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,o;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new qh(e.stats_,e.server_)},o=r.toString(),sl[o]||(sl[o]=i()),sl[o]),e.infoData_=new Lh,e.infoSyncTree_=new sd({startListening:function(t,n,r,i){var o=[],a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=hd(e.infoSyncTree_,t._path,a),setTimeout((function(){i("ok")}),0)),o},stopListening:function(){}}),dp(e,"connected",!1),e.serverSyncTree_=new sd({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var o=i(n,r);rp(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function cp(e){var t=e.infoData_.getNode(new bl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function lp(e){return(t=(t={timestamp:cp(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function hp(e,t,n,r,i){e.dataUpdateCount++;var o=new bl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var a=[];if(i)if(r){var s=St(n,(function(e){return yh(e)}));a=function(e,t,n,r){var i=Id(e,r);if(i){var o=xd(i),a=o.path,s=o.queryId,u=Ol(a,t),c=rf.fromObject(n);return Cd(e,a,new Gh(zh(s),u,c))}return[]}(e.serverSyncTree_,o,s,i)}else{var u=yh(n);a=dd(e.serverSyncTree_,o,u,i)}else if(r){var c=St(n,(function(e){return yh(e)}));a=function(e,t,n){var r=rf.fromObject(n);return md(e,new Gh({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,c)}else{var l=yh(n);a=hd(e.serverSyncTree_,o,l)}var h=o;a.length>0&&(h=wp(e,o)),rp(e.eventQueue_,h,a)}function fp(e,t){dp(e,"connected",t),!1===t&&function(e){mp(e,"onDisconnectEvents");var t=lp(e),n=Dh();Uh(e.onDisconnect_,wl(),(function(r,i){var o=Pd(r,i,e.serverSyncTree_,t);Mh(n,r,o)}));var r=[];Uh(n,wl(),(function(t,n){r=r.concat(hd(e.serverSyncTree_,t,n));var i=Ep(e,t);wp(e,i)})),e.onDisconnect_=Dh(),rp(e.eventQueue_,wl(),r)}(e)}function dp(e,t,n){var r=new bl("/.info/"+t),i=yh(n);e.infoData_.updateSnapshot(r,i);var o=hd(e.infoSyncTree_,r,i);rp(e.eventQueue_,r,o)}function pp(e){return e.nextWriteId_++}function vp(e,t,n){var r;r=".info"===Il(t._path)?fd(e.infoSyncTree_,t,n):fd(e.serverSyncTree_,t,n),np(e.eventQueue_,t._path,r)}function yp(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ap)}function mp(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o="";e.persistentConnection_&&(o=e.persistentConnection_.id+":"),Rc.apply(void 0,[o].concat(t(Se)(r)))}function gp(e,t,n,r){t&&Yc((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var o=new Error(i);o.code=e,t(o)}}))}function _p(e,t,n){return yd(e.serverSyncTree_,t,n)||ph.EMPTY_NODE}function kp(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Tp(e,t),Ud(t)){var n=xp(e,t);Ze(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&bp(e,zd(t),n)}else jd(t)&&Bd(t,(function(t){kp(e,t)}))}function bp(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=_p(e,t,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];Ze(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=Ol(t,u.path);o=o.updateChild(c,u.currentOutputSnapshotRaw)}var l=o.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){mp(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var o=function(t){n[t].status=2,i=i.concat(ld(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&a.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},a=[],s=0;s<n.length;s++)o(s);Tp(e,Md(e.transactionQueueTree_,t)),kp(e,e.transactionQueueTree_),rp(e.eventQueue_,t,i);for(var u=0;u<a.length;u++)Yc(a[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{Ac("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}wp(e,t)}}),a)}function wp(e,t){var n=Ip(e,t),r=zd(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=Ol(n,u.path),l=!1,h=void 0;if(Ze(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,o=o.concat(ld(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",o=o.concat(ld(e.serverSyncTree_,u.currentWriteId,!0));else{var f=_p(e,u.path,a);u.currentInputSnapshot=f;var d=t[r].update(f.val());if(void 0!==d){Qd("transaction failed: Data returned ",d,u.path);var p=yh(d);"object"==typeof d&&null!=d&&Ct(d,".priority")||(p=p.updatePriority(f.getPriority()));var v=u.currentWriteId,y=lp(e),m=Ad(p,f,y);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=m,u.currentWriteId=pp(e),a.splice(a.indexOf(v),1),o=(o=o.concat(ud(e.serverSyncTree_,u.path,m,u.currentWriteId,u.applyLocally))).concat(ld(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",o=o.concat(ld(e.serverSyncTree_,u.currentWriteId,!0))}rp(e.eventQueue_,n,o),o=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],o=[],a=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Tp(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Yc(i[u]);kp(e,e.transactionQueueTree_)}(e,xp(e,n),r),r}function Ip(e,t){var n,r=e.transactionQueueTree_;for(n=Il(t);null!==n&&void 0===Ud(r);)r=Md(r,n),n=Il(t=Cl(t));return r}function xp(e,t){var n=[];return Cp(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Cp(e,t,n){var r=Ud(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Bd(t,(function(t){Cp(e,t,n)}))}function Tp(e,t){var n=Ud(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Fd(t,n.length>0?n:void 0)}Bd(t,(function(t){Tp(e,t)}))}function Ep(e,t){var n=zd(Ip(e,t)),r=Md(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Sp(e,t)})),Sp(e,r),qd(r,(function(t){Sp(e,t)})),n}function Sp(e,t){var n=Ud(t);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)3===n[a].status||(1===n[a].status?(Ze(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(Ze(0===n[a].status,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(ld(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Fd(t,void 0):n.length=o+1,rp(e.eventQueue_,zd(t),i);for(var s=0;s<r.length;s++)Yc(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rp=function(e,t){var n=Np(e),r=n.namespace;"firebase.com"===n.domain&&Pc(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Pc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ac("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new rl(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new bl(n.pathString)}},Np=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var f=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var o,a=e.split("&")[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):Ac("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}},Op=function(){"use strict";function e(n,r,i,o){t(Ce)(this,e),this.eventType=n,this.eventRegistration=r,this.snapshot=i,this.prevName=o}return t(Te)(e,[{key:"getPath",value:function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}},{key:"getEventType",value:function(){return this.eventType}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.getPath().toString()+":"+this.eventType+":"+wt(this.snapshot.exportVal())}}]),e}(),Pp=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this.eventRegistration=n,this.error=r,this.path=i}return t(Te)(e,[{key:"getPath",value:function(){return this.path}},{key:"getEventType",value:function(){return"cancel"}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.path.toString()+":cancel"}}]),e}(),Ap=function(){"use strict";function e(n,r){t(Ce)(this,e),this.snapshotCallback=n,this.cancelCallback=r}return t(Te)(e,[{key:"onValue",value:function(e,t){this.snapshotCallback.call(null,e,t)}},{key:"onCancel",value:function(e){return Ze(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}},{key:"hasCancelCallback",get:function(){return!!this.cancelCallback}},{key:"matches",value:function(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}]),e}(),Lp=function(){"use strict";function e(n,r,i,o){t(Ce)(this,e),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=o}return t(Te)(e,[{key:"key",get:function(){return Nl(this._path)?null:Tl(this._path)}},{key:"ref",get:function(){return new Dp(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=Ph(this._queryParams),t=Bc(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return Ph(this._queryParams)}},{key:"isEqual",value:function(t){if(!((t=zt(t))instanceof e))return!1;var n=this._repo===t._repo,r=Al(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),e}();var Dp=function(e){"use strict";t(qe)(r,e);var n=t(Je)(r);function r(e,i){return t(Ce)(this,r),n.call(this,e,i,new Nh,!1)}return t(Te)(r,[{key:"parent",get:function(){var e=Sl(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Lp),Mp=function(){"use strict";function e(n,r,i){t(Ce)(this,e),this._node=n,this.ref=r,this._index=i}return t(Te)(e,[{key:"priority",get:function(){return this._node.getPriority().val()}},{key:"key",get:function(){return this.ref.key}},{key:"size",get:function(){return this._node.numChildren()}},{key:"child",value:function(t){var n=new bl(t),r=Fp(this.ref,t);return new e(this._node.getChild(n),r,uh)}},{key:"exists",value:function(){return!this._node.isEmpty()}},{key:"exportVal",value:function(){return this._node.val(!0)}},{key:"forEach",value:function(t){var n=this;return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(function(r,i){return t(new e(i,Fp(n.ref,r),uh))}))}},{key:"hasChild",value:function(e){var t=new bl(e);return!this._node.getChild(t).isEmpty()}},{key:"hasChildren",value:function(){return!this._node.isLeafNode()&&!this._node.isEmpty()}},{key:"toJSON",value:function(){return this.exportVal()}},{key:"val",value:function(){return this._node.val()}}]),e}();function Up(e,t){return(e=zt(e))._checkNotDeleted("ref"),void 0!==t?Fp(e._root,t):e._root}function Fp(e,t){var n,r,i,o;return null===Il((e=zt(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Xd(n,r,i,o)):Xd("child","path",t,!1),new Dp(e._repo,Rl(e._path,t))}function jp(e,t){$d("update",t,e._path,!1);var n=new ut;return function(e,t,n,r){mp(e,"update",{path:t.toString(),value:n});var i=!0,o=lp(e),a={};if(zc(n,(function(n,r){i=!1,a[n]=Pd(Rl(t,n),yh(r),e.serverSyncTree_,o)})),i)Rc("update() called with empty data.  Don't do anything."),gp(0,r,"ok",void 0);else{var s=pp(e),u=cd(e.serverSyncTree_,t,a,s);tp(e.eventQueue_,u),e.server_.merge(t.toString(),n,(function(n,i){var o="ok"===n;o||Ac("update at "+t+" failed: "+n);var a=ld(e.serverSyncTree_,s,!o),u=a.length>0?wp(e,t):t;rp(e.eventQueue_,u,a),gp(0,r,n,i)})),zc(n,(function(n){var r=Ep(e,Rl(t,n));wp(e,r)})),rp(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((function(){}))),n.promise}var Bp=function(){"use strict";function e(n){t(Ce)(this,e),this.callbackContext=n}return t(Te)(e,[{key:"respondsTo",value:function(e){return"value"===e}},{key:"createEvent",value:function(e,t){var n=t._queryParams.getIndex();return new Op("value",this,new Mp(e.snapshotNode,new Dp(t._repo,t._path),n))}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new Pp(this,e,t):null}},{key:"matches",value:function(t){return t instanceof e&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}},{key:"hasAnyCallback",value:function(){return null!==this.callbackContext}}]),e}(),qp=function(){"use strict";function e(n,r){t(Ce)(this,e),this.eventType=n,this.callbackContext=r}return t(Te)(e,[{key:"respondsTo",value:function(e){var t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new Pp(this,e,t):null}},{key:"createEvent",value:function(e,t){Ze(null!=e.childName,"Child events should have a childName.");var n=Fp(new Dp(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Op(e.type,this,new Mp(e.snapshotNode,n,r),e.prevName)}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,e.prevName)}}},{key:"matches",value:function(t){return t instanceof e&&(this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)))}},{key:"hasAnyCallback",value:function(){return!!this.callbackContext}}]),e}();function zp(e,t,n,r,i){var o;if("object"==typeof r&&(o=void 0,i=r),"function"==typeof r&&(o=r),i&&i.onlyOnce){var a=n,s=function(t,n){vp(e._repo,e,d),a(t,n)};s.userCallback=n.userCallback,s.context=n.context,n=s}var u,c,l,h,f=new Ap(n,o||void 0),d="value"===t?new Bp(f):new qp(t,f);return u=e._repo,l=d,h=".info"===Il((c=e)._path)?vd(u.infoSyncTree_,c,l):vd(u.serverSyncTree_,c,l),np(u.eventQueue_,c._path,h),function(){return vp(e._repo,e,d)}}function Wp(e,t,n,r){return zp(e,"value",t,n,r)}!function(e){Ze(!qf,"__referenceConstructor has already been defined"),qf=e}(Dp),function(e){Ze(!Yf,"__referenceConstructor has already been defined"),Yf=e}(Dp);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hp={},Vp=!1;function Kp(e,t,n,r,i){var o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||Pc("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Rc("Using default host for project ",e.options.projectId),o="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var a,s=Rp(o,i),u=s.repoInfo,c=void 0;void 0!==fc&&fc.env&&(c=fc.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Rp(o,i)).repoInfo):a=!s.repoInfo.secure;var l=i&&a?new Xc(Xc.OWNER):new $c(e.name,e.options,t);Zd("Invalid Firebase Database URL",s),Nl(s.path)||Pc("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Hp[t.name];i||(i={},Hp[t.name]=i);var o=i[e.toURLString()];o&&Pc("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new sp(e,Vp,n,r),i[e.toURLString()]=o,o}(u,e,l,new Qc(e.name,n));return new Gp(h,e)}var Gp=function(){"use strict";function e(n,r){t(Ce)(this,e),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return t(Te)(e,[{key:"_repo",get:function(){return this._instanceStarted||(up(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Dp(this._repo,wl())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Hp[t])&&n[e.key]===e||Pc("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),yp(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&Pc("Cannot call "+e+" on a deleted database.")}}]),e}();Bl.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Bl.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){vc=jn,Ln(new Wt("database",(function(e,t){var n=t.instanceIdentifier;return Kp(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),qn(dc,pc,e),qn(dc,pc,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var Yp,Jp,Qp,$p,Xp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:Rn,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Un.create("bad-app-name",{appName:String(i)});var o=On.get(i);if(o){if(Rt(e,o.options)&&Rt(r,o.config))return o;throw Un.create("duplicate-app",{appName:i})}var a=new Yt(i),s=!0,u=!1,c=void 0;try{for(var l,h=Pn.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a.addComponent(f)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var d=new Fn(e,r,a);return On.set(i,d),d}({apiKey:"AIzaSyCC8_MgK1himNe24DycvtKn4eILHfsNlGI",authDomain:"js-project-69603.firebaseapp.com",projectId:"js-project-69603",storageBucket:"js-project-69603.appspot.com",messagingSenderId:"723891192902",appId:"1:723891192902:web:56cac8a0bb673caa127647",measurementId:"G-FPFJ79VJJ6",databaseURL:"https://js-project-69603-default-rtdb.europe-west1.firebasedatabase.app/"}),Zp=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bn(),t=Dn(e=zt(e),mi);t.isInitialized()?t.getImmediate():uo(e)}(Xp),new ps),ev=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bn(),t=Dn(e,"auth");return t.isInitialized()?t.getImmediate():Ao(e,{popupRedirectResolver:oc,persistence:[tu,Os,As]})}(),tv=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bn(),t=arguments.length>1?arguments[1]:void 0;return Dn(e,"database").getImmediate({identifier:t})}(),nv=(Yp=t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,mu(ev,Zp).then((function(e){ps.credentialFromResult(e).accessToken,e.user})).catch((function(e){e.code,e.message,e.customData.email,ps.credentialFromError(e)}));case 2:case"end":return e.stop()}}),e)}))),function(){return Yp.apply(this,arguments)});function rv(){var e;(e=ev,zt(e).signOut()).then((function(){})).catch((function(e){}))}function iv(){return iv=t(a)(t(u).mark((function e(n){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r={})[n]=n,e.prev=2,e.next=5,jp(Up(tv,"favourite/"+ev.currentUser.uid+"/cocktails/"),r);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),pe();case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),iv.apply(this,arguments)}function ov(){return(ov=t(a)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("logIn"!==n.target.textContent){e.next=5;break}return e.next=4,nv();case 4:return e.abrupt("return");case 5:return rv(),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Jp=function(e){(function(e){if(e)return void(j.textContent="logOut");j.textContent="logIn"})(e),localStorage.removeItem("favCocktails"),e&&Wp(Up(tv,"favourite/"+ev.currentUser.uid+"/cocktails/"),(function(e){e.val()}))},zt(ev).onAuthStateChanged(Jp,Qp,$p),P.addEventListener("click",(function(e){var t=e.target.parentElement.parentElement.id;if(ev.currentUser){if("favourite"===e.target.dataset.action)return function(e){iv.apply(this,arguments)}(t),void(e.target.dataset.action="addedToFavourite");if("addedToFavourite"===e.target.dataset.action)return function(e){var t={};t[e]=null;try{jp(Up(tv,"favourite/"+ev.currentUser.uid+"/cocktails/"),t)}catch(e){de()}}(t),void(e.target.dataset.action="favourite")}})),j.addEventListener("click",(function(e){return ov.apply(this,arguments)}));t(l)((function(){P.innerHTML=q()}),200);
//!!! Initial page loading !!!
function av(){return(av=t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce(ue),le(ue),e.next=4,Ie();case 4:P.addEventListener("click",(function(e){return ye(e)})),L.addEventListener("click",(function(e){return be(e)})),A.addEventListener("click",ge),ke();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){av.apply(this,arguments)}()}();
//# sourceMappingURL=favourite_cocktails.ab3b69f8.js.map
