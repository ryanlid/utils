/**
 * 显示二维码图片
 *
 * @param {number|string|object} val
 * @param {string} val.url 二维码图片中要包含的文本信息
 * @param {number} val.size 二维码图片的大小
 */
function showQrcode(val) {
  var param = {
    url: window.location.href,
    size: 100
  };
  if (typeof val === "number" && !isNaN(val)) {
    param.size = val;
  }
  if (typeof val === "string") {
    param.url = val;
  }
  if (typeof val === "object" && !Array.isArray(val)) {
    Object.assign(param, val);
  }
  var imgUrl = `https://api.oonnnoo.com/qr/qrcode?text=${encodeURIComponent(
    param.url
  )}&size=${param.size}`;

  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.right = "2px";
  div.style.bottom = "2px";
  div.style.padding = "2px";
  div.style.border = "1px solid #ccc";
  div.innerHTML = `<img style="vertical-align:middle;width:${
    param.size
  }px;height:${param.size}px" src=${imgUrl} />`;
  document.body.append(div);
}
module.exports = showQrcode;
