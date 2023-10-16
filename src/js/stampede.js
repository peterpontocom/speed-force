const keyboard = document.querySelector(".keyboard > input"),
  text = document.querySelector(".text > p"),
  speedContent = document.querySelector(".speedContent")

text.addEventListener("selectstart", function (e) {
  e.preventDefault()
})

keyboard.focus()

keyboard.addEventListener("input", stamppede)

function stamppede() {
  const keyboardValue = keyboard.value.trim()
  const textValue = text.textContent.trim()

  let result = ""
  for (let i = 0; i < textValue.length; i++) {
    keyboardLetter = keyboardValue.charAt(i)
    textLetter = textValue.charAt(i) 
    if (keyboardLetter === textLetter) {
      result += `<span class="correctLetter"">${textLetter}</span>`
      
    } 
    else {
      result += `<span>${textLetter}</span>`
    }
  }
  text.innerHTML = result
}

let startTime, endTime, timerInterval
let wordCount = 0

function calculateSpeed() {
  const textEntered = keyboard.value
  const text = textEntered.split(" ").filter((word) => word !== "")
  const timeElapsed = (Date.now() - startTime) / 1000
  const wordsPerSecond = wordCount / timeElapsed
  const speed = wordsPerSecond.toFixed(2)
  speedContent.textContent = speed
}

keyboard.addEventListener("input", function () {
  if (!startTime) {
    startTime = Date.now()
    timerInterval = setInterval(calculateSpeed, 100)
  }

  const textEntered = keyboard.value
  const text = textEntered.split(" ").filter((word) => word !== "")
  wordCount = text.length
})