import Er, {
  useRef as Mr,
  useMemo as Te,
  useCallback as m,
  useEffect as Lr,
  useState as me,
} from 'react';
var G =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  w = { exports: {} },
  L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function jr() {
  if (Oe) return L;
  Oe = 1;
  var e = Er,
    r = Symbol.for('react.element'),
    t = Symbol.for('react.fragment'),
    a = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, f) {
    var c,
      l = {},
      v = null,
      h = null;
    f !== void 0 && (v = '' + f),
      u.key !== void 0 && (v = '' + u.key),
      u.ref !== void 0 && (h = u.ref);
    for (c in u) a.call(u, c) && !n.hasOwnProperty(c) && (l[c] = u[c]);
    if (o && o.defaultProps)
      for (c in ((u = o.defaultProps), u)) l[c] === void 0 && (l[c] = u[c]);
    return {
      $$typeof: r,
      type: o,
      key: v,
      ref: h,
      props: l,
      _owner: i.current,
    };
  }
  return (L.Fragment = t), (L.jsx = s), (L.jsxs = s), L;
}
(function (e) {
  e.exports = jr();
})(w);
function $v(e, r, t = 0) {
  if (!r) {
    e.scrollTop = 0;
    return;
  }
  const a = [];
  let i = r.offsetParent;
  for (; i && e !== i && e.contains(i); ) a.push(i), (i = i.offsetParent);
  const n = r.offsetTop + a.reduce((s, o) => s + o.offsetTop, 0);
  (e.scrollTop = n + t), r.click();
}
var sr = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function (e) {
  (function () {
    var r = {}.hasOwnProperty;
    function t() {
      for (var a = [], i = 0; i < arguments.length; i++) {
        var n = arguments[i];
        if (!!n) {
          var s = typeof n;
          if (s === 'string' || s === 'number') a.push(n);
          else if (Array.isArray(n)) {
            if (n.length) {
              var o = t.apply(null, n);
              o && a.push(o);
            }
          } else if (s === 'object')
            if (n.toString === Object.prototype.toString)
              for (var u in n) r.call(n, u) && n[u] && a.push(u);
            else a.push(n.toString());
        }
      }
      return a.join(' ');
    }
    e.exports ? ((t.default = t), (e.exports = t)) : (window.classNames = t);
  })();
})(sr);
const ce = sr.exports;
var Dr = typeof G == 'object' && G && G.Object === Object && G,
  or = Dr,
  Rr = or,
  Nr = typeof self == 'object' && self && self.Object === Object && self,
  Fr = Rr || Nr || Function('return this')(),
  T = Fr,
  Br = T,
  Gr = Br.Symbol,
  D = Gr,
  Se = D,
  ur = Object.prototype,
  Hr = ur.hasOwnProperty,
  Ur = ur.toString,
  j = Se ? Se.toStringTag : void 0;
function Kr(e) {
  var r = Hr.call(e, j),
    t = e[j];
  try {
    e[j] = void 0;
    var a = !0;
  } catch {}
  var i = Ur.call(e);
  return a && (r ? (e[j] = t) : delete e[j]), i;
}
var qr = Kr,
  zr = Object.prototype,
  Wr = zr.toString;
function Jr(e) {
  return Wr.call(e);
}
var Yr = Jr,
  we = D,
  Xr = qr,
  Zr = Yr,
  kr = '[object Null]',
  Qr = '[object Undefined]',
  Ce = we ? we.toStringTag : void 0;
function Vr(e) {
  return e == null
    ? e === void 0
      ? Qr
      : kr
    : Ce && Ce in Object(e)
    ? Xr(e)
    : Zr(e);
}
var R = Vr;
function et(e) {
  var r = typeof e;
  return e != null && (r == 'object' || r == 'function');
}
var q = et,
  rt = R,
  tt = q,
  at = '[object AsyncFunction]',
  nt = '[object Function]',
  it = '[object GeneratorFunction]',
  st = '[object Proxy]';
