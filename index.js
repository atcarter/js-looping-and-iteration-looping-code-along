// Code your solutions in this file
function writeCards(array, type) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(`Thank you, ${array[i]}, for the wonderful ${type} gift!`)
  }
  return arr
}

function countDown(num) {
  while (num > -1) {
    console.log(num)
    num--
  }
}
