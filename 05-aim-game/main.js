const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let score = 0

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const setTime = value => {
  timeEl.innerHTML = `00:${value}`
}

const finishGame = () => {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const createRandomCircle = () => {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const { width, height } = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.background = getRandomColor()
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`

  board.append(circle)
}

const decreaseTime = () => {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

const startGame = () => {
  setInterval(decreaseTime, 1000);
  createRandomCircle()
  setTime(time)
}

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})

startBtn.addEventListener('click', event => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})