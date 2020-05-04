export function head (arr) {
  if (!Array.isArray(arr)) return undefined
  return arr[0]
}

export function len (arr) {
  if (!Array.isArray(arr)) return 0
  return arr.length
}

export function push (arr, el) {
  arr.push(el)
}

export function sub (a, b) {
  return a - b
}

export function tail (arr) {
  if (!Array.isArray(arr)) return undefined
  return arr[len(arr) - 1]
}
