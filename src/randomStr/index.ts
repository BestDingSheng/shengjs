function randomStr(
  n: number,
  str: string = 'abcdefghigklmnopqrstuvexyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-+%$',
) {
  let res = '';
  let len = str.length;
  for (let i = 0; i < n; i++) {
    res += str[Math.floor(Math.random() * len)];
  }
  return res;
}

export default randomStr;
