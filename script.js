const minutesLabel = document.getElementById('minutes')
const secondsLabel = document.getElementById('seconds')
const millisecondsLabel = document.getElementById('milliseconds')
const startButton = document.getElementById('startBtn')
const stopButton = document.getElementById('stopBtn')
const pauseButton = document.getElementById('pauseBtn')
const resetButton = document.getElementById('resetBtn')
const lapList = document.getElementById('laplist')

let seconds = 0
let minutes = 0
let milliseconds = 0
let interval

const startTimer = () => {
    interval = setInterval(updateTimer, 10)
    startButton.disabled = true
}

const stopTimer = () => {
    clearInterval(interval)
    addToLapList()
    resetTimerData()
    startButton.disabled = false
}

const pauseTimer = () => {
    clearInterval(interval)
    startButton.disabled = false
}

const resetTimer = () => {
    clearInterval(interval)
    resetTimerData()
    startButton.disabled = false
}

const updateTimer = () => {
    milliseconds++
    if (milliseconds === 100) {
        milliseconds = 0
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
        }
    }
    displayTimer()
}

const chartTime = (time) => time.toString().padStart(2, '0')

const displayTimer = () => {
    millisecondsLabel.textContent = chartTime(milliseconds)
    secondsLabel.textContent = chartTime(seconds)
    minutesLabel.textContent = chartTime(minutes)
}

const resetTimerData = () => {
    minutes = 0
    seconds = 0
    milliseconds = 0
    displayTimer()
}

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
pauseButton.addEventListener('click', pauseTimer)
resetButton.addEventListener('click', resetTimer)

const addToLapList = () => {
    const lapTime = 
    `
        ${chartTime(minutes)}:${chartTime(seconds)}:${chartTime(milliseconds)}
    `
    const listItem = document.createElement('li')
    listItem.innerHTML = 
    `
        <span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}
    `
    lapList.appendChild(listItem)
}

