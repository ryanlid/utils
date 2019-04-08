/**
 * 获取URL中查询参数
 *
 * @param {*} name
 * @param {*} path
 * @returns
 */
function getUrlQueryString(name, path = window.location.search) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = path.substr(1).match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  }
  return null;
}

module.exports = getUrlQueryString
