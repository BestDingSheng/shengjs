function getDataType(value: any) {
  if (!value) {
    throw new Error('请传入需要返回类型的数据');
  }
  return Object.prototype.toString.call(value).slice(8, -1);
}

export default getDataType;
