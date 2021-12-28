/**
 * @description:
 * @param {Function} fn
 * @param {number} wait
 */
function debounce(fn: Function, wait: number) {
  let timer: any = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  };
}

export default debounce;
