const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// Game constants and variables
let baseLine
let baseHeight

const jumpSound = new Audio('./assets/jump.wav')
const deathSound = new Audio('./assets/die.wav')

const initialJumpSpeed = -18
const gravity = 1

let gameStarted = false
let died = false
let jumping = false
let jumpSpeed = initialJumpSpeed
let score

let rocks = [] // Each element is [x_pos, rockLength, level]
const maxRockDist = 20*cellSize
const minRockDist = 3*cellSize
const maxRockLen = 5
const minRockLen = 2

let clouds = []
const maxCloudDist = 550
const minCloudDist = 120
const maxCloudSize = 5
const minCloudSize = 2
let minCloudHeight
let maxCloudHeight
let cloudSpeed = 3

const dinoLeftMargin = 120 - 9*cellSize
const dinoRightMargin = 120 + 10*cellSize
// c.moveTo(dinoLeftMargin, 0)
// c.lineTo(dinoLeftMargin, innerHeight)
// c.stroke()
// c.moveTo(dinoRightMargin, 0)
// c.lineTo(dinoRightMargin, innerHeight)
// c.stroke()
// c.moveTo(0, baseHeight)
// c.lineTo(innerWidth, baseHeight)
// c.stroke()
// c.moveTo(0, baseHeight + 7*cellSize)
// c.lineTo(innerWidth, baseHeight + 7*cellSize)
// c.stroke()

let speed = 7

let cactuses = []
const maxCactusDistance = 750
const minCactusDistance = 55*cellSize
const maxCactuses = 5
const cactusMargin = -cellSize*14


function init() {
    score = 0

    baseLine = innerHeight*0.65    
    baseHeight = baseLine - 22*cellSize
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)

    maxCloudHeight = baseHeight - 20
    minCloudHeight = innerHeight*0.3
    // c.strokeStyle = 'white'
    // c.moveTo(0, minCloudHeight)
    // c.lineTo(innerWidth, minCloudHeight)
    // c.stroke()
    // c.moveTo(0, maxCloudHeight)
    // c.lineTo(innerWidth, maxCloudHeight)
    // c.stroke()
    // c.beginPath()
    // c.fillStyle = 'white'
    // c.fillRect(innerWidth*0.5, innerHeight*0.5, minCloudDist, 10)
    // c.fillRect(innerWidth*0.5, innerHeight*0.6, maxCloudDist, 10)

    document.fonts.ready.then(() => {
        drawTitle()
        drawInstruction()
    });

    // drawSun()
    drawMoon()
    drawBaseLine()

    dinoY = baseHeight + 1
    cactuses = [innerWidth - 100]
    drawDinosaur(dinoY)
    drawCactus(cactuses[0])

    // Initializing rocks
    rocks = [] // Each element is [x_pos, rockLength, level]
    nextRock = Math.floor(Math.random() * (maxRockDist - minRockDist + 1) + minRockDist)
    rockLength = Math.floor(Math.random() * (maxRockLen - minRockLen + 1) + minRockLen)
    rockLevel = Math.floor(Math.random() * 3 + 1)
    rocks.push([nextRock, rockLength, rockLevel])
    while (rocks[rocks.length - 1][0] < innerWidth) {
        nextRock = Math.floor(Math.random() * (maxRockDist - minRockDist + 1) + minRockDist)
        rockLength = Math.floor(Math.random() * (maxRockLen - minRockLen + 1) + minRockLen)
        rockLevel = Math.floor(Math.random() * 3 + 1)
        rocks.push([rocks[rocks.length - 1][0] + rocks[rocks.length - 1][1] + nextRock, rockLength, rockLevel])
    }
    drawRocks()

    // Initializing clouds
    clouds = [] // Each element is [x_pos, size, height]
    nextCloud = Math.floor(Math.random() * (maxCloudDist - minCloudDist + 1) + minCloudDist)
    cloudSize = Math.floor(Math.random() * (maxCloudSize - minCloudSize + 1) + minCloudSize)
    cloudHeight = Math.floor(Math.random() * (maxCloudHeight - minCloudHeight + 1) + minCloudHeight)
    clouds.push([nextCloud, cloudSize, cloudHeight])
    while (clouds[clouds.length - 1][0] < innerWidth) {
        nextCloud = Math.floor(Math.random() * (maxCloudDist - minCloudDist + 1) + minCloudDist)
        cloudSize = Math.floor(Math.random() * (maxCloudSize - minCloudSize + 1) + minCloudSize)
        cloudHeight = Math.floor(Math.random() * (maxCloudHeight - minCloudHeight + 1) + minCloudHeight)
        clouds.push([clouds[clouds.length - 1][0] + clouds[clouds.length - 1][1]*13 + nextCloud, cloudSize, cloudHeight])
    }
    drawClouds()

    for (let i = 1; i < maxCactuses; i++) {
        nextCactus = Math.floor(Math.random() * (maxCactusDistance - minCactusDistance + 1) + minCactusDistance)
        cactuses.push(cactuses[i-1] + nextCactus)
    }


}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init()
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function addRock() {
    const nextRock = Math.floor(Math.random() * (maxRockDist - minRockDist + 1) + minRockDist)
    const rockLength = Math.floor(Math.random() * (maxRockLen - minRockLen + 1) + minRockLen)
    const rockLevel = Math.floor(Math.random() * 3 + 1)
    const new_x = Math.max(rocks[rocks.length - 1][0] + rocks[rocks.length - 1][1] + nextRock, innerWidth + nextRock)
    rocks.push([new_x, rockLength, rockLevel])
}

