/**
 * @description:
 * @param {*} objUrl
 */
function objToUrl(objUrl: any) {
  // 如果只有 url 一个参数那么直接返回 url
  if (Object.keys(objUrl).length === 1 && Object.keys(objUrl)[0] === 'url') {
    return objUrl.url;
  }
  let path = `${objUrl.url}?`;
  for (const item in objUrl) {
    if (item !== 'url' && objUrl[item]) {
      path += `${item}=${encodeURIComponent(objUrl[item])}&`;
    }
  }
  // 把 最后一个 & 截取掉
  return path.substring(0, path.lastIndexOf('&'));
}

export default objToUrl;

// const url = {url:'http://localhost:8080/demo',name:'gxl',value:'123'}

// console.log(objToUrl(url))
