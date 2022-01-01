---
title: clearParams - 删除对象中的空属性
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## clearParams

> 删除对象中的空属性

Demo:

```tsx | pure
import { clearParams } from 'shengjs';

const caseStr = { a: 'dingsheng', b: '', c: '' };
console.log(clearParams(caseStr)); // { a: 'dingsheng' }
```
