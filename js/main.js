let count = 0
let countElement = document.getElementById("countElement")
let saveElement = document.getElementById("saveElement")

function increment() {
     count += 1
     countElement.textContent = count
}

function save () {
     let saveCount = count + " - "
     saveElement.textContent += saveCount
     count = 0
     countElement.textContent = count
}