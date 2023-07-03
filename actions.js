var robot = require('robotjs')
const mouseSpeed = 0.5

function RandomEvent() {
    // skills tab coordinates 
    var x = randomIntFromInterval(1680, 1709)
    var y = randomIntFromInterval(707, 734)

    // magic skill coordinates 
    var magixx = randomIntFromInterval(1670, 1729)
    var magicy = randomIntFromInterval(905, 929)

    // Hover magic spell
    robot.moveMouseSmooth(x, y, mouseSpeed)
    robot.mouseClick('left')
    robot.moveMouseSmooth(magixx, magicy, mouseSpeed)
    reset()
}

function runWithChance(callback) {
    const chance = Math.floor(Math.random() * 105)
    console.log(chance)

    if (chance === 7) {
        console.log(chance)
        callback()
    }
}

async function reset() {
    // magic tab coordinates 
    await Sleep(randomIntFromInterval(500, 3880))
    var x = randomIntFromInterval(1849, 1880)
    var y = randomIntFromInterval(706, 735)

    // Click magic tab
    robot.moveMouseSmooth(x, y, mouseSpeed)
    robot.mouseClick('left')
}

function Sleep(ms) {
    console.log("sleeping for " + ms / 1000 + "sec")
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
    RandomEvent,
    randomIntFromInterval,
    Sleep,
    reset,
    runWithChance,
}