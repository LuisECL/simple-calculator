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
  let btn_equals = document.getElementById('btn-equals')

  let operators = [btn_plus, btn_minus, btn_multiply, btn_divide]
  let num1 = 0;
  let num2 = 0;

  // Event Listeners
  numbers.forEach(e => {
    e.addEventListener('click', () => {
      updateScreen(e.value)
    })
  });

  operators.forEach(e => {
    e.addEventListener('click', () => {
      if (num1 == 0) {
        num1 = Number(screen.innerText)
      } else {
        num2 = Number(screen.innerText.split(e.value)[1])
      }
      updateScreen(e.value);
      console.log(num1, num2)
    });
  })

  btn_clear.addEventListener('click', () => {
    clearScreen()
  })

  btn_equals.addEventListener('click', () => {
    if (num1 == 0) {
      num1 = Number(screen.innerText)
    } else {
      if (screen.innerText.includes('+')){
        num2 = Number(screen.innerText.split('+')[1])
      } else if (screen.innerText.includes('-')){
        num2 = Number(screen.innerText.split('-')[1])
      } else if (screen.innerText.includes('x')){
        num2 = Number(screen.innerText.split('x')[1])
      } else if (screen.innerText.includes('/')){
        num2 = Number(screen.innerText.split('/')[1])
      }
    }

    console.log(num1, num2)
  })

  // Functions
  function updateScreen(s) {
    screen.innerText = screen.innerText + s
  }

  function clearScreen() {
    screen.innerText = "";
    num1 = 0;
    num2 = 0;
    console.log(num1, num2)
  }

  function add(a, b) {
    return a + b;
  }

  function calculation(num1, op, num2) {
    return op(num1, num2)
  }

}