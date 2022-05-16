window.onload = function() {
  // DOM elements
  let screen = document.getElementById('screen');
  let numbersHTML = document.getElementsByClassName('number')
  let numbers = Array.from(numbersHTML)
  let btn_plus = document.getElementById('btn-plus')
  let btn_clear = document.getElementById('clear')
  let screenDisplay = ""
  let calculation = 0

  // Event Listeners
  numbers.forEach(e => {
    e.addEventListener('click', () => {
      updateScreen(e.value)
    })
  });

  btn_plus.addEventListener('click', () => {
    updateScreen(btn_plus.value);
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