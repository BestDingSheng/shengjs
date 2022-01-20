---
title: sleep - 睡眠函数
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## sleep

> 睡眠函数

Demo:

```tsx | pure
import { sleep } from 'shengjs';

async function sleepLog() {
  await sleep(3000);
  console.log('3秒过后打印');
}
```
