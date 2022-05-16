window.onload = function() {
  let screen = document.getElementById('screen');
  let numbersHTML = document.getElementsByClassName('number')
  let numbers = Array.from(numbersHTML)
  let btn_plus = document.getElementById('btn-plus')
  let screenDisplay = ""
  let calculation = 0

  // screen.innerHTML = 1+5
  // console.log(number7.value)

  function updateScreen(s) {
    screen.innerText = screen.innerText + s
  }

  numbers.forEach(e => {
    e.addEventListener('click', () => {
      updateScreen(e.value)
    })
  });


  btn_plus.addEventListener('click', () => {
    updateScreen(btn_plus.value);
  })







}