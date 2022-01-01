function clearParams(args: any) {
  //  判断参数是否是对象
  if (Object.prototype.toString.call(args) !== '[object Object]') {
    return {};
  }
  const result = args;
  for (const key in result) {
    if (result[key] === '' || result[key] === undefined) {
      delete result[key];
    }
    // 如果属性还是个对象
    if (Object.prototype.toString.call(result[key]) === '[object Object]') {
      // 值如果是空对象那么直接删除
      if (JSON.stringify(result[key]) === '{}') {
        delete result[key];
      }
      // 递归遍历
      clearParams(result[key]);
    }
  }
  return result;
}

export default clearParams;