function addCloud() {
    const nextCloud = Math.floor(Math.random() * (maxCloudDist - minCloudDist + 1) + minCloudDist)
    const cloudSize = Math.floor(Math.random() * (maxCloudSize - minCloudSize + 1) + minCloudSize)
    const cloudHeight = Math.floor(Math.random() * (maxCloudHeight - minCloudHeight + 1) + minCloudHeight)
    const new_x = Math.max(clouds[clouds.length - 1][0] + clouds[clouds.length - 1][1]*13 + nextCloud, innerWidth + nextCloud)
    clouds.push([new_x, cloudSize, cloudHeight])
}

function addNewCactus() {
    const nextCactus = Math.floor(Math.random() * (maxCactusDistance - minCactusDistance + 1) + minCactusDistance)
    cactuses.push(cactuses[cactuses.length - 1] + nextCactus)
}

function gameOver() {
    deathSound.play()

    gameStarted = false
    died = true

    // Clear score and draw instruction
    c.fillStyle = 'black'
    c.fillRect(0, innerHeight*0.15, innerWidth*0.7, innerHeight*0.1)
    drawInstruction()
}

function animationLoop() {
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)

    drawTitle()
    drawBaseLine()
    drawScore()
    // drawSun()
    drawMoon()
    score++
    
    drawDinosaur(dinoY)
    if (jumping) {
        dinoY += jumpSpeed
        jumpSpeed += gravity
        if (dinoY >= baseHeight) {
            jumping = false
            dinoY = baseHeight + 1
            jumpSpeed = initialJumpSpeed
        }
    }
    
    drawRocks()
    for (let i = 0; i < rocks.length; i++) {
        rocks[i][0] -= speed
    }
    if (rocks[0][0] <= -rocks[0][1]) { // Add rock
        rocks.shift()
        addRock()
    }

    drawClouds()
    for(let i = 0; i < clouds.length; i++) {
        clouds[i][0] -= cloudSpeed
    }
    if (clouds[0][0] <= -clouds[0][1]*13) { // Add cloud
        clouds.shift()
        addCloud()
    }
    
    for (let i = 0; i < cactuses.length; i++) {
        drawCactus(cactuses[i])
        cactuses[i] -= speed
        if ((cactuses[i] + 4*cellSize >= dinoLeftMargin) && (cactuses[i] - 3*cellSize <= dinoRightMargin)) { // Accounting for arms of cactus
            if (cactuses[i] < (140)) { // Full height collision
                if (dinoY + 22*cellSize >= baseHeight) {
                    // Draw remaining cactuses
                    for (let j = i + 1; j < cactuses.length; j++) 
                        drawCactus(cactuses[j])
                    gameOver()
                    return
                }
            } else { // Checking head collision
                if (dinoY + 7*cellSize >= baseHeight) {
                    // Draw remaining cactuses
                    for (let j = i + 1; j < cactuses.length; j++) 
                        drawCactus(cactuses[j])
                    gameOver()
                    return
                }
            }
        }
    }
    
    if (cactuses[0] <= cactusMargin) {
        cactuses.shift()
        addNewCactus()
    }

    requestAnimationFrame(animationLoop)
}

function jump() {
    if (jumping) return
    jumpSound.play()
    jumping = true
}

document.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {
        if (died) {
            died = false
            init()
        }

        if (gameStarted) jump()
        else {
            gameStarted = true
            animationLoop()
        }
    }
})

