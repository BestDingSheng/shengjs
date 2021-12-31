---
title: objToUrl - obj 生成 url
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## objToUrl

> obj 生成 url

Demo:

```tsx | pure
import { objToUrl } from 'shengjs';

const url = { url: 'http://localhost:9090/home', name: 'dingsheng', value: '123' };

console.log(createUrl(url)); // http://localhost:9090/home?name=gxl&value=123
```
