---
title: store - 支持过期时间的 localStorage
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## store

> 支持过期时间的 localStorage

Demo:

```tsx | pure
import { store } from 'shengjs';
const { setLocal, getLocal } = store;

setLocal('myKey', 'dingsheng', 5000);
getLocal('myKey');
```
