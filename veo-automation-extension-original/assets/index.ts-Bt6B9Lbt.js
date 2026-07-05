(function () {
  function e(e) {
    if (e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")) {
      return e.default;
    } else {
      return e;
    }
  }
  var t;
  var n;
  var r;
  var o = {
    exports: {}
  };
  const i = e(t ? o.exports : (t = 1, n = typeof window != "undefined" ? window : o.exports, r = function (e, t) {
    var n = [];
    var r = Object.getPrototypeOf;
    var o = n.slice;
    var i = n.flat ? function (e) {
      return n.flat.call(e);
    } : function (e) {
      return n.concat.apply([], e);
    };
    var a = n.push;
    var s = n.indexOf;
    var c = {};
    var u = c.toString;
    var l = c.hasOwnProperty;
    var d = l.toString;
    var p = d.call(Object);
    var f = {};
    var h = function (e) {
      return typeof e == "function" && typeof e.nodeType != "number" && typeof e.item != "function";
    };
    var g = function (e) {
      return e != null && e === e.window;
    };
    var m = e.document;
    var y = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function v(e, t, n) {
      var r;
      var o;
      var i = (n = n || m).createElement("script");
      i.text = e;
      if (t) {
        for (r in y) {
          if (o = t[r] || t.getAttribute && t.getAttribute(r)) {
            i.setAttribute(r, o);
          }
        }
      }
      n.head.appendChild(i).parentNode.removeChild(i);
    }
    function w(e) {
      if (e == null) {
        return e + "";
      } else if (typeof e == "object" || typeof e == "function") {
        return c[u.call(e)] || "object";
      } else {
        return typeof e;
      }
    }
    var x = "3.7.1";
    var b = /HTML$/i;
    var C = function (e, t) {
      return new C.fn.init(e, t);
    };
    function T(e) {
      var t = !!e && "length" in e && e.length;
      var n = w(e);
      return !h(e) && !g(e) && (n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e);
    }
    function E(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    C.fn = C.prototype = {
      jquery: x,
      constructor: C,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        if (e == null) {
          return o.call(this);
        } else if (e < 0) {
          return this[e + this.length];
        } else {
          return this[e];
        }
      },
      pushStack: function (e) {
        var t = C.merge(this.constructor(), e);
        t.prevObject = this;
        return t;
      },
      each: function (e) {
        return C.each(this, e);
      },
      map: function (e) {
        return this.pushStack(C.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(C.grep(this, function (e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function () {
        return this.pushStack(C.grep(this, function (e, t) {
          return t % 2;
        }));
      },
      eq: function (e) {
        var t = this.length;
        var n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice
    };
    C.extend = C.fn.extend = function () {
      var e;
      var t;
      var n;
      var r;
      var o;
      var i;
      var a = arguments[0] || {};
      var s = 1;
      var c = arguments.length;
      var u = false;
      if (typeof a == "boolean") {
        u = a;
        a = arguments[s] || {};
        s++;
      }
      if (typeof a != "object" && !h(a)) {
        a = {};
      }
      if (s === c) {
        a = this;
        s--;
      }
      for (; s < c; s++) {
        if ((e = arguments[s]) != null) {
          for (t in e) {
            r = e[t];
            if (t !== "__proto__" && a !== r) {
              if (u && r && (C.isPlainObject(r) || (o = Array.isArray(r)))) {
                n = a[t];
                i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {};
                o = false;
                a[t] = C.extend(u, i, r);
              } else if (r !== undefined) {
                a[t] = r;
              }
            }
          }
        }
      }
      return a;
    };
    C.extend({
      expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t;
        var n;
        return !!e && u.call(e) === "[object Object]" && (!(t = r(e)) || typeof (n = l.call(t, "constructor") && t.constructor) == "function" && d.call(n) === p);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) {
          return false;
        }
        return true;
      },
      globalEval: function (e, t, n) {
        v(e, {
          nonce: t && t.nonce
        }, n);
      },
      each: function (e, t) {
        var n;
        var r = 0;
        if (T(e)) {
          for (n = e.length; r < n && t.call(e[r], r, e[r]) !== false; r++);
        } else {
          for (r in e) {
            if (t.call(e[r], r, e[r]) === false) {
              break;
            }
          }
        }
        return e;
      },
      text: function (e) {
        var t;
        var n = "";
        var r = 0;
        var o = e.nodeType;
        if (!o) {
          while (t = e[r++]) {
            n += C.text(t);
          }
        }
        if (o === 1 || o === 11) {
          return e.textContent;
        } else if (o === 9) {
          return e.documentElement.textContent;
        } else if (o === 3 || o === 4) {
          return e.nodeValue;
        } else {
          return n;
        }
      },
      makeArray: function (e, t) {
        var n = t || [];
        if (e != null) {
          if (T(Object(e))) {
            C.merge(n, typeof e == "string" ? [e] : e);
          } else {
            a.call(n, e);
          }
        }
        return n;
      },
      inArray: function (e, t, n) {
        if (t == null) {
          return -1;
        } else {
          return s.call(t, e, n);
        }
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI;
        var n = e && (e.ownerDocument || e).documentElement;
        return !b.test(t || n && n.nodeName || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, o = e.length; r < n; r++) {
          e[o++] = t[r];
        }
        e.length = o;
        return e;
      },
      grep: function (e, t, n) {
        var r = [];
        for (var o = 0, i = e.length, a = !n; o < i; o++) {
          if (!t(e[o], o) !== a) {
            r.push(e[o]);
          }
        }
        return r;
      },
      map: function (e, t, n) {
        var r;
        var o;
        var a = 0;
        var s = [];
        if (T(e)) {
          for (r = e.length; a < r; a++) {
            if ((o = t(e[a], a, n)) != null) {
              s.push(o);
            }
          }
        } else {
          for (a in e) {
            if ((o = t(e[a], a, n)) != null) {
              s.push(o);
            }
          }
        }
        return i(s);
      },
      guid: 1,
      support: f
    });
    if (typeof Symbol == "function") {
      C.fn[Symbol.iterator] = n[Symbol.iterator];
    }
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      c["[object " + t + "]"] = t.toLowerCase();
    });
    var I = n.pop;
    var k = n.sort;
    var S = n.splice;
    var A = "[\\x20\\t\\r\\n\\f]";
    var D = new RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$", "g");
    C.contains = function (e, t) {
      var n = t && t.parentNode;
      return e === n || !!n && n.nodeType === 1 && !!(e.contains ? e.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16);
    };
    var $ = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function P(e, t) {
      if (t) {
        if (e === "\0") {
          return "�";
        } else {
          return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ";
        }
      } else {
        return "\\" + e;
      }
    }
    C.escapeSelector = function (e) {
      return (e + "").replace($, P);
    };
    var j = m;
    var M = a;
    (function () {
      var t;
      var r;
      var i;
      var a;
      var c;
      var u;
      var d;
      var p;
      var h;
      var g;
      var m = M;
      var y = C.expando;
      var v = 0;
      var w = 0;
      var x = ee();
      var b = ee();
      var T = ee();
      var $ = ee();
      var P = function (e, t) {
        if (e === t) {
          c = true;
        }
        return 0;
      };
      var R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      var O = "(?:\\\\[\\da-fA-F]{1,6}" + A + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
      var N = "\\[" + A + "*(" + O + ")(?:" + A + "*([*^$|!~]?=)" + A + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + A + "*\\]";
      var L = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)";
      var _ = new RegExp(A + "+", "g");
      var q = new RegExp("^" + A + "*," + A + "*");
      var B = new RegExp("^" + A + "*([>+~]|" + A + ")" + A + "*");
      var F = new RegExp(A + "|>");
      var H = new RegExp(L);
      var W = new RegExp("^" + O + "$");
      var U = {
        ID: new RegExp("^#(" + O + ")"),
        CLASS: new RegExp("^\\.(" + O + ")"),
        TAG: new RegExp("^(" + O + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + L),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + A + "*(even|odd|(([+-]|)(\\d*)n|)" + A + "*(?:([+-]|)" + A + "*(\\d+)|))" + A + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + A + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + A + "*((?:-\\d)?\\d*)" + A + "*\\)|)(?=[^-]|$)", "i")
      };
      var V = /^(?:input|select|textarea|button)$/i;
      var G = /^h\d$/i;
      var z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      var X = /[+~]/;
      var Q = new RegExp("\\\\[\\da-fA-F]{1,6}" + A + "?|\\\\([^\\r\\n\\f])", "g");
      var Y = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320));
      };
      var J = function () {
        ce();
      };
      var K = pe(function (e) {
        return e.disabled === true && E(e, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });
      try {
        m.apply(n = o.call(j.childNodes), j.childNodes);
        n[j.childNodes.length].nodeType;
      } catch (we) {
        m = {
          apply: function (e, t) {
            M.apply(e, o.call(t));
          },
          call: function (e) {
            M.apply(e, o.call(arguments, 1));
          }
        };
      }
      function Z(e, t, n, r) {
        var o;
        var i;
        var a;
        var s;
        var c;
        var l;
        var d;
        var g = t && t.ownerDocument;
        var v = t ? t.nodeType : 9;
        n = n || [];
        if (typeof e != "string" || !e || v !== 1 && v !== 9 && v !== 11) {
          return n;
        }
        if (!r && (ce(t), t = t || u, p)) {
          if (v !== 11 && (c = z.exec(e))) {
            if (o = c[1]) {
              if (v === 9) {
                if (!(a = t.getElementById(o))) {
                  return n;
                }
                if (a.id === o) {
                  m.call(n, a);
                  return n;
                }
              } else if (g && (a = g.getElementById(o)) && Z.contains(t, a) && a.id === o) {
                m.call(n, a);
                return n;
              }
            } else {
              if (c[2]) {
                m.apply(n, t.getElementsByTagName(e));
                return n;
              }
              if ((o = c[3]) && t.getElementsByClassName) {
                m.apply(n, t.getElementsByClassName(o));
                return n;
              }
            }
          }
          if (!$[e + " "] && (!h || !h.test(e))) {
            d = e;
            g = t;
            if (v === 1 && (F.test(e) || B.test(e))) {
              if ((g = X.test(e) && se(t.parentNode) || t) != t || !f.scope) {
                if (s = t.getAttribute("id")) {
                  s = C.escapeSelector(s);
                } else {
                  t.setAttribute("id", s = y);
                }
              }
              i = (l = le(e)).length;
              while (i--) {
                l[i] = (s ? "#" + s : ":scope") + " " + de(l[i]);
              }
              d = l.join(",");
            }
            try {
              m.apply(n, g.querySelectorAll(d));
              return n;
            } catch (w) {
              $(e, true);
            } finally {
              if (s === y) {
                t.removeAttribute("id");
              }
            }
          }
        }
        return ve(e.replace(D, "$1"), t, n, r);
      }
      function ee() {
        var e = [];
        return function t(n, o) {
          if (e.push(n + " ") > r.cacheLength) {
            delete t[e.shift()];
          }
          return t[n + " "] = o;
        };
      }
      function te(e) {
        e[y] = true;
        return e;
      }
      function ne(e) {
        var t = u.createElement("fieldset");
        try {
          return !!e(t);
        } catch (we) {
          return false;
        } finally {
          if (t.parentNode) {
            t.parentNode.removeChild(t);
          }
          t = null;
        }
      }
      function re(e) {
        return function (t) {
          return E(t, "input") && t.type === e;
        };
      }
      function oe(e) {
        return function (t) {
          return (E(t, "input") || E(t, "button")) && t.type === e;
        };
      }
      function ie(e) {
        return function (t) {
          if ("form" in t) {
            if (t.parentNode && t.disabled === false) {
              if ("label" in t) {
                if ("label" in t.parentNode) {
                  return t.parentNode.disabled === e;
                } else {
                  return t.disabled === e;
                }
              } else {
                return t.isDisabled === e || t.isDisabled !== !e && K(t) === e;
              }
            } else {
              return t.disabled === e;
            }
          } else {
            return "label" in t && t.disabled === e;
          }
        };
      }
      function ae(e) {
        return te(function (t) {
          t = +t;
          return te(function (n, r) {
            var o;
            var i = e([], n.length, t);
            for (var a = i.length; a--;) {
              if (n[o = i[a]]) {
                n[o] = !(r[o] = n[o]);
              }
            }
          });
        });
      }
      function se(e) {
        return e && e.getElementsByTagName !== undefined && e;
      }
      function ce(e) {
        var t;
        var n = e ? e.ownerDocument || e : j;
        if (n != u && n.nodeType === 9 && n.documentElement) {
          d = (u = n).documentElement;
          p = !C.isXMLDoc(u);
          g = d.matches || d.webkitMatchesSelector || d.msMatchesSelector;
          if (d.msMatchesSelector && j != u && (t = u.defaultView) && t.top !== t) {
            t.addEventListener("unload", J);
          }
          f.getById = ne(function (e) {
            d.appendChild(e).id = C.expando;
            return !u.getElementsByName || !u.getElementsByName(C.expando).length;
          });
          f.disconnectedMatch = ne(function (e) {
            return g.call(e, "*");
          });
          f.scope = ne(function () {
            return u.querySelectorAll(":scope");
          });
          f.cssHas = ne(function () {
            try {
              u.querySelector(":has(*,:jqfake)");
              return false;
            } catch (we) {
              return true;
            }
          });
          if (f.getById) {
            r.filter.ID = function (e) {
              var t = e.replace(Q, Y);
              return function (e) {
                return e.getAttribute("id") === t;
              };
            };
            r.find.ID = function (e, t) {
              if (t.getElementById !== undefined && p) {
                var n = t.getElementById(e);
                if (n) {
                  return [n];
                } else {
                  return [];
                }
              }
            };
          } else {
            r.filter.ID = function (e) {
              var t = e.replace(Q, Y);
              return function (e) {
                var n = e.getAttributeNode !== undefined && e.getAttributeNode("id");
                return n && n.value === t;
              };
            };
            r.find.ID = function (e, t) {
              if (t.getElementById !== undefined && p) {
                var n;
                var r;
                var o;
                var i = t.getElementById(e);
                if (i) {
                  if ((n = i.getAttributeNode("id")) && n.value === e) {
                    return [i];
                  }
                  o = t.getElementsByName(e);
                  r = 0;
                  while (i = o[r++]) {
                    if ((n = i.getAttributeNode("id")) && n.value === e) {
                      return [i];
                    }
                  }
                }
                return [];
              }
            };
          }
          r.find.TAG = function (e, t) {
            if (t.getElementsByTagName !== undefined) {
              return t.getElementsByTagName(e);
            } else {
              return t.querySelectorAll(e);
            }
          };
          r.find.CLASS = function (e, t) {
            if (t.getElementsByClassName !== undefined && p) {
              return t.getElementsByClassName(e);
            }
          };
          h = [];
          ne(function (e) {
            var t;
            d.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!e.querySelectorAll("[selected]").length) {
              h.push("\\[" + A + "*(?:value|" + R + ")");
            }
            if (!e.querySelectorAll("[id~=" + y + "-]").length) {
              h.push("~=");
            }
            if (!e.querySelectorAll("a#" + y + "+*").length) {
              h.push(".#.+[+~]");
            }
            if (!e.querySelectorAll(":checked").length) {
              h.push(":checked");
            }
            (t = u.createElement("input")).setAttribute("type", "hidden");
            e.appendChild(t).setAttribute("name", "D");
            d.appendChild(e).disabled = true;
            if (e.querySelectorAll(":disabled").length !== 2) {
              h.push(":enabled", ":disabled");
            }
            (t = u.createElement("input")).setAttribute("name", "");
            e.appendChild(t);
            if (!e.querySelectorAll("[name='']").length) {
              h.push("\\[" + A + "*name" + A + "*=" + A + "*(?:''|\"\")");
            }
          });
          if (!f.cssHas) {
            h.push(":has");
          }
          h = h.length && new RegExp(h.join("|"));
          P = function (e, t) {
            if (e === t) {
              c = true;
              return 0;
            }
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || ((n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) & 1 || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument == j && Z.contains(j, e) ? -1 : t === u || t.ownerDocument == j && Z.contains(j, t) ? 1 : a ? s.call(a, e) - s.call(a, t) : 0 : n & 4 ? -1 : 1);
          };
          return u;
        } else {
          return u;
        }
      }
      Z.matches = function (e, t) {
        return Z(e, null, null, t);
      };
      Z.matchesSelector = function (e, t) {
        ce(e);
        if (p && !$[t + " "] && (!h || !h.test(t))) {
          try {
            var n = g.call(e, t);
            if (n || f.disconnectedMatch || e.document && e.document.nodeType !== 11) {
              return n;
            }
          } catch (we) {
            $(t, true);
          }
        }
        return Z(t, u, null, [e]).length > 0;
      };
      Z.contains = function (e, t) {
        if ((e.ownerDocument || e) != u) {
          ce(e);
        }
        return C.contains(e, t);
      };
      Z.attr = function (e, t) {
        if ((e.ownerDocument || e) != u) {
          ce(e);
        }
        var n = r.attrHandle[t.toLowerCase()];
        var o = n && l.call(r.attrHandle, t.toLowerCase()) ? n(e, t, !p) : undefined;
        if (o !== undefined) {
          return o;
        } else {
          return e.getAttribute(t);
        }
      };
      Z.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      };
      C.uniqueSort = function (e) {
        var t;
        var n = [];
        var r = 0;
        var i = 0;
        c = !f.sortStable;
        a = !f.sortStable && o.call(e, 0);
        k.call(e, P);
        if (c) {
          while (t = e[i++]) {
            if (t === e[i]) {
              r = n.push(i);
            }
          }
          while (r--) {
            S.call(e, n[r], 1);
          }
        }
        a = null;
        return e;
      };
      C.fn.uniqueSort = function () {
        return this.pushStack(C.uniqueSort(o.apply(this)));
      };
      (r = C.expr = {
        cacheLength: 50,
        createPseudo: te,
        match: U,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: true
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: true
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            e[1] = e[1].replace(Q, Y);
            e[3] = (e[3] || e[4] || e[5] || "").replace(Q, Y);
            if (e[2] === "~=") {
              e[3] = " " + e[3] + " ";
            }
            return e.slice(0, 4);
          },
          CHILD: function (e) {
            e[1] = e[1].toLowerCase();
            if (e[1].slice(0, 3) === "nth") {
              if (!e[3]) {
                Z.error(e[0]);
              }
              e[4] = +(e[4] ? e[5] + (e[6] || 1) : (e[3] === "even" || e[3] === "odd") * 2);
              e[5] = +(e[7] + e[8] || e[3] === "odd");
            } else if (e[3]) {
              Z.error(e[0]);
            }
            return e;
          },
          PSEUDO: function (e) {
            var t;
            var n = !e[6] && e[2];
            if (U.CHILD.test(e[0])) {
              return null;
            } else {
              if (e[3]) {
                e[2] = e[4] || e[5] || "";
              } else if (n && H.test(n) && (t = le(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                e[0] = e[0].slice(0, t);
                e[2] = n.slice(0, t);
              }
              return e.slice(0, 3);
            }
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Q, Y).toLowerCase();
            if (e === "*") {
              return function () {
                return true;
              };
            } else {
              return function (e) {
                return E(e, t);
              };
            }
          },
          CLASS: function (e) {
            var t = x[e + " "];
            return t || (t = new RegExp("(^|" + A + ")" + e + "(" + A + "|$)")) && x(e, function (e) {
              return t.test(typeof e.className == "string" && e.className || e.getAttribute !== undefined && e.getAttribute("class") || "");
            });
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var o = Z.attr(r, e);
              if (o == null) {
                return t === "!=";
              } else {
                return !t || (o += "", t === "=" ? o === n : t === "!=" ? o !== n : t === "^=" ? n && o.indexOf(n) === 0 : t === "*=" ? n && o.indexOf(n) > -1 : t === "$=" ? n && o.slice(-n.length) === n : t === "~=" ? (" " + o.replace(_, " ") + " ").indexOf(n) > -1 : t === "|=" && (o === n || o.slice(0, n.length + 1) === n + "-"));
              }
            };
          },
          CHILD: function (e, t, n, r, o) {
            var i = e.slice(0, 3) !== "nth";
            var a = e.slice(-4) !== "last";
            var s = t === "of-type";
            if (r === 1 && o === 0) {
              return function (e) {
                return !!e.parentNode;
              };
            } else {
              return function (t, n, c) {
                var u;
                var l;
                var d;
                var p;
                var f;
                var h = i !== a ? "nextSibling" : "previousSibling";
                var g = t.parentNode;
                var m = s && t.nodeName.toLowerCase();
                var w = !c && !s;
                var x = false;
                if (g) {
                  if (i) {
                    while (h) {
                      for (d = t; d = d[h];) {
                        if (s ? E(d, m) : d.nodeType === 1) {
                          return false;
                        }
                      }
                      f = h = e === "only" && !f && "nextSibling";
                    }
                    return true;
                  }
                  f = [a ? g.firstChild : g.lastChild];
                  if (a && w) {
                    x = (p = (u = (l = g[y] ||= {})[e] || [])[0] === v && u[1]) && u[2];
                    d = p && g.childNodes[p];
                    while (d = ++p && d && d[h] || (x = p = 0) || f.pop()) {
                      if (d.nodeType === 1 && ++x && d === t) {
                        l[e] = [v, p, x];
                        break;
                      }
                    }
                  } else {
                    if (w) {
                      x = p = (u = (l = t[y] ||= {})[e] || [])[0] === v && u[1];
                    }
                    if (x === false) {
                      while ((d = ++p && d && d[h] || (x = p = 0) || f.pop()) && (!(s ? E(d, m) : d.nodeType === 1) || !++x || (w && ((l = d[y] ||= {})[e] = [v, x]), d !== t)));
                    }
                  }
                  return (x -= o) === r || x % r === 0 && x / r >= 0;
                }
              };
            }
          },
          PSEUDO: function (e, t) {
            var n;
            var o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
            if (o[y]) {
              return o(t);
            } else if (o.length > 1) {
              n = [e, e, "", t];
              if (r.setFilters.hasOwnProperty(e.toLowerCase())) {
                return te(function (e, n) {
                  var r;
                  var i = o(e, t);
                  for (var a = i.length; a--;) {
                    e[r = s.call(e, i[a])] = !(n[r] = i[a]);
                  }
                });
              } else {
                return function (e) {
                  return o(e, 0, n);
                };
              }
            } else {
              return o;
            }
          }
        },
        pseudos: {
          not: te(function (e) {
            var t = [];
            var n = [];
            var r = ye(e.replace(D, "$1"));
            if (r[y]) {
              return te(function (e, t, n, o) {
                var i;
                var a = r(e, null, o, []);
                for (var s = e.length; s--;) {
                  if (i = a[s]) {
                    e[s] = !(t[s] = i);
                  }
                }
              });
            } else {
              return function (e, o, i) {
                t[0] = e;
                r(t, null, i, n);
                t[0] = null;
                return !n.pop();
              };
            }
          }),
          has: te(function (e) {
            return function (t) {
              return Z(e, t).length > 0;
            };
          }),
          contains: te(function (e) {
            e = e.replace(Q, Y);
            return function (t) {
              return (t.textContent || C.text(t)).indexOf(e) > -1;
            };
          }),
          lang: te(function (e) {
            if (!W.test(e || "")) {
              Z.error("unsupported lang: " + e);
            }
            e = e.replace(Q, Y).toLowerCase();
            return function (t) {
              var n;
              do {
                if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                  return (n = n.toLowerCase()) === e || n.indexOf(e + "-") === 0;
                }
              } while ((t = t.parentNode) && t.nodeType === 1);
              return false;
            };
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === d;
          },
          focus: function (e) {
            return e === function () {
              try {
                return u.activeElement;
              } catch (e) {}
            }() && u.hasFocus() && (!!e.type || !!e.href || !!~e.tabIndex);
          },
          enabled: ie(false),
          disabled: ie(true),
          checked: function (e) {
            return E(e, "input") && !!e.checked || E(e, "option") && !!e.selected;
          },
          selected: function (e) {
            if (e.parentNode) {
              e.parentNode.selectedIndex;
            }
            return e.selected === true;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return V.test(e.nodeName);
          },
          button: function (e) {
            return E(e, "input") && e.type === "button" || E(e, "button");
          },
          text: function (e) {
            var t;
            return E(e, "input") && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text");
          },
          first: ae(function () {
            return [0];
          }),
          last: ae(function (e, t) {
            return [t - 1];
          }),
          eq: ae(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ae(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }
            return e;
          }),
          odd: ae(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }
            return e;
          }),
          lt: ae(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
              e.push(r);
            }
            return e;
          }),
          gt: ae(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }
            return e;
          })
        }
      }).pseudos.nth = r.pseudos.eq;
      for (t in {
        radio: true,
        checkbox: true,
        file: true,
        password: true,
        image: true
      }) {
        r.pseudos[t] = re(t);
      }
      for (t in {
        submit: true,
        reset: true
      }) {
        r.pseudos[t] = oe(t);
      }
      function ue() {}
      function le(e, t) {
        var n;
        var o;
        var i;
        var a;
        var s;
        var c;
        var u;
        var l = b[e + " "];
        if (l) {
          if (t) {
            return 0;
          } else {
            return l.slice(0);
          }
        }
        s = e;
        c = [];
        u = r.preFilter;
        while (s) {
          if (!n || !!(o = q.exec(s))) {
            if (o) {
              s = s.slice(o[0].length) || s;
            }
            c.push(i = []);
          }
          n = false;
          if (o = B.exec(s)) {
            n = o.shift();
            i.push({
              value: n,
              type: o[0].replace(D, " ")
            });
            s = s.slice(n.length);
          }
          for (a in r.filter) {
            if (!!(o = U[a].exec(s)) && (!u[a] || !!(o = u[a](o)))) {
              n = o.shift();
              i.push({
                value: n,
                type: a,
                matches: o
              });
              s = s.slice(n.length);
            }
          }
          if (!n) {
            break;
          }
        }
        if (t) {
          return s.length;
        } else if (s) {
          return Z.error(e);
        } else {
          return b(e, c).slice(0);
        }
      }
      function de(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }
        return r;
      }
      function pe(e, t, n) {
        var r = t.dir;
        var o = t.next;
        var i = o || r;
        var a = n && i === "parentNode";
        var s = w++;
        if (t.first) {
          return function (t, n, o) {
            while (t = t[r]) {
              if (t.nodeType === 1 || a) {
                return e(t, n, o);
              }
            }
            return false;
          };
        } else {
          return function (t, n, c) {
            var u;
            var l;
            var d = [v, s];
            if (c) {
              while (t = t[r]) {
                if ((t.nodeType === 1 || a) && e(t, n, c)) {
                  return true;
                }
              }
            } else {
              while (t = t[r]) {
                if (t.nodeType === 1 || a) {
                  l = t[y] ||= {};
                  if (o && E(t, o)) {
                    t = t[r] || t;
                  } else {
                    if ((u = l[i]) && u[0] === v && u[1] === s) {
                      return d[2] = u[2];
                    }
                    l[i] = d;
                    if (d[2] = e(t, n, c)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
      }
      function fe(e) {
        if (e.length > 1) {
          return function (t, n, r) {
            for (var o = e.length; o--;) {
              if (!e[o](t, n, r)) {
                return false;
              }
            }
            return true;
          };
        } else {
          return e[0];
        }
      }
      function he(e, t, n, r, o) {
        var i;
        var a = [];
        for (var s = 0, c = e.length, u = t != null; s < c; s++) {
          if (i = e[s]) {
            if (!n || !!n(i, r, o)) {
              a.push(i);
              if (u) {
                t.push(s);
              }
            }
          }
        }
        return a;
      }
      function ge(e, t, n, r, o, i) {
        if (r && !r[y]) {
          r = ge(r);
        }
        if (o && !o[y]) {
          o = ge(o, i);
        }
        return te(function (i, a, c, u) {
          var l;
          var d;
          var p;
          var f;
          var h = [];
          var g = [];
          var y = a.length;
          var v = i || function (e, t, n) {
            for (var r = 0, o = t.length; r < o; r++) {
              Z(e, t[r], n);
            }
            return n;
          }(t || "*", c.nodeType ? [c] : c, []);
          var w = !e || !i && t ? v : he(v, h, e, c, u);
          if (n) {
            n(w, f = o || (i ? e : y || r) ? [] : a, c, u);
          } else {
            f = w;
          }
          if (r) {
            l = he(f, g);
            r(l, [], c, u);
            d = l.length;
            while (d--) {
              if (p = l[d]) {
                f[g[d]] = !(w[g[d]] = p);
              }
            }
          }
          if (i) {
            if (o || e) {
              if (o) {
                l = [];
                d = f.length;
                while (d--) {
                  if (p = f[d]) {
                    l.push(w[d] = p);
                  }
                }
                o(null, f = [], l, u);
              }
              for (d = f.length; d--;) {
                if ((p = f[d]) && (l = o ? s.call(i, p) : h[d]) > -1) {
                  i[l] = !(a[l] = p);
                }
              }
            }
          } else {
            f = he(f === a ? f.splice(y, f.length) : f);
            if (o) {
              o(null, a, f, u);
            } else {
              m.apply(a, f);
            }
          }
        });
      }
      function me(e) {
        var t;
        var n;
        var o;
        for (var a = e.length, c = r.relative[e[0].type], u = c || r.relative[" "], l = c ? 1 : 0, d = pe(function (e) {
            return e === t;
          }, u, true), p = pe(function (e) {
            return s.call(t, e) > -1;
          }, u, true), f = [function (e, n, r) {
            var o = !c && (r || n != i) || ((t = n).nodeType ? d(e, n, r) : p(e, n, r));
            t = null;
            return o;
          }]; l < a; l++) {
          if (n = r.relative[e[l].type]) {
            f = [pe(fe(f), n)];
          } else {
            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[y]) {
              for (o = ++l; o < a && !r.relative[e[o].type]; o++);
              return ge(l > 1 && fe(f), l > 1 && de(e.slice(0, l - 1).concat({
                value: e[l - 2].type === " " ? "*" : ""
              })).replace(D, "$1"), n, l < o && me(e.slice(l, o)), o < a && me(e = e.slice(o)), o < a && de(e));
            }
            f.push(n);
          }
        }
        return fe(f);
      }
      function ye(e, t) {
        var n;
        var o = [];
        var a = [];
        var s = T[e + " "];
        if (!s) {
          t ||= le(e);
          n = t.length;
          while (n--) {
            if ((s = me(t[n]))[y]) {
              o.push(s);
            } else {
              a.push(s);
            }
          }
          s = T(e, function (e, t) {
            var n = t.length > 0;
            var o = e.length > 0;
            var a = function (a, s, c, l, d) {
              var f;
              var h;
              var g;
              var y = 0;
              var w = "0";
              var x = a && [];
              var b = [];
              var T = i;
              var E = a || o && r.find.TAG("*", d);
              var k = v += T == null ? 1 : Math.random() || 0.1;
              var S = E.length;
              for (d && (i = s == u || s || d); w !== S && (f = E[w]) != null; w++) {
                if (o && f) {
                  h = 0;
                  if (!s && f.ownerDocument != u) {
                    ce(f);
                    c = !p;
                  }
                  while (g = e[h++]) {
                    if (g(f, s || u, c)) {
                      m.call(l, f);
                      break;
                    }
                  }
                  if (d) {
                    v = k;
                  }
                }
                if (n) {
                  if (f = !g && f) {
                    y--;
                  }
                  if (a) {
                    x.push(f);
                  }
                }
              }
              y += w;
              if (n && w !== y) {
                for (h = 0; g = t[h++];) {
                  g(x, b, s, c);
                }
                if (a) {
                  if (y > 0) {
                    while (w--) {
                      if (!x[w] && !b[w]) {
                        b[w] = I.call(l);
                      }
                    }
                  }
                  b = he(b);
                }
                m.apply(l, b);
                if (d && !a && b.length > 0 && y + t.length > 1) {
                  C.uniqueSort(l);
                }
              }
              if (d) {
                v = k;
                i = T;
              }
              return x;
            };
            if (n) {
              return te(a);
            } else {
              return a;
            }
          }(a, o));
          s.selector = e;
        }
        return s;
      }
      function ve(e, t, n, o) {
        var i;
        var a;
        var s;
        var c;
        var u;
        var l = typeof e == "function" && e;
        var d = !o && le(e = l.selector || e);
        n = n || [];
        if (d.length === 1) {
          if ((a = d[0] = d[0].slice(0)).length > 2 && (s = a[0]).type === "ID" && t.nodeType === 9 && p && r.relative[a[1].type]) {
            if (!(t = (r.find.ID(s.matches[0].replace(Q, Y), t) || [])[0])) {
              return n;
            }
            if (l) {
              t = t.parentNode;
            }
            e = e.slice(a.shift().value.length);
          }
          for (i = U.needsContext.test(e) ? 0 : a.length; i-- && (s = a[i], !r.relative[c = s.type]);) {
            if ((u = r.find[c]) && (o = u(s.matches[0].replace(Q, Y), X.test(a[0].type) && se(t.parentNode) || t))) {
              a.splice(i, 1);
              if (!(e = o.length && de(a))) {
                m.apply(n, o);
                return n;
              }
              break;
            }
          }
        }
        (l || ye(e, d))(o, t, !p, n, !t || X.test(e) && se(t.parentNode) || t);
        return n;
      }
      ue.prototype = r.filters = r.pseudos;
      r.setFilters = new ue();
      f.sortStable = y.split("").sort(P).join("") === y;
      ce();
      f.sortDetached = ne(function (e) {
        return e.compareDocumentPosition(u.createElement("fieldset")) & 1;
      });
      C.find = Z;
      C.expr[":"] = C.expr.pseudos;
      C.unique = C.uniqueSort;
      Z.compile = ye;
      Z.select = ve;
      Z.setDocument = ce;
      Z.tokenize = le;
      Z.escape = C.escapeSelector;
      Z.getText = C.text;
      Z.isXML = C.isXMLDoc;
      Z.selectors = C.expr;
      Z.support = C.support;
      Z.uniqueSort = C.uniqueSort;
    })();
    var R = function (e, t, n) {
      var r = [];
      var o = n !== undefined;
      for (; (e = e[t]) && e.nodeType !== 9;) {
        if (e.nodeType === 1) {
          if (o && C(e).is(n)) {
            break;
          }
          r.push(e);
        }
      }
      return r;
    };
    var O = function (e, t) {
      var n = [];
      for (; e; e = e.nextSibling) {
        if (e.nodeType === 1 && e !== t) {
          n.push(e);
        }
      }
      return n;
    };
    var N = C.expr.match.needsContext;
    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function _(e, t, n) {
      if (h(t)) {
        return C.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        });
      } else if (t.nodeType) {
        return C.grep(e, function (e) {
          return e === t !== n;
        });
      } else if (typeof t != "string") {
        return C.grep(e, function (e) {
          return s.call(t, e) > -1 !== n;
        });
      } else {
        return C.filter(t, e, n);
      }
    }
    C.filter = function (e, t, n) {
      var r = t[0];
      if (n) {
        e = ":not(" + e + ")";
      }
      if (t.length === 1 && r.nodeType === 1) {
        if (C.find.matchesSelector(r, e)) {
          return [r];
        } else {
          return [];
        }
      } else {
        return C.find.matches(e, C.grep(t, function (e) {
          return e.nodeType === 1;
        }));
      }
    };
    C.fn.extend({
      find: function (e) {
        var t;
        var n;
        var r = this.length;
        var o = this;
        if (typeof e != "string") {
          return this.pushStack(C(e).filter(function () {
            for (t = 0; t < r; t++) {
              if (C.contains(o[t], this)) {
                return true;
              }
            }
          }));
        }
        n = this.pushStack([]);
        t = 0;
        for (; t < r; t++) {
          C.find(e, o[t], n);
        }
        if (r > 1) {
          return C.uniqueSort(n);
        } else {
          return n;
        }
      },
      filter: function (e) {
        return this.pushStack(_(this, e || [], false));
      },
      not: function (e) {
        return this.pushStack(_(this, e || [], true));
      },
      is: function (e) {
        return !!_(this, typeof e == "string" && N.test(e) ? C(e) : e || [], false).length;
      }
    });
    var q;
    var B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function (e, t, n) {
      var r;
      var o;
      if (!e) {
        return this;
      }
      n = n || q;
      if (typeof e == "string") {
        if (!(r = e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? [null, e, null] : B.exec(e)) || !r[1] && t) {
          if (!t || t.jquery) {
            return (t || n).find(e);
          } else {
            return this.constructor(t).find(e);
          }
        }
        if (r[1]) {
          t = t instanceof C ? t[0] : t;
          C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, true));
          if (L.test(r[1]) && C.isPlainObject(t)) {
            for (r in t) {
              if (h(this[r])) {
                this[r](t[r]);
              } else {
                this.attr(r, t[r]);
              }
            }
          }
          return this;
        }
        if (o = m.getElementById(r[2])) {
          this[0] = o;
          this.length = 1;
        }
        return this;
      }
      if (e.nodeType) {
        this[0] = e;
        this.length = 1;
        return this;
      } else if (h(e)) {
        if (n.ready !== undefined) {
          return n.ready(e);
        } else {
          return e(C);
        }
      } else {
        return C.makeArray(e, this);
      }
    }).prototype = C.fn;
    q = C(m);
    var F = /^(?:parents|prev(?:Until|All))/;
    var H = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    function W(e, t) {
      while ((e = e[t]) && e.nodeType !== 1);
      return e;
    }
    C.fn.extend({
      has: function (e) {
        var t = C(e, this);
        var n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (C.contains(this, t[e])) {
              return true;
            }
          }
        });
      },
      closest: function (e, t) {
        var n;
        var r = 0;
        var o = this.length;
        var i = [];
        var a = typeof e != "string" && C(e);
        if (!N.test(e)) {
          for (; r < o; r++) {
            for (n = this[r]; n && n !== t; n = n.parentNode) {
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : n.nodeType === 1 && C.find.matchesSelector(n, e))) {
                i.push(n);
                break;
              }
            }
          }
        }
        return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i);
      },
      index: function (e) {
        if (e) {
          if (typeof e == "string") {
            return s.call(C(e), this[0]);
          } else {
            return s.call(this, e.jquery ? e[0] : e);
          }
        } else if (this[0] && this[0].parentNode) {
          return this.first().prevAll().length;
        } else {
          return -1;
        }
      },
      add: function (e, t) {
        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
      },
      addBack: function (e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
      }
    });
    C.each({
      parent: function (e) {
        var t = e.parentNode;
        if (t && t.nodeType !== 11) {
          return t;
        } else {
          return null;
        }
      },
      parents: function (e) {
        return R(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return R(e, "parentNode", n);
      },
      next: function (e) {
        return W(e, "nextSibling");
      },
      prev: function (e) {
        return W(e, "previousSibling");
      },
      nextAll: function (e) {
        return R(e, "nextSibling");
      },
      prevAll: function (e) {
        return R(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return R(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return R(e, "previousSibling", n);
      },
      siblings: function (e) {
        return O((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return O(e.firstChild);
      },
      contents: function (e) {
        if (e.contentDocument != null && r(e.contentDocument)) {
          return e.contentDocument;
        } else {
          if (E(e, "template")) {
            e = e.content || e;
          }
          return C.merge([], e.childNodes);
        }
      }
    }, function (e, t) {
      C.fn[e] = function (n, r) {
        var o = C.map(this, t, n);
        if (e.slice(-5) !== "Until") {
          r = n;
        }
        if (r && typeof r == "string") {
          o = C.filter(r, o);
        }
        if (this.length > 1) {
          if (!H[e]) {
            C.uniqueSort(o);
          }
          if (F.test(e)) {
            o.reverse();
          }
        }
        return this.pushStack(o);
      };
    });
    var U = /[^\x20\t\r\n\f]+/g;
    function V(e) {
      return e;
    }
    function G(e) {
      throw e;
    }
    function z(e, t, n, r) {
      var o;
      try {
        if (e && h(o = e.promise)) {
          o.call(e).done(t).fail(n);
        } else if (e && h(o = e.then)) {
          o.call(e, t, n);
        } else {
          t.apply(undefined, [e].slice(r));
        }
      } catch (i) {
        n.apply(undefined, [i]);
      }
    }
    C.Callbacks = function (e) {
      e = typeof e == "string" ? function (e) {
        var t = {};
        C.each(e.match(U) || [], function (e, n) {
          t[n] = true;
        });
        return t;
      }(e) : C.extend({}, e);
      var t;
      var n;
      var r;
      var o;
      var i = [];
      var a = [];
      var s = -1;
      var c = function () {
        o = o || e.once;
        r = t = true;
        for (; a.length; s = -1) {
          for (n = a.shift(); ++s < i.length;) {
            if (i[s].apply(n[0], n[1]) === false && e.stopOnFalse) {
              s = i.length;
              n = false;
            }
          }
        }
        if (!e.memory) {
          n = false;
        }
        t = false;
        if (o) {
          i = n ? [] : "";
        }
      };
      var u = {
        add: function () {
          if (i) {
            if (n && !t) {
              s = i.length - 1;
              a.push(n);
            }
            (function t(n) {
              C.each(n, function (n, r) {
                if (h(r)) {
                  if (!e.unique || !u.has(r)) {
                    i.push(r);
                  }
                } else if (r && r.length && w(r) !== "string") {
                  t(r);
                }
              });
            })(arguments);
            if (n && !t) {
              c();
            }
          }
          return this;
        },
        remove: function () {
          C.each(arguments, function (e, t) {
            for (var n; (n = C.inArray(t, i, n)) > -1;) {
              i.splice(n, 1);
              if (n <= s) {
                s--;
              }
            }
          });
          return this;
        },
        has: function (e) {
          if (e) {
            return C.inArray(e, i) > -1;
          } else {
            return i.length > 0;
          }
        },
        empty: function () {
          i &&= [];
          return this;
        },
        disable: function () {
          o = a = [];
          i = n = "";
          return this;
        },
        disabled: function () {
          return !i;
        },
        lock: function () {
          o = a = [];
          if (!n && !t) {
            i = n = "";
          }
          return this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          if (!o) {
            n = [e, (n = n || []).slice ? n.slice() : n];
            a.push(n);
            if (!t) {
              c();
            }
          }
          return this;
        },
        fire: function () {
          u.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!r;
        }
      };
      return u;
    };
    C.extend({
      Deferred: function (t) {
        var n = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]];
        var r = "pending";
        var o = {
          state: function () {
            return r;
          },
          always: function () {
            i.done(arguments).fail(arguments);
            return this;
          },
          catch: function (e) {
            return o.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return C.Deferred(function (t) {
              C.each(n, function (n, r) {
                var o = h(e[r[4]]) && e[r[4]];
                i[r[1]](function () {
                  var e = o && o.apply(this, arguments);
                  if (e && h(e.promise)) {
                    e.promise().progress(t.notify).done(t.resolve).fail(t.reject);
                  } else {
                    t[r[0] + "With"](this, o ? [e] : arguments);
                  }
                });
              });
              e = null;
            }).promise();
          },
          then: function (t, r, o) {
            var i = 0;
            function a(t, n, r, o) {
              return function () {
                var s = this;
                var c = arguments;
                var u = function () {
                  var e;
                  var u;
                  if (!(t < i)) {
                    if ((e = r.apply(s, c)) === n.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    u = e && (typeof e == "object" || typeof e == "function") && e.then;
                    if (h(u)) {
                      if (o) {
                        u.call(e, a(i, n, V, o), a(i, n, G, o));
                      } else {
                        i++;
                        u.call(e, a(i, n, V, o), a(i, n, G, o), a(i, n, V, n.notifyWith));
                      }
                    } else {
                      if (r !== V) {
                        s = undefined;
                        c = [e];
                      }
                      (o || n.resolveWith)(s, c);
                    }
                  }
                };
                var l = o ? u : function () {
                  try {
                    u();
                  } catch (e) {
                    if (C.Deferred.exceptionHook) {
                      C.Deferred.exceptionHook(e, l.error);
                    }
                    if (t + 1 >= i) {
                      if (r !== G) {
                        s = undefined;
                        c = [e];
                      }
                      n.rejectWith(s, c);
                    }
                  }
                };
                if (t) {
                  l();
                } else {
                  if (C.Deferred.getErrorHook) {
                    l.error = C.Deferred.getErrorHook();
                  } else if (C.Deferred.getStackHook) {
                    l.error = C.Deferred.getStackHook();
                  }
                  e.setTimeout(l);
                }
              };
            }
            return C.Deferred(function (e) {
              n[0][3].add(a(0, e, h(o) ? o : V, e.notifyWith));
              n[1][3].add(a(0, e, h(t) ? t : V));
              n[2][3].add(a(0, e, h(r) ? r : G));
            }).promise();
          },
          promise: function (e) {
            if (e != null) {
              return C.extend(e, o);
            } else {
              return o;
            }
          }
        };
        var i = {};
        C.each(n, function (e, t) {
          var a = t[2];
          var s = t[5];
          o[t[1]] = a.add;
          if (s) {
            a.add(function () {
              r = s;
            }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock);
          }
          a.add(t[3].fire);
          i[t[0]] = function () {
            i[t[0] + "With"](this === i ? undefined : this, arguments);
            return this;
          };
          i[t[0] + "With"] = a.fireWith;
        });
        o.promise(i);
        if (t) {
          t.call(i, i);
        }
        return i;
      },
      when: function (e) {
        var t = arguments.length;
        var n = t;
        var r = Array(n);
        var i = o.call(arguments);
        var a = C.Deferred();
        var s = function (e) {
          return function (n) {
            r[e] = this;
            i[e] = arguments.length > 1 ? o.call(arguments) : n;
            if (! --t) {
              a.resolveWith(r, i);
            }
          };
        };
        if (t <= 1 && (z(e, a.done(s(n)).resolve, a.reject, !t), a.state() === "pending" || h(i[n] && i[n].then))) {
          return a.then();
        }
        while (n--) {
          z(i[n], s(n), a.reject);
        }
        return a.promise();
      }
    });
    var X = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function (t, n) {
      if (e.console && e.console.warn && t && X.test(t.name)) {
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
      }
    };
    C.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    };
    var Q = C.Deferred();
    function Y() {
      m.removeEventListener("DOMContentLoaded", Y);
      e.removeEventListener("load", Y);
      C.ready();
    }
    C.fn.ready = function (e) {
      Q.then(e).catch(function (e) {
        C.readyException(e);
      });
      return this;
    };
    C.extend({
      isReady: false,
      readyWait: 1,
      ready: function (e) {
        if (!(e === true ? --C.readyWait : C.isReady)) {
          C.isReady = true;
          if (e === true || !(--C.readyWait > 0)) {
            Q.resolveWith(m, [C]);
          }
        }
      }
    });
    C.ready.then = Q.then;
    if (m.readyState === "complete" || m.readyState !== "loading" && !m.documentElement.doScroll) {
      e.setTimeout(C.ready);
    } else {
      m.addEventListener("DOMContentLoaded", Y);
      e.addEventListener("load", Y);
    }
    var J = function (e, t, n, r, o, i, a) {
      var s = 0;
      var c = e.length;
      var u = n == null;
      if (w(n) === "object") {
        o = true;
        for (s in n) {
          J(e, t, s, n[s], true, i, a);
        }
      } else if (r !== undefined && (o = true, h(r) || (a = true), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
        return u.call(C(e), n);
      })), t)) {
        for (; s < c; s++) {
          t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        }
      }
      if (o) {
        return e;
      } else if (u) {
        return t.call(e);
      } else if (c) {
        return t(e[0], n);
      } else {
        return i;
      }
    };
    var K = /^-ms-/;
    var Z = /-([a-z])/g;
    function ee(e, t) {
      return t.toUpperCase();
    }
    function te(e) {
      return e.replace(K, "ms-").replace(Z, ee);
    }
    var ne = function (e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function re() {
      this.expando = C.expando + re.uid++;
    }
    re.uid = 1;
    re.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        if (!t) {
          t = {};
          if (ne(e)) {
            if (e.nodeType) {
              e[this.expando] = t;
            } else {
              Object.defineProperty(e, this.expando, {
                value: t,
                configurable: true
              });
            }
          }
        }
        return t;
      },
      set: function (e, t, n) {
        var r;
        var o = this.cache(e);
        if (typeof t == "string") {
          o[te(t)] = n;
        } else {
          for (r in t) {
            o[te(r)] = t[r];
          }
        }
        return o;
      },
      get: function (e, t) {
        if (t === undefined) {
          return this.cache(e);
        } else {
          return e[this.expando] && e[this.expando][te(t)];
        }
      },
      access: function (e, t, n) {
        if (t === undefined || t && typeof t == "string" && n === undefined) {
          return this.get(e, t);
        } else {
          this.set(e, t, n);
          if (n !== undefined) {
            return n;
          } else {
            return t;
          }
        }
      },
      remove: function (e, t) {
        var n;
        var r = e[this.expando];
        if (r !== undefined) {
          if (t !== undefined) {
            n = (t = Array.isArray(t) ? t.map(te) : (t = te(t)) in r ? [t] : t.match(U) || []).length;
            while (n--) {
              delete r[t[n]];
            }
          }
          if (t === undefined || C.isEmptyObject(r)) {
            if (e.nodeType) {
              e[this.expando] = undefined;
            } else {
              delete e[this.expando];
            }
          }
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return t !== undefined && !C.isEmptyObject(t);
      }
    };
    var oe = new re();
    var ie = new re();
    var ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var se = /[A-Z]/g;
    function ce(e, t, n) {
      var r;
      if (n === undefined && e.nodeType === 1) {
        r = "data-" + t.replace(se, "-$&").toLowerCase();
        if (typeof (n = e.getAttribute(r)) == "string") {
          try {
            n = function (e) {
              return e === "true" || e !== "false" && (e === "null" ? null : e === +e + "" ? +e : ae.test(e) ? JSON.parse(e) : e);
            }(n);
          } catch (o) {}
          ie.set(e, t, n);
        } else {
          n = undefined;
        }
      }
      return n;
    }
    C.extend({
      hasData: function (e) {
        return ie.hasData(e) || oe.hasData(e);
      },
      data: function (e, t, n) {
        return ie.access(e, t, n);
      },
      removeData: function (e, t) {
        ie.remove(e, t);
      },
      _data: function (e, t, n) {
        return oe.access(e, t, n);
      },
      _removeData: function (e, t) {
        oe.remove(e, t);
      }
    });
    C.fn.extend({
      data: function (e, t) {
        var n;
        var r;
        var o;
        var i = this[0];
        var a = i && i.attributes;
        if (e === undefined) {
          if (this.length && (o = ie.get(i), i.nodeType === 1 && !oe.get(i, "hasDataAttrs"))) {
            for (n = a.length; n--;) {
              if (a[n] && (r = a[n].name).indexOf("data-") === 0) {
                r = te(r.slice(5));
                ce(i, r, o[r]);
              }
            }
            oe.set(i, "hasDataAttrs", true);
          }
          return o;
        }
        if (typeof e == "object") {
          return this.each(function () {
            ie.set(this, e);
          });
        } else {
          return J(this, function (t) {
            var n;
            if (i && t === undefined) {
              if ((n = ie.get(i, e)) !== undefined || (n = ce(i, e)) !== undefined) {
                return n;
              } else {
                return undefined;
              }
            }
            this.each(function () {
              ie.set(this, e, t);
            });
          }, null, t, arguments.length > 1, null, true);
        }
      },
      removeData: function (e) {
        return this.each(function () {
          ie.remove(this, e);
        });
      }
    });
    C.extend({
      queue: function (e, t, n) {
        var r;
        if (e) {
          t = (t || "fx") + "queue";
          r = oe.get(e, t);
          if (n) {
            if (!r || Array.isArray(n)) {
              r = oe.access(e, t, C.makeArray(n));
            } else {
              r.push(n);
            }
          }
          return r || [];
        }
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = C.queue(e, t);
        var r = n.length;
        var o = n.shift();
        var i = C._queueHooks(e, t);
        if (o === "inprogress") {
          o = n.shift();
          r--;
        }
        if (o) {
          if (t === "fx") {
            n.unshift("inprogress");
          }
          delete i.stop;
          o.call(e, function () {
            C.dequeue(e, t);
          }, i);
        }
        if (!r && i) {
          i.empty.fire();
        }
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return oe.get(e, n) || oe.access(e, n, {
          empty: C.Callbacks("once memory").add(function () {
            oe.remove(e, [t + "queue", n]);
          })
        });
      }
    });
    C.fn.extend({
      queue: function (e, t) {
        var n = 2;
        if (typeof e != "string") {
          t = e;
          e = "fx";
          n--;
        }
        if (arguments.length < n) {
          return C.queue(this[0], e);
        } else if (t === undefined) {
          return this;
        } else {
          return this.each(function () {
            var n = C.queue(this, e, t);
            C._queueHooks(this, e);
            if (e === "fx" && n[0] !== "inprogress") {
              C.dequeue(this, e);
            }
          });
        }
      },
      dequeue: function (e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n;
        var r = 1;
        var o = C.Deferred();
        var i = this;
        var a = this.length;
        var s = function () {
          if (! --r) {
            o.resolveWith(i, [i]);
          }
        };
        if (typeof e != "string") {
          t = e;
          e = undefined;
        }
        e = e || "fx";
        while (a--) {
          if ((n = oe.get(i[a], e + "queueHooks")) && n.empty) {
            r++;
            n.empty.add(s);
          }
        }
        s();
        return o.promise(t);
      }
    });
    var ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var le = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i");
    var de = ["Top", "Right", "Bottom", "Left"];
    var pe = m.documentElement;
    var fe = function (e) {
      return C.contains(e.ownerDocument, e);
    };
    var he = {
      composed: true
    };
    if (pe.getRootNode) {
      fe = function (e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(he) === e.ownerDocument;
      };
    }
    var ge = function (e, t) {
      return (e = t || e).style.display === "none" || e.style.display === "" && fe(e) && C.css(e, "display") === "none";
    };
    function me(e, t, n, r) {
      var o;
      var i;
      var a = 20;
      var s = r ? function () {
        return r.cur();
      } : function () {
        return C.css(e, t, "");
      };
      var c = s();
      var u = n && n[3] || (C.cssNumber[t] ? "" : "px");
      var l = e.nodeType && (C.cssNumber[t] || u !== "px" && +c) && le.exec(C.css(e, t));
      if (l && l[3] !== u) {
        c /= 2;
        u = u || l[3];
        l = +c || 1;
        while (a--) {
          C.style(e, t, l + u);
          if ((1 - i) * (1 - (i = s() / c || 0.5)) <= 0) {
            a = 0;
          }
          l /= i;
        }
        l *= 2;
        C.style(e, t, l + u);
        n = n || [];
      }
      if (n) {
        l = +l || +c || 0;
        o = n[1] ? l + (n[1] + 1) * n[2] : +n[2];
        if (r) {
          r.unit = u;
          r.start = l;
          r.end = o;
        }
      }
      return o;
    }
    var ye = {};
    function ve(e) {
      var t;
      var n = e.ownerDocument;
      var r = e.nodeName;
      var o = ye[r];
      return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), ye[r] = o, o);
    }
    function we(e, t) {
      var n;
      var r;
      var o = [];
      for (var i = 0, a = e.length; i < a; i++) {
        if ((r = e[i]).style) {
          n = r.style.display;
          if (t) {
            if (n === "none") {
              o[i] = oe.get(r, "display") || null;
              if (!o[i]) {
                r.style.display = "";
              }
            }
            if (r.style.display === "" && ge(r)) {
              o[i] = ve(r);
            }
          } else if (n !== "none") {
            o[i] = "none";
            oe.set(r, "display", n);
          }
        }
      }
      for (i = 0; i < a; i++) {
        if (o[i] != null) {
          e[i].style.display = o[i];
        }
      }
      return e;
    }
    C.fn.extend({
      show: function () {
        return we(this, true);
      },
      hide: function () {
        return we(this);
      },
      toggle: function (e) {
        if (typeof e == "boolean") {
          if (e) {
            return this.show();
          } else {
            return this.hide();
          }
        } else {
          return this.each(function () {
            if (ge(this)) {
              C(this).show();
            } else {
              C(this).hide();
            }
          });
        }
      }
    });
    var xe;
    var be;
    var Ce = /^(?:checkbox|radio)$/i;
    var Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var Ee = /^$|^module$|\/(?:java|ecma)script/i;
    xe = m.createDocumentFragment().appendChild(m.createElement("div"));
    (be = m.createElement("input")).setAttribute("type", "radio");
    be.setAttribute("checked", "checked");
    be.setAttribute("name", "t");
    xe.appendChild(be);
    f.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked;
    xe.innerHTML = "<textarea>x</textarea>";
    f.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue;
    xe.innerHTML = "<option></option>";
    f.option = !!xe.lastChild;
    var Ie = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    function ke(e, t) {
      var n;
      n = e.getElementsByTagName !== undefined ? e.getElementsByTagName(t || "*") : e.querySelectorAll !== undefined ? e.querySelectorAll(t || "*") : [];
      if (t === undefined || t && E(e, t)) {
        return C.merge([e], n);
      } else {
        return n;
      }
    }
    function Se(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        oe.set(e[n], "globalEval", !t || oe.get(t[n], "globalEval"));
      }
    }
    Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead;
    Ie.th = Ie.td;
    if (!f.option) {
      Ie.optgroup = Ie.option = [1, "<select multiple='multiple'>", "</select>"];
    }
    var Ae = /<|&#?\w+;/;
    function De(e, t, n, r, o) {
      var i;
      var a;
      var s;
      var c;
      var u;
      var l;
      var d = t.createDocumentFragment();
      var p = [];
      for (var f = 0, h = e.length; f < h; f++) {
        if ((i = e[f]) || i === 0) {
          if (w(i) === "object") {
            C.merge(p, i.nodeType ? [i] : i);
          } else if (Ae.test(i)) {
            a = a || d.appendChild(t.createElement("div"));
            s = (Te.exec(i) || ["", ""])[1].toLowerCase();
            c = Ie[s] || Ie._default;
            a.innerHTML = c[1] + C.htmlPrefilter(i) + c[2];
            l = c[0];
            while (l--) {
              a = a.lastChild;
            }
            C.merge(p, a.childNodes);
            (a = d.firstChild).textContent = "";
          } else {
            p.push(t.createTextNode(i));
          }
        }
      }
      d.textContent = "";
      f = 0;
      while (i = p[f++]) {
        if (r && C.inArray(i, r) > -1) {
          if (o) {
            o.push(i);
          }
        } else {
          u = fe(i);
          a = ke(d.appendChild(i), "script");
          if (u) {
            Se(a);
          }
          if (n) {
            for (l = 0; i = a[l++];) {
              if (Ee.test(i.type || "")) {
                n.push(i);
              }
            }
          }
        }
      }
      return d;
    }
    var $e = /^([^.]*)(?:\.(.+)|)/;
    function Pe() {
      return true;
    }
    function je() {
      return false;
    }
    function Me(e, t, n, r, o, i) {
      var a;
      var s;
      if (typeof t == "object") {
        if (typeof n != "string") {
          r = r || n;
          n = undefined;
        }
        for (s in t) {
          Me(e, s, n, r, t[s], i);
        }
        return e;
      }
      if (r == null && o == null) {
        o = n;
        r = n = undefined;
      } else if (o == null) {
        if (typeof n == "string") {
          o = r;
          r = undefined;
        } else {
          o = r;
          r = n;
          n = undefined;
        }
      }
      if (o === false) {
        o = je;
      } else if (!o) {
        return e;
      }
      if (i === 1) {
        a = o;
        o = function (e) {
          C().off(e);
          return a.apply(this, arguments);
        };
        o.guid = a.guid ||= C.guid++;
      }
      return e.each(function () {
        C.event.add(this, t, o, r, n);
      });
    }
    function Re(e, t, n) {
      if (n) {
        oe.set(e, t, false);
        C.event.add(e, t, {
          namespace: false,
          handler: function (e) {
            var n;
            var r = oe.get(this, t);
            if (e.isTrigger & 1 && this[t]) {
              if (r) {
                if ((C.event.special[t] || {}).delegateType) {
                  e.stopPropagation();
                }
              } else {
                r = o.call(arguments);
                oe.set(this, t, r);
                this[t]();
                n = oe.get(this, t);
                oe.set(this, t, false);
                if (r !== n) {
                  e.stopImmediatePropagation();
                  e.preventDefault();
                  return n;
                }
              }
            } else if (r) {
              oe.set(this, t, C.event.trigger(r[0], r.slice(1), this));
              e.stopPropagation();
              e.isImmediatePropagationStopped = Pe;
            }
          }
        });
      } else if (oe.get(e, t) === undefined) {
        C.event.add(e, t, Pe);
      }
    }
    C.event = {
      global: {},
      add: function (e, t, n, r, o) {
        var i;
        var a;
        var s;
        var c;
        var u;
        var l;
        var d;
        var p;
        var f;
        var h;
        var g;
        var m = oe.get(e);
        if (ne(e)) {
          if (n.handler) {
            n = (i = n).handler;
            o = i.selector;
          }
          if (o) {
            C.find.matchesSelector(pe, o);
          }
          n.guid ||= C.guid++;
          if (!(c = m.events)) {
            c = m.events = Object.create(null);
          }
          if (!(a = m.handle)) {
            a = m.handle = function (t) {
              if (C !== undefined && C.event.triggered !== t.type) {
                return C.event.dispatch.apply(e, arguments);
              } else {
                return undefined;
              }
            };
          }
          u = (t = (t || "").match(U) || [""]).length;
          while (u--) {
            f = g = (s = $e.exec(t[u]) || [])[1];
            h = (s[2] || "").split(".").sort();
            if (f) {
              d = C.event.special[f] || {};
              f = (o ? d.delegateType : d.bindType) || f;
              d = C.event.special[f] || {};
              l = C.extend({
                type: f,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && C.expr.match.needsContext.test(o),
                namespace: h.join(".")
              }, i);
              if (!(p = c[f])) {
                (p = c[f] = []).delegateCount = 0;
                if (!d.setup || d.setup.call(e, r, h, a) === false) {
                  if (e.addEventListener) {
                    e.addEventListener(f, a);
                  }
                }
              }
              if (d.add) {
                d.add.call(e, l);
                l.handler.guid ||= n.guid;
              }
              if (o) {
                p.splice(p.delegateCount++, 0, l);
              } else {
                p.push(l);
              }
              C.event.global[f] = true;
            }
          }
        }
      },
      remove: function (e, t, n, r, o) {
        var i;
        var a;
        var s;
        var c;
        var u;
        var l;
        var d;
        var p;
        var f;
        var h;
        var g;
        var m = oe.hasData(e) && oe.get(e);
        if (m && (c = m.events)) {
          for (u = (t = (t || "").match(U) || [""]).length; u--;) {
            f = g = (s = $e.exec(t[u]) || [])[1];
            h = (s[2] || "").split(".").sort();
            if (f) {
              d = C.event.special[f] || {};
              p = c[f = (r ? d.delegateType : d.bindType) || f] || [];
              s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
              a = i = p.length;
              while (i--) {
                l = p[i];
                if ((!!o || g === l.origType) && (!n || n.guid === l.guid) && (!s || !!s.test(l.namespace)) && (!r || r === l.selector || r === "**" && !!l.selector)) {
                  p.splice(i, 1);
                  if (l.selector) {
                    p.delegateCount--;
                  }
                  if (d.remove) {
                    d.remove.call(e, l);
                  }
                }
              }
              if (a && !p.length) {
                if (!d.teardown || d.teardown.call(e, h, m.handle) === false) {
                  C.removeEvent(e, f, m.handle);
                }
                delete c[f];
              }
            } else {
              for (f in c) {
                C.event.remove(e, f + t[u], n, r, true);
              }
            }
          }
          if (C.isEmptyObject(c)) {
            oe.remove(e, "handle events");
          }
        }
      },
      dispatch: function (e) {
        var t;
        var n;
        var r;
        var o;
        var i;
        var a;
        var s = new Array(arguments.length);
        var c = C.event.fix(e);
        var u = (oe.get(this, "events") || Object.create(null))[c.type] || [];
        var l = C.event.special[c.type] || {};
        s[0] = c;
        t = 1;
        for (; t < arguments.length; t++) {
          s[t] = arguments[t];
        }
        c.delegateTarget = this;
        if (!l.preDispatch || l.preDispatch.call(this, c) !== false) {
          a = C.event.handlers.call(this, c, u);
          t = 0;
          while ((o = a[t++]) && !c.isPropagationStopped()) {
            c.currentTarget = o.elem;
            n = 0;
            while ((i = o.handlers[n++]) && !c.isImmediatePropagationStopped()) {
              if (!c.rnamespace || i.namespace === false || !!c.rnamespace.test(i.namespace)) {
                c.handleObj = i;
                c.data = i.data;
                if ((r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) !== undefined && (c.result = r) === false) {
                  c.preventDefault();
                  c.stopPropagation();
                }
              }
            }
          }
          if (l.postDispatch) {
            l.postDispatch.call(this, c);
          }
          return c.result;
        }
      },
      handlers: function (e, t) {
        var n;
        var r;
        var o;
        var i;
        var a;
        var s = [];
        var c = t.delegateCount;
        var u = e.target;
        if (c && u.nodeType && (e.type !== "click" || !(e.button >= 1))) {
          for (; u !== this; u = u.parentNode || this) {
            if (u.nodeType === 1 && (e.type !== "click" || u.disabled !== true)) {
              i = [];
              a = {};
              n = 0;
              for (; n < c; n++) {
                if (a[o = (r = t[n]).selector + " "] === undefined) {
                  a[o] = r.needsContext ? C(o, this).index(u) > -1 : C.find(o, this, null, [u]).length;
                }
                if (a[o]) {
                  i.push(r);
                }
              }
              if (i.length) {
                s.push({
                  elem: u,
                  handlers: i
                });
              }
            }
          }
        }
        u = this;
        if (c < t.length) {
          s.push({
            elem: u,
            handlers: t.slice(c)
          });
        }
        return s;
      },
      addProp: function (e, t) {
        Object.defineProperty(C.Event.prototype, e, {
          enumerable: true,
          configurable: true,
          get: h(t) ? function () {
            if (this.originalEvent) {
              return t(this.originalEvent);
            }
          } : function () {
            if (this.originalEvent) {
              return this.originalEvent[e];
            }
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: true,
              configurable: true,
              writable: true,
              value: t
            });
          }
        });
      },
      fix: function (e) {
        if (e[C.expando]) {
          return e;
        } else {
          return new C.Event(e);
        }
      },
      special: {
        load: {
          noBubble: true
        },
        click: {
          setup: function (e) {
            var t = this || e;
            if (Ce.test(t.type) && t.click && E(t, "input")) {
              Re(t, "click", true);
            }
            return false;
          },
          trigger: function (e) {
            var t = this || e;
            if (Ce.test(t.type) && t.click && E(t, "input")) {
              Re(t, "click");
            }
            return true;
          },
          _default: function (e) {
            var t = e.target;
            return Ce.test(t.type) && t.click && E(t, "input") && oe.get(t, "click") || E(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function (e) {
            if (e.result !== undefined && e.originalEvent) {
              e.originalEvent.returnValue = e.result;
            }
          }
        }
      }
    };
    C.removeEvent = function (e, t, n) {
      if (e.removeEventListener) {
        e.removeEventListener(t, n);
      }
    };
    C.Event = function (e, t) {
      if (!(this instanceof C.Event)) {
        return new C.Event(e, t);
      }
      if (e && e.type) {
        this.originalEvent = e;
        this.type = e.type;
        this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? Pe : je;
        this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
        this.currentTarget = e.currentTarget;
        this.relatedTarget = e.relatedTarget;
      } else {
        this.type = e;
      }
      if (t) {
        C.extend(this, t);
      }
      this.timeStamp = e && e.timeStamp || Date.now();
      this[C.expando] = true;
    };
    C.Event.prototype = {
      constructor: C.Event,
      isDefaultPrevented: je,
      isPropagationStopped: je,
      isImmediatePropagationStopped: je,
      isSimulated: false,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = Pe;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = Pe;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Pe;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    C.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      char: true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true
    }, C.event.addProp);
    C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      function n(e) {
        if (m.documentMode) {
          var n = oe.get(this, "handle");
          var r = C.event.fix(e);
          r.type = e.type === "focusin" ? "focus" : "blur";
          r.isSimulated = true;
          n(e);
          if (r.target === r.currentTarget) {
            n(r);
          }
        } else {
          C.event.simulate(t, e.target, C.event.fix(e));
        }
      }
      C.event.special[e] = {
        setup: function () {
          var r;
          Re(this, e, true);
          if (!m.documentMode) {
            return false;
          }
          if (!(r = oe.get(this, t))) {
            this.addEventListener(t, n);
          }
          oe.set(this, t, (r || 0) + 1);
        },
        trigger: function () {
          Re(this, e);
          return true;
        },
        teardown: function () {
          var e;
          if (!m.documentMode) {
            return false;
          }
          if (e = oe.get(this, t) - 1) {
            oe.set(this, t, e);
          } else {
            this.removeEventListener(t, n);
            oe.remove(this, t);
          }
        },
        _default: function (t) {
          return oe.get(t.target, e);
        },
        delegateType: t
      };
      C.event.special[t] = {
        setup: function () {
          var r = this.ownerDocument || this.document || this;
          var o = m.documentMode ? this : r;
          var i = oe.get(o, t);
          if (!i) {
            if (m.documentMode) {
              this.addEventListener(t, n);
            } else {
              r.addEventListener(e, n, true);
            }
          }
          oe.set(o, t, (i || 0) + 1);
        },
        teardown: function () {
          var r = this.ownerDocument || this.document || this;
          var o = m.documentMode ? this : r;
          var i = oe.get(o, t) - 1;
          if (i) {
            oe.set(o, t, i);
          } else {
            if (m.documentMode) {
              this.removeEventListener(t, n);
            } else {
              r.removeEventListener(e, n, true);
            }
            oe.remove(o, t);
          }
        }
      };
    });
    C.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      C.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n;
          var r = e.relatedTarget;
          var o = e.handleObj;
          if (!r || r !== this && !C.contains(this, r)) {
            e.type = o.origType;
            n = o.handler.apply(this, arguments);
            e.type = t;
          }
          return n;
        }
      };
    });
    C.fn.extend({
      on: function (e, t, n, r) {
        return Me(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Me(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r;
        var o;
        if (e && e.preventDefault && e.handleObj) {
          r = e.handleObj;
          C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
          return this;
        }
        if (typeof e == "object") {
          for (o in e) {
            this.off(o, t, e[o]);
          }
          return this;
        }
        if (t === false || typeof t == "function") {
          n = t;
          t = undefined;
        }
        if (n === false) {
          n = je;
        }
        return this.each(function () {
          C.event.remove(this, e, n, t);
        });
      }
    });
    var Oe = /<script|<style|<link/i;
    var Ne = /checked\s*(?:[^=]|=\s*.checked.)/i;
    var Le = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function _e(e, t) {
      return E(e, "table") && E(t.nodeType !== 11 ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
    }
    function qe(e) {
      e.type = (e.getAttribute("type") !== null) + "/" + e.type;
      return e;
    }
    function Be(e) {
      if ((e.type || "").slice(0, 5) === "true/") {
        e.type = e.type.slice(5);
      } else {
        e.removeAttribute("type");
      }
      return e;
    }
    function Fe(e, t) {
      var n;
      var r;
      var o;
      var i;
      var a;
      var s;
      if (t.nodeType === 1) {
        if (oe.hasData(e) && (s = oe.get(e).events)) {
          oe.remove(t, "handle events");
          for (o in s) {
            n = 0;
            r = s[o].length;
            for (; n < r; n++) {
              C.event.add(t, o, s[o][n]);
            }
          }
        }
        if (ie.hasData(e)) {
          i = ie.access(e);
          a = C.extend({}, i);
          ie.set(t, a);
        }
      }
    }
    function He(e, t) {
      var n = t.nodeName.toLowerCase();
      if (n === "input" && Ce.test(e.type)) {
        t.checked = e.checked;
      } else if (n === "input" || n === "textarea") {
        t.defaultValue = e.defaultValue;
      }
    }
    function We(e, t, n, r) {
      t = i(t);
      var o;
      var a;
      var s;
      var c;
      var u;
      var l;
      var d = 0;
      var p = e.length;
      var g = p - 1;
      var m = t[0];
      var y = h(m);
      if (y || p > 1 && typeof m == "string" && !f.checkClone && Ne.test(m)) {
        return e.each(function (o) {
          var i = e.eq(o);
          if (y) {
            t[0] = m.call(this, o, i.html());
          }
          We(i, t, n, r);
        });
      }
      if (p && (a = (o = De(t, e[0].ownerDocument, false, e, r)).firstChild, o.childNodes.length === 1 && (o = a), a || r)) {
        for (c = (s = C.map(ke(o, "script"), qe)).length; d < p; d++) {
          u = o;
          if (d !== g) {
            u = C.clone(u, true, true);
            if (c) {
              C.merge(s, ke(u, "script"));
            }
          }
          n.call(e[d], u, d);
        }
        if (c) {
          l = s[s.length - 1].ownerDocument;
          C.map(s, Be);
          d = 0;
          for (; d < c; d++) {
            u = s[d];
            if (Ee.test(u.type || "") && !oe.access(u, "globalEval") && C.contains(l, u)) {
              if (u.src && (u.type || "").toLowerCase() !== "module") {
                if (C._evalUrl && !u.noModule) {
                  C._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                  }, l);
                }
              } else {
                v(u.textContent.replace(Le, ""), u, l);
              }
            }
          }
        }
      }
      return e;
    }
    function Ue(e, t, n) {
      for (var r, o = t ? C.filter(t, e) : e, i = 0; (r = o[i]) != null; i++) {
        if (!n && r.nodeType === 1) {
          C.cleanData(ke(r));
        }
        if (r.parentNode) {
          if (n && fe(r)) {
            Se(ke(r, "script"));
          }
          r.parentNode.removeChild(r);
        }
      }
      return e;
    }
    C.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r;
        var o;
        var i;
        var a;
        var s = e.cloneNode(true);
        var c = fe(e);
        if (!f.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !C.isXMLDoc(e)) {
          a = ke(s);
          r = 0;
          o = (i = ke(e)).length;
          for (; r < o; r++) {
            He(i[r], a[r]);
          }
        }
        if (t) {
          if (n) {
            i = i || ke(e);
            a = a || ke(s);
            r = 0;
            o = i.length;
            for (; r < o; r++) {
              Fe(i[r], a[r]);
            }
          } else {
            Fe(e, s);
          }
        }
        if ((a = ke(s, "script")).length > 0) {
          Se(a, !c && ke(e, "script"));
        }
        return s;
      },
      cleanData: function (e) {
        var t;
        for (var n, r, o = C.event.special, i = 0; (n = e[i]) !== undefined; i++) {
          if (ne(n)) {
            if (t = n[oe.expando]) {
              if (t.events) {
                for (r in t.events) {
                  if (o[r]) {
                    C.event.remove(n, r);
                  } else {
                    C.removeEvent(n, r, t.handle);
                  }
                }
              }
              n[oe.expando] = undefined;
            }
            n[ie.expando] &&= undefined;
          }
        }
      }
    });
    C.fn.extend({
      detach: function (e) {
        return Ue(this, e, true);
      },
      remove: function (e) {
        return Ue(this, e);
      },
      text: function (e) {
        return J(this, function (e) {
          if (e === undefined) {
            return C.text(this);
          } else {
            return this.empty().each(function () {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = e;
              }
            });
          }
        }, null, e, arguments.length);
      },
      append: function () {
        return We(this, arguments, function (e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            _e(this, e).appendChild(e);
          }
        });
      },
      prepend: function () {
        return We(this, arguments, function (e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = _e(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return We(this, arguments, function (e) {
          if (this.parentNode) {
            this.parentNode.insertBefore(e, this);
          }
        });
      },
      after: function () {
        return We(this, arguments, function (e) {
          if (this.parentNode) {
            this.parentNode.insertBefore(e, this.nextSibling);
          }
        });
      },
      empty: function () {
        for (var e, t = 0; (e = this[t]) != null; t++) {
          if (e.nodeType === 1) {
            C.cleanData(ke(e, false));
            e.textContent = "";
          }
        }
        return this;
      },
      clone: function (e, t) {
        e = e != null && e;
        t = t == null ? e : t;
        return this.map(function () {
          return C.clone(this, e, t);
        });
      },
      html: function (e) {
        return J(this, function (e) {
          var t = this[0] || {};
          var n = 0;
          var r = this.length;
          if (e === undefined && t.nodeType === 1) {
            return t.innerHTML;
          }
          if (typeof e == "string" && !Oe.test(e) && !Ie[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = C.htmlPrefilter(e);
            try {
              for (; n < r; n++) {
                if ((t = this[n] || {}).nodeType === 1) {
                  C.cleanData(ke(t, false));
                  t.innerHTML = e;
                }
              }
              t = 0;
            } catch (o) {}
          }
          if (t) {
            this.empty().append(e);
          }
        }, null, e, arguments.length);
      },
      replaceWith: function () {
        var e = [];
        return We(this, arguments, function (t) {
          var n = this.parentNode;
          if (C.inArray(this, e) < 0) {
            C.cleanData(ke(this));
            if (n) {
              n.replaceChild(t, this);
            }
          }
        }, e);
      }
    });
    C.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      C.fn[e] = function (e) {
        var n;
        var r = [];
        var o = C(e);
        for (var i = o.length - 1, s = 0; s <= i; s++) {
          n = s === i ? this : this.clone(true);
          C(o[s])[t](n);
          a.apply(r, n.get());
        }
        return this.pushStack(r);
      };
    });
    var Ve = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i");
    var Ge = /^--/;
    var ze = function (t) {
      var n = t.ownerDocument.defaultView;
      if (!n || !n.opener) {
        n = e;
      }
      return n.getComputedStyle(t);
    };
    var Xe = function (e, t, n) {
      var r;
      var o;
      var i = {};
      for (o in t) {
        i[o] = e.style[o];
        e.style[o] = t[o];
      }
      r = n.call(e);
      for (o in t) {
        e.style[o] = i[o];
      }
      return r;
    };
    var Qe = new RegExp(de.join("|"), "i");
    function Ye(e, t, n) {
      var r;
      var o;
      var i;
      var a;
      var s = Ge.test(t);
      var c = e.style;
      if (n = n || ze(e)) {
        a = n.getPropertyValue(t) || n[t];
        if (s && a) {
          a = a.replace(D, "$1") || undefined;
        }
        if (a === "" && !fe(e)) {
          a = C.style(e, t);
        }
        if (!f.pixelBoxStyles() && Ve.test(a) && Qe.test(t)) {
          r = c.width;
          o = c.minWidth;
          i = c.maxWidth;
          c.minWidth = c.maxWidth = c.width = a;
          a = n.width;
          c.width = r;
          c.minWidth = o;
          c.maxWidth = i;
        }
      }
      if (a !== undefined) {
        return a + "";
      } else {
        return a;
      }
    }
    function Je(e, t) {
      return {
        get: function () {
          if (!e()) {
            return (this.get = t).apply(this, arguments);
          }
          delete this.get;
        }
      };
    }
    (function () {
      function t() {
        if (l) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          pe.appendChild(u).appendChild(l);
          var t = e.getComputedStyle(l);
          r = t.top !== "1%";
          c = n(t.marginLeft) === 12;
          l.style.right = "60%";
          a = n(t.right) === 36;
          o = n(t.width) === 36;
          l.style.position = "absolute";
          i = n(l.offsetWidth / 3) === 12;
          pe.removeChild(u);
          l = null;
        }
      }
      function n(e) {
        return Math.round(parseFloat(e));
      }
      var r;
      var o;
      var i;
      var a;
      var s;
      var c;
      var u = m.createElement("div");
      var l = m.createElement("div");
      if (l.style) {
        l.style.backgroundClip = "content-box";
        l.cloneNode(true).style.backgroundClip = "";
        f.clearCloneStyle = l.style.backgroundClip === "content-box";
        C.extend(f, {
          boxSizingReliable: function () {
            t();
            return o;
          },
          pixelBoxStyles: function () {
            t();
            return a;
          },
          pixelPosition: function () {
            t();
            return r;
          },
          reliableMarginLeft: function () {
            t();
            return c;
          },
          scrollboxSize: function () {
            t();
            return i;
          },
          reliableTrDimensions: function () {
            var t;
            var n;
            var r;
            var o;
            if (s == null) {
              t = m.createElement("table");
              n = m.createElement("tr");
              r = m.createElement("div");
              t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              n.style.cssText = "box-sizing:content-box;border:1px solid";
              n.style.height = "1px";
              r.style.height = "9px";
              r.style.display = "block";
              pe.appendChild(t).appendChild(n).appendChild(r);
              o = e.getComputedStyle(n);
              s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight;
              pe.removeChild(t);
            }
            return s;
          }
        });
      }
    })();
    var Ke = ["Webkit", "Moz", "ms"];
    var Ze = m.createElement("div").style;
    var et = {};
    function tt(e) {
      var t = C.cssProps[e] || et[e];
      return t || (e in Ze ? e : et[e] = function (e) {
        var t = e[0].toUpperCase() + e.slice(1);
        for (var n = Ke.length; n--;) {
          if ((e = Ke[n] + t) in Ze) {
            return e;
          }
        }
      }(e) || e);
    }
    var nt = /^(none|table(?!-c[ea]).+)/;
    var rt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    };
    var ot = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function it(e, t, n) {
      var r = le.exec(t);
      if (r) {
        return Math.max(0, r[2] - (n || 0)) + (r[3] || "px");
      } else {
        return t;
      }
    }
    function at(e, t, n, r, o, i) {
      var a = t === "width" ? 1 : 0;
      var s = 0;
      var c = 0;
      var u = 0;
      if (n === (r ? "border" : "content")) {
        return 0;
      }
      for (; a < 4; a += 2) {
        if (n === "margin") {
          u += C.css(e, n + de[a], true, o);
        }
        if (r) {
          if (n === "content") {
            c -= C.css(e, "padding" + de[a], true, o);
          }
          if (n !== "margin") {
            c -= C.css(e, "border" + de[a] + "Width", true, o);
          }
        } else {
          c += C.css(e, "padding" + de[a], true, o);
          if (n !== "padding") {
            c += C.css(e, "border" + de[a] + "Width", true, o);
          } else {
            s += C.css(e, "border" + de[a] + "Width", true, o);
          }
        }
      }
      if (!r && i >= 0) {
        c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - s - 0.5)) || 0;
      }
      return c + u;
    }
    function st(e, t, n) {
      var r = ze(e);
      var o = (!f.boxSizingReliable() || n) && C.css(e, "boxSizing", false, r) === "border-box";
      var i = o;
      var a = Ye(e, t, r);
      var s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Ve.test(a)) {
        if (!n) {
          return a;
        }
        a = "auto";
      }
      if ((!f.boxSizingReliable() && o || !f.reliableTrDimensions() && E(e, "tr") || a === "auto" || !parseFloat(a) && C.css(e, "display", false, r) === "inline") && e.getClientRects().length) {
        o = C.css(e, "boxSizing", false, r) === "border-box";
        if (i = s in e) {
          a = e[s];
        }
      }
      return (a = parseFloat(a) || 0) + at(e, t, n || (o ? "border" : "content"), i, r, a) + "px";
    }
    function ct(e, t, n, r, o) {
      return new ct.prototype.init(e, t, n, r, o);
    }
    C.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Ye(e, "opacity");
              if (n === "") {
                return "1";
              } else {
                return n;
              }
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageSlice: true,
        columnCount: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        gridArea: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnStart: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowStart: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        scale: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeMiterlimit: true,
        strokeOpacity: true
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
          var o;
          var i;
          var a;
          var s = te(t);
          var c = Ge.test(t);
          var u = e.style;
          if (!c) {
            t = tt(s);
          }
          a = C.cssHooks[t] || C.cssHooks[s];
          if (n === undefined) {
            if (a && "get" in a && (o = a.get(e, false, r)) !== undefined) {
              return o;
            } else {
              return u[t];
            }
          }
          if ((i = typeof n) == "string" && (o = le.exec(n)) && o[1]) {
            n = me(e, t, o);
            i = "number";
          }
          if (n != null && n == n) {
            if (i === "number" && !c) {
              n += o && o[3] || (C.cssNumber[s] ? "" : "px");
            }
            if (!f.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
              u[t] = "inherit";
            }
            if (!a || !("set" in a) || (n = a.set(e, n, r)) !== undefined) {
              if (c) {
                u.setProperty(t, n);
              } else {
                u[t] = n;
              }
            }
          }
        }
      },
      css: function (e, t, n, r) {
        var o;
        var i;
        var a;
        var s = te(t);
        if (!Ge.test(t)) {
          t = tt(s);
        }
        if ((a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a) {
          o = a.get(e, true, n);
        }
        if (o === undefined) {
          o = Ye(e, t, r);
        }
        if (o === "normal" && t in ot) {
          o = ot[t];
        }
        if (n === "" || n) {
          i = parseFloat(o);
          if (n === true || isFinite(i)) {
            return i || 0;
          } else {
            return o;
          }
        } else {
          return o;
        }
      }
    });
    C.each(["height", "width"], function (e, t) {
      C.cssHooks[t] = {
        get: function (e, n, r) {
          if (n) {
            if (!nt.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width) {
              return st(e, t, r);
            } else {
              return Xe(e, rt, function () {
                return st(e, t, r);
              });
            }
          }
        },
        set: function (e, n, r) {
          var o;
          var i = ze(e);
          var a = !f.scrollboxSize() && i.position === "absolute";
          var s = (a || r) && C.css(e, "boxSizing", false, i) === "border-box";
          var c = r ? at(e, t, r, s, i) : 0;
          if (s && a) {
            c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - at(e, t, "border", false, i) - 0.5);
          }
          if (c && (o = le.exec(n)) && (o[3] || "px") !== "px") {
            e.style[t] = n;
            n = C.css(e, t);
          }
          return it(0, n, c);
        }
      };
    });
    C.cssHooks.marginLeft = Je(f.reliableMarginLeft, function (e, t) {
      if (t) {
        return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }
    });
    C.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      C.cssHooks[e + t] = {
        expand: function (n) {
          for (var r = 0, o = {}, i = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++) {
            o[e + de[r] + t] = i[r] || i[r - 2] || i[0];
          }
          return o;
        }
      };
      if (e !== "margin") {
        C.cssHooks[e + t].set = it;
      }
    });
    C.fn.extend({
      css: function (e, t) {
        return J(this, function (e, t, n) {
          var r;
          var o;
          var i = {};
          var a = 0;
          if (Array.isArray(t)) {
            r = ze(e);
            o = t.length;
            for (; a < o; a++) {
              i[t[a]] = C.css(e, t[a], false, r);
            }
            return i;
          }
          if (n !== undefined) {
            return C.style(e, t, n);
          } else {
            return C.css(e, t);
          }
        }, e, t, arguments.length > 1);
      }
    });
    C.Tween = ct;
    ct.prototype = {
      constructor: ct,
      init: function (e, t, n, r, o, i) {
        this.elem = e;
        this.prop = n;
        this.easing = o || C.easing._default;
        this.options = t;
        this.start = this.now = this.cur();
        this.end = r;
        this.unit = i || (C.cssNumber[n] ? "" : "px");
      },
      cur: function () {
        var e = ct.propHooks[this.prop];
        if (e && e.get) {
          return e.get(this);
        } else {
          return ct.propHooks._default.get(this);
        }
      },
      run: function (e) {
        var t;
        var n = ct.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
        } else {
          this.pos = t = e;
        }
        this.now = (this.end - this.start) * t + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (n && n.set) {
          n.set(this);
        } else {
          ct.propHooks._default.set(this);
        }
        return this;
      }
    };
    ct.prototype.init.prototype = ct.prototype;
    ct.propHooks = {
      _default: {
        get: function (e) {
          var t;
          if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
            return e.elem[e.prop];
          } else if ((t = C.css(e.elem, e.prop, "")) && t !== "auto") {
            return t;
          } else {
            return 0;
          }
        },
        set: function (e) {
          if (C.fx.step[e.prop]) {
            C.fx.step[e.prop](e);
          } else if (e.elem.nodeType !== 1 || !C.cssHooks[e.prop] && e.elem.style[tt(e.prop)] == null) {
            e.elem[e.prop] = e.now;
          } else {
            C.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }
    };
    ct.propHooks.scrollTop = ct.propHooks.scrollLeft = {
      set: function (e) {
        if (e.elem.nodeType && e.elem.parentNode) {
          e.elem[e.prop] = e.now;
        }
      }
    };
    C.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    };
    C.fx = ct.prototype.init;
    C.fx.step = {};
    var ut;
    var lt;
    var dt = /^(?:toggle|show|hide)$/;
    var pt = /queueHooks$/;
    function ft() {
      if (lt) {
        if (m.hidden === false && e.requestAnimationFrame) {
          e.requestAnimationFrame(ft);
        } else {
          e.setTimeout(ft, C.fx.interval);
        }
        C.fx.tick();
      }
    }
    function ht() {
      e.setTimeout(function () {
        ut = undefined;
      });
      return ut = Date.now();
    }
    function gt(e, t) {
      var n;
      var r = 0;
      var o = {
        height: e
      };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        o["margin" + (n = de[r])] = o["padding" + n] = e;
      }
      if (t) {
        o.opacity = o.width = e;
      }
      return o;
    }
    function mt(e, t, n) {
      var r;
      var o = (yt.tweeners[t] || []).concat(yt.tweeners["*"]);
      for (var i = 0, a = o.length; i < a; i++) {
        if (r = o[i].call(n, t, e)) {
          return r;
        }
      }
    }
    function yt(e, t, n) {
      var r;
      var o;
      var i = 0;
      var a = yt.prefilters.length;
      var s = C.Deferred().always(function () {
        delete c.elem;
      });
      var c = function () {
        if (o) {
          return false;
        }
        var t = ut || ht();
        var n = Math.max(0, u.startTime + u.duration - t);
        var r = 1 - (n / u.duration || 0);
        for (var i = 0, a = u.tweens.length; i < a; i++) {
          u.tweens[i].run(r);
        }
        s.notifyWith(e, [u, r, n]);
        if (r < 1 && a) {
          return n;
        } else {
          if (!a) {
            s.notifyWith(e, [u, 1, 0]);
          }
          s.resolveWith(e, [u]);
          return false;
        }
      };
      var u = s.promise({
        elem: e,
        props: C.extend({}, t),
        opts: C.extend(true, {
          specialEasing: {},
          easing: C.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ut || ht(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          u.tweens.push(r);
          return r;
        },
        stop: function (t) {
          var n = 0;
          var r = t ? u.tweens.length : 0;
          if (o) {
            return this;
          }
          for (o = true; n < r; n++) {
            u.tweens[n].run(1);
          }
          if (t) {
            s.notifyWith(e, [u, 1, 0]);
            s.resolveWith(e, [u, t]);
          } else {
            s.rejectWith(e, [u, t]);
          }
          return this;
        }
      });
      var l = u.props;
      for (function (e, t) {
        var n;
        var r;
        var o;
        var i;
        var a;
        for (n in e) {
          o = t[r = te(n)];
          i = e[n];
          if (Array.isArray(i)) {
            o = i[1];
            i = e[n] = i[0];
          }
          if (n !== r) {
            e[r] = i;
            delete e[n];
          }
          if ((a = C.cssHooks[r]) && "expand" in a) {
            i = a.expand(i);
            delete e[r];
            for (n in i) {
              if (!(n in e)) {
                e[n] = i[n];
                t[n] = o;
              }
            }
          } else {
            t[r] = o;
          }
        }
      }(l, u.opts.specialEasing); i < a; i++) {
        if (r = yt.prefilters[i].call(u, e, l, u.opts)) {
          if (h(r.stop)) {
            C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r);
          }
          return r;
        }
      }
      C.map(l, mt, u);
      if (h(u.opts.start)) {
        u.opts.start.call(e, u);
      }
      u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
      C.fx.timer(C.extend(c, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      }));
      return u;
    }
    C.Animation = C.extend(yt, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          me(n.elem, e, le.exec(t), n);
          return n;
        }]
      },
      tweener: function (e, t) {
        if (h(e)) {
          t = e;
          e = ["*"];
        } else {
          e = e.match(U);
        }
        var n;
        for (var r = 0, o = e.length; r < o; r++) {
          n = e[r];
          yt.tweeners[n] = yt.tweeners[n] || [];
          yt.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var r;
        var o;
        var i;
        var a;
        var s;
        var c;
        var u;
        var l;
        var d = "width" in t || "height" in t;
        var p = this;
        var f = {};
        var h = e.style;
        var g = e.nodeType && ge(e);
        var m = oe.get(e, "fxshow");
        if (!n.queue) {
          if ((a = C._queueHooks(e, "fx")).unqueued == null) {
            a.unqueued = 0;
            s = a.empty.fire;
            a.empty.fire = function () {
              if (!a.unqueued) {
                s();
              }
            };
          }
          a.unqueued++;
          p.always(function () {
            p.always(function () {
              a.unqueued--;
              if (!C.queue(e, "fx").length) {
                a.empty.fire();
              }
            });
          });
        }
        for (r in t) {
          o = t[r];
          if (dt.test(o)) {
            delete t[r];
            i = i || o === "toggle";
            if (o === (g ? "hide" : "show")) {
              if (o !== "show" || !m || m[r] === undefined) {
                continue;
              }
              g = true;
            }
            f[r] = m && m[r] || C.style(e, r);
          }
        }
        if ((c = !C.isEmptyObject(t)) || !C.isEmptyObject(f)) {
          if (d && e.nodeType === 1) {
            n.overflow = [h.overflow, h.overflowX, h.overflowY];
            if ((u = m && m.display) == null) {
              u = oe.get(e, "display");
            }
            if ((l = C.css(e, "display")) === "none") {
              if (u) {
                l = u;
              } else {
                we([e], true);
                u = e.style.display || u;
                l = C.css(e, "display");
                we([e]);
              }
            }
            if ((l === "inline" || l === "inline-block" && u != null) && C.css(e, "float") === "none") {
              if (!c) {
                p.done(function () {
                  h.display = u;
                });
                if (u == null) {
                  l = h.display;
                  u = l === "none" ? "" : l;
                }
              }
              h.display = "inline-block";
            }
          }
          if (n.overflow) {
            h.overflow = "hidden";
            p.always(function () {
              h.overflow = n.overflow[0];
              h.overflowX = n.overflow[1];
              h.overflowY = n.overflow[2];
            });
          }
          c = false;
          for (r in f) {
            if (!c) {
              if (m) {
                if ("hidden" in m) {
                  g = m.hidden;
                }
              } else {
                m = oe.access(e, "fxshow", {
                  display: u
                });
              }
              if (i) {
                m.hidden = !g;
              }
              if (g) {
                we([e], true);
              }
              p.done(function () {
                if (!g) {
                  we([e]);
                }
                oe.remove(e, "fxshow");
                for (r in f) {
                  C.style(e, r, f[r]);
                }
              });
            }
            c = mt(g ? m[r] : 0, r, p);
            if (!(r in m)) {
              m[r] = c.start;
              if (g) {
                c.end = c.start;
                c.start = 0;
              }
            }
          }
        }
      }],
      prefilter: function (e, t) {
        if (t) {
          yt.prefilters.unshift(e);
        } else {
          yt.prefilters.push(e);
        }
      }
    });
    C.speed = function (e, t, n) {
      var r = e && typeof e == "object" ? C.extend({}, e) : {
        complete: n || !n && t || h(e) && e,
        duration: e,
        easing: n && t || t && !h(t) && t
      };
      if (C.fx.off) {
        r.duration = 0;
      } else if (typeof r.duration != "number") {
        if (r.duration in C.fx.speeds) {
          r.duration = C.fx.speeds[r.duration];
        } else {
          r.duration = C.fx.speeds._default;
        }
      }
      if (r.queue == null || r.queue === true) {
        r.queue = "fx";
      }
      r.old = r.complete;
      r.complete = function () {
        if (h(r.old)) {
          r.old.call(this);
        }
        if (r.queue) {
          C.dequeue(this, r.queue);
        }
      };
      return r;
    };
    C.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ge).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var o = C.isEmptyObject(e);
        var i = C.speed(t, n, r);
        var a = function () {
          var t = yt(this, C.extend({}, e), i);
          if (o || oe.get(this, "finish")) {
            t.stop(true);
          }
        };
        a.finish = a;
        if (o || i.queue === false) {
          return this.each(a);
        } else {
          return this.queue(i.queue, a);
        }
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop;
          t(n);
        };
        if (typeof e != "string") {
          n = t;
          t = e;
          e = undefined;
        }
        if (t) {
          this.queue(e || "fx", []);
        }
        return this.each(function () {
          var t = true;
          var o = e != null && e + "queueHooks";
          var i = C.timers;
          var a = oe.get(this);
          if (o) {
            if (a[o] && a[o].stop) {
              r(a[o]);
            }
          } else {
            for (o in a) {
              if (a[o] && a[o].stop && pt.test(o)) {
                r(a[o]);
              }
            }
          }
          for (o = i.length; o--;) {
            if (i[o].elem === this && (e == null || i[o].queue === e)) {
              i[o].anim.stop(n);
              t = false;
              i.splice(o, 1);
            }
          }
          if (!!t || !n) {
            C.dequeue(this, e);
          }
        });
      },
      finish: function (e) {
        if (e !== false) {
          e = e || "fx";
        }
        return this.each(function () {
          var t;
          var n = oe.get(this);
          var r = n[e + "queue"];
          var o = n[e + "queueHooks"];
          var i = C.timers;
          var a = r ? r.length : 0;
          n.finish = true;
          C.queue(this, e, []);
          if (o && o.stop) {
            o.stop.call(this, true);
          }
          t = i.length;
          while (t--) {
            if (i[t].elem === this && i[t].queue === e) {
              i[t].anim.stop(true);
              i.splice(t, 1);
            }
          }
          for (t = 0; t < a; t++) {
            if (r[t] && r[t].finish) {
              r[t].finish.call(this);
            }
          }
          delete n.finish;
        });
      }
    });
    C.each(["toggle", "show", "hide"], function (e, t) {
      var n = C.fn[t];
      C.fn[t] = function (e, r, o) {
        if (e == null || typeof e == "boolean") {
          return n.apply(this, arguments);
        } else {
          return this.animate(gt(t, true), e, r, o);
        }
      };
    });
    C.each({
      slideDown: gt("show"),
      slideUp: gt("hide"),
      slideToggle: gt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      C.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    });
    C.timers = [];
    C.fx.tick = function () {
      var e;
      var t = 0;
      var n = C.timers;
      for (ut = Date.now(); t < n.length; t++) {
        if (!(e = n[t])() && n[t] === e) {
          n.splice(t--, 1);
        }
      }
      if (!n.length) {
        C.fx.stop();
      }
      ut = undefined;
    };
    C.fx.timer = function (e) {
      C.timers.push(e);
      C.fx.start();
    };
    C.fx.interval = 13;
    C.fx.start = function () {
      if (!lt) {
        lt = true;
        ft();
      }
    };
    C.fx.stop = function () {
      lt = null;
    };
    C.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    };
    C.fn.delay = function (t, n) {
      t = C.fx && C.fx.speeds[t] || t;
      n = n || "fx";
      return this.queue(n, function (n, r) {
        var o = e.setTimeout(n, t);
        r.stop = function () {
          e.clearTimeout(o);
        };
      });
    };
    (function () {
      var e = m.createElement("input");
      var t = m.createElement("select").appendChild(m.createElement("option"));
      e.type = "checkbox";
      f.checkOn = e.value !== "";
      f.optSelected = t.selected;
      (e = m.createElement("input")).value = "t";
      e.type = "radio";
      f.radioValue = e.value === "t";
    })();
    var vt;
    var wt = C.expr.attrHandle;
    C.fn.extend({
      attr: function (e, t) {
        return J(this, C.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          C.removeAttr(this, e);
        });
      }
    });
    C.extend({
      attr: function (e, t, n) {
        var r;
        var o;
        var i = e.nodeType;
        if (i !== 3 && i !== 8 && i !== 2) {
          if (e.getAttribute === undefined) {
            return C.prop(e, t, n);
          } else {
            if (i !== 1 || !C.isXMLDoc(e)) {
              o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? vt : undefined);
            }
            if (n !== undefined) {
              if (n === null) {
                C.removeAttr(e, t);
                return;
              } else if (o && "set" in o && (r = o.set(e, n, t)) !== undefined) {
                return r;
              } else {
                e.setAttribute(t, n + "");
                return n;
              }
            } else if (o && "get" in o && (r = o.get(e, t)) !== null) {
              return r;
            } else if ((r = C.find.attr(e, t)) == null) {
              return undefined;
            } else {
              return r;
            }
          }
        }
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!f.radioValue && t === "radio" && E(e, "input")) {
              var n = e.value;
              e.setAttribute("type", t);
              if (n) {
                e.value = n;
              }
              return t;
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n;
        var r = 0;
        var o = t && t.match(U);
        if (o && e.nodeType === 1) {
          while (n = o[r++]) {
            e.removeAttribute(n);
          }
        }
      }
    });
    vt = {
      set: function (e, t, n) {
        if (t === false) {
          C.removeAttr(e, n);
        } else {
          e.setAttribute(n, n);
        }
        return n;
      }
    };
    C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = wt[t] || C.find.attr;
      wt[t] = function (e, t, r) {
        var o;
        var i;
        var a = t.toLowerCase();
        if (!r) {
          i = wt[a];
          wt[a] = o;
          o = n(e, t, r) != null ? a : null;
          wt[a] = i;
        }
        return o;
      };
    });
    var xt = /^(?:input|select|textarea|button)$/i;
    var bt = /^(?:a|area)$/i;
    function Ct(e) {
      return (e.match(U) || []).join(" ");
    }
    function Tt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    function Et(e) {
      if (Array.isArray(e)) {
        return e;
      } else {
        return typeof e == "string" && e.match(U) || [];
      }
    }
    C.fn.extend({
      prop: function (e, t) {
        return J(this, C.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[C.propFix[e] || e];
        });
      }
    });
    C.extend({
      prop: function (e, t, n) {
        var r;
        var o;
        var i = e.nodeType;
        if (i !== 3 && i !== 8 && i !== 2) {
          if (i !== 1 || !C.isXMLDoc(e)) {
            t = C.propFix[t] || t;
            o = C.propHooks[t];
          }
          if (n !== undefined) {
            if (o && "set" in o && (r = o.set(e, n, t)) !== undefined) {
              return r;
            } else {
              return e[t] = n;
            }
          } else if (o && "get" in o && (r = o.get(e, t)) !== null) {
            return r;
          } else {
            return e[t];
          }
        }
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = C.find.attr(e, "tabindex");
            if (t) {
              return parseInt(t, 10);
            } else if (xt.test(e.nodeName) || bt.test(e.nodeName) && e.href) {
              return 0;
            } else {
              return -1;
            }
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    });
    if (!f.optSelected) {
      C.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          if (t && t.parentNode) {
            t.parentNode.selectedIndex;
          }
          return null;
        },
        set: function (e) {
          var t = e.parentNode;
          if (t) {
            t.selectedIndex;
            if (t.parentNode) {
              t.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      C.propFix[this.toLowerCase()] = this;
    });
    C.fn.extend({
      addClass: function (e) {
        var t;
        var n;
        var r;
        var o;
        var i;
        var a;
        if (h(e)) {
          return this.each(function (t) {
            C(this).addClass(e.call(this, t, Tt(this)));
          });
        } else if ((t = Et(e)).length) {
          return this.each(function () {
            r = Tt(this);
            if (n = this.nodeType === 1 && " " + Ct(r) + " ") {
              for (i = 0; i < t.length; i++) {
                o = t[i];
                if (n.indexOf(" " + o + " ") < 0) {
                  n += o + " ";
                }
              }
              a = Ct(n);
              if (r !== a) {
                this.setAttribute("class", a);
              }
            }
          });
        } else {
          return this;
        }
      },
      removeClass: function (e) {
        var t;
        var n;
        var r;
        var o;
        var i;
        var a;
        if (h(e)) {
          return this.each(function (t) {
            C(this).removeClass(e.call(this, t, Tt(this)));
          });
        } else if (arguments.length) {
          if ((t = Et(e)).length) {
            return this.each(function () {
              r = Tt(this);
              if (n = this.nodeType === 1 && " " + Ct(r) + " ") {
                for (i = 0; i < t.length; i++) {
                  for (o = t[i]; n.indexOf(" " + o + " ") > -1;) {
                    n = n.replace(" " + o + " ", " ");
                  }
                }
                a = Ct(n);
                if (r !== a) {
                  this.setAttribute("class", a);
                }
              }
            });
          } else {
            return this;
          }
        } else {
          return this.attr("class", "");
        }
      },
      toggleClass: function (e, t) {
        var n;
        var r;
        var o;
        var i;
        var a = typeof e;
        var s = a === "string" || Array.isArray(e);
        if (h(e)) {
          return this.each(function (n) {
            C(this).toggleClass(e.call(this, n, Tt(this), t), t);
          });
        } else if (typeof t == "boolean" && s) {
          if (t) {
            return this.addClass(e);
          } else {
            return this.removeClass(e);
          }
        } else {
          n = Et(e);
          return this.each(function () {
            if (s) {
              i = C(this);
              o = 0;
              for (; o < n.length; o++) {
                r = n[o];
                if (i.hasClass(r)) {
                  i.removeClass(r);
                } else {
                  i.addClass(r);
                }
              }
            } else if (e === undefined || a === "boolean") {
              if (r = Tt(this)) {
                oe.set(this, "__className__", r);
              }
              if (this.setAttribute) {
                this.setAttribute("class", r || e === false ? "" : oe.get(this, "__className__") || "");
              }
            }
          });
        }
      },
      hasClass: function (e) {
        var t;
        var n;
        var r = 0;
        for (t = " " + e + " "; n = this[r++];) {
          if (n.nodeType === 1 && (" " + Ct(Tt(n)) + " ").indexOf(t) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    var It = /\r/g;
    C.fn.extend({
      val: function (e) {
        var t;
        var n;
        var r;
        var o = this[0];
        if (arguments.length) {
          r = h(e);
          return this.each(function (n) {
            var o;
            if (this.nodeType === 1) {
              if ((o = r ? e.call(this, n, C(this).val()) : e) == null) {
                o = "";
              } else if (typeof o == "number") {
                o += "";
              } else if (Array.isArray(o)) {
                o = C.map(o, function (e) {
                  if (e == null) {
                    return "";
                  } else {
                    return e + "";
                  }
                });
              }
              if (!(t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) || !("set" in t) || t.set(this, o, "value") === undefined) {
                this.value = o;
              }
            }
          });
        } else if (o) {
          if ((t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && (n = t.get(o, "value")) !== undefined) {
            return n;
          } else if (typeof (n = o.value) == "string") {
            return n.replace(It, "");
          } else if (n == null) {
            return "";
          } else {
            return n;
          }
        } else {
          return undefined;
        }
      }
    });
    C.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = C.find.attr(e, "value");
            return t ?? Ct(C.text(e));
          }
        },
        select: {
          get: function (e) {
            var t;
            var n;
            var r;
            var o = e.options;
            var i = e.selectedIndex;
            var a = e.type === "select-one";
            var s = a ? null : [];
            var c = a ? i + 1 : o.length;
            for (r = i < 0 ? c : a ? i : 0; r < c; r++) {
              if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                t = C(n).val();
                if (a) {
                  return t;
                }
                s.push(t);
              }
            }
            return s;
          },
          set: function (e, t) {
            var n;
            var r;
            var o = e.options;
            var i = C.makeArray(t);
            for (var a = o.length; a--;) {
              if ((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) {
                n = true;
              }
            }
            if (!n) {
              e.selectedIndex = -1;
            }
            return i;
          }
        }
      }
    });
    C.each(["radio", "checkbox"], function () {
      C.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) {
            return e.checked = C.inArray(C(e).val(), t) > -1;
          }
        }
      };
      if (!f.checkOn) {
        C.valHooks[this].get = function (e) {
          if (e.getAttribute("value") === null) {
            return "on";
          } else {
            return e.value;
          }
        };
      }
    });
    var kt = e.location;
    var St = {
      guid: Date.now()
    };
    var At = /\?/;
    C.parseXML = function (t) {
      var n;
      var r;
      if (!t || typeof t != "string") {
        return null;
      }
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (o) {}
      r = n && n.getElementsByTagName("parsererror")[0];
      if (!n || !!r) {
        C.error("Invalid XML: " + (r ? C.map(r.childNodes, function (e) {
          return e.textContent;
        }).join("\n") : t));
      }
      return n;
    };
    var Dt = /^(?:focusinfocus|focusoutblur)$/;
    var $t = function (e) {
      e.stopPropagation();
    };
    C.extend(C.event, {
      trigger: function (t, n, r, o) {
        var i;
        var a;
        var s;
        var c;
        var u;
        var d;
        var p;
        var f;
        var y = [r || m];
        var v = l.call(t, "type") ? t.type : t;
        var w = l.call(t, "namespace") ? t.namespace.split(".") : [];
        a = f = s = r = r || m;
        if (r.nodeType !== 3 && r.nodeType !== 8 && !Dt.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (w = v.split("."), v = w.shift(), w.sort()), u = v.indexOf(":") < 0 && "on" + v, (t = t[C.expando] ? t : new C.Event(v, typeof t == "object" && t)).isTrigger = o ? 2 : 3, t.namespace = w.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target ||= r, n = n == null ? [t] : C.makeArray(n, [t]), p = C.event.special[v] || {}, o || !p.trigger || p.trigger.apply(r, n) !== false)) {
          if (!o && !p.noBubble && !g(r)) {
            c = p.delegateType || v;
            if (!Dt.test(c + v)) {
              a = a.parentNode;
            }
            for (; a; a = a.parentNode) {
              y.push(a);
              s = a;
            }
            if (s === (r.ownerDocument || m)) {
              y.push(s.defaultView || s.parentWindow || e);
            }
          }
          for (i = 0; (a = y[i++]) && !t.isPropagationStopped();) {
            f = a;
            t.type = i > 1 ? c : p.bindType || v;
            if (d = (oe.get(a, "events") || Object.create(null))[t.type] && oe.get(a, "handle")) {
              d.apply(a, n);
            }
            if ((d = u && a[u]) && d.apply && ne(a)) {
              t.result = d.apply(a, n);
              if (t.result === false) {
                t.preventDefault();
              }
            }
          }
          t.type = v;
          if (!o && !t.isDefaultPrevented() && (!p._default || p._default.apply(y.pop(), n) === false) && !!ne(r)) {
            if (u && h(r[v]) && !g(r)) {
              if (s = r[u]) {
                r[u] = null;
              }
              C.event.triggered = v;
              if (t.isPropagationStopped()) {
                f.addEventListener(v, $t);
              }
              r[v]();
              if (t.isPropagationStopped()) {
                f.removeEventListener(v, $t);
              }
              C.event.triggered = undefined;
              if (s) {
                r[u] = s;
              }
            }
          }
          return t.result;
        }
      },
      simulate: function (e, t, n) {
        var r = C.extend(new C.Event(), n, {
          type: e,
          isSimulated: true
        });
        C.event.trigger(r, null, t);
      }
    });
    C.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) {
          return C.event.trigger(e, t, n, true);
        }
      }
    });
    var Pt = /\[\]$/;
    var jt = /\r?\n/g;
    var Mt = /^(?:submit|button|image|reset|file)$/i;
    var Rt = /^(?:input|select|textarea|keygen)/i;
    function Ot(e, t, n, r) {
      var o;
      if (Array.isArray(t)) {
        C.each(t, function (t, o) {
          if (n || Pt.test(e)) {
            r(e, o);
          } else {
            Ot(e + "[" + (typeof o == "object" && o != null ? t : "") + "]", o, n, r);
          }
        });
      } else if (n || w(t) !== "object") {
        r(e, t);
      } else {
        for (o in t) {
          Ot(e + "[" + o + "]", t[o], n, r);
        }
      }
    }
    C.param = function (e, t) {
      var n;
      var r = [];
      var o = function (e, t) {
        var n = h(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n);
      };
      if (e == null) {
        return "";
      }
      if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) {
        C.each(e, function () {
          o(this.name, this.value);
        });
      } else {
        for (n in e) {
          Ot(n, e[n], t, o);
        }
      }
      return r.join("&");
    };
    C.fn.extend({
      serialize: function () {
        return C.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = C.prop(this, "elements");
          if (e) {
            return C.makeArray(e);
          } else {
            return this;
          }
        }).filter(function () {
          var e = this.type;
          return this.name && !C(this).is(":disabled") && Rt.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ce.test(e));
        }).map(function (e, t) {
          var n = C(this).val();
          if (n == null) {
            return null;
          } else if (Array.isArray(n)) {
            return C.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(jt, "\r\n")
              };
            });
          } else {
            return {
              name: t.name,
              value: n.replace(jt, "\r\n")
            };
          }
        }).get();
      }
    });
    var Nt = /%20/g;
    var Lt = /#.*$/;
    var _t = /([?&])_=[^&]*/;
    var qt = /^(.*?):[ \t]*([^\r\n]*)$/gm;
    var Bt = /^(?:GET|HEAD)$/;
    var Ft = /^\/\//;
    var Ht = {};
    var Wt = {};
    var Ut = `*/*`;
    var Vt = m.createElement("a");
    function Gt(e) {
      return function (t, n) {
        if (typeof t != "string") {
          n = t;
          t = "*";
        }
        var r;
        var o = 0;
        var i = t.toLowerCase().match(U) || [];
        if (h(n)) {
          while (r = i[o++]) {
            if (r[0] === "+") {
              r = r.slice(1) || "*";
              (e[r] = e[r] || []).unshift(n);
            } else {
              (e[r] = e[r] || []).push(n);
            }
          }
        }
      };
    }
    function zt(e, t, n, r) {
      var o = {};
      var i = e === Wt;
      function a(s) {
        var c;
        o[s] = true;
        C.each(e[s] || [], function (e, s) {
          var u = s(t, n, r);
          if (typeof u != "string" || i || o[u]) {
            if (i) {
              return !(c = u);
            } else {
              return undefined;
            }
          } else {
            t.dataTypes.unshift(u);
            a(u);
            return false;
          }
        });
        return c;
      }
      return a(t.dataTypes[0]) || !o["*"] && a("*");
    }
    function Xt(e, t) {
      var n;
      var r;
      var o = C.ajaxSettings.flatOptions || {};
      for (n in t) {
        if (t[n] !== undefined) {
          (o[n] ? e : r ||= {})[n] = t[n];
        }
      }
      if (r) {
        C.extend(true, e, r);
      }
      return e;
    }
    Vt.href = kt.href;
    C.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: kt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ut,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": C.parseXML
        },
        flatOptions: {
          url: true,
          context: true
        }
      },
      ajaxSetup: function (e, t) {
        if (t) {
          return Xt(Xt(e, C.ajaxSettings), t);
        } else {
          return Xt(C.ajaxSettings, e);
        }
      },
      ajaxPrefilter: Gt(Ht),
      ajaxTransport: Gt(Wt),
      ajax: function (t, n) {
        if (typeof t == "object") {
          n = t;
          t = undefined;
        }
        n = n || {};
        var r;
        var o;
        var i;
        var a;
        var s;
        var c;
        var u;
        var l;
        var d;
        var p;
        var f = C.ajaxSetup({}, n);
        var h = f.context || f;
        var g = f.context && (h.nodeType || h.jquery) ? C(h) : C.event;
        var y = C.Deferred();
        var v = C.Callbacks("once memory");
        var w = f.statusCode || {};
        var x = {};
        var b = {};
        var T = "canceled";
        var E = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (u) {
              if (!a) {
                for (a = {}; t = qt.exec(i);) {
                  a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
              }
              t = a[e.toLowerCase() + " "];
            }
            if (t == null) {
              return null;
            } else {
              return t.join(", ");
            }
          },
          getAllResponseHeaders: function () {
            if (u) {
              return i;
            } else {
              return null;
            }
          },
          setRequestHeader: function (e, t) {
            if (u == null) {
              e = b[e.toLowerCase()] = b[e.toLowerCase()] || e;
              x[e] = t;
            }
            return this;
          },
          overrideMimeType: function (e) {
            if (u == null) {
              f.mimeType = e;
            }
            return this;
          },
          statusCode: function (e) {
            var t;
            if (e) {
              if (u) {
                E.always(e[E.status]);
              } else {
                for (t in e) {
                  w[t] = [w[t], e[t]];
                }
              }
            }
            return this;
          },
          abort: function (e) {
            var t = e || T;
            if (r) {
              r.abort(t);
            }
            I(0, t);
            return this;
          }
        };
        y.promise(E);
        f.url = ((t || f.url || kt.href) + "").replace(Ft, kt.protocol + "//");
        f.type = n.method || n.type || f.method || f.type;
        f.dataTypes = (f.dataType || "*").toLowerCase().match(U) || [""];
        if (f.crossDomain == null) {
          c = m.createElement("a");
          try {
            c.href = f.url;
            c.href = c.href;
            f.crossDomain = Vt.protocol + "//" + Vt.host != c.protocol + "//" + c.host;
          } catch (k) {
            f.crossDomain = true;
          }
        }
        if (f.data && f.processData && typeof f.data != "string") {
          f.data = C.param(f.data, f.traditional);
        }
        zt(Ht, f, n, E);
        if (u) {
          return E;
        }
        if ((l = C.event && f.global) && C.active++ === 0) {
          C.event.trigger("ajaxStart");
        }
        f.type = f.type.toUpperCase();
        f.hasContent = !Bt.test(f.type);
        o = f.url.replace(Lt, "");
        if (f.hasContent) {
          if (f.data && f.processData && (f.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            f.data = f.data.replace(Nt, "+");
          }
        } else {
          p = f.url.slice(o.length);
          if (f.data && (f.processData || typeof f.data == "string")) {
            o += (At.test(o) ? "&" : "?") + f.data;
            delete f.data;
          }
          if (f.cache === false) {
            o = o.replace(_t, "$1");
            p = (At.test(o) ? "&" : "?") + "_=" + St.guid++ + p;
          }
          f.url = o + p;
        }
        if (f.ifModified) {
          if (C.lastModified[o]) {
            E.setRequestHeader("If-Modified-Since", C.lastModified[o]);
          }
          if (C.etag[o]) {
            E.setRequestHeader("If-None-Match", C.etag[o]);
          }
        }
        if (f.data && f.hasContent && f.contentType !== false || n.contentType) {
          E.setRequestHeader("Content-Type", f.contentType);
        }
        E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + Ut + "; q=0.01" : "") : f.accepts["*"]);
        for (d in f.headers) {
          E.setRequestHeader(d, f.headers[d]);
        }
        if (f.beforeSend && (f.beforeSend.call(h, E, f) === false || u)) {
          return E.abort();
        }
        T = "abort";
        v.add(f.complete);
        E.done(f.success);
        E.fail(f.error);
        if (r = zt(Wt, f, n, E)) {
          E.readyState = 1;
          if (l) {
            g.trigger("ajaxSend", [E, f]);
          }
          if (u) {
            return E;
          }
          if (f.async && f.timeout > 0) {
            s = e.setTimeout(function () {
              E.abort("timeout");
            }, f.timeout);
          }
          try {
            u = false;
            r.send(x, I);
          } catch (k) {
            if (u) {
              throw k;
            }
            I(-1, k);
          }
        } else {
          I(-1, "No Transport");
        }
        function I(t, n, a, c) {
          var d;
          var p;
          var m;
          var x;
          var b;
          var T = n;
          if (!u) {
            u = true;
            if (s) {
              e.clearTimeout(s);
            }
            r = undefined;
            i = c || "";
            E.readyState = t > 0 ? 4 : 0;
            d = t >= 200 && t < 300 || t === 304;
            if (a) {
              x = function (e, t, n) {
                var r;
                var o;
                var i;
                var a;
                var s = e.contents;
                for (var c = e.dataTypes; c[0] === "*";) {
                  c.shift();
                  if (r === undefined) {
                    r = e.mimeType || t.getResponseHeader("Content-Type");
                  }
                }
                if (r) {
                  for (o in s) {
                    if (s[o] && s[o].test(r)) {
                      c.unshift(o);
                      break;
                    }
                  }
                }
                if (c[0] in n) {
                  i = c[0];
                } else {
                  for (o in n) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                      i = o;
                      break;
                    }
                    a ||= o;
                  }
                  i = i || a;
                }
                if (i) {
                  if (i !== c[0]) {
                    c.unshift(i);
                  }
                  return n[i];
                }
              }(f, E, a);
            }
            if (!d && C.inArray("script", f.dataTypes) > -1 && C.inArray("json", f.dataTypes) < 0) {
              f.converters["text script"] = function () {};
            }
            x = function (e, t, n, r) {
              var o;
              var i;
              var a;
              var s;
              var c;
              var u = {};
              var l = e.dataTypes.slice();
              if (l[1]) {
                for (a in e.converters) {
                  u[a.toLowerCase()] = e.converters[a];
                }
              }
              for (i = l.shift(); i;) {
                if (e.responseFields[i]) {
                  n[e.responseFields[i]] = t;
                }
                if (!c && r && e.dataFilter) {
                  t = e.dataFilter(t, e.dataType);
                }
                c = i;
                if (i = l.shift()) {
                  if (i === "*") {
                    i = c;
                  } else if (c !== "*" && c !== i) {
                    if (!(a = u[c + " " + i] || u["* " + i])) {
                      for (o in u) {
                        if ((s = o.split(" "))[1] === i && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                          if (a === true) {
                            a = u[o];
                          } else if (u[o] !== true) {
                            i = s[0];
                            l.unshift(s[1]);
                          }
                          break;
                        }
                      }
                    }
                    if (a !== true) {
                      if (a && e.throws) {
                        t = a(t);
                      } else {
                        try {
                          t = a(t);
                        } catch (k) {
                          return {
                            state: "parsererror",
                            error: a ? k : "No conversion from " + c + " to " + i
                          };
                        }
                      }
                    }
                  }
                }
              }
              return {
                state: "success",
                data: t
              };
            }(f, x, E, d);
            if (d) {
              if (f.ifModified) {
                if (b = E.getResponseHeader("Last-Modified")) {
                  C.lastModified[o] = b;
                }
                if (b = E.getResponseHeader("etag")) {
                  C.etag[o] = b;
                }
              }
              if (t === 204 || f.type === "HEAD") {
                T = "nocontent";
              } else if (t === 304) {
                T = "notmodified";
              } else {
                T = x.state;
                p = x.data;
                d = !(m = x.error);
              }
            } else {
              m = T;
              if (!!t || !T) {
                T = "error";
                if (t < 0) {
                  t = 0;
                }
              }
            }
            E.status = t;
            E.statusText = (n || T) + "";
            if (d) {
              y.resolveWith(h, [p, T, E]);
            } else {
              y.rejectWith(h, [E, T, m]);
            }
            E.statusCode(w);
            w = undefined;
            if (l) {
              g.trigger(d ? "ajaxSuccess" : "ajaxError", [E, f, d ? p : m]);
            }
            v.fireWith(h, [E, T]);
            if (l) {
              g.trigger("ajaxComplete", [E, f]);
              if (! --C.active) {
                C.event.trigger("ajaxStop");
              }
            }
          }
        }
        return E;
      },
      getJSON: function (e, t, n) {
        return C.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return C.get(e, undefined, t, "script");
      }
    });
    C.each(["get", "post"], function (e, t) {
      C[t] = function (e, n, r, o) {
        if (h(n)) {
          o = o || r;
          r = n;
          n = undefined;
        }
        return C.ajax(C.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: r
        }, C.isPlainObject(e) && e));
      };
    });
    C.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers) {
        if (t.toLowerCase() === "content-type") {
          e.contentType = e.headers[t] || "";
        }
      }
    });
    C._evalUrl = function (e, t, n) {
      return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (e) {
          C.globalEval(e, t, n);
        }
      });
    };
    C.fn.extend({
      wrapAll: function (e) {
        var t;
        if (this[0]) {
          if (h(e)) {
            e = e.call(this[0]);
          }
          t = C(e, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            t.insertBefore(this[0]);
          }
          t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }
            return e;
          }).append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        if (h(e)) {
          return this.each(function (t) {
            C(this).wrapInner(e.call(this, t));
          });
        } else {
          return this.each(function () {
            var t = C(this);
            var n = t.contents();
            if (n.length) {
              n.wrapAll(e);
            } else {
              t.append(e);
            }
          });
        }
      },
      wrap: function (e) {
        var t = h(e);
        return this.each(function (n) {
          C(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        this.parent(e).not("body").each(function () {
          C(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    };
    C.expr.pseudos.visible = function (e) {
      return !!e.offsetWidth || !!e.offsetHeight || !!e.getClientRects().length;
    };
    C.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    };
    var Qt = {
      0: 200,
      1223: 204
    };
    var Yt = C.ajaxSettings.xhr();
    f.cors = !!Yt && "withCredentials" in Yt;
    f.ajax = Yt = !!Yt;
    C.ajaxTransport(function (t) {
      var n;
      var r;
      if (f.cors || Yt && !t.crossDomain) {
        return {
          send: function (o, i) {
            var a;
            var s = t.xhr();
            s.open(t.type, t.url, t.async, t.username, t.password);
            if (t.xhrFields) {
              for (a in t.xhrFields) {
                s[a] = t.xhrFields[a];
              }
            }
            if (t.mimeType && s.overrideMimeType) {
              s.overrideMimeType(t.mimeType);
            }
            if (!t.crossDomain && !o["X-Requested-With"]) {
              o["X-Requested-With"] = "XMLHttpRequest";
            }
            for (a in o) {
              s.setRequestHeader(a, o[a]);
            }
            n = function (e) {
              return function () {
                if (n) {
                  n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null;
                  if (e === "abort") {
                    s.abort();
                  } else if (e === "error") {
                    if (typeof s.status != "number") {
                      i(0, "error");
                    } else {
                      i(s.status, s.statusText);
                    }
                  } else {
                    i(Qt[s.status] || s.status, s.statusText, (s.responseType || "text") !== "text" || typeof s.responseText != "string" ? {
                      binary: s.response
                    } : {
                      text: s.responseText
                    }, s.getAllResponseHeaders());
                  }
                }
              };
            };
            s.onload = n();
            r = s.onerror = s.ontimeout = n("error");
            if (s.onabort !== undefined) {
              s.onabort = r;
            } else {
              s.onreadystatechange = function () {
                if (s.readyState === 4) {
                  e.setTimeout(function () {
                    if (n) {
                      r();
                    }
                  });
                }
              };
            }
            n = n("abort");
            try {
              s.send(t.hasContent && t.data || null);
            } catch (c) {
              if (n) {
                throw c;
              }
            }
          },
          abort: function () {
            if (n) {
              n();
            }
          }
        };
      }
    });
    C.ajaxPrefilter(function (e) {
      if (e.crossDomain) {
        e.contents.script = false;
      }
    });
    C.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (e) {
          C.globalEval(e);
          return e;
        }
      }
    });
    C.ajaxPrefilter("script", function (e) {
      if (e.cache === undefined) {
        e.cache = false;
      }
      if (e.crossDomain) {
        e.type = "GET";
      }
    });
    C.ajaxTransport("script", function (e) {
      var t;
      var n;
      if (e.crossDomain || e.scriptAttrs) {
        return {
          send: function (r, o) {
            t = C("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function (e) {
              t.remove();
              n = null;
              if (e) {
                o(e.type === "error" ? 404 : 200, e.type);
              }
            });
            m.head.appendChild(t[0]);
          },
          abort: function () {
            if (n) {
              n();
            }
          }
        };
      }
    });
    var Jt;
    var Kt = [];
    var Zt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Kt.pop() || C.expando + "_" + St.guid++;
        this[e] = true;
        return e;
      }
    });
    C.ajaxPrefilter("json jsonp", function (t, n, r) {
      var o;
      var i;
      var a;
      var s = t.jsonp !== false && (Zt.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Zt.test(t.data) && "data");
      if (s || t.dataTypes[0] === "jsonp") {
        o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
        if (s) {
          t[s] = t[s].replace(Zt, "$1" + o);
        } else if (t.jsonp !== false) {
          t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + o;
        }
        t.converters["script json"] = function () {
          if (!a) {
            C.error(o + " was not called");
          }
          return a[0];
        };
        t.dataTypes[0] = "json";
        i = e[o];
        e[o] = function () {
          a = arguments;
        };
        r.always(function () {
          if (i === undefined) {
            C(e).removeProp(o);
          } else {
            e[o] = i;
          }
          if (t[o]) {
            t.jsonpCallback = n.jsonpCallback;
            Kt.push(o);
          }
          if (a && h(i)) {
            i(a[0]);
          }
          a = i = undefined;
        });
        return "script";
      }
    });
    (Jt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>";
    f.createHTMLDocument = Jt.childNodes.length === 2;
    C.parseHTML = function (e, t, n) {
      if (typeof e != "string") {
        return [];
      } else {
        if (typeof t == "boolean") {
          n = t;
          t = false;
        }
        if (!t) {
          if (f.createHTMLDocument) {
            (r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href;
            t.head.appendChild(r);
          } else {
            t = m;
          }
        }
        i = !n && [];
        if (o = L.exec(e)) {
          return [t.createElement(o[1])];
        } else {
          o = De([e], t, i);
          if (i && i.length) {
            C(i).remove();
          }
          return C.merge([], o.childNodes);
        }
      }
      var r;
      var o;
      var i;
    };
    C.fn.load = function (e, t, n) {
      var r;
      var o;
      var i;
      var a = this;
      var s = e.indexOf(" ");
      if (s > -1) {
        r = Ct(e.slice(s));
        e = e.slice(0, s);
      }
      if (h(t)) {
        n = t;
        t = undefined;
      } else if (t && typeof t == "object") {
        o = "POST";
      }
      if (a.length > 0) {
        C.ajax({
          url: e,
          type: o || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          i = arguments;
          a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
          a.each(function () {
            n.apply(this, i || [e.responseText, t, e]);
          });
        });
      }
      return this;
    };
    C.expr.pseudos.animated = function (e) {
      return C.grep(C.timers, function (t) {
        return e === t.elem;
      }).length;
    };
    C.offset = {
      setOffset: function (e, t, n) {
        var r;
        var o;
        var i;
        var a;
        var s;
        var c;
        var u = C.css(e, "position");
        var l = C(e);
        var d = {};
        if (u === "static") {
          e.style.position = "relative";
        }
        s = l.offset();
        i = C.css(e, "top");
        c = C.css(e, "left");
        if ((u === "absolute" || u === "fixed") && (i + c).indexOf("auto") > -1) {
          a = (r = l.position()).top;
          o = r.left;
        } else {
          a = parseFloat(i) || 0;
          o = parseFloat(c) || 0;
        }
        if (h(t)) {
          t = t.call(e, n, C.extend({}, s));
        }
        if (t.top != null) {
          d.top = t.top - s.top + a;
        }
        if (t.left != null) {
          d.left = t.left - s.left + o;
        }
        if ("using" in t) {
          t.using.call(e, d);
        } else {
          l.css(d);
        }
      }
    };
    C.fn.extend({
      offset: function (e) {
        if (arguments.length) {
          if (e === undefined) {
            return this;
          } else {
            return this.each(function (t) {
              C.offset.setOffset(this, e, t);
            });
          }
        }
        var t;
        var n;
        var r = this[0];
        if (r) {
          if (r.getClientRects().length) {
            t = r.getBoundingClientRect();
            n = r.ownerDocument.defaultView;
            return {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
            };
          } else {
            return {
              top: 0,
              left: 0
            };
          }
        } else {
          return undefined;
        }
      },
      position: function () {
        if (this[0]) {
          var e;
          var t;
          var n;
          var r = this[0];
          var o = {
            top: 0,
            left: 0
          };
          if (C.css(r, "position") === "fixed") {
            t = r.getBoundingClientRect();
          } else {
            t = this.offset();
            n = r.ownerDocument;
            e = r.offsetParent || n.documentElement;
            while (e && (e === n.body || e === n.documentElement) && C.css(e, "position") === "static") {
              e = e.parentNode;
            }
            if (e && e !== r && e.nodeType === 1) {
              (o = C(e).offset()).top += C.css(e, "borderTopWidth", true);
              o.left += C.css(e, "borderLeftWidth", true);
            }
          }
          return {
            top: t.top - o.top - C.css(r, "marginTop", true),
            left: t.left - o.left - C.css(r, "marginLeft", true)
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && C.css(e, "position") === "static";) {
            e = e.offsetParent;
          }
          return e || pe;
        });
      }
    });
    C.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = t === "pageYOffset";
      C.fn[e] = function (r) {
        return J(this, function (e, r, o) {
          var i;
          if (g(e)) {
            i = e;
          } else if (e.nodeType === 9) {
            i = e.defaultView;
          }
          if (o === undefined) {
            if (i) {
              return i[t];
            } else {
              return e[r];
            }
          }
          if (i) {
            i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset);
          } else {
            e[r] = o;
          }
        }, e, r, arguments.length);
      };
    });
    C.each(["top", "left"], function (e, t) {
      C.cssHooks[t] = Je(f.pixelPosition, function (e, n) {
        if (n) {
          n = Ye(e, t);
          if (Ve.test(n)) {
            return C(e).position()[t] + "px";
          } else {
            return n;
          }
        }
      });
    });
    C.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      C.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, r) {
        C.fn[r] = function (o, i) {
          var a = arguments.length && (n || typeof o != "boolean");
          var s = n || (o === true || i === true ? "margin" : "border");
          return J(this, function (t, n, o) {
            var i;
            if (g(t)) {
              if (r.indexOf("outer") === 0) {
                return t["inner" + e];
              } else {
                return t.document.documentElement["client" + e];
              }
            } else if (t.nodeType === 9) {
              i = t.documentElement;
              return Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]);
            } else if (o === undefined) {
              return C.css(t, n, s);
            } else {
              return C.style(t, n, o, s);
            }
          }, t, a ? o : undefined, a);
        };
      });
    });
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e);
      };
    });
    C.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        if (arguments.length === 1) {
          return this.off(e, "**");
        } else {
          return this.off(t, e || "**", n);
        }
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      }
    });
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      C.fn[t] = function (e, n) {
        if (arguments.length > 0) {
          return this.on(t, null, e, n);
        } else {
          return this.trigger(t);
        }
      };
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    C.proxy = function (e, t) {
      var n;
      var r;
      var i;
      if (typeof t == "string") {
        n = e[t];
        t = e;
        e = n;
      }
      if (h(e)) {
        r = o.call(arguments, 2);
        i = function () {
          return e.apply(t || this, r.concat(o.call(arguments)));
        };
        i.guid = e.guid = e.guid || C.guid++;
        return i;
      }
    };
    C.holdReady = function (e) {
      if (e) {
        C.readyWait++;
      } else {
        C.ready(true);
      }
    };
    C.isArray = Array.isArray;
    C.parseJSON = JSON.parse;
    C.nodeName = E;
    C.isFunction = h;
    C.isWindow = g;
    C.camelCase = te;
    C.type = w;
    C.now = Date.now;
    C.isNumeric = function (e) {
      var t = C.type(e);
      return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
    };
    C.trim = function (e) {
      if (e == null) {
        return "";
      } else {
        return (e + "").replace(en, "$1");
      }
    };
    var tn = e.jQuery;
    var nn = e.$;
    C.noConflict = function (t) {
      if (e.$ === C) {
        e.$ = nn;
      }
      if (t && e.jQuery === C) {
        e.jQuery = tn;
      }
      return C;
    };
    if (t === undefined) {
      e.jQuery = e.$ = C;
    }
    return C;
  }, o.exports = n.document ? r(n, true) : function (e) {
    if (!e.document) {
      throw new Error("jQuery requires a window with a document");
    }
    return r(e);
  }));
  const a = new Error("request for lock canceled");
  var s = function (e, t, n, r) {
    return new (n ||= Promise)(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (t) {
          i(t);
        }
      }
      function s(e) {
        try {
          c(r.throw(e));
        } catch (t) {
          i(t);
        }
      }
      function c(e) {
        var t;
        if (e.done) {
          o(e.value);
        } else {
          (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, s);
        }
      }
      c((r = r.apply(e, t || [])).next());
    });
  };
  class c {
    constructor(e, t = a) {
      this._value = e;
      this._cancelError = t;
      this._queue = [];
      this._weightedWaiters = [];
    }
    acquire(e = 1, t = 0) {
      if (e <= 0) {
        throw new Error(`invalid weight ${e}: must be positive`);
      }
      return new Promise((n, r) => {
        const o = {
          resolve: n,
          reject: r,
          weight: e,
          priority: t
        };
        const i = u(this._queue, e => t <= e.priority);
        if (i === -1 && e <= this._value) {
          this._dispatchItem(o);
        } else {
          this._queue.splice(i + 1, 0, o);
        }
      });
    }
    runExclusive(e) {
      return s(this, arguments, undefined, function* (e, t = 1, n = 0) {
        const [r, o] = yield this.acquire(t, n);
        try {
          return yield e(r);
        } finally {
          o();
        }
      });
    }
    waitForUnlock(e = 1, t = 0) {
      if (e <= 0) {
        throw new Error(`invalid weight ${e}: must be positive`);
      }
      if (this._couldLockImmediately(e, t)) {
        return Promise.resolve();
      } else {
        return new Promise(n => {
          this._weightedWaiters[e - 1] ||= [];
          (function (e, t) {
            const n = u(e, e => t.priority <= e.priority);
            e.splice(n + 1, 0, t);
          })(this._weightedWaiters[e - 1], {
            resolve: n,
            priority: t
          });
        });
      }
    }
    isLocked() {
      return this._value <= 0;
    }
    getValue() {
      return this._value;
    }
    setValue(e) {
      this._value = e;
      this._dispatchQueue();
    }
    release(e = 1) {
      if (e <= 0) {
        throw new Error(`invalid weight ${e}: must be positive`);
      }
      this._value += e;
      this._dispatchQueue();
    }
    cancel() {
      this._queue.forEach(e => e.reject(this._cancelError));
      this._queue = [];
    }
    _dispatchQueue() {
      for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) {
        this._dispatchItem(this._queue.shift());
        this._drainUnlockWaiters();
      }
    }
    _dispatchItem(e) {
      const t = this._value;
      this._value -= e.weight;
      e.resolve([t, this._newReleaser(e.weight)]);
    }
    _newReleaser(e) {
      let t = false;
      return () => {
        if (!t) {
          t = true;
          this.release(e);
        }
      };
    }
    _drainUnlockWaiters() {
      if (this._queue.length === 0) {
        for (let e = this._value; e > 0; e--) {
          const t = this._weightedWaiters[e - 1];
          if (t) {
            t.forEach(e => e.resolve());
            this._weightedWaiters[e - 1] = [];
          }
        }
      } else {
        const e = this._queue[0].priority;
        for (let t = this._value; t > 0; t--) {
          const n = this._weightedWaiters[t - 1];
          if (!n) {
            continue;
          }
          const r = n.findIndex(t => t.priority <= e);
          (r === -1 ? n : n.splice(0, r)).forEach(e => e.resolve());
        }
      }
    }
    _couldLockImmediately(e, t) {
      return (this._queue.length === 0 || this._queue[0].priority < t) && e <= this._value;
    }
  }
  function u(e, t) {
    for (let n = e.length - 1; n >= 0; n--) {
      if (t(e[n])) {
        return n;
      }
    }
    return -1;
  }
  var l = function (e, t, n, r) {
    return new (n ||= Promise)(function (o, i) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (t) {
          i(t);
        }
      }
      function s(e) {
        try {
          c(r.throw(e));
        } catch (t) {
          i(t);
        }
      }
      function c(e) {
        var t;
        if (e.done) {
          o(e.value);
        } else {
          (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, s);
        }
      }
      c((r = r.apply(e, t || [])).next());
    });
  };
  const d = new class {
    constructor(e) {
      this._semaphore = new c(1, e);
    }
    acquire() {
      return l(this, arguments, undefined, function* (e = 0) {
        const [, t] = yield this._semaphore.acquire(1, e);
        return t;
      });
    }
    runExclusive(e, t = 0) {
      return this._semaphore.runExclusive(() => e(), 1, t);
    }
    isLocked() {
      return this._semaphore.isLocked();
    }
    waitForUnlock(e = 0) {
      return this._semaphore.waitForUnlock(1, e);
    }
    release() {
      if (this._semaphore.isLocked()) {
        this._semaphore.release();
      }
    }
    cancel() {
      return this._semaphore.cancel();
    }
  }();
  const p = (e, t = false) => {
    const n = t ? e * (0.6 + Math.random() * 0.8) : e;
    return new Promise(e => setTimeout(e, n));
  };
  const f = async e => {
    try {
      const t = await chrome.runtime.sendMessage({
        type: "CIT",
        text: e
      });
      return !!t?.success;
    } catch {
      return false;
    }
  };
  const h = async (e, t, n) => {
    let r;
    let o;
    if (e === "@") {
      r = "@";
      o = 8;
    }
    try {
      const i = await chrome.runtime.sendMessage({
        type: "CK",
        key: e,
        code: t,
        keyCode: n,
        text: r,
        modifiers: o
      });
      return !!i?.success;
    } catch {
      return false;
    }
  };
  const g = async () => {
    try {
      await chrome.runtime.sendMessage({
        type: "CD"
      });
    } catch {}
  };
  const m = async (e, t = "Undefined element button", n = 5000, r = 100) => d.runExclusive(async () => {
    const o = Date.now();
    while (Date.now() - o < n) {
      await p(r);
      const t = i(e);
      if (y(t)) {
        const e = t.get(0);
        if (e) {
          const t = e.getBoundingClientRect();
          const n = Math.round(t.left + t.width / 2);
          const r = Math.round(t.top + t.height / 2);
          await chrome.runtime.sendMessage({
            type: "CH",
            x: n,
            y: r
          });
          await p(300);
        }
        return;
      }
    }
    throw i(e).length === 0 ? new Error(`\u274c ${t} - Element not found within timeout (${n}ms)`) : new Error(`\u274c ${t} - Element found but not fully visible/ready within timeout (${n}ms)`);
  });
  const y = e => {
    if (e.length === 0) {
      return false;
    }
    const t = e[0];
    if (!e.is(":visible")) {
      return false;
    }
    if (e.is(":disabled")) {
      return false;
    }
    const n = t.getBoundingClientRect();
    if (n.width === 0 || n.height === 0) {
      return false;
    }
    const r = window.getComputedStyle(t);
    return r.display !== "none" && r.visibility !== "hidden" && r.opacity !== "0" && (n.top >= 0 && n.left >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight) && (n.right, window.innerWidth || document.documentElement.clientWidth), true);
  };
  const v = async (e, t = 5000, n = 100, r = true) => {
    const o = Date.now();
    while (Date.now() - o < t) {
      const t = i(e);
      if (r ? y(t) : t.length > 0) {
        await p(200);
        return t;
      }
      await p(n);
    }
    return null;
  };
  const w = async (e, t = "Undefined element button", n = 5000, r = 100) => d.runExclusive(async () => {
    const o = Date.now();
    while (Date.now() - o < n) {
      await p(r);
      const t = i(e);
      if (y(t)) {
        const e = t.get(0);
        if (e) {
          const t = e.getBoundingClientRect();
          const n = Math.round(t.left + t.width * 0.25);
          const r = Math.round(t.top + t.height / 2);
          await chrome.runtime.sendMessage({
            type: "CC",
            x: n,
            y: r
          });
          await p(300);
        }
        return;
      }
    }
    throw i(e).length === 0 ? new Error(`\u274c ${t} - Element not found within timeout (${n}ms)`) : new Error(`\u274c ${t} - Element found but not fully visible/ready within timeout (${n}ms)`);
  });
  const x = 300000;
  const b = new Map();
  const C = (e, t = false) => {
    const n = e.some(([e, n]) => {
      const r = ((e, t = false) => {
        const n = b.get(e);
        if (n) {
          if (!(Date.now() > n.expiresAt)) {
            if (t) {
              n.expiresAt = Date.now() + x;
            }
            return n.value;
          }
          b.delete(e);
        }
      })(e, t);
      return r === undefined || JSON.stringify(r) !== JSON.stringify(n);
    });
    if (n && t) {
      e.forEach(([e, t]) => {
        n = e;
        r = t;
        b.set(n, {
          value: r,
          expiresAt: Date.now() + x
        });
        return;
        var n;
        var r;
      });
    }
    return n;
  };
  const T = async e => {
    if (!e || e.length === 0) {
      return null;
    }
    const t = e[e.length - 1];
    try {
      return await (n = t, new Promise((e, t) => {
        n.crossOrigin = "anonymous";
        n.preload = "auto";
        n.addEventListener("loadedmetadata", () => {
          n.currentTime = n.duration;
        });
        n.addEventListener("seeked", () => {
          const r = document.createElement("canvas");
          r.width = n.videoWidth;
          r.height = n.videoHeight;
          const o = r.getContext("2d");
          if (!o) {
            t(new Error("Could not get canvas context"));
            return;
          }
          o.drawImage(n, 0, 0, r.width, r.height);
          const i = r.toDataURL("image/jpeg", 0.95);
          e(i);
        });
        n.addEventListener("error", e => {
          t(new Error(`Failed to load video: ${e.message || "Unknown error"}`));
        });
        const r = n.src || n.currentSrc;
        if (r) {
          n.src = "";
          n.src = r;
          n.load();
        } else {
          n.load();
        }
      }));
    } catch (r) {
      if (r instanceof Error) {
        r.message;
      } else {
        String(r);
      }
      return null;
    }
    var n;
  };
  const E = e => {
    if (!e) {
      return "video";
    }
    let t = e.replace(/\s+/g, "-");
    t = t.replace(/[^\p{L}\p{N}-]/gu, "");
    t = t.replace(/-+/g, "-");
    t = t.replace(/^-+|-+$/g, "");
    if (t.length > 50) {
      t = t.substring(0, 50);
    }
    return t || "video";
  };
  const I = e => {
    try {
      chrome.runtime.sendMessage({
        type: "ACTION_LOG",
        data: e
      }).catch(() => {});
    } catch (t) {}
  };
  const k = e => e.map(e => typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e)).join(" ");
  const S = (...e) => {
    I({
      level: "info",
      message: k(e),
      timestamp: Date.now()
    });
  };
  const A = (...e) => {
    I({
      level: "warn",
      message: k(e),
      timestamp: Date.now()
    });
  };
  const D = (...e) => {
    I({
      level: "error",
      message: k(e),
      timestamp: Date.now()
    });
  };
  const $ = async (e, t, n) => {
    const r = [{
      name: "Create Project",
      status: "pending"
    }, {
      name: "Configure Video",
      status: "pending"
    }, {
      name: "Fill Prompt",
      status: "pending"
    }, {
      name: "Check & Download Video",
      status: "pending"
    }];
    try {
      if (t && t()) {
        S("❌ Automation cancelled before starting");
        return {
          success: false,
          steps: r,
          cancelled: true,
          error: "Cancelled"
        };
      }
      await (async () => {
        try {
          await chrome.runtime.sendMessage({
            type: "CA"
          });
        } catch {}
      })();
      if (window.location.href.includes("/project/")) {
        S("✅ Already in a project, skipping project creation");
        r[0].status = "completed";
        r[0].name = "Create Project (Skipped)";
      } else {
        S("🚀 Starting Flow Automation - Step 1: Create Project");
        r[0].status = "running";
        if (t && t()) {
          r[0].status = "error";
          r[0].error = "Cancelled";
          return {
            success: false,
            steps: r,
            cancelled: true,
            error: "Cancelled"
          };
        }
        if (!(await P(n))) {
          r[0].status = "error";
          r[0].error = "Failed to create project";
          return {
            success: false,
            steps: r,
            error: "Failed to create project"
          };
        }
        r[0].status = "completed";
        S("✅ Project created successfully");
      }
      if (t && t()) {
        S("❌ Automation cancelled before configuring video");
        return {
          success: false,
          steps: r,
          cancelled: true,
          error: "Cancelled"
        };
      }
      if (i(n.selectors.removeSelectedImagesButton).length > 0) {
        await w(n.selectors.removeSelectedImagesButton, "Remove selected images and videos");
      }
      if (e.mode !== "agentAutomation" && i(n.selectors.disableAgentModeButton).length > 0) {
        await w(n.selectors.disableAgentModeButton, "Disable Agent Mode");
        await p(1000);
        if (i(n.selectors.disableAgentModeButton).length > 0) {
          await w(n.selectors.disableAgentModeButton, "Disable Agent Mode");
        }
      } else if (e.mode === "agentAutomation" && i(n.selectors.enableAgentModeButton).length > 0) {
        await w(n.selectors.enableAgentModeButton, "Enable Agent Mode");
        await p(1000);
        if (i(n.selectors.enableAgentModeButton).length > 0) {
          await w(n.selectors.enableAgentModeButton, "Enable Agent Mode");
        }
      }
      if (C([["uiMode", "open"]], true)) {
        S("⏳ Step 2.1: PreConfigure UI Mode");
        await O(n);
        S("✅ UI Mode configured");
      }
      if (e.mode.includes("ToVideo") && C([["mode", e.mode], ["aspectRatio", e.aspectRatio], ["model", e.model], ["videoOption", e.videoOption], ["outputCount", e.outputCount], ["speaker", e.speaker], ["characters", e.characters]])) {
        S("⏳ Step 2: Configuring video...");
        r[1].status = "running";
        if (!(await N(e, t, n))) {
          if (t && t()) {
            r[1].status = "error";
            r[1].error = "Cancelled";
            return {
              success: false,
              steps: r,
              cancelled: true,
              error: "Cancelled"
            };
          } else {
            r[1].status = "error";
            r[1].error = "Failed to configure video";
            return {
              success: false,
              steps: r,
              error: "Failed to configure video"
            };
          }
        }
        r[1].status = "completed";
        S("✅ Video configured");
      } else if (e.mode.includes("ToImage") && C([["mode", e.mode], ["aspectRatio", e.aspectRatio], ["model", e.model], ["outputCount", e.outputCount], ["characters", e.characters]]) || e.outputPreviousPrompt?.nextPromptEditImage) {
        S("⏳ Step 2: Configuring image...");
        r[1].status = "running";
        if (!(await L(e, t, n))) {
          if (t && t()) {
            r[1].status = "error";
            r[1].error = "Cancelled";
            return {
              success: false,
              steps: r,
              cancelled: true,
              error: "Cancelled"
            };
          } else {
            r[1].status = "error";
            r[1].error = "Failed to configure image";
            return {
              success: false,
              steps: r,
              error: "Failed to configure image"
            };
          }
        }
        r[1].status = "completed";
        S("✅ Image configured");
      } else if (e.mode.includes("agentAutomation") && C([["mode", e.mode], ["aspectRatio", e.aspectRatio], ["model", e.model], ["outputCount", e.outputCount], ["characters", e.characters]])) {
        S("⏳ Step 2: Configuring agent automation...");
        r[1].status = "running";
        if (!(await _(e, t, n))) {
          if (t && t()) {
            r[1].status = "error";
            r[1].error = "Cancelled";
            return {
              success: false,
              steps: r,
              cancelled: true,
              error: "Cancelled"
            };
          } else {
            r[1].status = "error";
            r[1].error = "Failed to configure agent automation";
            return {
              success: false,
              steps: r,
              error: "Failed to configure agent automation"
            };
          }
        }
        r[1].status = "completed";
        S("✅ Agent automation configured");
      }
      if (e.characters && e.characters.length > 0) {
        for (let r = 0; r < e.characters.length; r++) {
          S(`Selecting character ${r + 1}/${e.characters.length}: ${e.characters[r]}...`);
          if (!(await j(e, r, n, t))) {
            A(`\u26a0\ufe0f Failed to select character ${r + 1}, but continuing...`);
          }
        }
      }
      if (e.images && e.images.length > 0) {
        for (let r = 0; r < e.images.length; r++) {
          S(`Uploading image ${r + 1}/${e.images.length}: ${e.images[r].name}...`);
          if (await M(e, r, n, t)) {
            S(`\u2705 Image ${r + 1} uploaded successfully`);
          } else {
            A(`\u26a0\ufe0f Failed to upload image ${r + 1}, but continuing...`);
          }
        }
      } else {
        A("No images provided");
      }
      if (t && t()) {
        S("❌ Automation cancelled before filling prompt");
        return {
          success: false,
          steps: r,
          cancelled: true,
          error: "Cancelled"
        };
      }
      S("⏳ Step 3: Filling prompt...");
      r[2].status = "running";
      if (!(await F(e, n))) {
        r[2].status = "error";
        r[2].error = "Failed to fill prompt";
        return {
          success: false,
          steps: r,
          error: "Failed to fill prompt"
        };
      }
      r[2].status = "completed";
      S("✅ Prompt filled");
      S("⏳ Waiting for video generation to start...");
      if (t && t()) {
        S("❌ Automation cancelled before downloading video");
        return {
          success: false,
          steps: r,
          cancelled: true,
          error: "Cancelled"
        };
      }
      await p(5000);
      S("⏳ Step 4: Locating tile IDs...");
      r[3].status = "running";
      const o = await H(e, t, n);
      if (o.success) {
        r[3].status = "completed";
        return {
          success: true,
          steps: r,
          tileIds: o.tileIds
        };
      } else if (t && t()) {
        r[3].status = "error";
        r[3].error = "Cancelled";
        return {
          success: false,
          steps: r,
          cancelled: true,
          error: "Cancelled"
        };
      } else {
        r[3].status = "error";
        r[3].error = "Could not find tile IDs";
        return {
          success: false,
          steps: r,
          error: "Could not find tile IDs"
        };
      }
    } catch (o) {
      D("❌ Automation failed:", o);
      const e = r.find(e => e.status === "running");
      if (e) {
        e.status = "error";
        e.error = String(o);
      }
      return {
        success: false,
        steps: r,
        error: String(o)
      };
    }
  };
  const P = e => new Promise(async t => {
    try {
      const n = e.selectors;
      const r = await v(n.createProjectButton);
      if (!r || r.length === 0) {
        A("Could not find create project button");
        t(false);
        return;
      }
      await w(n.createProjectButton, "Create project button");
      setTimeout(() => {
        t(true);
      }, 5000);
    } catch (n) {
      D("Error in createFlowProject:", n);
      t(false);
    }
  });
  const j = async (e, t, n, r) => {
    const o = n.selectors;
    if (i(o.addImageButton).length === 0) {
      A("Ignore select character because no add character button found");
      return false;
    }
    await w(o.addImageButton, "Open select character");
    if (i(o.selectUploadCharacterType).length > 0) {
      await w(o.selectUploadCharacterType, "Click select upload character option");
    }
    const a = e.characters?.[t] ?? "";
    const s = `${o.virtuosoItemList}:first:has(div:contains("${a}"))`;
    await w(o.searchUploadedImage, "Click search input");
    const c = i(o.searchUploadedImage);
    if (c.length > 0) {
      const e = c.get(0);
      e.value = a;
      e.dispatchEvent(new Event("input", {
        bubbles: true
      }));
      await p(500);
    }
    return i(s).length > 0 && (S(`\u2705 First item contains "${a}"`), await w(`${s} img`, `Select character "${a}"`), true);
  };
  const M = async (e, t, n, r) => {
    const o = n.selectors;
    if (i(o.addImageButton).length === 0) {
      A("Ignore upload single image because no add image button found");
      return false;
    }
    document.documentElement.setAttribute("data-veo-active", "true");
    try {
      await w(o.addImageButton, `Open upload (image ${t + 1})`);
      const n = e.images?.[t];
      if (!!n && (!!n.base64.startsWith("data:video/") || !!/\.(mp4|webm|mov|avi|mkv|3gp|flv|wmv)$/i.test(n.name))) {
        if (i(o.selectUploadVideoType).length > 0) {
          await w(o.selectUploadVideoType, "Click select upload video option");
        }
      } else if (i(o.selectUploadImageType).length > 0) {
        await w(o.selectUploadImageType, "Click select upload image option");
      }
      await w(o.sortOptionsButton, "Click sort options button");
      await w(o.sortLatestOption, "Click latest option");
      const a = (e.images?.[t]?.name ?? "").replace(/\.[^/.]+$/, "");
      const s = o.firstFoundedItemSelector.replace("{filename}", a);
      await w(o.searchUploadedImage, "Click search input");
      const c = i(o.searchUploadedImage);
      if (c.length > 0) {
        const e = c.get(0);
        e.value = a;
        e.dispatchEvent(new Event("input", {
          bubbles: true
        }));
        await p(500);
      }
      if (i(s).length > 0) {
        S(`\u2705 First item contains "${a}"`);
        await w(s, `Select first founded item contain "${a}"`);
        return true;
      }
      await w(o.uploadMediaButton, "Upload image button");
      await (async (e, t) => {
        try {
          if (!e.images || e.images.length === 0) {
            A("No images provided in config");
            return false;
          }
          if (t >= e.images.length || t < 0) {
            A(`Image index ${t} out of range. Total images: ${e.images.length}`);
            return false;
          }
          const n = e.images[t];
          if (!n || !n.base64) {
            A("No image base64 provided");
            return false;
          }
          let r = "image/jpeg";
          if (n.base64.startsWith("data:")) {
            const e = n.base64.match(/^data:([^;]+);/);
            if (e) {
              r = e[1];
            }
          }
          const o = {
            base64: n.base64,
            filename: n.name,
            mimeType: r
          };
          document.dispatchEvent(new CustomEvent("VEO_UPLOAD_FILE_DATA", {
            detail: o
          }));
          return true;
        } catch (n) {
          D("Error in uploadImageFromBase64 event dispatch:", n);
          return false;
        }
      })(e, t);
      await p(2000);
      if (i(o.agreeTermUploadedVideoButton).length > 0) {
        await w(o.agreeTermUploadedVideoButton, "Agree term uploaded video button");
        await p(1000);
        await w(o.addImageButton, `Open upload (image ${t + 1})`);
        if (i(o.selectUploadVideoType).length > 0) {
          await w(o.selectUploadVideoType, "Click select upload video option");
        }
      }
      const u = 180;
      for (let e = 0; e < u; e++) {
        if (r?.()) {
          return false;
        }
        await p(1000);
        if (i(s).length > 0) {
          S(`\u2705 Select first founded item contain "${a}" after ${e + 1}s`);
          await w(s, `Select first founded item contain "${a}"`);
          return true;
        }
        S(`\u23f3 Waiting for upload... "${a}" (${e + 1}/${u}s)`);
      }
      return false;
    } finally {
      document.documentElement.removeAttribute("data-veo-active");
    }
  };
  let R = false;
  const O = async e => {
    if (!e) {
      return false;
    }
    const t = e.selectors;
    return !!R || ((await v(t.configureUIModeButton, 2000)) ? (await w(t.configureUIModeButton, "Open Configure UI Mode"), (await v(t.closeConfigureUIModeButton, 100)) && (await v(t.selectGridModeOption, 100)) && (await v(t.selectSizeGridModeOption, 100)) && (await v(t.selectShowTextModeOption, 100)) && (await v(t.selectClearPromptModeOption, 100)) ? (await w(t.selectGridModeOption, "Select Grid Mode"), await w(t.selectSizeGridModeOption, "Select Size Grid Mode"), await w(t.selectShowTextModeOption, "Select Show Text Mode"), await w(t.selectClearPromptModeOption, "Select Clear Prompt Mode"), await w(t.closeConfigureUIModeButton, "Close Configure UI Mode"), R = true, true) : (A("Could not find configure UI mode button"), false)) : (A("Could not find configure UI mode button"), false));
  };
  const N = async (e, t, n) => {
    if (!n) {
      return false;
    }
    try {
      if (t && t()) {
        return false;
      }
      if (e.outputPreviousPrompt?.extractedFrame) {
        e.mode = "imageToVideo";
        e.images ||= [];
        e.images.unshift({
          base64: e.outputPreviousPrompt.extractedFrame,
          name: `extracted-frame-${Date.now()}.jpg`
        });
        S("✅ Last frame from previous prompt injected as first image");
      }
      const r = n.selectors;
      S("Looking for video configuration button...");
      await w(r.configButton, "Configuration button");
      if (C([["mode", e.mode]], true)) {
        await w(r.selectVideoMode, "Select video mode button");
        if (e.mode === "textToVideo") {
          await w(r.textToVideoModeOption, "TextToVideo mode option");
        } else if (e.mode === "imageToVideo") {
          await w(r.imageToVideoModeOption, "ImageToVideo mode option");
        } else if (e.mode === "componentsToVideo") {
          await w(r.componentToVideoModeOption, "ComponentsToVideo mode option");
        }
      }
      if (C([["aspectRatio", e.aspectRatio]], true)) {
        S(`Looking for aspect ratio: ${e.aspectRatio}`);
        const t = r.aspectRatioTemplate.replace("{aspectRatio}", e.aspectRatio.replace(":", "_"));
        const n = await v(t);
        if (n && n.length > 0) {
          await w(t, `Aspect ratio option: ${e.aspectRatio}`);
        } else {
          A(`\u26a0\ufe0f Could not find aspect ratio option: ${e.aspectRatio}`);
        }
      }
      if (C([["outputCount", e.outputCount]], true)) {
        const t = e.outputCount;
        S(`Looking for video count: ${t}`);
        const n = r.outputCountTemplate.replace("{outputCount}", t > 1 ? `x${t}` : "1x");
        const o = await v(n);
        if (o && o.length > 0) {
          await w(n, `Video count option: ${t}`);
        } else {
          A(`\u26a0\ufe0f Could not find video count option: ${t}`);
        }
      }
      if (C([["model", e.model]], true)) {
        await w(r.modelSelectButton, "AI model select button");
        const t = r.modelTemplate.replace("{model}", e.model);
        const n = await v(t);
        if (n && n.length > 0) {
          await w(t, `Model option: ${e.model}`);
        } else {
          A(`\u26a0\ufe0f Could not find model button: ${e.model}`);
        }
      }
      if (C([["videoOption", e.videoOption]], true)) {
        const t = r.videoLengthTemplate.replace("{videoLength}", e.videoOption.split("-")[0]);
        if (i(t).length > 0) {
          await w(t, `Video length option: ${e.videoOption.split("-")[0]}`);
        }
      }
      S("Looking for configuration button to close...");
      await w(r.configButtonActived, "Close configuration button");
      if (t && t()) {
        return false;
      }
      if (C([["speaker", e.speaker]], true) && e.speaker) {
        S(`Selecting speaker: ${e.speaker}`);
        const t = await (async (e, t) => {
          const n = t.selectors;
          const r = n.addImageButton;
          await w(r, "Open speaker select");
          if (i(n.selectSpeakerType).length > 0) {
            await w(n.selectSpeakerType, "Click select speaker option");
          }
          const o = e.speaker ?? "";
          const a = `${n.virtuosoItemList}:eq(0)`;
          await w(n.searchUploadedImage, "Click search input");
          const s = i(n.searchUploadedImage);
          if (s.length > 0) {
            const e = s.get(0);
            e.value = o;
            e.dispatchEvent(new Event("input", {
              bubbles: true
            }));
            await p(500);
          }
          return i(a).length > 0 && (S(`\u2705 First item contains "${o}"`), await w(`${a} > div > div > div:eq(1)`, `Select speaker "${o}"`), true);
        })(e, n);
        if (t) {
          S(`\u2705 Speaker ${e.speaker} selected successfully`);
        } else {
          A(`\u26a0\ufe0f Failed to select speaker: ${e.speaker}`);
        }
      }
      return true;
    } catch (r) {
      D("Error in configureVideo:", r);
      return false;
    }
  };
  const L = async (e, t, n) => {
    if (!n) {
      return false;
    }
    try {
      if (t && t()) {
        return false;
      }
      const r = n.selectors;
      let o = false;
      const a = i(r.downloadDoneButton);
      S("config.outputPreviousPrompt", e.outputPreviousPrompt);
      if (e.outputPreviousPrompt?.tileIds && e.outputPreviousPrompt.tileIds.length > 0) {
        const t = r.tileEditLinkTemplate.replace("{tileId}", e.outputPreviousPrompt.tileIds[0]);
        const n = await v(t);
        if (n && n.length > 0) {
          await w(t, "Edit image");
          o = true;
        }
      } else if (a && a.length > 0) {
        await w(r.downloadDoneButton, "Exit button");
      }
      if (!o) {
        S("Looking for image configuration button...");
        await w(r.configButton, "Configuration button");
        if (C([["mode", e.mode]], true)) {
          await w(r.selectImageMode, "Select image mode button");
        }
        if (C([["aspectRatio", e.aspectRatio]], true)) {
          S(`Looking for aspect ratio: ${e.aspectRatio}`);
          const t = r.aspectRatioTemplate.replace("{aspectRatio}", e.aspectRatio.replace(":", "_"));
          const n = await v(t);
          if (n && n.length > 0) {
            await w(t, `Aspect ratio option: ${e.aspectRatio}`);
          } else {
            A(`\u26a0\ufe0f Could not find aspect ratio option: ${e.aspectRatio}`);
          }
        }
        if (C([["outputCount", e.outputCount]], true)) {
          const t = e.outputCount;
          S(`Looking for image count: ${t}`);
          const n = r.outputCountTemplate.replace("{outputCount}", t > 1 ? `x${t}` : "1x");
          const o = await v(n);
          if (o && o.length > 0) {
            await w(n, `Image count option: ${t}`);
          } else {
            A(`\u26a0\ufe0f Could not find image count option: ${t}`);
          }
        }
        if (C([["model", e.model]], true)) {
          await w(r.modelSelectButton, "AI model select button");
          const t = r.modelTemplate.replace("{model}", e.model);
          const n = await v(t);
          if (n && n.length > 0) {
            await w(t, `Model option: ${e.model}`);
          } else {
            A(`\u26a0\ufe0f Could not find model button: ${e.model}`);
          }
        }
        await w(r.configButtonActived, "Close configuration button");
        if (t && t()) {
          return false;
        }
      }
      return true;
    } catch (r) {
      D("Error in configureImage:", r);
      return false;
    }
  };
  const _ = async (e, t, n) => {
    if (!n) {
      return false;
    }
    try {
      if (t && t()) {
        return false;
      }
      const r = n.selectors;
      let o = false;
      const a = i(r.downloadDoneButton);
      S("config.outputPreviousPrompt", e.outputPreviousPrompt);
      if (e.outputPreviousPrompt?.tileIds && e.outputPreviousPrompt.tileIds.length > 0) {
        const t = r.tileEditLinkTemplate.replace("{tileId}", e.outputPreviousPrompt.tileIds[0]);
        const n = await v(t);
        if (n && n.length > 0) {
          await w(t, "Edit image");
          o = true;
        }
      } else if (a && a.length > 0) {
        await w(r.downloadDoneButton, "Exit button");
      }
      return !!o || !(S("Looking for image configuration button..."), await w(r.configButton, "Configuration button"), await w(r.neverAskAgentSettingButton, "Select never ask agent setting"), await w(r.saveAgentSettings, "Save configuration button"), t && t());
    } catch (r) {
      D("Error in configureImage:", r);
      return false;
    }
  };
  const q = async (e, t) => {
    const n = e.replace(/\.[^/.]+$/, "");
    S(`\ud83c\udfaf Selecting reference image via @ mention: ${n}`);
    const r = t.selectors;
    await h("@", "Digit2", 50);
    await p(300);
    await w(r.sortOptionsButton, "Click sort options button");
    await w(r.sortLatestOption, "Click latest option");
    await f(n);
    await p(1000);
    const o = r.firstFoundedItemSelector.replace("{filename}", n);
    await w(o, `Select first founded mentionned item "${n}"`);
    await p(500);
  };
  const B = async (e, t) => {
    S(`\ud83c\udfaf Selecting character via @ mention: ${e}`);
    const n = t.selectors;
    await h("@", "Digit2", 50);
    await p(300);
    if (i(n.selectUploadCharacterType).length > 0) {
      await w(n.selectUploadCharacterType, "Click select upload character option");
    }
    await f(e);
    await p(1000);
    await h("Enter", "Enter", 13);
    await p(500);
  };
  const F = async (e, t) => {
    try {
      const n = t.selectors;
      S("📝 Starting to fill prompt...");
      const r = await v(n.promptTextarea);
      if (!r || r.length === 0) {
        D("Could not find prompt editor (div[role='textbox'])");
        return false;
      }
      await w(n.promptTextarea, "Prompt textarea");
      await p(1000, true);
      if (e.mode === "imageToVideo" || e.outputPreviousPrompt?.extractedFrame) {
        await f(e.prompt);
      } else {
        const n = ((e, t) => {
          const n = [];
          if (!t || t.length === 0 || !e) {
            return n;
          }
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            if (!r.name) {
              continue;
            }
            const o = r.name.lastIndexOf(".");
            const a = o !== -1 ? r.name.substring(0, o) : r.name;
            if (!a) {
              continue;
            }
            const s = a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            const c = /^\w/.test(a) && /\w$/.test(a);
            const u = new RegExp(c ? `\\b${s}\\b` : s, "gi");
            let l;
            while ((l = u.exec(e)) !== null) {
              n.push({
                index: l.index,
                length: l[0].length,
                imageIndex: i
              });
            }
          }
          n.sort((e, t) => e.index - t.index);
          const r = [];
          let o = 0;
          for (const i of n) {
            if (i.index >= o) {
              r.push(i);
              o = i.index + i.length;
            }
          }
          return r;
        })(e.prompt, e.images);
        const r = ((e, t) => {
          const n = [];
          if (!t || t.length === 0 || !e) {
            return n;
          }
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            if (!r) {
              continue;
            }
            const o = r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            const a = /^\w/.test(r) && /\w$/.test(r);
            const s = new RegExp(a ? `\\b${o}\\b` : o, "gi");
            let c;
            while ((c = s.exec(e)) !== null) {
              n.push({
                index: c.index,
                length: c[0].length,
                characterIndex: i
              });
            }
          }
          n.sort((e, t) => e.index - t.index);
          const r = [];
          let o = 0;
          for (const i of n) {
            if (i.index >= o) {
              r.push(i);
              o = i.index + i.length;
            }
          }
          return r;
        })(e.prompt, e.characters);
        const o = [...n.map(e => ({
          index: e.index,
          length: e.length,
          type: "image",
          targetIndex: e.imageIndex
        })), ...r.map(e => ({
          index: e.index,
          length: e.length,
          type: "character",
          targetIndex: e.characterIndex
        }))];
        o.sort((e, t) => e.index - t.index);
        const i = [];
        let a = 0;
        for (const e of o) {
          if (e.index >= a) {
            i.push(e);
            a = e.index + e.length;
          }
        }
        if (i.length > 0) {
          S(`\ud83d\udca1 Found ${i.length} inline match(es) in prompt. Typing inline...`);
          let n = 0;
          for (const r of i) {
            const o = e.prompt.substring(n, r.index + r.length);
            if (o) {
              await f(o);
              await p(100);
            }
            await f(" ");
            await p(100);
            if (r.type === "image") {
              const n = e.images[r.targetIndex];
              await q(n.name, t);
            } else if (r.type === "character") {
              const n = e.characters[r.targetIndex];
              await B(n, t);
            }
            n = r.index + r.length;
          }
          if (n < e.prompt.length) {
            const t = e.prompt.substring(n);
            await f(t);
            await p(100);
          }
        } else {
          if (e.images && e.images.length > 0) {
            await (async (e, t) => {
              S(`\ud83c\udfaf Fallback: Mentioning all ${e.length} uploaded images at start...`);
              for (const n of e) {
                if (n.name) {
                  await q(n.name, t);
                  await f(" ");
                  await p(200);
                }
              }
            })(e.images, t);
          }
          if (e.characters && e.characters.length > 0) {
            await (async (e, t) => {
              S(`\ud83c\udfaf Fallback: Mentioning all ${e.length} characters at start...`);
              for (const n of e) {
                if (n) {
                  await B(n, t);
                  await f(" ");
                  await p(200);
                }
              }
            })(e.characters, t);
          }
          await f(e.prompt);
        }
      }
      S(`\u270d\ufe0f  Filled prompt: ${e.prompt.substring(0, 50)}...`);
      await p(1000, true);
      const o = await v(n.submitButton);
      if (!o || o.length === 0) {
        A("Could not find submit button");
        return false;
      }
      if (Math.random() < 0.2) {
        await w(n.submitButton, "Submit button");
      } else {
        await h("Enter", "Enter", 13);
      }
      if (e.outputPreviousPrompt?.tileIds && e.outputPreviousPrompt.tileIds.length > 0) {
        const e = i(n.downloadDoneButton);
        if (e && e.length > 0) {
          S("❌ Not in Last Image To Image mode, skipping configuration...");
          await w(n.downloadDoneButton, "Exit button");
        }
      }
      await p(2000);
      await (async (e, t = 30000, n = 200) => {
        const r = Date.now();
        while (Date.now() - r < t) {
          const t = i(e);
          if (!y(t)) {
            return true;
          }
          await p(n);
        }
        return false;
      })(n.stopButton, 900000);
      return true;
    } catch (n) {
      D("Error in fillFlowPrompt:", n);
      return false;
    }
  };
  const H = async (e, t, n) => {
    if (!n) {
      return {
        success: false,
        tileIds: []
      };
    }
    const r = n.selectors;
    try {
      const n = e.outputCount;
      let o = 0;
      const a = 60;
      while (o < a) {
        if (t && t()) {
          return {
            success: false,
            tileIds: []
          };
        }
        const e = [];
        const s = i(r.outputItems).slice(0, n);
        if (s.length && (s.each((t, n) => {
          const r = i(n).attr("data-tile-id");
          if (r) {
            e.push(r);
          }
        }), e.length > 0)) {
          return {
            success: true,
            tileIds: e
          };
        }
        S(`\u23f3 Waiting for tiles... attempt ${o + 1}/${a}`);
        o++;
        await p(500);
      }
      A("Could not find tile IDs");
      return {
        success: false,
        tileIds: []
      };
    } catch (o) {
      D("Error in waitForTileIds:", o);
      return {
        success: false,
        tileIds: []
      };
    }
  };
  const W = async (e, t, n, r) => {
    if (!r) {
      return {
        success: false,
        resourceElements: [],
        tileIdsError: []
      };
    }
    const o = r.selectors;
    try {
      const r = t.mode.includes("ToVideo");
      const a = t.outputCount;
      let s = 0;
      const c = 150;
      while (s < c) {
        if (n && n()) {
          return {
            success: false,
            resourceElements: [],
            tileIdsError: []
          };
        }
        const c = e.map(e => i(o.tileByIdTemplate.replace("{tileId}", e)).first()).filter(e => e.length > 0);
        if (c.length === 0) {
          S(`\u23f3 Attempt ${s + 1} - tiles not in DOM yet...`);
          s++;
          await p(2000);
          continue;
        }
        let u = [];
        let l = [];
        let d = 0;
        const f = [];
        for (let t = 0; t < c.length; t++) {
          let n = c[t];
          const r = e[t];
          let a = n.find("video").toArray();
          let s = n.find("img").toArray();
          let h = a.length > 0 || s.length > 0;
          let g = n.find("div").filter(function () {
            return /^\d+%$/.test(i(this).text().trim());
          });
          const m = n.find(o.tileOnQueue);
          let y = g.length > 0 || m.length > 0;
          for (let e = 0; e < 3 && !y && !h; e++) {
            if (e > 0) {
              await p(1000);
            }
            n = i(o.tileByIdTemplate.replace("{tileId}", r)).first();
            if (n.length !== 0) {
              a = n.find("video").toArray();
              s = n.find("img").toArray();
              h = a.length > 0 || s.length > 0;
              g = n.find("div").filter(function () {
                return /^\d+%$/.test(i(this).text().trim());
              });
              y = g.length > 0;
            }
          }
          if (y || h) {
            if (y) {
              const e = g.first().text().trim().match(/^(\d+)%$/);
              if (e) {
                d += parseInt(e[1], 10);
              }
            } else if (h) {
              u = u.concat(a);
              l = l.concat(s);
              d += 100;
            }
          } else {
            S(`\u26a0\ufe0f Tile ${t + 1} error (no % and no image/video after 3 retries): ${r}`);
            f.push(r);
          }
        }
        const h = Math.round(d / c.length);
        const g = (r ? u : l).slice(0, a);
        const m = g.length + f.length;
        S(`\u23f3 Generation: ${h}% \u2014 ${g.length}/${a} ready${f.length > 0 ? `, ${f.length} tile(s) error (no % and no resource)` : ""}`);
        if (m >= a) {
          try {
            chrome.runtime.sendMessage({
              type: "VIDEO_GENERATION_PROGRESS",
              data: {
                groupId: t.groupId,
                promptIndex: t.promptIndex,
                percentage: 100,
                status: "completed",
                prompt: t.prompt
              }
            }).catch(() => {});
          } catch {}
          return {
            success: true,
            resourceElements: g,
            tileIdsError: f
          };
        }
        try {
          chrome.runtime.sendMessage({
            type: "VIDEO_GENERATION_PROGRESS",
            data: {
              groupId: t.groupId,
              promptIndex: t.promptIndex,
              percentage: h,
              status: "generating",
              prompt: t.prompt
            }
          }).catch(() => {});
        } catch {}
        await p(2000);
        s++;
      }
      A("Generation did not complete within timeout");
      return {
        success: false,
        resourceElements: [],
        tileIdsError: []
      };
    } catch (a) {
      D("Error in waitForResourcesInTiles:", a);
      return {
        success: false,
        resourceElements: [],
        tileIdsError: []
      };
    }
  };
  const U = async (e, t, n, r) => {
    if (!r) {
      return {
        success: false
      };
    }
    const o = r.selectors;
    try {
      const c = await W(e, t, n, r);
      if (!c.success) {
        if (n && n()) {
          return {
            success: false,
            cancelled: true
          };
        } else {
          A(`\u26a0\ufe0f Prompt generation failed for prompt ${t.promptIndex}, skipping download`);
          return {
            success: false,
            error: "Prompt generation failed"
          };
        }
      }
      const u = c.tileIdsError || [];
      const l = e.filter(e => !u.includes(e));
      if (l.length === 0) {
        A(`\u26a0\ufe0f All tiles have warning for prompt ${t.promptIndex}, need retry`);
        await chrome.runtime.sendMessage({
          type: "CS"
        }).catch(() => {});
        await p(3000);
        await w(o.openProfileInfoButton, "Open profile info");
        await w(o.closeProfileInfoButton, "Exit button");
        return {
          success: false,
          error: "Prompt generation failed"
        };
      }
      if (u.length > 0) {
        S(`\u26a0\ufe0f Filtered ${u.length} error tile(s) for prompt ${t.promptIndex}: [${u.join(", ")}]`);
      }
      const d = async () => {
        if (t.isConcat && t.mode.includes("ToVideo")) {
          const e = c.resourceElements;
          if (e.length > 0) {
            const t = await T(e);
            if (t) {
              return {
                extractedFrame: t
              };
            }
          }
          return {};
        }
        if (t.isConcat && t.mode.includes("ToImage")) {
          return {
            nextPromptEditImage: true,
            tileIds: l
          };
        } else {
          return {};
        }
      };
      if (t.autoDownloadResourceQuality === "no-download") {
        S(`\ud83d\udce5 Skipping download for prompt ${t.promptIndex} (no-download)`);
        return {
          success: true,
          ...(await d())
        };
      }
      const f = String(t.promptIndex).padStart(3, "0");
      const h = `${f}_${E(t.prompt)}_`;
      const g = t.folderName.trim();
      chrome.runtime.sendMessage({
        type: "SET_FOLDER_NAME",
        folderName: g,
        prefix: h,
        autoChangeFileName: t.autoChangeFileName !== false
      });
      S(`\ud83d\udcc1 Download folder set: ${g || "(default)"}`);
      const y = l.map(e => i(o.tileByIdTemplate.replace("{tileId}", e)).first()).filter(e => e.length > 0).map(e => e[0]);
      if (t.autoDownloadResourceQuality === "1080" || t.autoDownloadResourceQuality === "2k" || t.autoDownloadResourceQuality === "4k") {
        let e;
        S(`\ud83d\udce5 Downloading prompt ${t.promptIndex} in ${t.autoDownloadResourceQuality} (${y.length} tile(s))...`);
        switch (t.autoDownloadResourceQuality) {
          case "2k":
            e = o.quality2KOption;
            break;
          case "4k":
            e = o.quality4KOption;
            break;
          default:
            e = o.quality1080Option;
        }
        const r = t.maxRetries ?? 3;
        for (let i = 0; i < y.length; i++) {
          if (n && n()) {
            return {
              success: false,
              cancelled: true
            };
          }
          const s = l[i];
          let c = false;
          for (let u = 1; u <= r; u++) {
            if (n && n()) {
              return {
                success: false,
                cancelled: true
              };
            }
            try {
              S(`\ud83d\udce5 Tile ${i + 1}/${y.length} [${s}]: trying to download... (attempt ${u}/${r})`);
              const n = o.tileByIdTemplate.replace("{tileId}", s);
              await m(n, `Tile ${i + 1} [${s}] hover tile`);
              if (await v(`${n} ${o.moreOptionsButtonInHoverTile}`)) {
                await w(`${n} ${o.moreOptionsButtonInHoverTile}`, `Tile ${i + 1} download button`);
              }
              if (await v(o.downloadButtonInHoverTile)) {
                await m(o.downloadButtonInHoverTile, `Tile ${i + 1} download button`);
              }
              await w(e, `Tile ${i + 1}: ${t.autoDownloadResourceQuality} option`);
              S(`\u2705 Tile ${i + 1}: ${t.autoDownloadResourceQuality} download initiated`);
              c = true;
              break;
            } catch (a) {
              A(`\u26a0\ufe0f Tile ${i + 1} [${s}] attempt ${u}/${r} failed:`, a);
              if (u < r) {
                await p(1000);
              }
            }
          }
          if (!c) {
            D(`\u274c Tile ${i + 1} [${s}]: all ${r} attempts failed, skipping`);
          }
        }
        return {
          success: true,
          ...(await d())
        };
      }
      const x = c.resourceElements;
      const b = t.mode.includes("ToVideo");
      S(`\ud83d\udce5 Downloading ${x.length} resource(s) for prompt ${t.promptIndex}...`);
      const C = "abcdefghijklmnopqrstuvwxyz".split("");
      for (let e = 0; e < x.length; e++) {
        if (n && n()) {
          S("❌ Resource download cancelled");
          return {
            success: false,
            cancelled: true
          };
        }
        const r = x[e].src;
        if (!r) {
          A(`\u26a0\ufe0f Resource ${e + 1} has no src, skipping...`);
          continue;
        }
        const o = C[e] || `_${e + 1}`;
        S(`\ud83d\udcf9 Resource ${t.promptIndex}${o}: ${r.substring(0, 100)}...`);
        try {
          const e = t.autoChangeFileName !== false;
          let n;
          let i;
          if (e) {
            const e = E(t.prompt);
            const r = b ? "mp4" : "png";
            n = `${f}_${e}${x.length > 1 ? `_${o}` : ""}.${r}`;
            i = t.folderName.trim();
          } else {
            n = new URL(r).pathname.split("/").pop() || `${f}_resource_${o}.png`;
            i = "";
          }
          const a = await chrome.runtime.sendMessage({
            type: "DOWNLOAD_VIDEO",
            url: r,
            filename: n,
            folder: i,
            autoChangeFileName: e
          }).then(e => e || {
            success: false,
            error: "No response from background script"
          }).catch(e => ({
            success: false,
            error: e.message || String(e)
          }));
          if (!a.success) {
            throw new Error(a.error || "Failed to initiate download");
          }
          S(`\u2705 Resource ${t.promptIndex}${o} downloaded to ${i}/${n}`);
          await p(500);
        } catch (s) {
          D(`\u274c Error downloading resource ${t.promptIndex}${o}:`, s);
        }
      }
      S("✅ All resources downloaded successfully");
      return {
        success: true,
        ...(await d())
      };
    } catch (a) {
      D("Error in downloadFromTileIds:", a);
      return {
        success: false
      };
    }
  };
  function V(e, t) {
    if (t === 0) {
      return true;
    }
    const n = t - 1;
    if (e.payloads[t - 1].isConcat) {
      const t = e.completedPromptIndexes.has(n);
      return t;
    }
    return true;
  }
  function G(e, t) {
    for (let n = 0; n < e.pendingIndexes.length; n++) {
      const t = e.pendingIndexes[n];
      if (V(e, t)) {
        e.pendingIndexes.splice(n, 1);
        return t;
      }
    }
    return null;
  }
  const z = e => new Promise(t => setTimeout(t, e));
  async function X(e, t, n, r) {
    Math.random().toString(36).slice(2, 6);
    while (true) {
      if (e.isCancelling) {
        return;
      }
      if (e.processedCount >= e.totalCount) {
        return;
      }
      if (n.filter(t => t.id === e.id).length >= e.concurrentPrompts) {
        await z(500);
        continue;
      }
      const i = G(e);
      if (i === null) {
        if (e.processedCount >= e.totalCount) {
          return;
        }
        await z(500);
        continue;
      }
      const a = e.payloads[i] || {};
      const s = {
        ...a
      };
      const c = s.promptIndex;
      const u = e.promptDelaySecondsMin ?? 0;
      const l = e.promptDelaySecondsMax ?? u;
      if (i > 0 && l > 0) {
        const t = u >= l ? u : u + Math.random() * (l - u);
        let n = 0;
        while (n < t * 1000) {
          await z(1000);
          n += 1000;
          if (e.isCancelling) {
            return;
          }
        }
      }
      try {
        const o = e.retryCountByIndex[i] || 0;
        e.currentPromptIndex = i;
        r(e);
        const u = await $(s, () => !!e.isCancelling, t);
        e.currentPromptIndex = undefined;
        if (!u.success && !u.cancelled) {
          if (o < (s.maxRetries ?? 5)) {
            e.currentPromptIndex = undefined;
            e.retryCountByIndex[i] = (e.retryCountByIndex[i] || 0) + 1;
            e.retryCountByIndex[i];
            if (!e.pendingIndexes.includes(i)) {
              e.pendingIndexes.unshift(i);
            }
            r(e);
            continue;
          }
        }
        e.completedPromptIndexes.add(i);
        e.results.push({
          index: i,
          promptIndex: c,
          success: u.success,
          downloadComplete: false,
          steps: u.steps,
          error: u.error,
          cancelled: !!e.isCancelling
        });
        if (u.success && u.tileIds && u.tileIds.length > 0) {
          const t = (e.downloadRetryCountByIndex || {})[i] || 0;
          const r = {
            tileIds: u.tileIds,
            config: {
              ...a
            },
            promptIndex: a.promptIndex,
            index: i,
            retryCount: t
          };
          e.downloadItems.push(r);
          n.push({
            id: e.id,
            items: [r],
            status: "queued",
            isCancelling: !!e.isCancelling
          });
        }
        e.processedCount += 1;
        r(e);
        u.success;
        if (e.isCancelling) {
          return;
        }
      } catch (o) {
        e.currentPromptIndex = undefined;
        e.completedPromptIndexes.add(i);
        e.results.push({
          index: i,
          promptIndex: c,
          success: false,
          downloadComplete: true,
          error: o instanceof Error ? o.message : "Unknown error"
        });
        e.processedCount += 1;
        r(e);
        if (e.isCancelling) {
          return;
        }
      }
    }
  }
  function Q(e, t, n, r) {
    const o = n.find(e => e.id === t);
    if (!o) {
      return;
    }
    const i = e.index ?? e.config?.promptIndex ?? 0;
    const a = o.results.find(e => e.index === i);
    if (a) {
      a.downloadComplete = true;
    }
    r(o);
  }
  function Y(e, t, n, r, o) {
    const i = e.index ?? e.config?.promptIndex ?? 0;
    const a = n.find(e => e.id === t);
    if (a) {
      a.results = a.results.filter(e => e.index !== i);
      a.results.push({
        index: i,
        promptIndex: e.config?.promptIndex ?? i,
        success: false,
        downloadComplete: true,
        error: o || "Download failed"
      });
      r(a);
    }
  }
  function J(e, t, n, r) {
    const o = e.config?.maxRetries ?? 5;
    const i = e.retryCount ?? 0;
    const a = e.index ?? e.config?.promptIndex ?? 0;
    const s = n.find(e => e.id === t);
    if (i < o && s && s.status === "running") {
      s.downloadRetryCountByIndex = s.downloadRetryCountByIndex || {};
      s.downloadRetryCountByIndex[a] = (s.downloadRetryCountByIndex[a] || 0) + 1;
      s.results = s.results.filter(e => e.index !== a);
      s.completedPromptIndexes.delete(a);
      s.processedCount = Math.max(0, s.processedCount - 1);
      if (!s.pendingIndexes.includes(a)) {
        s.pendingIndexes.unshift(a);
      }
      r(s);
      return;
    }
    if (s) {
      s.results = s.results.filter(e => e.index !== a);
      s.results.push({
        index: a,
        promptIndex: e.config?.promptIndex ?? a,
        success: false,
        downloadComplete: true,
        error: `Exceeded maxRetries (${o})`
      });
      s.completedPromptIndexes.add(a);
      r(s);
    }
  }
  const K = e => new Promise(t => setTimeout(t, e));
  const Z = [];
  const ee = [];
  let te = null;
  const ne = e => {
    try {
      chrome.runtime.sendMessage({
        type: "SET_ZOOM",
        zoomFactor: e
      }).catch(() => {});
    } catch {}
  };
  const re = e => {
    try {
      chrome.runtime.sendMessage({
        type: "PROMPT_GROUP_STATUS",
        data: {
          id: e.id,
          status: e.status,
          processedCount: e.processedCount,
          totalCount: e.totalCount,
          createdAt: e.createdAt,
          isCancelling: !!e.isCancelling,
          isActive: te === e.id,
          delayRemainingSeconds: e.delayRemainingSeconds,
          results: e.results.map(e => ({
            index: e.index,
            promptIndex: e.promptIndex,
            success: e.success,
            downloadComplete: e.downloadComplete,
            error: e.error
          })),
          currentPromptIndex: e.currentPromptIndex,
          promptPreviews: e.payloads.map(e => (e?.prompt || "").toString().substring(0, 60)),
          promptIndices: e.payloads.map(e => e.promptIndex),
          retryCountByIndex: {
            ...e.retryCountByIndex
          },
          downloadRetryCountByIndex: {
            ...(e.downloadRetryCountByIndex || {})
          }
        }
      }).catch(() => {});
    } catch {}
  };
  async function oe(e) {
    const t = await new Promise(e => {
      chrome.runtime.sendMessage({
        type: "GET_REMOTE_CONFIG"
      }, t => e(t ?? null));
    });
    if (!t) {
      e.status = "error";
      re(e);
      Z.shift();
      e.sendResponse({
        success: false,
        error: "Cannot connect to server. Extension may be unauthorized.",
        results: []
      });
      te = null;
      ne(1);
      return;
    }
    while (true) {
      if (e.isCancelling) {
        e.status = "cancelled";
        const t = e.results;
        Z.shift();
        re(e);
        e.sendResponse({
          success: false,
          cancelled: true,
          results: t
        });
        te = null;
        ne(1);
        return;
      }
      if (e.pendingIndexes.length > 0) {
        const n = [];
        for (let r = 0; r < 1; r++) {
          n.push(X(e, t, ee, re).catch(e => {}));
        }
        await Promise.all(n);
      }
      while (ee.some(t => t.id === e.id)) {
        await K(200);
      }
      if (e.pendingIndexes.length === 0) {
        e.status = "completed";
        const t = e.results.every(e => e.success);
        const n = e.results;
        Z.shift();
        re(e);
        e.sendResponse({
          success: t,
          results: n
        });
        te = null;
        ne(1);
        return;
      }
    }
  }
  const ie = "/assets/catchUploadFile.ts-DJwIizxX.js";
  (() => {
    const e = document.createElement("script");
    e.src = chrome.runtime.getURL(ie);
    e.type = "module";
    (document.head || document.documentElement).appendChild(e);
    e.remove();
  })();
  try {
    chrome.runtime.sendMessage({
      type: "CONTENT_SCRIPT_RESET"
    }).catch(() => {});
  } catch {}
  self.onerror = function (e, t, n, r, o) {};
  if (window.location.href.includes("labs.google")) {
    chrome.runtime.sendMessage({
      type: "SET_ZOOM",
      zoomFactor: 0.8
    });
  }
  const ae = {};
  const se = {};
  function ce(e, t) {
    const {
      payloads: n,
      groupId: r,
      concurrentPrompts: o,
      promptDelaySecondsMin: i,
      promptDelaySecondsMax: a
    } = e;
    ((e, t, n, r, o, i) => {
      const a = t || `group-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const s = {
        id: a,
        payloads: e.map(e => ({
          ...e,
          groupId: a
        })),
        concurrentPrompts: n || 2,
        promptDelaySecondsMin: r || 0,
        promptDelaySecondsMax: o || 0,
        sendResponse: i,
        status: "queued",
        createdAt: Date.now(),
        processedCount: 0,
        totalCount: e.length,
        isCancelling: false,
        results: [],
        pendingIndexes: e.map((e, t) => t),
        completedPromptIndexes: new Set(),
        retryCountByIndex: {},
        downloadRetryCountByIndex: {},
        downloadItems: []
      };
      Z.push(s);
      re(s);
    })(n.map(e => {
      if (e.imageIds && Array.isArray(e.imageIds)) {
        const t = e.imageIds.map(e => ae[e]).filter(Boolean);
        return {
          ...e,
          images: t
        };
      }
      return e;
    }), r, o, i, a, t);
    t({
      success: true
    });
  }
  chrome.runtime.onMessage.addListener((e, t, n) => {
    switch (e.type) {
      case "PREPARE_IMAGE":
        (function (e, t) {
          const {
            id: n,
            data: r
          } = e;
          if (n && r) {
            ae[n] = r;
            t({
              success: true
            });
          } else {
            t({
              success: false,
              error: "Missing image ID or data"
            });
          }
        })(e, n);
        return true;
      case "PREPARE_IMAGE_CHUNK":
        (function (e, t) {
          const {
            id: n,
            chunk: r,
            chunkIndex: o,
            totalChunks: i
          } = e;
          const a = `img-${n}`;
          se[a] ||= {
            chunks: Array(i).fill(""),
            totalChunks: i,
            options: {}
          };
          const s = se[a];
          s.chunks[o] = r;
          const c = s.chunks.filter(e => e !== "").length;
          if (c === i) {
            try {
              const e = JSON.parse(s.chunks.join(""));
              ae[n] = e;
              delete se[a];
              t({
                success: true
              });
            } catch (u) {
              t({
                success: false,
                error: "Failed to parse image chunks"
              });
            }
          } else {
            t({
              success: true,
              chunkReceived: true,
              receivedCount: c,
              totalChunks: i
            });
          }
        })(e, n);
        return true;
      case "AUTO_FILL_FLOW":
        ce(e, n);
        return true;
      case "CANCEL_PROMPT_GROUP":
        n((e => {
          const t = Z.findIndex(t => t.id === e);
          if (t === -1) {
            return {
              success: false,
              error: "Prompt group not found"
            };
          }
          const n = Z[t];
          if (n.status === "queued") {
            n.status = "cancelled";
            Z.splice(t, 1);
            re(n);
            n.sendResponse({
              success: false,
              cancelled: true,
              results: []
            });
            return {
              success: true,
              cancelled: true
            };
          } else if (n.status === "running") {
            n.isCancelling = true;
            re(n);
            ee.filter(t => t.id === e).forEach(e => e.isCancelling = true);
            return {
              success: true,
              cancelling: true
            };
          } else {
            return {
              success: false,
              error: "Prompt group is already finished"
            };
          }
        })(e.groupId));
        return true;
      case "CHECK_FLOW_PAGE":
        n({
          isFlowPage: window.location.href.includes("labs.google") && window.location.href.includes("flow")
        });
        return true;
      case "SCAN_CHARACTERS":
        (async function () {
          const e = await new Promise(e => {
            chrome.runtime.sendMessage({
              type: "GET_REMOTE_CONFIG"
            }, t => e(t ?? null));
          });
          if (!e) {
            return [];
          }
          if (i(e.selectors.charactersTabButton).length > 0) {
            await w(e.selectors.charactersTabButton, "Click characters tab");
            await v(e.selectors.charactersNameSelector);
            return i(e.selectors.charactersNameSelector).map((e, t) => i(t).attr("alt") || i(t).text() || "").get();
          }
          return [];
        })().then(e => n({
          characters: e
        }));
        return true;
      default:
        return true;
    }
  });
  (async () => {
    while (true) {
      if (Z.length === 0) {
        await K(1000);
        continue;
      }
      const t = Z[0];
      if (t) {
        if (t.status !== "cancelled") {
          te = t.id;
          t.status = "running";
          re(t);
          ne(0.5);
          try {
            await oe(t);
          } catch (e) {
            t.status = "error";
            re(t);
            t.sendResponse({
              success: false,
              error: e instanceof Error ? e.message : "Unknown error"
            });
            ne(1);
          }
          if (Z.length === 0) {
            await g();
          }
        } else {
          Z.shift();
          re(t);
          t.sendResponse({
            success: false,
            cancelled: true,
            results: []
          });
        }
      }
    }
  })();
  (async () => {
    while (true) {
      if (ee.length === 0) {
        await K(1000);
        continue;
      }
      const e = ee[0];
      if (!e) {
        continue;
      }
      e.status = "running";
      const t = await chrome.runtime.sendMessage({
        type: "GET_REMOTE_CONFIG"
      }).then(e => e ?? null).catch(() => null);
      if (t) {
        for (const n of e.items) {
          if (e.isCancelling) {
            break;
          }
          const r = await U(n.tileIds, n.config, () => e.isCancelling, t);
          if (r.success) {
            if (r.extractedFrame !== undefined || r.nextPromptEditImage !== undefined || r.tileIds !== undefined) {
              const t = Z.find(t => t.id === e.id);
              if (t) {
                const e = (n.index ?? n.config?.promptIndex ?? 0) + 1;
                if (e < t.payloads.length) {
                  t.payloads[e] = {
                    ...t.payloads[e],
                    outputPreviousPrompt: {
                      extractedFrame: r.extractedFrame,
                      nextPromptEditImage: r.nextPromptEditImage,
                      tileIds: r.tileIds
                    }
                  };
                }
              }
            }
            Q(n, e.id, Z, re);
            await chrome.runtime.sendMessage({
              type: "CS"
            }).catch(() => {});
          } else if (r.cancelled) {
            Y(n, e.id, Z, re, r.error ?? "Download failed");
          } else {
            J(n, e.id, Z, re);
          }
        }
        e.status = "completed";
        ee.shift();
      } else {
        ee.shift();
      }
    }
  })();
})();