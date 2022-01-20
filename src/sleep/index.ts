/**
 * @description: 睡眠函数
 * @param {number} number
 */
const sleep = async (number: number) => new Promise((resolve) => setTimeout(resolve, number));

export default sleep;
