/**
 * @description:
 * @param {*} baseUrl
 */
function urlToObj(baseUrl: any) {
  if (!baseUrl || !baseUrl.split('?')[1]) {
    return baseUrl;
  }
  let path = baseUrl.split('?')[0];
  //   name=gxl&value=123 解析成 ['name=gxl','value=123']
  let urlParams = baseUrl.split('?')[1].split('&');
  let obj: any = {};
  obj.url = path;
  for (let i = 0; i < urlParams.length; i++) {
    const tmpArr = urlParams[i].split('=');
    obj[decodeURIComponent(tmpArr[0])] = decodeURIComponent(tmpArr[1]);
  }
  return obj;
}

export default urlToObj;
