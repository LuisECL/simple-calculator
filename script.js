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
  operator = ''

  // Event Listeners
  numbers.forEach(e => {
    e.addEventListener('click', () => {
      updateScreen(e.value)
    })
  });

  operators.forEach(e => {
<<<<<<< HEAD
    e.addEventListener('click', () => {
      operate(e);
    });
=======
    operate(e)
>>>>>>> 69e345e3d7798ae6040740cb21c1fdaeac06a02f
  })

  btn_clear.addEventListener('click', () => {
    clearScreen()
  })

  btn_equals.addEventListener('click', () => {
    resolve()
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

  function getLastNumber(str) {
    if (str.includes('+')){
      num2 = Number(str.split('+')[1])
      if (num2 == NaN) {
        num2 = num2.slice(0,-1)
      }
    } else if (str.includes('-')){
      num2 = Number(str.split('-')[1])
    } else if (str.includes('x')){
      num2 = Number(str.split('x')[1])
    } else if (str.includes('/')){
      num2 = Number(str.split('/')[1])
    }
  }

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a-b;
  }

  function multiply(a, b) {
    return a*b;
  }

  function divide(a, b) {
    return a/b;
  }

  function operate (e) {
<<<<<<< HEAD
    operator = e.value
=======
    e.addEventListener('click', () => {
      operator = e.value
>>>>>>> 69e345e3d7798ae6040740cb21c1fdaeac06a02f
      console.log("operator", operator)

      if (num1 == 0) {
        num1 = Number(screen.innerText)
      } else {
        num2 = Number(screen.innerText.split(e.value)[1])
      }
      updateScreen(e.value);
      console.log(num1, num2)
<<<<<<< HEAD
=======
    });
>>>>>>> 69e345e3d7798ae6040740cb21c1fdaeac06a02f
  }

  function resolve () {
    if (num1 == 0) {
      num1 = Number(screen.innerText)
    } else {
      getLastNumber(screen.innerText)
    }

    console.log(num1, num2)
    calculation(num1, operator, num2)
  }

  function calculation(a, op, b) {
    if (op == '+') {
      num1 = screen.innerText = add(a, b);
      num2 = 0
      screen.innerText = num1
      console.log (num1, num2)
    } else if (op == '-') {
      num1 = screen.innerText = subtract(a, b);
      num2 = 0
      screen.innerText = num1
      console.log (num1, num2)
    } else if (op == 'x') {
      num1 = screen.innerText = multiply(a, b);
      num2 = 0
      screen.innerText = num1
      console.log (num1, num2)
    } else if (op == '/') {
      num1 = screen.innerText = divide(a, b);
      num2 = 0
      screen.innerText = num1
      console.log (num1, num2)
    }
  }

}