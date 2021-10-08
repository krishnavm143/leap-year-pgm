// console.log('Connected')
var btnInput = document.querySelector('#btn-click')
var inputValue = document.querySelector("[id='input-leap']")
var outputLeap = document.querySelector('.output-leap')
function checkLeap(checkInputNumber) {
  var checkInputNumber = inputValue.value
  if (
    (0 == checkInputNumber % 4 && 0 != checkInputNumber % 100) ||
    0 == checkInputNumber % 400
  ) {
    outputLeap.innerText = checkInputNumber + ' is a leap year'
    console.log(checkInputNumber + ' is a leap year')
  } else {
    outputLeap.innerText = checkInputNumber + ' is not a leap year'

    console.log(checkInputNumber + ' is not a leap year')
  }
}
btnInput.addEventListener('click', checkLeap)