function ot(e) {
  if (!tt(e)) return !1;
  var r = rt(e);
  return r == nt || r == it || r == at || r == st;
}
var fr = ot,
  ut = T,
  ft = ut['__core-js_shared__'],
  ct = ft,
  V = ct,
  Pe = (function () {
    var e = /[^.]+$/.exec((V && V.keys && V.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function lt(e) {
  return !!Pe && Pe in e;
}
var vt = lt,
  pt = Function.prototype,
  _t = pt.toString;
function ht(e) {
  if (e != null) {
    try {
      return _t.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var cr = ht,
  $t = fr,
  gt = vt,
  dt = q,
  yt = cr,
  bt = /[\\^$.*+?()[\]{}|]/g,
  At = /^\[object .+?Constructor\]$/,
  Tt = Function.prototype,
  mt = Object.prototype,
  Ot = Tt.toString,
  St = mt.hasOwnProperty,
  wt = RegExp(
    '^' +
      Ot.call(St)
        .replace(bt, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  );
function Ct(e) {
  if (!dt(e) || gt(e)) return !1;
  var r = $t(e) ? wt : At;
  return r.test(yt(e));
}
var Pt = Ct;
function xt(e, r) {
  return e == null ? void 0 : e[r];
}
var It = xt,
  Et = Pt,
  Mt = It;
function Lt(e, r) {
  var t = Mt(e, r);
  return Et(t) ? t : void 0;
}
var C = Lt,
  jt = C,
  Dt = jt(Object, 'create'),
  z = Dt,
  xe = z;
function Rt() {
  (this.__data__ = xe ? xe(null) : {}), (this.size = 0);
}
var Nt = Rt;
function Ft(e) {
  var r = this.has(e) && delete this.__data__[e];
  return (this.size -= r ? 1 : 0), r;
}
var Bt = Ft,
  Gt = z,
  Ht = '__lodash_hash_undefined__',
  Ut = Object.prototype,
  Kt = Ut.hasOwnProperty;
function qt(e) {
  var r = this.__data__;
  if (Gt) {
    var t = r[e];
    return t === Ht ? void 0 : t;
  }
  return Kt.call(r, e) ? r[e] : void 0;
}
var zt = qt,
  Wt = z,
  Jt = Object.prototype,
  Yt = Jt.hasOwnProperty;
function Xt(e) {
  var r = this.__data__;
  return Wt ? r[e] !== void 0 : Yt.call(r, e);
}
var Zt = Xt,
  kt = z,
  Qt = '__lodash_hash_undefined__';
function Vt(e, r) {
  var t = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (t[e] = kt && r === void 0 ? Qt : r),
    this
  );
}
var ea = Vt,
  ra = Nt,
  ta = Bt,
  aa = zt,
  na = Zt,
  ia = ea;
function P(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = ra;
P.prototype.delete = ta;
P.prototype.get = aa;
P.prototype.has = na;
P.prototype.set = ia;
var sa = P;
function oa() {
  (this.__data__ = []), (this.size = 0);
}
var ua = oa;
function fa(e, r) {
  return e === r || (e !== e && r !== r);
}
var le = fa,
  ca = le;
function la(e, r) {
  for (var t = e.length; t--; ) if (ca(e[t][0], r)) return t;
  return -1;
}
var W = la,
  va = W,
  pa = Array.prototype,
  _a = pa.splice;
function ha(e) {
  var r = this.__data__,
    t = va(r, e);
  if (t < 0) return !1;
  var a = r.length - 1;
  return t == a ? r.pop() : _a.call(r, t, 1), --this.size, !0;
}
var $a = ha,
  ga = W;
function da(e) {
  var r = this.__data__,
    t = ga(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var ya = da,
  ba = W;
function Aa(e) {
  return ba(this.__data__, e) > -1;
}
var Ta = Aa,
  ma = W;
function Oa(e, r) {
  var t = this.__data__,
    a = ma(t, e);
  return a < 0 ? (++this.size, t.push([e, r])) : (t[a][1] = r), this;
}
var Sa = Oa,
  wa = ua,
  Ca = $a,
  Pa = ya,
  xa = Ta,
  Ia = Sa;
function x(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
x.prototype.clear = wa;
x.prototype.delete = Ca;
x.prototype.get = Pa;
x.prototype.has = xa;
x.prototype.set = Ia;
var J = x,
  Ea = C,
  Ma = T,
  La = Ea(Ma, 'Map'),
  ve = La,
  Ie = sa,
  ja = J,
  Da = ve;
function Ra() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Ie(),
      map: new (Da || ja)(),
      string: new Ie(),
    });
}
var Na = Ra;
function Fa(e) {
  var r = typeof e;
  return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
var Ba = Fa,
  Ga = Ba;
function Ha(e, r) {
  var t = e.__data__;
  return Ga(r) ? t[typeof r == 'string' ? 'string' : 'hash'] : t.map;
}
var Y = Ha,
  Ua = Y;
function Ka(e) {
  var r = Ua(this, e).delete(e);
  return (this.size -= r ? 1 : 0), r;
}
var qa = Ka,
  za = Y;
function Wa(e) {
  return za(this, e).get(e);
}
var Ja = Wa,
  Ya = Y;
function Xa(e) {
  return Ya(this, e).has(e);
}
var Za = Xa,
  ka = Y;
function Qa(e, r) {
  var t = ka(this, e),
    a = t.size;
  return t.set(e, r), (this.size += t.size == a ? 0 : 1), this;
}
var Va = Qa,
  en = Na,
  rn = qa,
  tn = Ja,
  an = Za,
  nn = Va;
function I(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
I.prototype.clear = en;
I.prototype.delete = rn;
I.prototype.get = tn;
I.prototype.has = an;
I.prototype.set = nn;
var pe = I,
  sn = '__lodash_hash_undefined__';
function on(e) {
  return this.__data__.set(e, sn), this;
}
var un = on;
function fn(e) {
  return this.__data__.has(e);
}
var cn = fn,
  ln = pe,
  vn = un,
  pn = cn;
function U(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.__data__ = new ln(); ++r < t; ) this.add(e[r]);
}
U.prototype.add = U.prototype.push = vn;
U.prototype.has = pn;
var lr = U;
function _n(e, r, t, a) {
  for (var i = e.length, n = t + (a ? 1 : -1); a ? n-- : ++n < i; )
    if (r(e[n], n, e)) return n;
  return -1;
}
var hn = _n;
function $n(e) {
  return e !== e;
}
var gn = $n;
function dn(e, r, t) {
  for (var a = t - 1, i = e.length; ++a < i; ) if (e[a] === r) return a;
  return -1;
}
var yn = dn,
  bn = hn,
  An = gn,
  Tn = yn;
function mn(e, r, t) {
  return r === r ? Tn(e, r, t) : bn(e, An, t);
}
var On = mn,
  Sn = On;
function wn(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && Sn(e, r, 0) > -1;
}
var Cn = wn;
function Pn(e, r, t) {
  for (var a = -1, i = e == null ? 0 : e.length; ++a < i; )
    if (t(r, e[a])) return !0;
  return !1;
}
var xn = Pn;
function In(e, r) {
  return e.has(r);
}
var vr = In,
  En = C,
  Mn = T,
  Ln = En(Mn, 'Set'),
  pr = Ln;
function jn() {}
var Dn = jn;
function Rn(e) {
  var r = -1,
    t = Array(e.size);
  return (
    e.forEach(function (a) {
      t[++r] = a;
    }),
    t
  );
}
var _e = Rn,
  ee = pr,
  Nn = Dn,
  Fn = _e,
  Bn = 1 / 0,
  Gn =
    ee && 1 / Fn(new ee([, -0]))[1] == Bn
      ? function (e) {
          return new ee(e);
        }
      : Nn,
  Hn = Gn,
  Un = lr,
  Kn = Cn,
  qn = xn,
  zn = vr,
  Wn = Hn,
  Jn = _e,
  Yn = 200;
function Xn(e, r, t) {
  var a = -1,
    i = Kn,
    n = e.length,
    s = !0,
    o = [],
    u = o;
  if (t) (s = !1), (i = qn);
  else if (n >= Yn) {
    var f = r ? null : Wn(e);
    if (f) return Jn(f);
    (s = !1), (i = zn), (u = new Un());
  } else u = r ? [] : o;
  e: for (; ++a < n; ) {
    var c = e[a],
      l = r ? r(c) : c;
    if (((c = t || c !== 0 ? c : 0), s && l === l)) {
      for (var v = u.length; v--; ) if (u[v] === l) continue e;
      r && u.push(l), o.push(c);
    } else i(u, l, t) || (u !== o && u.push(l), o.push(c));
  }
  return o;
}
var Zn = Xn,
  kn = Zn;
function Qn(e) {
  return e && e.length ? kn(e) : [];
}
var Vn = Qn;
function ei(e, r) {
  for (var t = -1, a = r.length, i = e.length; ++t < a; ) e[i + t] = r[t];
  return e;
}
var _r = ei;
function ri(e) {
  return e != null && typeof e == 'object';
}
var N = ri,
  ti = R,
  ai = N,
  ni = '[object Arguments]';
function ii(e) {
  return ai(e) && ti(e) == ni;
}
var si = ii,
  Ee = si,
  oi = N,
  hr = Object.prototype,
  ui = hr.hasOwnProperty,
  fi = hr.propertyIsEnumerable,
  ci = Ee(
    (function () {
      return arguments;
    })(),
  )
    ? Ee
    : function (e) {
        return oi(e) && ui.call(e, 'callee') && !fi.call(e, 'callee');
      },
  he = ci,
  li = Array.isArray,
  b = li,
  Me = D,
  vi = he,
  pi = b,
  Le = Me ? Me.isConcatSpreadable : void 0;
function _i(e) {
  return pi(e) || vi(e) || !!(Le && e && e[Le]);
}
var hi = _i,
  $i = _r,
  gi = hi;
function $r(e, r, t, a, i) {
  var n = -1,
    s = e.length;
  for (t || (t = gi), i || (i = []); ++n < s; ) {
    var o = e[n];
    r > 0 && t(o)
      ? r > 1
        ? $r(o, r - 1, t, a, i)
        : $i(i, o)
      : a || (i[i.length] = o);
  }
  return i;
}
var di = $r;
function yi(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length, i = Array(a); ++t < a; )
    i[t] = r(e[t], t, e);
  return i;
}
var gr = yi,
  bi = R,
  Ai = N,
  Ti = '[object Symbol]';
function mi(e) {
  return typeof e == 'symbol' || (Ai(e) && bi(e) == Ti);
}
var X = mi,
  Oi = b,
  Si = X,
  wi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Ci = /^\w*$/;
function Pi(e, r) {
  if (Oi(e)) return !1;
  var t = typeof e;
  return t == 'number' || t == 'symbol' || t == 'boolean' || e == null || Si(e)
    ? !0
    : Ci.test(e) || !wi.test(e) || (r != null && e in Object(r));
}
var $e = Pi,
  dr = pe,
  xi = 'Expected a function';
function ge(e, r) {
  if (typeof e != 'function' || (r != null && typeof r != 'function'))
    throw new TypeError(xi);
  var t = function () {
    var a = arguments,
      i = r ? r.apply(this, a) : a[0],
      n = t.cache;
    if (n.has(i)) return n.get(i);
    var s = e.apply(this, a);
    return (t.cache = n.set(i, s) || n), s;
  };
  return (t.cache = new (ge.Cache || dr)()), t;
}
ge.Cache = dr;
var Ii = ge,
  Ei = Ii,
  Mi = 500;
function Li(e) {
  var r = Ei(e, function (a) {
      return t.size === Mi && t.clear(), a;
    }),
    t = r.cache;
  return r;
}
var ji = Li,
  Di = ji,
  Ri =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Ni = /\\(\\)?/g,
  Fi = Di(function (e) {
    var r = [];
    return (
      e.charCodeAt(0) === 46 && r.push(''),
      e.replace(Ri, function (t, a, i, n) {
        r.push(i ? n.replace(Ni, '$1') : a || t);
      }),
      r
    );
  }),
  Bi = Fi,
  je = D,
  Gi = gr,
  Hi = b,
  Ui = X,
  Ki = 1 / 0,
  De = je ? je.prototype : void 0,
  Re = De ? De.toString : void 0;
function yr(e) {
  if (typeof e == 'string') return e;
  if (Hi(e)) return Gi(e, yr) + '';
  if (Ui(e)) return Re ? Re.call(e) : '';
  var r = e + '';
  return r == '0' && 1 / e == -Ki ? '-0' : r;
}
var qi = yr,
  zi = qi;
function Wi(e) {
  return e == null ? '' : zi(e);
}
var Ji = Wi,
  Yi = b,
  Xi = $e,
  Zi = Bi,
  ki = Ji;
function Qi(e, r) {
  return Yi(e) ? e : Xi(e, r) ? [e] : Zi(ki(e));
}
var br = Qi,
  Vi = X,
  es = 1 / 0;
function rs(e) {
  if (typeof e == 'string' || Vi(e)) return e;
  var r = e + '';
  return r == '0' && 1 / e == -es ? '-0' : r;
}
var Z = rs,
  ts = br,
  as = Z;
function ns(e, r) {
  r = ts(r, e);
  for (var t = 0, a = r.length; e != null && t < a; ) e = e[as(r[t++])];
  return t && t == a ? e : void 0;
}
var de = ns,
  is = J;
function ss() {
  (this.__data__ = new is()), (this.size = 0);
}
var os = ss;
function us(e) {
  var r = this.__data__,
    t = r.delete(e);
  return (this.size = r.size), t;
}
var fs = us;
function cs(e) {
  return this.__data__.get(e);
}
var ls = cs;
function vs(e) {
  return this.__data__.has(e);
}
var ps = vs,
  _s = J,
  hs = ve,
  $s = pe,
  gs = 200;
function ds(e, r) {
  var t = this.__data__;
  if (t instanceof _s) {
    var a = t.__data__;
    if (!hs || a.length < gs - 1)
      return a.push([e, r]), (this.size = ++t.size), this;
    t = this.__data__ = new $s(a);
  }
  return t.set(e, r), (this.size = t.size), this;
}
var ys = ds,
  bs = J,
  As = os,
  Ts = fs,
  ms = ls,
  Os = ps,
  Ss = ys;
function E(e) {
  var r = (this.__data__ = new bs(e));
  this.size = r.size;
}
E.prototype.clear = As;
E.prototype.delete = Ts;
E.prototype.get = ms;
E.prototype.has = Os;
E.prototype.set = Ss;
var Ar = E;
function ws(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length; ++t < a; )
    if (r(e[t], t, e)) return !0;
  return !1;
}
var Cs = ws,
  Ps = lr,
  xs = Cs,
  Is = vr,
  Es = 1,
  Ms = 2;
function Ls(e, r, t, a, i, n) {
  var s = t & Es,
    o = e.length,
    u = r.length;
  if (o != u && !(s && u > o)) return !1;
  var f = n.get(e),
    c = n.get(r);
  if (f && c) return f == r && c == e;
  var l = -1,
    v = !0,
    h = t & Ms ? new Ps() : void 0;
  for (n.set(e, r), n.set(r, e); ++l < o; ) {
    var $ = e[l],
      g = r[l];
    if (a) var y = s ? a(g, $, l, r, e, n) : a($, g, l, e, r, n);
    if (y !== void 0) {
      if (y) continue;
      v = !1;
      break;
    }
    if (h) {
      if (
        !xs(r, function (A, _) {
          if (!Is(h, _) && ($ === A || i($, A, t, a, n))) return h.push(_);
        })
      ) {
        v = !1;
        break;
      }
    } else if (!($ === g || i($, g, t, a, n))) {
      v = !1;
      break;
    }
  }
  return n.delete(e), n.delete(r), v;
}
var Tr = Ls,
  js = T,
  Ds = js.Uint8Array,
  Rs = Ds;
function Ns(e) {
  var r = -1,
    t = Array(e.size);
  return (
    e.forEach(function (a, i) {
      t[++r] = [i, a];
    }),
    t
  );
}
var Fs = Ns,
  Ne = D,
  Fe = Rs,
  Bs = le,
  Gs = Tr,
  Hs = Fs,
  Us = _e,
  Ks = 1,
  qs = 2,
  zs = '[object Boolean]',
  Ws = '[object Date]',
  Js = '[object Error]',
  Ys = '[object Map]',
  Xs = '[object Number]',
  Zs = '[object RegExp]',
  ks = '[object Set]',
  Qs = '[object String]',
  Vs = '[object Symbol]',
  eo = '[object ArrayBuffer]',
  ro = '[object DataView]',
  Be = Ne ? Ne.prototype : void 0,
  re = Be ? Be.valueOf : void 0;
function to(e, r, t, a, i, n, s) {
  switch (t) {
    case ro:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      (e = e.buffer), (r = r.buffer);
    case eo:
      return !(e.byteLength != r.byteLength || !n(new Fe(e), new Fe(r)));
    case zs:
    case Ws:
    case Xs:
      return Bs(+e, +r);
    case Js:
      return e.name == r.name && e.message == r.message;
    case Zs:
    case Qs:
      return e == r + '';
    case Ys:
      var o = Hs;
    case ks:
      var u = a & Ks;
      if ((o || (o = Us), e.size != r.size && !u)) return !1;
      var f = s.get(e);
      if (f) return f == r;
      (a |= qs), s.set(e, r);
      var c = Gs(o(e), o(r), a, i, n, s);
      return s.delete(e), c;
    case Vs:
      if (re) return re.call(e) == re.call(r);
  }
  return !1;
}
var ao = to,
  no = _r,
  io = b;
function so(e, r, t) {
  var a = r(e);
  return io(e) ? a : no(a, t(e));
}
var oo = so;
function uo(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length, i = 0, n = []; ++t < a; ) {
    var s = e[t];
    r(s, t, e) && (n[i++] = s);
  }
  return n;
}
var fo = uo;
function co() {
  return [];
}
var lo = co,
  vo = fo,
  po = lo,
  _o = Object.prototype,
  ho = _o.propertyIsEnumerable,
  Ge = Object.getOwnPropertySymbols,
  $o = Ge
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            vo(Ge(e), function (r) {
              return ho.call(e, r);
            }));
      }
    : po,
  go = $o;
function yo(e, r) {
  for (var t = -1, a = Array(e); ++t < e; ) a[t] = r(t);
  return a;
}
var bo = yo,
  K = { exports: {} };
function Ao() {
  return !1;
}
var To = Ao;
(function (e, r) {
  var t = T,
    a = To,
    i = r && !r.nodeType && r,
    n = i && !0 && e && !e.nodeType && e,
    s = n && n.exports === i,
    o = s ? t.Buffer : void 0,
    u = o ? o.isBuffer : void 0,
    f = u || a;
  e.exports = f;
})(K, K.exports);
var mo = 9007199254740991,
  Oo = /^(?:0|[1-9]\d*)$/;
function So(e, r) {
  var t = typeof e;
  return (
    (r = r == null ? mo : r),
    !!r &&
      (t == 'number' || (t != 'symbol' && Oo.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < r
  );
}
var ye = So,
  wo = 9007199254740991;
function Co(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= wo;
}
var be = Co,
  Po = R,
  xo = be,
  Io = N,
  Eo = '[object Arguments]',
  Mo = '[object Array]',
  Lo = '[object Boolean]',
  jo = '[object Date]',
  Do = '[object Error]',
  Ro = '[object Function]',
  No = '[object Map]',
  Fo = '[object Number]',
  Bo = '[object Object]',
  Go = '[object RegExp]',
  Ho = '[object Set]',
  Uo = '[object String]',
  Ko = '[object WeakMap]',
  qo = '[object ArrayBuffer]',
  zo = '[object DataView]',
  Wo = '[object Float32Array]',
  Jo = '[object Float64Array]',
  Yo = '[object Int8Array]',
  Xo = '[object Int16Array]',
  Zo = '[object Int32Array]',
  ko = '[object Uint8Array]',
  Qo = '[object Uint8ClampedArray]',
  Vo = '[object Uint16Array]',
  eu = '[object Uint32Array]',
  p = {};
p[Wo] = p[Jo] = p[Yo] = p[Xo] = p[Zo] = p[ko] = p[Qo] = p[Vo] = p[eu] = !0;
p[Eo] =
  p[Mo] =
  p[qo] =
  p[Lo] =
  p[zo] =
  p[jo] =
  p[Do] =
  p[Ro] =
  p[No] =
  p[Fo] =
  p[Bo] =
  p[Go] =
  p[Ho] =
  p[Uo] =
  p[Ko] =
    !1;
function ru(e) {
  return Io(e) && xo(e.length) && !!p[Po(e)];
}
var tu = ru;
function au(e) {
  return function (r) {
    return e(r);
  };
}
var mr = au,
  ne = { exports: {} };
(function (e, r) {
  var t = or,
    a = r && !r.nodeType && r,
    i = a && !0 && e && !e.nodeType && e,
    n = i && i.exports === a,
    s = n && t.process,
    o = (function () {
      try {
        var u = i && i.require && i.require('util').types;
        return u || (s && s.binding && s.binding('util'));
      } catch {}
    })();
  e.exports = o;
})(ne, ne.exports);
var nu = tu,
  iu = mr,
  He = ne.exports,
  Ue = He && He.isTypedArray,
  su = Ue ? iu(Ue) : nu,
  Or = su,
  ou = bo,
  uu = he,
  fu = b,
  cu = K.exports,
  lu = ye,
  vu = Or,
  pu = Object.prototype,
  _u = pu.hasOwnProperty;
function hu(e, r) {
  var t = fu(e),
    a = !t && uu(e),
    i = !t && !a && cu(e),
    n = !t && !a && !i && vu(e),
    s = t || a || i || n,
    o = s ? ou(e.length, String) : [],
    u = o.length;
  for (var f in e)
    (r || _u.call(e, f)) &&
      !(
        s &&
        (f == 'length' ||
          (i && (f == 'offset' || f == 'parent')) ||
          (n && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) ||
          lu(f, u))
      ) &&
      o.push(f);
  return o;
}
var $u = hu,
  gu = Object.prototype;
function du(e) {
  var r = e && e.constructor,
    t = (typeof r == 'function' && r.prototype) || gu;
  return e === t;
}
var yu = du;
function bu(e, r) {
  return function (t) {
    return e(r(t));
  };
}
var Au = bu,
  Tu = Au,
  mu = Tu(Object.keys, Object),
  Ou = mu,
  Su = yu,
  wu = Ou,
  Cu = Object.prototype,
  Pu = Cu.hasOwnProperty;
function xu(e) {
  if (!Su(e)) return wu(e);
  var r = [];
  for (var t in Object(e)) Pu.call(e, t) && t != 'constructor' && r.push(t);
  return r;
}
var Iu = xu,
  Eu = fr,
  Mu = be;
function Lu(e) {
  return e != null && Mu(e.length) && !Eu(e);
}
var k = Lu,
  ju = $u,
  Du = Iu,
  Ru = k;
function Nu(e) {
  return Ru(e) ? ju(e) : Du(e);
}
var Ae = Nu,
  Fu = oo,
  Bu = go,
  Gu = Ae;
function Hu(e) {
  return Fu(e, Gu, Bu);
}
var Uu = Hu,
  Ke = Uu,
  Ku = 1,
  qu = Object.prototype,
  zu = qu.hasOwnProperty;
function Wu(e, r, t, a, i, n) {
  var s = t & Ku,
    o = Ke(e),
    u = o.length,
    f = Ke(r),
    c = f.length;
  if (u != c && !s) return !1;
  for (var l = u; l--; ) {
    var v = o[l];
    if (!(s ? v in r : zu.call(r, v))) return !1;
  }
  var h = n.get(e),
    $ = n.get(r);
  if (h && $) return h == r && $ == e;
  var g = !0;
  n.set(e, r), n.set(r, e);
  for (var y = s; ++l < u; ) {
    v = o[l];
    var A = e[v],
      _ = r[v];
    if (a) var d = s ? a(_, A, v, r, e, n) : a(A, _, v, e, r, n);
    if (!(d === void 0 ? A === _ || i(A, _, t, a, n) : d)) {
      g = !1;
      break;
    }
    y || (y = v == 'constructor');
  }
  if (g && !y) {
    var F = e.constructor,
      B = r.constructor;
    F != B &&
      'constructor' in e &&
      'constructor' in r &&
      !(
        typeof F == 'function' &&
        F instanceof F &&
        typeof B == 'function' &&
        B instanceof B
      ) &&
      (g = !1);
  }
  return n.delete(e), n.delete(r), g;
}
var Ju = Wu,
  Yu = C,
  Xu = T,
  Zu = Yu(Xu, 'DataView'),
  ku = Zu,
  Qu = C,
  Vu = T,
  ef = Qu(Vu, 'Promise'),
  rf = ef,
  tf = C,
  af = T,
  nf = tf(af, 'WeakMap'),
  sf = nf,
  ie = ku,
  se = ve,
  oe = rf,
  ue = pr,
  fe = sf,
  Sr = R,
  M = cr,
  qe = '[object Map]',
  of = '[object Object]',
  ze = '[object Promise]',
  We = '[object Set]',
  Je = '[object WeakMap]',
  Ye = '[object DataView]',
  uf = M(ie),
  ff = M(se),
  cf = M(oe),
  lf = M(ue),
  vf = M(fe),
  O = Sr;
((ie && O(new ie(new ArrayBuffer(1))) != Ye) ||
  (se && O(new se()) != qe) ||
  (oe && O(oe.resolve()) != ze) ||
  (ue && O(new ue()) != We) ||
  (fe && O(new fe()) != Je)) &&
  (O = function (e) {
    var r = Sr(e),
      t = r == of ? e.constructor : void 0,
      a = t ? M(t) : '';
    if (a)
      switch (a) {
        case uf:
          return Ye;
        case ff:
          return qe;
        case cf:
          return ze;
        case lf:
          return We;
        case vf:
          return Je;
      }
    return r;
  });
var pf = O,
  te = Ar,
  _f = Tr,
  hf = ao,
  $f = Ju,
  Xe = pf,
  Ze = b,
  ke = K.exports,
  gf = Or,
  df = 1,
  Qe = '[object Arguments]',
  Ve = '[object Array]',
  H = '[object Object]',
  yf = Object.prototype,
  er = yf.hasOwnProperty;
function bf(e, r, t, a, i, n) {
  var s = Ze(e),
    o = Ze(r),
    u = s ? Ve : Xe(e),
    f = o ? Ve : Xe(r);
  (u = u == Qe ? H : u), (f = f == Qe ? H : f);
  var c = u == H,
    l = f == H,
    v = u == f;
  if (v && ke(e)) {
    if (!ke(r)) return !1;
    (s = !0), (c = !1);
  }
  if (v && !c)
    return (
      n || (n = new te()),
      s || gf(e) ? _f(e, r, t, a, i, n) : hf(e, r, u, t, a, i, n)
    );
  if (!(t & df)) {
    var h = c && er.call(e, '__wrapped__'),
      $ = l && er.call(r, '__wrapped__');
    if (h || $) {
      var g = h ? e.value() : e,
        y = $ ? r.value() : r;
      return n || (n = new te()), i(g, y, t, a, n);
    }
  }
  return v ? (n || (n = new te()), $f(e, r, t, a, i, n)) : !1;
}
var Af = bf,
  Tf = Af,
  rr = N;
function wr(e, r, t, a, i) {
  return e === r
    ? !0
    : e == null || r == null || (!rr(e) && !rr(r))
    ? e !== e && r !== r
    : Tf(e, r, t, a, wr, i);
}
var Cr = wr,
  mf = Ar,
  Of = Cr,
  Sf = 1,
  wf = 2;
function Cf(e, r, t, a) {
  var i = t.length,
    n = i,
    s = !a;
  if (e == null) return !n;
  for (e = Object(e); i--; ) {
    var o = t[i];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1;
  }
  for (; ++i < n; ) {
    o = t[i];
    var u = o[0],
      f = e[u],
      c = o[1];
    if (s && o[2]) {
      if (f === void 0 && !(u in e)) return !1;
    } else {
      var l = new mf();
      if (a) var v = a(f, c, u, e, r, l);
      if (!(v === void 0 ? Of(c, f, Sf | wf, a, l) : v)) return !1;
    }
  }
  return !0;
}
var Pf = Cf,
  xf = q;
function If(e) {
  return e === e && !xf(e);
}
var Pr = If,
  Ef = Pr,
  Mf = Ae;
function Lf(e) {
  for (var r = Mf(e), t = r.length; t--; ) {
    var a = r[t],
      i = e[a];
    r[t] = [a, i, Ef(i)];
  }
  return r;
}
var jf = Lf;
function Df(e, r) {
  return function (t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var xr = Df,
  Rf = Pf,
  Nf = jf,
  Ff = xr;
function Bf(e) {
  var r = Nf(e);
  return r.length == 1 && r[0][2]
    ? Ff(r[0][0], r[0][1])
    : function (t) {
        return t === e || Rf(t, e, r);
      };
}
var Gf = Bf,
  Hf = de;
function Uf(e, r, t) {
  var a = e == null ? void 0 : Hf(e, r);
  return a === void 0 ? t : a;
}
var Kf = Uf;
function qf(e, r) {
  return e != null && r in Object(e);
}
var zf = qf,
  Wf = br,
  Jf = he,
  Yf = b,
  Xf = ye,
  Zf = be,
  kf = Z;
function Qf(e, r, t) {
  r = Wf(r, e);
  for (var a = -1, i = r.length, n = !1; ++a < i; ) {
    var s = kf(r[a]);
    if (!(n = e != null && t(e, s))) break;
    e = e[s];
  }
  return n || ++a != i
    ? n
    : ((i = e == null ? 0 : e.length),
      !!i && Zf(i) && Xf(s, i) && (Yf(e) || Jf(e)));
}
var Vf = Qf,
  ec = zf,
  rc = Vf;
function tc(e, r) {
  return e != null && rc(e, r, ec);
}
var ac = tc,
  nc = Cr,
  ic = Kf,
  sc = ac,
  oc = $e,
  uc = Pr,
  fc = xr,
  cc = Z,
  lc = 1,
  vc = 2;
function pc(e, r) {
  return oc(e) && uc(r)
    ? fc(cc(e), r)
    : function (t) {
        var a = ic(t, e);
        return a === void 0 && a === r ? sc(t, e) : nc(r, a, lc | vc);
      };
}
var _c = pc;
function hc(e) {
  return e;
}
var Q = hc;
function $c(e) {
  return function (r) {
    return r == null ? void 0 : r[e];
  };
}
var gc = $c,
  dc = de;
function yc(e) {
  return function (r) {
    return dc(r, e);
  };
}
var bc = yc,
  Ac = gc,
  Tc = bc,
  mc = $e,
  Oc = Z;
function Sc(e) {
  return mc(e) ? Ac(Oc(e)) : Tc(e);
}
var wc = Sc,
  Cc = Gf,
  Pc = _c,
  xc = Q,
  Ic = b,
  Ec = wc;
function Mc(e) {
  return typeof e == 'function'
    ? e
    : e == null
    ? xc
    : typeof e == 'object'
    ? Ic(e)
      ? Pc(e[0], e[1])
      : Cc(e)
    : Ec(e);
}
var Lc = Mc;
function jc(e) {
  return function (r, t, a) {
    for (var i = -1, n = Object(r), s = a(r), o = s.length; o--; ) {
      var u = s[e ? o : ++i];
      if (t(n[u], u, n) === !1) break;
    }
    return r;
  };
}
var Dc = jc,
  Rc = Dc,
  Nc = Rc(),
  Fc = Nc,
  Bc = Fc,
  Gc = Ae;
function Hc(e, r) {
  return e && Bc(e, r, Gc);
}
var Uc = Hc,
  Kc = k;
function qc(e, r) {
  return function (t, a) {
    if (t == null) return t;
    if (!Kc(t)) return e(t, a);
    for (
      var i = t.length, n = r ? i : -1, s = Object(t);
      (r ? n-- : ++n < i) && a(s[n], n, s) !== !1;

    );
    return t;
  };
}
var zc = qc,
  Wc = Uc,
  Jc = zc,
  Yc = Jc(Wc),
  Xc = Yc,
  Zc = Xc,
  kc = k;
function Qc(e, r) {
  var t = -1,
    a = kc(e) ? Array(e.length) : [];
  return (
    Zc(e, function (i, n, s) {
      a[++t] = r(i, n, s);
    }),
    a
  );
}
var Vc = Qc;
function el(e, r) {
  var t = e.length;
  for (e.sort(r); t--; ) e[t] = e[t].value;
  return e;
}
var rl = el,
  tr = X;
function tl(e, r) {
  if (e !== r) {
    var t = e !== void 0,
      a = e === null,
      i = e === e,
      n = tr(e),
      s = r !== void 0,
      o = r === null,
      u = r === r,
      f = tr(r);
    if (
      (!o && !f && !n && e > r) ||
      (n && s && u && !o && !f) ||
      (a && s && u) ||
      (!t && u) ||
      !i
    )
      return 1;
    if (
      (!a && !n && !f && e < r) ||
      (f && t && i && !a && !n) ||
      (o && t && i) ||
      (!s && i) ||
      !u
    )
      return -1;
  }
  return 0;
}
var al = tl,
  nl = al;
function il(e, r, t) {
  for (
    var a = -1, i = e.criteria, n = r.criteria, s = i.length, o = t.length;
    ++a < s;

  ) {
    var u = nl(i[a], n[a]);
    if (u) {
      if (a >= o) return u;
      var f = t[a];
      return u * (f == 'desc' ? -1 : 1);
    }
  }
  return e.index - r.index;
}
var sl = il,
  ae = gr,
  ol = de,
  ul = Lc,
  fl = Vc,
  cl = rl,
  ll = mr,
  vl = sl,
  pl = Q,
  _l = b;
function hl(e, r, t) {
  r.length
    ? (r = ae(r, function (n) {
        return _l(n)
          ? function (s) {
              return ol(s, n.length === 1 ? n[0] : n);
            }
          : n;
      }))
    : (r = [pl]);
  var a = -1;
  r = ae(r, ll(ul));
  var i = fl(e, function (n, s, o) {
    var u = ae(r, function (f) {
      return f(n);
    });
    return { criteria: u, index: ++a, value: n };
  });
  return cl(i, function (n, s) {
    return vl(n, s, t);
  });
}
var $l = hl;
function gl(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var dl = gl,
  yl = dl,
  ar = Math.max;
function bl(e, r, t) {
  return (
    (r = ar(r === void 0 ? e.length - 1 : r, 0)),
    function () {
      for (
        var a = arguments, i = -1, n = ar(a.length - r, 0), s = Array(n);
        ++i < n;

      )
        s[i] = a[r + i];
      i = -1;
      for (var o = Array(r + 1); ++i < r; ) o[i] = a[i];
      return (o[r] = t(s)), yl(e, this, o);
    }
  );
}
var Al = bl;
function Tl(e) {
  return function () {
    return e;
  };
}
var ml = Tl,
  Ol = C,
  Sl = (function () {
    try {
      var e = Ol(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })(),
  wl = Sl,
  Cl = ml,
  nr = wl,
  Pl = Q,
  xl = nr
    ? function (e, r) {
        return nr(e, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: Cl(r),
          writable: !0,
        });
      }
    : Pl,
  Il = xl,
  El = 800,
  Ml = 16,
  Ll = Date.now;
function jl(e) {
  var r = 0,
    t = 0;
  return function () {
    var a = Ll(),
      i = Ml - (a - t);
    if (((t = a), i > 0)) {
      if (++r >= El) return arguments[0];
    } else r = 0;
    return e.apply(void 0, arguments);
  };
}
var Dl = jl,
  Rl = Il,
  Nl = Dl,
  Fl = Nl(Rl),
  Bl = Fl,
  Gl = Q,
  Hl = Al,
  Ul = Bl;
function Kl(e, r) {
  return Ul(Hl(e, r, Gl), e + '');
}
var ql = Kl,
  zl = le,
  Wl = k,
  Jl = ye,
  Yl = q;
function Xl(e, r, t) {
  if (!Yl(t)) return !1;
  var a = typeof r;
  return (a == 'number' ? Wl(t) && Jl(r, t.length) : a == 'string' && r in t)
    ? zl(t[r], e)
    : !1;
}
var Zl = Xl,
  kl = di,
  Ql = $l,
  Vl = ql,
  ir = Zl,
  ev = Vl(function (e, r) {
    if (e == null) return [];
    var t = r.length;
    return (
      t > 1 && ir(e, r[0], r[1])
        ? (r = [])
        : t > 2 && ir(r[0], r[1], r[2]) && (r = [r[0]]),
      Ql(e, kl(r, 1), [])
    );
  }),
  rv = ev;
const tv = '_indexBarContainer_1rh1w_6',
  av = '_letterBar_1rh1w_12',
  nv = '_letter_1rh1w_12',
  iv = '_active_1rh1w_38',
  sv = '_letterBox_1rh1w_42',
  ov = '_animate_1rh1w_77',
  uv = '_fadeIn_1rh1w_84',
  fv = '_fadeOut_1rh1w_88',
  S = {
    indexBarContainer: tv,
    letterBar: av,
    letter: nv,
    active: iv,
    letterBox: sv,
    animate: ov,
    fadeIn: uv,
    fadeOut: fv,
  },
  Ir = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  cv = Ir.split('').reduce(
    (e, r, t) => (
      (e[r] = {
        letter: r,
        index: t,
      }),
      e
    ),
    {},
  ),
  lv = (e) => {
    const {
        className: r,
        onChange: t,
        onLeave: a,
        setVisible: i,
        letters: n,
        right: s,
        left: o,
      } = e,
      u = Mr(!1),
      f = Te(() => {
        var _;
        return (_ = rv(Vn(typeof n == 'string' ? n.split('') : n))
          .map((d) => (d == null ? void 0 : d.toUpperCase()))
          .filter((d) => cv[d])) !== null && _ !== void 0
          ? _
          : Ir.split('');
      }, [n]),
      c = m(() => {
        i(!1);
      }, []),
      l = m((_) => {
        i(!0), _ && (clearTimeout(l.timer), (l.timer = setTimeout(c, 300 * 2)));
      }, []),
      v = m(() => {
        u.current = !0;
      }, []),
      h = m(() => {
        (u.current = !1), c(), a && a();
      }, [a]),
      $ = m(() => {
        c();
      }, []),
      g = m(
        (_, d) => {
          l(), t && t(_, d);
        },
        [t],
      ),
      y = m(
        (_, d) => {
          !u.current || (l(), t && t(_, d));
        },
        [t],
      ),
      A = Te(
        () =>
          f.map((_, d) =>
            w.exports.jsx(
              'span',
              Object.assign(
                {
                  className: S.letter,
                  onClick: () => g(_, d),
                  onMouseEnter: () => y(_, d),
                },
                { children: _ },
              ),
              _,
            ),
          ),
        [g, y, f],
      );
    return (
      Lr(
        () => (
          document.body.addEventListener('onmouseup', h),
          () => {
            document.body.removeEventListener('onmouseup', h);
          }
        ),
        [],
      ),
      f.length
        ? w.exports.jsx(
            'div',
            Object.assign(
              {
                className: ce('index-bar', r, S.letterBar),
                onMouseDown: v,
                onMouseUp: h,
                onMouseLeave: $,
                style: {
                  right: s,
                  left: o,
                },
              },
              { children: A },
            ),
          )
        : null
    );
  },
  vv = (e) => {
    const { letter: r, visible: t } = e;
    return w.exports.jsx(
      'div',
      Object.assign(
        { className: ce(S.letterBox, S.animate, t ? S.fadeIn : S.fadeOut) },
        { children: r },
      ),
    );
  },
  pv = (e) => {
    e.preventDefault(), e.stopPropagation();
  },
  _v = (e) => {
    const {
        children: r,
        className: t,
        onChange: a,
        value: i,
        onLeave: n,
        letters: s,
        left: o,
        right: u,
      } = e,
      [f, c] = me(i),
      [l, v] = me(!1),
      h = m(
        ($, g) => {
          c($), a && a($, g);
        },
        [a],
      );
    return w.exports.jsxs(
      'div',
      Object.assign(
        { className: ce('index-bar', t, S.indexBarContainer), onClick: pv },
        {
          children: [
            w.exports.jsx(lv, {
              left: o,
              right: u,
              letters: s,
              onChange: h,
              onLeave: n,
              setVisible: v,
            }),
            w.exports.jsx(vv, { visible: l, letter: i != null ? i : f }),
            r,
          ],
        },
      ),
    );
  };
_v.minHeight = 600;
export { _v as default, $v as scrollIntoView };
