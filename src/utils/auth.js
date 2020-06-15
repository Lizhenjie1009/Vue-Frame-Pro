
export function getStorage (key) {
  return JSON.parse(window.sessionStorage.getItem(key + ''))
}

export function setStorage (key, value) {
  return window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function removeStorage (key) {
  return window.sessionStorage.removeItem(key)
}
