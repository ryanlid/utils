/**
 * 显示 GitHub 丝带
 * https://blog.github.com/2008-12-19-github-ribbons/
 *
 * @param {string} url
 */
function showgithubRibbons(url) {
  var aEl = document.createElement('a')
  var imgUrl = 'https://static.lidong.me/upload/images/clmCTIwMi.png'
  if (url.indexOf('http') !== 0) {
    url = 'https://gist.github.com/' + url
  }
  aEl.setAttribute('href', url)
  aEl.setAttribute('target','_blank')
  aEl.innerHTML = '<img style="position: absolute; top: 0; right: 0; border: 0;" src="' + imgUrl + '" alt="Fork me on GitHub">'
  document.body.append(aEl)
}

