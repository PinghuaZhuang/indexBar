import React from 'react';
import type from './var/toType';

export function isReactNode(obj) {
  return React.isValidElement(obj);
}

export function isInRange(x, min, max) {
  x = +x;
  min = +min;
  max = +max;

  // x 不是数字，则返回false
  if (isNaN(x)) {
    return false;
  }

  // min 或 max 不传，则认为不设置下限或上限
  return (!isNaN(min) ? x >= min : true) && (!isNaN(max) ? x <= max : true);
}

// 不包含 NaN
export function isNumber(x) {
  return type(x) === 'number' && !isNaN(x);
}

export function isInteger(x, min, max) {
  return Number.parseInt(x, 10) === x && isInRange(x, min, max);
}

export function isInt(x) {
  // -2^31 ~ 2^31-1
  return isInteger(x, -2147483648, 2147483647);
}

export function isBoolean(x) {
  return type(x) === 'boolean';
}

export function isString(x) {
  return type(x) === 'string';
}

// 包含空格字符串: '   '
export function isEmptyString(x) {
  if (!isString(x)) {
    return false;
  }
  return /^\s*$/.test(x);
}

export function isNull(x) {
  return type(x) === 'null';
}

export function isUndefined(x) {
  return type(x) === 'undefined';
}

export function isObject(x) {
  return type(x) === 'object';
}

export function isFunction(x) {
  return type(x) === 'function';
}

export const isArray = isFunction(Array.isArray)
  ? Array.isArray
  : function isArray(x) {
      return type(x) === 'array';
    };

export function isWindow(obj) {
  return obj != null && obj === obj.window;
}

export function isEmptyObject(obj) {
  var name;

  for (name in obj) {
    return false;
  }
  return isObject(obj);
}

/**
 * 判断时间是否为空
 * @return { Boolean }
 */
export function isEmptyDate(date) {
  return date == null || date === '' || date === 'invalid date';
}

export const isDom =
  typeof HTMLElement === 'object'
    ? function (obj) {
        return obj instanceof HTMLElement;
      }
    : function (obj) {
        return (
          obj &&
          typeof obj === 'object' &&
          obj.nodeType === 1 &&
          typeof obj.nodeName === 'string'
        );
      };

export default type;
