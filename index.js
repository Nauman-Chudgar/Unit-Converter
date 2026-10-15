const inputBtn = document.querySelector(".input-btn")
const lengthEl = document.querySelector(".length-el")
const volumeEl = document.querySelector(".volume-el")
const massEl = document.querySelector(".mass-el")
const input = document.querySelector(".input")


inputBtn.addEventListener("click", function()
{
    lengthEl.textContent = lengthConverter(Number(input.value))
    volumeEl.textContent = volumeConverter(Number(input.value))
    massEl.textContent = massConverter(Number(input.value))
})

function lengthConverter(value)
{
    let meter1 = value
    let feet1 = (meter1 * 3.28084).toFixed(2)

    let feet2 = value
    let meter2 = (feet2 * 0.3048).toFixed(2)

    return `${meter1} meters = ${feet1} feet | ${feet2} feet = ${meter2} meters`
}

function volumeConverter(value)
{
    let liters1 = value
    let gallons1 = (liters1 * 0.264172).toFixed(2)

    let gallons2 = value
    let liters2 = (gallons2 * 3.78541).toFixed(2)

    return `${liters1} liters = ${gallons1} gallons | ${gallons2} gallons = ${liters2} liters`
}

function massConverter(value)
{
    let kilos1 = value
    let pounds1 = (kilos1 * 2.20462).toFixed(2)

    let pounds2 = value
    let kilos2 = (pounds2 * 0.453592).toFixed(2)

    return `${kilos1} kilos = ${pounds1} pounds | ${pounds2} pounds = ${kilos2} kilos`
}