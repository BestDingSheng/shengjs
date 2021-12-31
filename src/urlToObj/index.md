---
title: urlToObj - url 生成 obj
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## urlToObj

> url 生成对象

Demo:

```tsx | pure
import { urlToObj } from 'shengjs';

const url = 'http://localhost:9090/home?name=dingsheng&value=123';

console.log(urlToObj(url)); // { url: 'http://localhost:9090/home', name: 'dingsheng', value: '123' }
```
