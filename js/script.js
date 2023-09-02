

const vaqt = document.getElementById('h1')
const kun = document.getElementById('h2')
const sana = document.getElementById('h3')
const body = document.querySelector('body')

let tim = new Date().toLocaleTimeString()
let slice = Number(tim.slice(0, 2))

if (slice > 6 && slice < 12) {
    body.style.backgroundImage = "url('./images/morning.jpg')"
    kun.textContent = `Morning`
} else if (slice >= 12 && slice < 18) {
    body.style.backgroundImage = "url('./images/afternoon.jpg')"
    kun.textContent = `Afternoon`
} else if (slice >= 18 && slice < 20) {
    body.style.backgroundImage = "url('./images/evening.jpg')"
    kun.textContent = `Evening`
    vaqt.style.color = 'white'
} else {
    body.style.backgroundImage = "url('./images/night.jpg')"
    kun.textContent = `Night`
}

setInterval(() => {
    vaqt.textContent = new Date().toLocaleTimeString()
}, 1000)

setInterval(() => {
    sana.textContent = new Date().toLocaleDateString()
}, 1000)