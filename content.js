//regex modifiers g = global, match all instances of the pattern in a string
//regex modifiers i = case-insensitive
const re = new RegExp('cage', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []

chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})