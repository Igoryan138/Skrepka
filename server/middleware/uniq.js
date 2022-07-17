// ! Функция для уникализации массива
function uniq(arr) {
  const newArr = [];
  newArr.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].id != arr[i - 1].id) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

module.exports = uniq
