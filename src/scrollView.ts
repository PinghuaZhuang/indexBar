/**
 * 滚动到目标DOM位置上
 * @param { Element } container 滚动的容器
 * @param { Element } selected 滚动到的目标DOM
 */
export default function scrollIntoView(
  container: HTMLElement,
  selected: HTMLElement,
) {
  if (!selected) {
    container.scrollTop = 0;
    return;
  }

  const offsetParents: HTMLElement[] = [];
  let pointer = selected.offsetParent;
  while (pointer && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer as HTMLElement);
    pointer = (pointer as HTMLElement).offsetParent;
  }
  const top =
    selected.offsetTop +
    offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  // const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  // const viewRectBottom = viewRectTop + container.clientHeight;

  container.scrollTo({
    top,
    behavior: 'smooth',
  });
}
