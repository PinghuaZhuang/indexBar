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
