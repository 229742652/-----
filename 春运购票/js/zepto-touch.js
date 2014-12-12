/* Zepto v1.1.3 - zepto event ajax form ie - zeptojs.com/license */
var Zepto = function () { function L(t) { return null == t ? String(t) : j[T.call(t)] || "object" } function Z(t) { return "function" == L(t) } function $(t) { return null != t && t == t.window } function _(t) { return null != t && t.nodeType == t.DOCUMENT_NODE } function D(t) { return "object" == L(t) } function R(t) { return D(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype } function M(t) { return "number" == typeof t.length } function k(t) { return s.call(t, function (t) { return null != t }) } function z(t) { return t.length > 0 ? n.fn.concat.apply([], t) : t } function F(t) { return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() } function q(t) { return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)") } function H(t, e) { return "number" != typeof e || c[F(t)] ? e : e + "px" } function I(t) { var e, n; return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t] } function V(t) { return "children" in t ? o.call(t.children) : n.map(t.childNodes, function (t) { return 1 == t.nodeType ? t : void 0 }) } function U(n, i, r) { for (e in i) r && (R(i[e]) || A(i[e])) ? (R(i[e]) && !R(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), U(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e]) } function B(t, e) { return null == e ? n(t) : n(t).filter(e) } function J(t, e, n, i) { return Z(e) ? e.call(t, n, i) : e } function X(t, e, n) { null == n ? t.removeAttribute(e) : t.setAttribute(e, n) } function W(e, n) { var i = e.className, r = i && i.baseVal !== t; return n === t ? r ? i.baseVal : i : void (r ? i.baseVal = n : e.className = n) } function Y(t) { var e; try { return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t : e) : t } catch (i) { return t } } function G(t, e) { e(t); for (var n in t.childNodes) G(t.childNodes[n], e) } var t, e, n, i, C, N, r = [], o = r.slice, s = r.filter, a = window.document, u = {}, f = {}, c = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 }, l = /^\s*<(\w+|!)[^>]*>/, h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, d = /^(?:body|html)$/i, m = /([A-Z])/g, g = ["val", "css", "html", "text", "data", "width", "height", "offset"], v = ["after", "prepend", "before", "append"], y = a.createElement("table"), x = a.createElement("tr"), b = { tr: a.createElement("tbody"), tbody: y, thead: y, tfoot: y, td: x, th: x, "*": a.createElement("div") }, w = /complete|loaded|interactive/, E = /^[\w-]*$/, j = {}, T = j.toString, S = {}, O = a.createElement("div"), P = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, A = Array.isArray || function (t) { return t instanceof Array }; return S.matches = function (t, e) { if (!e || !t || 1 !== t.nodeType) return !1; var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector; if (n) return n.call(t, e); var i, r = t.parentNode, o = !r; return o && (r = O).appendChild(t), i = ~S.qsa(r, e).indexOf(t), o && O.removeChild(t), i }, C = function (t) { return t.replace(/-+(.)?/g, function (t, e) { return e ? e.toUpperCase() : "" }) }, N = function (t) { return s.call(t, function (e, n) { return t.indexOf(e) == n }) }, S.fragment = function (e, i, r) { var s, u, f; return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function () { f.removeChild(this) })), R(r) && (u = n(s), n.each(r, function (t, e) { g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e) })), s }, S.Z = function (t, e) { return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t }, S.isZ = function (t) { return t instanceof S.Z }, S.init = function (e, i) { var r; if (!e) return S.Z(); if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && l.test(e)) r = S.fragment(e, RegExp.$1, i), e = null; else { if (i !== t) return n(i).find(e); r = S.qsa(a, e) } else { if (Z(e)) return n(a).ready(e); if (S.isZ(e)) return e; if (A(e)) r = k(e); else if (D(e)) r = [e], e = null; else if (l.test(e)) r = S.fragment(e.trim(), RegExp.$1, i), e = null; else { if (i !== t) return n(i).find(e); r = S.qsa(a, e) } } return S.Z(r, e) }, n = function (t, e) { return S.init(t, e) }, n.extend = function (t) { var e, n = o.call(arguments, 1); return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) { U(t, n, e) }), t }, S.qsa = function (t, e) { var n, i = "#" == e[0], r = !i && "." == e[0], s = i || r ? e.slice(1) : e, a = E.test(s); return _(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e)) }, n.contains = function (t, e) { return t !== e && t.contains(e) }, n.type = L, n.isFunction = Z, n.isWindow = $, n.isArray = A, n.isPlainObject = R, n.isEmptyObject = function (t) { var e; for (e in t) return !1; return !0 }, n.inArray = function (t, e, n) { return r.indexOf.call(e, t, n) }, n.camelCase = C, n.trim = function (t) { return null == t ? "" : String.prototype.trim.call(t) }, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function (t, e) { var n, r, o, i = []; if (M(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n); else for (o in t) n = e(t[o], o), null != n && i.push(n); return z(i) }, n.each = function (t, e) { var n, i; if (M(t)) { for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t; return t }, n.grep = function (t, e) { return s.call(t, e) }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) { j["[object " + e + "]"] = e.toLowerCase() }), n.fn = { forEach: r.forEach, reduce: r.reduce, push: r.push, sort: r.sort, indexOf: r.indexOf, concat: r.concat, map: function (t) { return n(n.map(this, function (e, n) { return t.call(e, n, e) })) }, slice: function () { return n(o.apply(this, arguments)) }, ready: function (t) { return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function () { t(n) }, !1), this }, get: function (e) { return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length] }, toArray: function () { return this.get() }, size: function () { return this.length }, remove: function () { return this.each(function () { null != this.parentNode && this.parentNode.removeChild(this) }) }, each: function (t) { return r.every.call(this, function (e, n) { return t.call(e, n, e) !== !1 }), this }, filter: function (t) { return Z(t) ? this.not(this.not(t)) : n(s.call(this, function (e) { return S.matches(e, t) })) }, add: function (t, e) { return n(N(this.concat(n(t, e)))) }, is: function (t) { return this.length > 0 && S.matches(this[0], t) }, not: function (e) { var i = []; if (Z(e) && e.call !== t) this.each(function (t) { e.call(this, t) || i.push(this) }); else { var r = "string" == typeof e ? this.filter(e) : M(e) && Z(e.item) ? o.call(e) : n(e); this.forEach(function (t) { r.indexOf(t) < 0 && i.push(t) }) } return n(i) }, has: function (t) { return this.filter(function () { return D(t) ? n.contains(this, t) : n(this).find(t).size() }) }, eq: function (t) { return -1 === t ? this.slice(t) : this.slice(t, +t + 1) }, first: function () { var t = this[0]; return t && !D(t) ? t : n(t) }, last: function () { var t = this[this.length - 1]; return t && !D(t) ? t : n(t) }, find: function (t) { var e, i = this; return e = "object" == typeof t ? n(t).filter(function () { var t = this; return r.some.call(i, function (e) { return n.contains(e, t) }) }) : 1 == this.length ? n(S.qsa(this[0], t)) : this.map(function () { return S.qsa(this, t) }) }, closest: function (t, e) { var i = this[0], r = !1; for ("object" == typeof t && (r = n(t)) ; i && !(r ? r.indexOf(i) >= 0 : S.matches(i, t)) ;) i = i !== e && !_(i) && i.parentNode; return n(i) }, parents: function (t) { for (var e = [], i = this; i.length > 0;) i = n.map(i, function (t) { return (t = t.parentNode) && !_(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0 }); return B(e, t) }, parent: function (t) { return B(N(this.pluck("parentNode")), t) }, children: function (t) { return B(this.map(function () { return V(this) }), t) }, contents: function () { return this.map(function () { return o.call(this.childNodes) }) }, siblings: function (t) { return B(this.map(function (t, e) { return s.call(V(e.parentNode), function (t) { return t !== e }) }), t) }, empty: function () { return this.each(function () { this.innerHTML = "" }) }, pluck: function (t) { return n.map(this, function (e) { return e[t] }) }, show: function () { return this.each(function () { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName)) }) }, replaceWith: function (t) { return this.before(t).remove() }, wrap: function (t) { var e = Z(t); if (this[0] && !e) var i = n(t).get(0), r = i.parentNode || this.length > 1; return this.each(function (o) { n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i) }) }, wrapAll: function (t) { if (this[0]) { n(this[0]).before(t = n(t)); for (var e; (e = t.children()).length;) t = e.first(); n(t).append(this) } return this }, wrapInner: function (t) { var e = Z(t); return this.each(function (i) { var r = n(this), o = r.contents(), s = e ? t.call(this, i) : t; o.length ? o.wrapAll(s) : r.append(s) }) }, unwrap: function () { return this.parent().each(function () { n(this).replaceWith(n(this).children()) }), this }, clone: function () { return this.map(function () { return this.cloneNode(!0) }) }, hide: function () { return this.css("display", "none") }, toggle: function (e) { return this.each(function () { var i = n(this); (e === t ? "none" == i.css("display") : e) ? i.show() : i.hide() }) }, prev: function (t) { return n(this.pluck("previousElementSibling")).filter(t || "*") }, next: function (t) { return n(this.pluck("nextElementSibling")).filter(t || "*") }, html: function (t) { return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function (e) { var i = this.innerHTML; n(this).empty().append(J(this, t, e, i)) }) }, text: function (e) { return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function () { this.textContent = e === t ? "" : "" + e }) }, attr: function (n, i) { var r; return "string" == typeof n && i === t ? 0 == this.length || 1 !== this[0].nodeType ? t : "value" == n && "INPUT" == this[0].nodeName ? this.val() : !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : this.each(function (t) { if (1 === this.nodeType) if (D(n)) for (e in n) X(this, e, n[e]); else X(this, n, J(this, i, t, this.getAttribute(n))) }) }, removeAttr: function (t) { return this.each(function () { 1 === this.nodeType && X(this, t) }) }, prop: function (e, n) { return e = P[e] || e, n === t ? this[0] && this[0][e] : this.each(function (t) { this[e] = J(this, n, t, this[e]) }) }, data: function (e, n) { var i = this.attr("data-" + e.replace(m, "-$1").toLowerCase(), n); return null !== i ? Y(i) : t }, val: function (t) { return 0 === arguments.length ? this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () { return this.selected }).pluck("value") : this[0].value) : this.each(function (e) { this.value = J(this, t, e, this.value) }) }, offset: function (t) { if (t) return this.each(function (e) { var i = n(this), r = J(this, t, e, i.offset()), o = i.offsetParent().offset(), s = { top: r.top - o.top, left: r.left - o.left }; "static" == i.css("position") && (s.position = "relative"), i.css(s) }); if (0 == this.length) return null; var e = this[0].getBoundingClientRect(); return { left: e.left + window.pageXOffset, top: e.top + window.pageYOffset, width: Math.round(e.width), height: Math.round(e.height) } }, css: function (t, i) { if (arguments.length < 2) { var r = this[0], o = getComputedStyle(r, ""); if (!r) return; if ("string" == typeof t) return r.style[C(t)] || o.getPropertyValue(t); if (A(t)) { var s = {}; return n.each(A(t) ? t : [t], function (t, e) { s[e] = r.style[C(e)] || o.getPropertyValue(e) }), s } } var a = ""; if ("string" == L(t)) i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function () { this.style.removeProperty(F(t)) }); else for (e in t) t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function () { this.style.removeProperty(F(e)) }); return this.each(function () { this.style.cssText += ";" + a }) }, index: function (t) { return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0]) }, hasClass: function (t) { return t ? r.some.call(this, function (t) { return this.test(W(t)) }, q(t)) : !1 }, addClass: function (t) { return t ? this.each(function (e) { i = []; var r = W(this), o = J(this, t, e, r); o.split(/\s+/g).forEach(function (t) { n(this).hasClass(t) || i.push(t) }, this), i.length && W(this, r + (r ? " " : "") + i.join(" ")) }) : this }, removeClass: function (e) { return this.each(function (n) { return e === t ? W(this, "") : (i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function (t) { i = i.replace(q(t), " ") }), void W(this, i.trim())) }) }, toggleClass: function (e, i) { return e ? this.each(function (r) { var o = n(this), s = J(this, e, r, W(this)); s.split(/\s+/g).forEach(function (e) { (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e) }) }) : this }, scrollTop: function (e) { if (this.length) { var n = "scrollTop" in this[0]; return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () { this.scrollTop = e } : function () { this.scrollTo(this.scrollX, e) }) } }, scrollLeft: function (e) { if (this.length) { var n = "scrollLeft" in this[0]; return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () { this.scrollLeft = e } : function () { this.scrollTo(e, this.scrollY) }) } }, position: function () { if (this.length) { var t = this[0], e = this.offsetParent(), i = this.offset(), r = d.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset(); return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, { top: i.top - r.top, left: i.left - r.left } } }, offsetParent: function () { return this.map(function () { for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position") ;) t = t.offsetParent; return t }) } }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (e) { var i = e.replace(/./, function (t) { return t[0].toUpperCase() }); n.fn[e] = function (r) { var o, s = this[0]; return r === t ? $(s) ? s["inner" + i] : _(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function (t) { s = n(this), s.css(e, J(this, r, t, s[e]())) }) } }), v.forEach(function (t, e) { var i = e % 2; n.fn[t] = function () { var t, o, r = n.map(arguments, function (e) { return t = L(e), "object" == t || "array" == t || null == e ? e : S.fragment(e) }), s = this.length > 1; return r.length < 1 ? this : this.each(function (t, a) { o = i ? a : a.parentNode, a = 0 == e ? a.nextSibling : 1 == e ? a.firstChild : 2 == e ? a : null, r.forEach(function (t) { if (s) t = t.cloneNode(!0); else if (!o) return n(t).remove(); G(o.insertBefore(t, a), function (t) { null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML) }) }) }) }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) { return n(e)[t](this), this } }), S.Z.prototype = n.fn, S.uniq = N, S.deserializeValue = Y, n.zepto = S, n }(); window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) { function l(t) { return t._zid || (t._zid = e++) } function h(t, e, n, i) { if (e = p(e), e.ns) var r = d(e.ns); return (s[l(t)] || []).filter(function (t) { return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i) }) } function p(t) { var e = ("" + t).split("."); return { e: e[0], ns: e.slice(1).sort().join(" ") } } function d(t) { return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)") } function m(t, e) { return t.del && !u && t.e in f || !!e } function g(t) { return c[t] || u && f[t] || t } function v(e, i, r, o, a, u, f) { var h = l(e), d = s[h] || (s[h] = []); i.split(/\s/).forEach(function (i) { if ("ready" == i) return t(document).ready(r); var s = p(i); s.fn = r, s.sel = a, s.e in c && (r = function (e) { var n = e.relatedTarget; return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0 }), s.del = u; var l = u || r; s.proxy = function (t) { if (t = j(t), !t.isImmediatePropagationStopped()) { t.data = o; var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args)); return i === !1 && (t.preventDefault(), t.stopPropagation()), i } }, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f)) }) } function y(t, e, n, i, r) { var o = l(t); (e || "").split(/\s/).forEach(function (e) { h(t, e, n, i).forEach(function (e) { delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r)) }) }) } function j(e, i) { return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function (t, n) { var r = i[t]; e[t] = function () { return this[n] = x, r && r.apply(i, arguments) }, e[n] = b }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e } function T(t) { var e, i = { originalEvent: t }; for (e in t) w.test(e) || t[e] === n || (i[e] = t[e]); return j(i, t) } var n, e = 1, i = Array.prototype.slice, r = t.isFunction, o = function (t) { return "string" == typeof t }, s = {}, a = {}, u = "onfocusin" in window, f = { focus: "focusin", blur: "focusout" }, c = { mouseenter: "mouseover", mouseleave: "mouseout" }; a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = { add: v, remove: y }, t.proxy = function (e, n) { if (r(e)) { var i = function () { return e.apply(n, arguments) }; return i._zid = l(e), i } if (o(n)) return t.proxy(e[n], e); throw new TypeError("expected function") }, t.fn.bind = function (t, e, n) { return this.on(t, e, n) }, t.fn.unbind = function (t, e) { return this.off(t, e) }, t.fn.one = function (t, e, n, i) { return this.on(t, e, n, i, 1) }; var x = function () { return !0 }, b = function () { return !1 }, w = /^([A-Z]|returnValue$|layer[XY]$)/, E = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" }; t.fn.delegate = function (t, e, n) { return this.on(e, t, n) }, t.fn.undelegate = function (t, e, n) { return this.off(e, t, n) }, t.fn.live = function (e, n) { return t(document.body).delegate(this.selector, e, n), this }, t.fn.die = function (e, n) { return t(document.body).undelegate(this.selector, e, n), this }, t.fn.on = function (e, s, a, u, f) { var c, l, h = this; return e && !o(e) ? (t.each(e, function (t, e) { h.on(t, s, a, e, f) }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function (n, r) { f && (c = function (t) { return y(r, t.type, u), u.apply(this, arguments) }), s && (l = function (e) { var n, o = t(e.target).closest(s, r).get(0); return o && o !== r ? (n = t.extend(T(e), { currentTarget: o, liveFired: r }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0 }), v(r, e, u, a, s, l || c) })) }, t.fn.off = function (e, i, s) { var a = this; return e && !o(e) ? (t.each(e, function (t, e) { a.off(t, i, e) }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function () { y(this, e, s, i) })) }, t.fn.trigger = function (e, n) { return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function () { "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n) }) }, t.fn.triggerHandler = function (e, n) { var i, r; return this.each(function (s, a) { i = T(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function (t, e) { return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0 }) }), r }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) { t.fn[e] = function (t) { return t ? this.bind(e, t) : this.trigger(e) } }), ["focus", "blur"].forEach(function (e) { t.fn[e] = function (t) { return t ? this.bind(e, t) : this.each(function () { try { this[e]() } catch (t) { } }), this } }), t.Event = function (t, e) { o(t) || (e = t, t = e.type); var n = document.createEvent(a[t] || "Events"), i = !0; if (e) for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r]; return n.initEvent(t, i, !0), j(n) } }(Zepto), function (t) { function l(e, n, i) { var r = t.Event(n); return t(e).trigger(r, i), !r.isDefaultPrevented() } function h(t, e, i, r) { return t.global ? l(e || n, i, r) : void 0 } function p(e) { e.global && 0 === t.active++ && h(e, null, "ajaxStart") } function d(e) { e.global && !--t.active && h(e, null, "ajaxStop") } function m(t, e) { var n = e.context; return e.beforeSend.call(n, t, e) === !1 || h(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void h(e, n, "ajaxSend", [t, e]) } function g(t, e, n, i) { var r = n.context, o = "success"; n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), h(n, r, "ajaxSuccess", [e, n, t]), y(o, e, n) } function v(t, e, n, i, r) { var o = i.context; i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), h(i, o, "ajaxError", [n, i, t || e]), y(e, n, i) } function y(t, e, n) { var i = n.context; n.complete.call(i, e, t), h(n, i, "ajaxComplete", [e, n]), d(n) } function x() { } function b(t) { return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text" } function w(t, e) { return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?") } function E(e) { e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data), e.data = void 0) } function j(e, n, i, r) { return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), { url: e, data: n, success: i, dataType: r } } function S(e, n, i, r) { var o, s = t.isArray(n), a = t.isPlainObject(n); t.each(n, function (n, u) { o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? S(e, u, i, n) : e.add(n, u) }) } var i, r, e = 0, n = window.document, o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, s = /^(?:text|application)\/javascript/i, a = /^(?:text|application)\/xml/i, u = "application/json", f = "text/html", c = /^\s*$/; t.active = 0, t.ajaxJSONP = function (i, r) { if (!("type" in i)) return t.ajax(i); var f, h, o = i.jsonpCallback, s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e, a = n.createElement("script"), u = window[s], c = function (e) { t(a).triggerHandler("error", e || "abort") }, l = { abort: c }; return r && r.promise(l), t(a).on("load error", function (e, n) { clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? g(f[0], l, i, r) : v(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0 }), m(l, i) === !1 ? (c("abort"), l) : (window[s] = function () { f = arguments }, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function () { c("timeout") }, i.timeout)), l) }, t.ajaxSettings = { type: "GET", beforeSend: x, success: x, error: x, complete: x, context: null, global: !0, xhr: function () { return new window.XMLHttpRequest }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: u, xml: "application/xml, text/xml", html: f, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0 }, t.ajax = function (e) { var n = t.extend({}, e || {}), o = t.Deferred && t.Deferred(); for (i in t.ajaxSettings) void 0 === n[i] && (n[i] = t.ajaxSettings[i]); p(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), E(n), n.cache === !1 && (n.url = w(n.url, "_=" + Date.now())); var s = n.dataType, a = /\?.+=\?/.test(n.url); if ("jsonp" == s || a) return a || (n.url = w(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, o); var j, u = n.accepts[s], f = {}, l = function (t, e) { f[t.toLowerCase()] = [t, e] }, h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, d = n.xhr(), y = d.setRequestHeader; if (o && o.promise(d), n.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", u || "*/*"), (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(u)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers) for (r in n.headers) l(r, n.headers[r]); if (d.setRequestHeader = l, d.onreadystatechange = function () { if (4 == d.readyState) { d.onreadystatechange = x, clearTimeout(j); var e, i = !1; if (d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) { s = s || b(n.mimeType || d.getResponseHeader("content-type")), e = d.responseText; try { "script" == s ? (1, eval)(e) : "xml" == s ? e = d.responseXML : "json" == s && (e = c.test(e) ? null : t.parseJSON(e)) } catch (r) { i = r } i ? v(i, "parsererror", d, n, o) : g(e, d, n, o) } else v(d.statusText || null, d.status ? "error" : "abort", d, n, o) } }, m(d, n) === !1) return d.abort(), v(null, "abort", d, n, o), d; if (n.xhrFields) for (r in n.xhrFields) d[r] = n.xhrFields[r]; var T = "async" in n ? n.async : !0; d.open(n.type, n.url, T, n.username, n.password); for (r in f) y.apply(d, f[r]); return n.timeout > 0 && (j = setTimeout(function () { d.onreadystatechange = x, d.abort(), v(null, "timeout", d, n, o) }, n.timeout)), d.send(n.data ? n.data : null), d }, t.get = function () { return t.ajax(j.apply(null, arguments)) }, t.post = function () { var e = j.apply(null, arguments); return e.type = "POST", t.ajax(e) }, t.getJSON = function () { var e = j.apply(null, arguments); return e.dataType = "json", t.ajax(e) }, t.fn.load = function (e, n, i) { if (!this.length) return this; var a, r = this, s = e.split(/\s/), u = j(e, n, i), f = u.success; return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function (e) { r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments) }, t.ajax(u), this }; var T = encodeURIComponent; t.param = function (t, e) { var n = []; return n.add = function (t, e) { this.push(T(t) + "=" + T(e)) }, S(n, t, e), n.join("&").replace(/%20/g, "+") } }(Zepto), function (t) { t.fn.serializeArray = function () { var n, e = []; return t([].slice.call(this.get(0).elements)).each(function () { n = t(this); var i = n.attr("type"); "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({ name: n.attr("name"), value: n.val() }) }), e }, t.fn.serialize = function () { var t = []; return this.serializeArray().forEach(function (e) { t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)) }), t.join("&") }, t.fn.submit = function (e) { if (e) this.bind("submit", e); else if (this.length) { var n = t.Event("submit"); this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit() } return this } }(Zepto), function (t) { "__proto__" in {} || t.extend(t.zepto, { Z: function (e, n) { return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e }, isZ: function (e) { return "array" === t.type(e) && "__Z" in e } }); try { getComputedStyle(void 0) } catch (e) { var n = getComputedStyle; window.getComputedStyle = function (t) { try { return n(t) } catch (e) { return null } } } }(Zepto);
(function ($) {
    $.fn.swipe = function (type, fn, option) {
        var setting = {
            disX: 50,
            disY: 50,
            responseTime: 200,
            isPreventDefult: true,
            className: ""

        };
        if (this.size() <= 0) {
            return false;
        }
        this[0].listener = this[0].listener || {};
        this[0].listener[type] = this[0].listener[type] || [];
        this[0].listener[type].push(fn);
        var _this = this[0];
        var self = this;

        var config = $.extend(setting, option);
        this.on("touchstart", function (e) {
            e = e.changedTouches[0];
            var startX = e.pageX, startY = e.pageY, startTime = Date.now();
            self.on("touchmove", function (e) {
                e = e.changedTouches[0];
                var endX = e.pageX, endY = e.pageY, endTime = Date.now();
                if (type.toLowerCase() === "left" && Math.abs((endY - startY) / (endX - startX)) <= 1 && (startX - endX) > config.disX) {
                    self.off("touchmove");
                    for (var i = 0; i < _this.listener[type].length; i++) {
                        _this.listener[type][i] && _this.listener[type][i](e, _this);
                    }
                }
                else if (type.toLowerCase() === "right" && Math.abs((endY - startY) / (endX - startX)) <= 1 && (endX - startX) > config.disX) {
                    self.off("touchmove");
                    for (var i = 0; i < _this.listener[type].length; i++) {
                        _this.listener[type][i] && _this.listener[type][i](e, _this);
                    }
                }
                else {

                    if (e.target.className.toLowerCase().indexOf(config.className) <= -1) {//如果指定了不阻止默认事件的标签则可以不阻止。
                        e.preventDefault && e.preventDefault();
                        return false;
                    }

                }

            }).on("touchend", function (e) {
                e = e.changedTouches[0];
                var endX = e.pageX, endY = e.pageY, endTime = Date.now();
                if (endTime - startTime >= config.responseTime) {
                    return;
                }
                switch (type.toLowerCase()) {
                    case "down":
                        if ((endY - startY) > config.disY && Math.abs((endY - startY) / (endX - startX)) > 1) {
                            for (var i = 0; i < _this.listener[type].length; i++) {
                                _this.listener[type][i] && _this.listener[type][i](e, _this);
                            }
                        }
                        break;
                    case "up":
                        if ((startY - endY) > config.disY && Math.abs((endY - startY) / (endX - startX)) > 1) {
                            for (var i = 0; i < _this.listener[type].length; i++) {
                                _this.listener[type][i] && _this.listener[type][i](e, _this);
                            }
                        }
                        break;
                }
            });
        });

        return this;
    }

})(Zepto);


(function ($) {
    $.fn.tap = function (fn, opt) {

        var _default = {
            resposetime: 200
        };
        var config = $.extend(_default, opt);
        var startTime = 0;
        var startX = 0;
        var startY = 0;
        var device = "ontouchstart" in document;
        if (device) {
            var id = this.attr("id") || "";

            this[0].listener = this[0].listener || {};
            this[0].listener["tap"] = this[0].listener["tap"] || [];
            this[0].listener["type"] = this[0].listener["type"] || [];
            this[0].listener["tap"].push(fn);
            this[0].listener["type"].push(id)
            var _this = this[0];

            if (arguments.length === 0) {
                for (var i = 0; i < this[0].listener["type"].length; i++) {
                    if (this.attr("id") === this[0].listener["type"][i]) {
                        _this.listener["tap"][i] && _this.listener["tap"][i]();
                    }
                }
            }
            else {
                this.on("touchstart", function (e) {
                    e = e.changedTouches[0];
                    startX = e.pageX;
                    startY = e.pageY;
                    startTime = Date.now();
                }).on("touchend", function (e) {
                    var endTime = Date.now();
                    e = e.changedTouches[0];
                    var endX = e.pageX;
                    var endY = e.pageY;
                    if (endTime - startTime <= config.resposetime && Math.abs(endY - startY) < 6 && Math.abs(endX - startX) < 6 && fn) {
                        for (var i = 0; i < this.listener["tap"].length; i++) {
                            this.listener["tap"][i] && this.listener["tap"][i](e, this);
                        }

                    }
                });
            }

        } else {
            this.on("click", function (e) {
                if (fn) {
                    fn(e, this);
                }
            });
        }

        return this;
    };

})(Zepto);


!function ($) {
    $.fn.slider = function (option) {
        new Slider({
            slider: this,
            sliderMove: function (t) {
                (option && option.sliderMove) ? option.sliderMove(t) : function () { };
            },
            sliderEnd: function (t) {
                (option && option.sliderEnd) ? option.sliderEnd(t) : function () { };
            },
            isNeedProcess: option.isNeedProcess,
            updateY: function (t) {
                (option && option.updateY) ? option.updateY(t) : function () { };
            }
        });

    }

    function Slider(option) {

        this.slider = (option && option.slider) ? option.slider : {};//声明要滑动的对象。
        this.transY = 0;
        this.sliderMove = option.sliderMove;
        this.sliderEnd = option.sliderEnd;
        this.updateY = option.updateY;

        this.isEnableDefaultMove = (option && option.isEnableDefaultMove) ? option.isEnableDefaultMove : true;
        this.isNeedProcess = option.isNeedProcess === undefined ? true : option.isNeedProcess;
        this.slipping(this);
        
        this.barHeight = option.barHeight;//
        this.ps = $(".ps");
        this.timer = null;
        
    }

    Slider.prototype.creatProcessBar = function (parentHeight) {//生成滚动条
        var maxHeight = this.slider.offset().height;//获取可移动元素的最大高度。
        var parentHeight = this.slider.parent().offset().height;//获取可视区的最大高度
        var style = "";
        style = "<style>.ps{position:absolute;right:4%;height:" + parentHeight + "px;width:2px;background:#f90;top:0;opacity:0;-webkit-transition:400ms opacity;}\
                 .cs{position:absolute;top:0;height:" + (parentHeight * parentHeight / maxHeight) + "px;width:2px;background:green;}\
                </style>";
        $("head").append(style);
        this.slider.parent().css({ position: "absolute" }).append("<div class='ps'><div class='cs'></div></div>");
    };

    Slider.prototype.slipping = function (_this) {
        var self = _this;
        
        self.isEnableDefaultMove && $(document).on("touchmove", function (e) {
            e.preventDefault && e.preventDefault()
        });
        var maxHeight = self.slider.offset().height;//获取可移动元素的最大高度。
        var parentHeight = self.slider.parent().offset().height;//获取可视区的最大高度
        
        if (parentHeight - maxHeight >= 0) {
            return;
        }

        if (self.isNeedProcess) {//判断是否需要滚动条；
            this.creatProcessBar(parentHeight);//生成滚动条
        }
        var lastY = 0;
        var startY = 0;
        self.slider.on("touchstart", function (e) {
            self.slider.css("-webkit-transition", "none");
            self.ps.css({ opacity: 1 });
            //self.updateY(self.transY)
            var currentY = self.transY;
            var e = e.changedTouches[0];
            startY = e.pageY;
            var startTime = Date.now();
            var endY = 0;
            self.slider.on("touchmove", function (e) {
                e.preventDefault && e.preventDefault();
                var e = e.changedTouches[0];
                endY = e.pageY;
                var t = endY - startY + currentY;
                if (t >= 0) {
                    t = 0;
                }
                else if (t <= parentHeight - maxHeight) {
                    t = parentHeight - maxHeight;
                }
                self.move(t);
                self.transY = t;
                lastY = t;
                var scale = self.transY / (parentHeight - maxHeight);//
                self.slider.parent().find(".cs").css("-webkit-transform", "translate3d(0," + (parentHeight - parentHeight * parentHeight / maxHeight) * scale + "px,0)");
                //self.sliderMove(t);

                return false;
            }).on("touchend", function (e) {
                e.preventDefault && e.preventDefault();
                self.isNeedProcess && self.ps.css({ opacity: 0 });
                //var e = e.changedTouches[0];

                //var der = e.pageY - startY;
                //var endTime = Date.now();
                //var v = Math.abs(Math.ceil(100 - (endTime - startTime) / 3));
                //var t = der < 0 ? (self.transY - v) : (self.transY + v);
                //if (Math.abs(der) > 10 && false) {
                //    self.slider.css("-webkit-transition", "500ms -webkit-transform");
                //    if (t >= 0) {
                //        t = 0;
                //    }
                //    else if (t <= parentHeight - maxHeight) {
                //        t = parentHeight - maxHeight;
                //    }

                //    self.move(t).on("webkitTransitionEnd", function () {
                //        self.transY = t;
                //    });

                //    //self.move(lastY);
                //    //self.sliderEnd(Math.abs(self.transY) - Math.abs(currentY));    
                //}

            });
        });
        Slider.prototype.move = function (t) {
            this.slider.css("-webkit-transform", "translate3d(0," + t + "px,0)");
            return this;
            //document.title = t;
        }

    }
}(Zepto);


/**
 * 微信统一调用接口
 * 通过meta来获取微信分享的内容
 */
(function () {
    // 执行回调
    function execHandler(handler) {
        if (handler && handler instanceof Object) {
            var callback = handler.callback || null;
            var opts = handler.args || [];
            var context = handler.context || null;
            var delay = handler.delay || -1;

            if (callback && callback instanceof Function) {
                if (typeof (delay) == "number" && delay >= 0) {
                    setTimeout(function () {
                        callback.call(context, opts);
                    }, delay);
                } else {
                    callback.call(context, opts);
                }
            }
        }
    }

    // 合并参数后执行回调
    function execAfterMergerHandler(handler, _args) {
        if (handler && handler instanceof Object) {
            var args = handler.args || [];

            handler.args = _args.concat(args);
        }

        execHandler(handler);
    }

    // 检测微信准备就绪
    document.addEventListener("WeixinJSBridgeReady", function () {
        window.G_WEIXIN_READY = true;
    }, false);

    // 检测微信是否加载成功
    function CallWeiXinAPI(fn, count) {
        var total = 2000;   //30s     
        count = count || 0;

        if (true === window.G_WEIXIN_READY || ("WeixinJSBridge" in window)) {
            fn.apply(null, []);
        } else {
            if (count <= total) {
                setTimeout(function () {
                    CallWeiXinAPI(fn, count++);
                }, 15);
            }
        }
    }

    // 微信接口
    window.WEIXIN_API = _api = {
        Share: {
            /**
             * 分享到微博
             * @param Object options {String content, String url}
             * @param Object handler
             */
            "weibo": function (options, handler) {
                CallWeiXinAPI(function () {
                    WeixinJSBridge.on("menu:share:weibo", function (argv) {
                        WeixinJSBridge.invoke('shareWeibo', options, function (res) {
                            execAfterMergerHandler(handler, [res]);
                        });
                    });
                });
            },
            /**
             * 朋友圈
             * @param Object options {
             *                  String img_url, 
             *                  Number img_width, 
             *                  Number img_height, 
             *                  String link, 
             *                  String desc, 
             *                  String title
             * }
             * @param Object handler
             */
            "timeline": function (options, handler) {
                CallWeiXinAPI(function () {
                    WeixinJSBridge.on("menu:share:timeline", function (argv) {
                        WeixinJSBridge.invoke('shareTimeline', options, function (res) {
                            execAfterMergerHandler(handler, [res]);
                        });
                    });
                });
            },
            /**
             * 朋友
             * @param Object options {
             *                  String appid, 
             *                  String img_url, 
             *                  Number img_width, 
             *                  Number img_height, 
             *                  String link, 
             *                  String desc, 
             *                  String title
             * }
             * @param Object handler
             */
            "message": function (options, handler) {
                CallWeiXinAPI(function () {
                    WeixinJSBridge.on("menu:share:appmessage", function (argv) {
                        WeixinJSBridge.invoke('sendAppMessage', options, function (res) {
                            execAfterMergerHandler(handler, [res]);
                        });
                    });
                });
            }
        },
        /**
         * 设置底栏
         * @param boolean visible 是否显示
         * @param Object handler
         */
        "setToolbar": function (visible, handler) {
            CallWeiXinAPI(function () {
                if (true === visible) {
                    WeixinJSBridge.call('showToolbar');
                } else {
                    WeixinJSBridge.call('hideToolbar');
                }
                execAfterMergerHandler(handler, [visible]);
            });
        },
        /**
         * 设置右上角选项菜单
         * @param boolean visible 是否显示
         * @param Object handler
         */
        "setOptionMenu": function (visible, handler) {
            CallWeiXinAPI(function () {
                if (true === visible) {
                    WeixinJSBridge.call('showOptionMenu');
                } else {
                    WeixinJSBridge.call('hideOptionMenu');
                }
                execAfterMergerHandler(handler, [visible]);
            });
        },
        /**
         * 调用微信支付
         * @param Object data 微信支付参数
         * @param Object handlerMap 回调句柄 {Handler success, Handler fail, Handler cancel, Handler error}
         */
        "pay": function (data, handlerMap) {
            CallWeiXinAPI(function () {
                var requireData = { "appId": "", "timeStamp": "", "nonceStr": "", "package": "", "signType": "", "paySign": "" };
                var map = handlerMap || {};
                var handler = null;
                var args = [data];

                for (var key in requireData) {
                    if (requireData.hasOwnProperty(key)) {
                        requireData[key] = data[key] || "";
                        console.info(key + " = " + requireData[key]);
                    }
                }

                WeixinJSBridge.invoke('getBrandWCPayRequest', requireData, function (response) {
                    var key = "get_brand_wcpay_request:";
                    switch (response.err_msg) {
                        case key + "ok":
                            handler = map.success;
                            break;
                        case key + "fail":
                            handler = map.fail || map.error;
                            break;
                        case key + "cancel":
                            handler = map.cancel || map.error;
                            break;
                        default:
                            handler = map.error;
                            break;
                    }

                    execAfterMergerHandler(handler, args);
                });
            });
        }
    };

    // 获取微信设置信息
    var meta, metas = document.getElementsByTagName('meta');
    for (var i = 0, len = metas.length; i < len; i++) {
        if (metas[i].getAttribute('name') == 'sharecontent') {
            meta = metas[i];
        }
    }

    // 判断是否有输出标间，并配置分享
    if (!meta) {
        return;
    }

    // 分享给朋友设置
    var link = window.location.href;
    var opt_msg = {
        "img_url": meta.dataset.msgImg,//|| "http://" + window.location.host + document.getElementsByTagName('img')[0].getAttribute('src'),
        "link": link,
        "desc": meta.dataset.msgContent || document.title + '，敬请访问！',
        "title": meta.dataset.msgTitle || document.title
    };
    var handler_msg = {
        "urlCall": meta.dataset.msgCallback || '',
        callback: function (res) {
            if (res[0].err_msg.indexOf('cancel') == -1) {
                if (window.BI_weixin) {
                    //传递opts对象,用于
                    opt_msg.link = BI_weixin.save_openid_uid(opt_msg);
                    //这里传递回调的链接参数...
                    BI_weixin.wxcallback(opt_msg);
                } else {
                    if (handler_line.urlCall) {
                        window.location.href = handler_msg.urlCall;
                    }
                }
            }
        }
    };

    // 朋友圈分享设置
    var opt_line = {
        "img_url": meta.dataset.lineImg,// || "http://" + window.location.host + document.getElementsByTagName('img')[0].getAttribute('src'),
        "link": link,
        "desc": meta.dataset.lineTitle || document.title + '，敬请访问！',
        "title": meta.dataset.lineTitle || document.title + '，敬请访问！'
    };
    var handler_line = {
        "urlCall": meta.dataset.lineCallback || '',
        callback: function (res) {
            if (res[0].err_msg.indexOf('cancel') == -1) {
                if (window.BI_weixin) {
                    //opts用于将对象传递进来...
                    opt_line.link = BI_weixin.save_openid_uid(opt_line);
                    //这里传递回调的链接参数...
                    BI_weixin.wxcallback(opt_line);
                } else {
                    if (handler_line.urlCall) {
                        window.location.href = handler_msg.urlCall;
                    }
                }
            }
        }
    }

    // 微信设置配置
    _api.Share.message(opt_msg, handler_msg);
    _api.Share.timeline(opt_line, handler_line);
})();

Array.prototype.remove = function (obj) {

    for (i in this) {
        if (this[i] === obj) {
            this.splice(i, 1);
        }
    }
}