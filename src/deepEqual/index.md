---
title: deepEqual - 深比较
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## deepEqual

> 深比较

Demo:

```tsx | pure
import { deepEqual } from 'shengjs';
const obj1 = {
  name: 'dingsheng',
  address: {
    city: 'shanghai',
  },
};
const obj2 = {
  name: 'dingsheng',
  address: {
    city: 'shanghai',
  },
};

deepEqual(hero1, hero2); // => true
```
