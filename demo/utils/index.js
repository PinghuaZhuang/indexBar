/**
 * 滚动到目标DOM位置上
 * @param { Element } container 滚动的容器
 * @param { Element } selected 滚动到的目标DOM
 */
export const scrollIntoView = function (container, selected) {
  if (!selected) {
    container.scrollTop = 0;
    return;
  }

  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top =
    selected.offsetTop +
    offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;

  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
};

/**
 * 获取目标DOM滚动的容器
 * @param { Element } el
 * @param { Boolean } vertical
 * @return { Element | Window }
 */
export const getScrollContainer = (el, vertical = true) => {
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
};

export const getStyle = (el, prop) => {
  return el.style[prop];
};

/**
 * 判断是目标DOM是否可以滚动
 * @param { Element | Any } el 目标Dom
 * @param { Boolean } vertical 是否是垂直方向
 * @return { Boolean }
 */
export const isScroll = (el, vertical) => {
  const determinedDirection = vertical !== null || vertical !== undefined;
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
};

/**
 * 遍历树状结构数据
 * @param {Array<any>} arr 目标数状结构的数据
 * @param {Function} fn 回调
 * @param {String} childrenField children对应的字段名
 * @example [{ name: 'xxx', children: [{ name: 'childrenName' }] }]
 */
export function each(
  arr = [],
  fn,
  childrenField = 'children',
  parent,
  parentLevel,
) {
  let level = parent == null ? 0 : parentLevel + 1;
  arr.forEach((data) => {
    if (data[childrenField]) {
      each(data[childrenField], fn, childrenField, data, level);
    }
    fn(data, parent, level);
  });
}
