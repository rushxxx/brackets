module.exports = function check(str, bracketsConfig) {
  let arr = str.split('')
  let res = true
  while (res) {
    res = false
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) {
          arr.splice(i, 2)
          res = true
        }
      }
    }
  }
  return arr.length === 0 ? true : false  
}
