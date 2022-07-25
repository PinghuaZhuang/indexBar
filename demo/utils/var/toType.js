const rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
let class2type = {};
const toString = class2type.toString;

const types =
  'Boolean Number String Function Array Date RegExp Object Error Symbol'.match(
    rnothtmlwhite,
  );

let i = 0,
  len = types.length,
  name;

for (; i < len; i++) {
  name = types[i];
  class2type[`[object ${name}]`] = name.toLowerCase();
}

export default function (obj) {
  if (obj == null) {
    return obj + '';
  }

  // Support: Android <=2.3 only (functionish RegExp)
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[toString.call(obj)] || 'object'
    : typeof obj;
}
