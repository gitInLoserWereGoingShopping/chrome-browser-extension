document.addEventListener('DOMContentLoaded', function () {
  const bg = chrome.extension.getBackgroundPage();
  Object.keys(bg.cages).forEach(function (url) {
    const div = document.createElement('div');
    div.textContent = `${url}: ${bg.cages[url]}`;
    document.body.appendChild(div);
  })
}, false)