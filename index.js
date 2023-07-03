var robot = require('robotjs')
const { RandomEvent, runWithChance, Sleep, randomIntFromInterval, reset } = require('./actions')
const mouseSpeed = 0.5

async function main() {
    console.log("Starting....")
    await Sleep(4000)

    while (true) {
        // ALch action
        await Sleep(randomIntFromInterval(1322, 3962))
        Alch()
        await Sleep(randomIntFromInterval(478, 1348))
        AlchItemClick()

        // Check if randomevent 
        runWithChance(RandomEvent)

        // Debug for getting mouse coordinations

        //await Sleep(1000)
        //getMouseCoordinates()
    }

}

function Alch() {
    // Alch spell coordinates 
    var x = randomIntFromInterval(1834, 1850)
    var y = randomIntFromInterval(840, 857)

    // Click alch spell
    robot.moveMouseSmooth(x, y, mouseSpeed)
    robot.mouseClick('left')
}

function AlchItemClick() {
    // ItemStack coordinates 
    var itemx = randomIntFromInterval(1812, 1839)
    var itemy = randomIntFromInterval(824, 850)

    // Click alch item
    robot.moveMouseSmooth(itemx, itemy, mouseSpeed)
    robot.mouseClick('left')
}

async function getMouseCoordinates() {
    var mouse = robot.getMousePos()
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y)
}

main()