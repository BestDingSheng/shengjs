---
title: debounce - 防抖函数
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## debounce

> 防抖函数

Demo:

```tsx | pure
import { debounce } from 'shengjs';

function log(name) {
  console.log(name)
}

debounce(log, 200)('shengjs');
```
