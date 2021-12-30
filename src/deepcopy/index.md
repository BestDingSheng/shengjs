---
title: deepcopy - 深拷贝函数
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## deepcopy

> 深拷贝函数

Demo:

```tsx | pure
import { deepcopy } from 'shengjs';

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
  empty: null,
};

console.log(deepcopy(target) === target); // false;
```

<!-- ```jsx
import React from 'react';
import { deepcopy } from 'shengjs';
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
};
export default () => {
  return (
    <div>
      {JSON.stringify(target)}
      <button onClick={()=>{

        alert(deepcopy(target)=== target)
      }}>点击</button>
    </div>
  );
}
``` -->
