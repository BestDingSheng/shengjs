/**
 * @description:
 * @param {string} url
 * @param {function} callback
 */
function loadJS(url: string, callback: () => {}) {
  if (!url) {
    throw new Error('loadJs 请输入连接');
  }
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = function () {
    callback?.();
  };
  script.src = url;

  document.getElementsByTagName('head')[0].appendChild(script);
}

export default loadJS;
