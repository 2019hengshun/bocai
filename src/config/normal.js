export function isPc() {
  //移动端PC端判断
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? false : true;
}

export default {
  isPc
}
