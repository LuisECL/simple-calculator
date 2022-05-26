window.onload = function() {
  // DOM elements
  let screen = document.getElementById('screen');
  let numbersHTML = document.getElementsByClassName('number')
  let numbers = Array.from(numbersHTML);
  let btn_plus = document.getElementById('btn-plus');
  let btn_minus = document.getElementById('btn-minus');
  let btn_multiply = document.getElementById('btn-multiply');
  let btn_divide = document.getElementById('btn-divide');
  let btn_clear = document.getElementById('clear');

  let operators = [btn_plus, btn_minus, btn_multiply, btn_divide]
  let screenDisplay = ""
  let calculation = 0

  // Event Listeners
  numbers.forEach(e => {
    e.addEventListener('click', () => {
      updateScreen(e.value)
    })
  });

  operators.forEach(e => {
    e.addEventListener('click', () => {
      updateScreen(e.value);
    });
  })

  btn_clear.addEventListener('click', () => {
    clearScreen()
  })


  // Functions
  function updateScreen(s) {
    screen.innerText = screen.innerText + s
  }

  function clearScreen() {
    screen.innerText = ""
  }


}