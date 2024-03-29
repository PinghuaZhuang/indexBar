# indexBar

[![Publish index-bar lib.](https://github.com/PinghuaZhuang/indexBar/actions/workflows/publish.yml/badge.svg)](https://github.com/PinghuaZhuang/indexBar/actions/workflows/publish.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/PinghuaZhuang/indexBar/blob/master/LICENSE) [![Commit](https://img.shields.io/github/last-commit/pinghuazhuang/indexBar.svg)](https://github.com/PinghuaZhuang/indexBar/commits/master) [![Verison](https://img.shields.io/github/package-json/v/pinghuazhuang/indexBar.svg)](https://github.com/PinghuaZhuang/indexBar/releases)

PC 端 indexBar 插件.

## Example

[Live Demo](https://pinghuazhuang.github.io/%40zstark/index-bar/)

![](https://git.poker/PinghuaZhuang/note/blob/master/images-upload/indexBar.57kvhknf2gs0.gif?raw=true)

## 🚀 Quick Start

```bash
npm install @zstark/index-bar --prod
```

```jsx
import IndexBar, { scrollIntoView } from '@zstark/index-bar';

const Demo = () => {
  const onChange = useCallback((letter) => {
    const container = containerRef.current;
    const target = document.querySelector(`.${letter}`);
    if (target) {
      scrollIntoView(container, document.querySelector(`.${letter}`), -12);
    }
  }, []);

  return;
  <IndexBar letters={letters} onChange={onChange} right={10}>
    {/* you content */}
  </IndexBar>;
};
```

### props

| 属性                                              | 描述           | 默认值                       |
| ------------------------------------------------- | -------------- | ---------------------------- |
| letters: string\|string[]                         | 右侧字母索引   | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' |
| onChange: (letter: string, index: number) => void |                | -                            |
| right: number                                     | 样式. right 值 | -                            |
| left: number                                      | 样式. left 值  | -                            |
| className: string                                 | 类名           | -                            |
