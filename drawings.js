cellSize = 4 // For dino pixel art

function drawTitle() {
    c.beginPath()
    c.fillStyle = 'white'
    c.textAlign = 'center'
    c.font = "2.2rem 'Press Start 2P'"
    c.fillText("Shash's original Dino Game", innerWidth/2, innerHeight*0.1)
    // c.strokeText("Shash's original Dino Game", innerWidth/2, innerHeight*0.1)
}

function drawInstruction() {
    c.beginPath()
    c.fillStyle = 'white'
    c.font = "1.5rem 'Press Start 2P'"
    c.fillText("Press Space to play", innerWidth/2, innerHeight*0.2)
}

function drawScore() {
    c.beginPath()
    c.fillStyle = 'white'
    c.font = "1.5rem 'Press Start 2P'"
    c.fillText(score, innerWidth/2, innerHeight*0.2)
}

function drawSun() {
    c.beginPath()
    c.fillStyle = 'white'
    // c.fillStyle = 'yellow'
    // c.fillStyle = 'orange'

    const center_x = innerWidth*0.87
    const center_y = innerHeight*0.2
    const radius = 36

    // Regular circle
    // c.arc(center_x, center_y, radius, 0, 2 * Math.PI)

    // Pixelated
    c.fillRect(center_x-5.5*cellSize, center_y - 17*cellSize, 11*cellSize, cellSize)
    c.fillRect(center_x-7.5*cellSize, center_y - 16*cellSize - 0.8, 15*cellSize, cellSize)
    c.fillRect(center_x-9.5*cellSize, center_y - 15*cellSize - 0.8, 19*cellSize, cellSize)
    c.fillRect(center_x-11.5*cellSize, center_y - 14*cellSize - 0.8, 23*cellSize, cellSize)
    c.fillRect(center_x-13.5*cellSize, center_y - 13*cellSize - 0.8, 27*cellSize, cellSize)
    c.fillRect(center_x-14.5*cellSize, center_y - 12*cellSize - 0.8, 29*cellSize, cellSize)
    c.fillRect(center_x-15.5*cellSize, center_y - 11*cellSize - 0.8, 31*cellSize, cellSize)
    c.fillRect(center_x-16.5*cellSize, center_y - 10*cellSize - 0.8, 33*cellSize, 2*cellSize)
    c.fillRect(center_x-17.5*cellSize, center_y - 8*cellSize - 0.8, 35*cellSize, 2*cellSize)
    c.fillRect(center_x-18.5*cellSize, center_y - 6*cellSize - 0.8, 37*cellSize, 2*cellSize)
    
    c.fillRect(center_x-19.5*cellSize, center_y - 4*cellSize - 0.8, 39*cellSize, 8*cellSize)
    
    c.fillRect(center_x-18.5*cellSize, center_y + 4*cellSize - 0.8, 37*cellSize, 2*cellSize)
    c.fillRect(center_x-17.5*cellSize, center_y + 6*cellSize - 0.8, 35*cellSize, 2*cellSize)
    c.fillRect(center_x-16.5*cellSize, center_y + 8*cellSize - 0.8, 33*cellSize, 2*cellSize)
    c.fillRect(center_x-15.5*cellSize, center_y + 10*cellSize - 0.8, 31*cellSize, cellSize)
    c.fillRect(center_x-14.5*cellSize, center_y + 11*cellSize - 0.8, 29*cellSize, cellSize)
    c.fillRect(center_x-13.5*cellSize, center_y + 12*cellSize - 0.8, 27*cellSize, cellSize)
    c.fillRect(center_x-11.5*cellSize, center_y + 13*cellSize - 0.8, 23*cellSize, cellSize)
    c.fillRect(center_x-9.5*cellSize, center_y + 14*cellSize - 0.8, 19*cellSize, cellSize)
    c.fillRect(center_x-7.5*cellSize, center_y + 15*cellSize - 0.8, 15*cellSize, cellSize)
    c.fillRect(center_x-5.5*cellSize, center_y + 16*cellSize - 0.8, 11*cellSize, cellSize)

    c.fill()
}

function drawMoon() {
    let cellSize = 6
    const x = innerWidth * 0.9
    const y = innerHeight * 0.2
    // const radius = 40

    c.fillStyle = "white";
    // c.fillStyle = 'yellow'

    c.beginPath();
    c.fillRect(x - 7*cellSize, y - 9*cellSize, 5*cellSize, cellSize)
    c.fillRect(x - 9*cellSize, y - 8*cellSize, 6*cellSize, cellSize)
    c.fillRect(x - 10*cellSize, y - 7*cellSize, 6*cellSize, cellSize)
    c.fillRect(x - 11*cellSize, y - 6*cellSize, 6*cellSize, cellSize)
    c.fillRect(x - 12*cellSize, y - 5*cellSize, 7*cellSize, cellSize)
    c.fillRect(x - 12*cellSize, y - 4*cellSize, 6*cellSize, cellSize)
    
    c.fillRect(x - 13*cellSize, y - 3*cellSize, 7*cellSize, 5*cellSize)

    c.fillRect(x - 13*cellSize, y + 2*cellSize, 9*cellSize, cellSize)
    c.fillRect(x + 2*cellSize, y + 2*cellSize, 2*cellSize, cellSize)

    c.fillRect(x - 12*cellSize, y + 3*cellSize, 15*cellSize, 2*cellSize)
    c.fillRect(x - 11*cellSize, y + 5*cellSize, 13*cellSize, cellSize)
    c.fillRect(x - 10*cellSize, y + 6*cellSize, 11*cellSize, cellSize)
    c.fillRect(x - 9*cellSize, y + 7*cellSize, 9*cellSize, cellSize)

    c.fillRect(x - 7*cellSize, y + 8*cellSize, 5*cellSize, cellSize)

    c.strokeStyle = 'white'
    // c.strokeStyle = 'yellow'
    c.strokeRect(x - 7*cellSize, y - 9*cellSize, 5*cellSize, cellSize)
    c.strokeRect(x - 9*cellSize, y - 8*cellSize, 6*cellSize, cellSize)
    c.strokeRect(x - 10*cellSize, y - 7*cellSize, 6*cellSize, cellSize)
    c.strokeRect(x - 11*cellSize, y - 6*cellSize, 6*cellSize, cellSize)
    c.strokeRect(x - 12*cellSize, y - 5*cellSize, 7*cellSize, cellSize)
    c.strokeRect(x - 12*cellSize, y - 4*cellSize, 6*cellSize, cellSize)
    
    c.strokeRect(x - 13*cellSize, y - 3*cellSize, 7*cellSize, 5*cellSize)

    c.strokeRect(x - 13*cellSize, y + 2*cellSize, 9*cellSize, cellSize)
    c.strokeRect(x + 2*cellSize, y + 2*cellSize, 2*cellSize, cellSize)

    c.strokeRect(x - 12*cellSize, y + 3*cellSize, 15*cellSize, 2*cellSize)
    c.strokeRect(x - 11*cellSize, y + 5*cellSize, 13*cellSize, cellSize)
    c.strokeRect(x - 10*cellSize, y + 6*cellSize, 11*cellSize, cellSize)
    c.strokeRect(x - 9*cellSize, y + 7*cellSize, 9*cellSize, cellSize)

    c.strokeRect(x - 7*cellSize, y + 8*cellSize, 5*cellSize, cellSize)

    // Drawing twinkles
    function drawTwinkle(tx, ty) {
        c.fillRect(tx, ty - 2*cellSize, cellSize, cellSize)
        c.strokeRect(tx, ty - 2*cellSize, cellSize, cellSize)
        c.fillRect(tx - cellSize, ty - cellSize, 3*cellSize, cellSize)
        c.strokeRect(tx - cellSize, ty - cellSize, 3*cellSize, cellSize)
        c.fillRect(tx - 2*cellSize, ty, 5*cellSize, cellSize)
        c.strokeRect(tx - 2*cellSize, ty, 5*cellSize, cellSize)
        c.fillRect(tx - cellSize, ty + cellSize, 3*cellSize, cellSize)
        c.strokeRect(tx - cellSize, ty + cellSize, 3*cellSize, cellSize)
        c.fillRect(tx, ty + 2*cellSize, cellSize, cellSize)
        c.strokeRect(tx, ty + 2*cellSize, cellSize, cellSize)
    }
    
    drawTwinkle(x + 2*cellSize, y - 5*cellSize)
    drawTwinkle(x - 18*cellSize, y - 9*cellSize)
    drawTwinkle(x - 17*cellSize, y + 6*cellSize)
    
    c.fill();
}

function drawRocks() {
    c.beginPath()
    c.fillStyle = 'white'
    for (const [x, rockLength, rockLevel] of rocks) {
        c.fillRect(x, baseLine + (rockLevel*2*cellSize), rockLength*cellSize, cellSize)
    }
}

function drawCloud(cx, cy, cellSize) {
    c.beginPath()

    c.strokeStyle = 'white'
    c.fillStyle = 'white'

    c.fillRect(cx - 2*cellSize, cy - 6*cellSize, 4*cellSize, cellSize)

    c.fillRect(cx - 4*cellSize, cy - 5*cellSize, 2*cellSize, cellSize)
    c.fillRect(cx + 2*cellSize, cy - 5*cellSize, 2*cellSize, cellSize)

    c.fillRect(cx - 5*cellSize, cy - 4*cellSize, cellSize, 2*cellSize)
    c.fillRect(cx + 4*cellSize, cy - 4*cellSize, cellSize, 2*cellSize)
    c.fillRect(cx + 8*cellSize, cy - 3*cellSize, 3*cellSize, cellSize)

    c.fillRect(cx - 6*cellSize, cy - 2*cellSize, cellSize, 2*cellSize)
    c.fillRect(cx + 5*cellSize, cy - 2*cellSize, cellSize, cellSize)
    c.fillRect(cx + 7*cellSize, cy - 2*cellSize, cellSize, cellSize)
    c.fillRect(cx + 11*cellSize, cy - 2*cellSize, cellSize, cellSize)

    c.fillRect(cx - 10*cellSize, cy - cellSize, 3*cellSize, cellSize)
    c.fillRect(cx + 6*cellSize, cy - cellSize, cellSize, cellSize)
    c.fillRect(cx + 12*cellSize, cy - cellSize, cellSize, cellSize)

    c.fillRect(cx - 11*cellSize, cy, cellSize, cellSize)
    c.fillRect(cx - 7*cellSize, cy, cellSize, cellSize)
    c.fillRect(cx + 13*cellSize, cy, cellSize, 6*cellSize)

    c.fillRect(cx - 12*cellSize, cy + cellSize, cellSize, 5*cellSize)

    for (let i = 0; i < 24; i++) {
        c.fillRect(cx + ((i - 11)*cellSize), cy + 6*cellSize, cellSize - 0.2, cellSize)
    }
    
    // c.fillRect(cx - 7*cellSize, cy + 3*cellSize, 3*cellSize, cellSize)
    // c.fillRect(cx + 6*cellSize, cy + 2*cellSize, 3*cellSize, cellSize)
}

function drawClouds() {
    for (const [x_pos, cs, ch] of clouds) {
        drawCloud(x_pos, ch, cs)
    }
}

function drawBaseLine() {
    c.beginPath()
    c.strokeStyle = 'white'
    c.lineWidth = 2
    c.moveTo(0, baseLine)
    c.lineTo(innerWidth, baseLine)
    c.stroke()
}

function drawDinosaur(cur_y) {
    c.beginPath()
    c.fillStyle = 'white'
    
    let cur_x = 120 // Starting margin from left screen
    // cur_y = innerHeight/2 - 22*cellSize

    c.moveTo(cur_x, cur_y) // Top-left of dino head
    cur_x += cellSize*8
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*5
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize*5
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize*3
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize*4
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*3
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*4
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize*3
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize*4
    c.lineTo(cur_x, cur_y)
    for (let i = 0; i < 5; i++) {
        cur_x -= cellSize
        c.lineTo(cur_x, cur_y)
        cur_y -= cellSize
        c.lineTo(cur_x, cur_y)
    }
    cur_y -= cellSize*5
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize*7
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)

    c.fill()

    // Drawing eye
    c.fillStyle = 'black'
    cur_x += cellSize
    cur_y += cellSize*2
    c.fillRect(cur_x, cur_y, cellSize, cellSize)
}

function drawCactus(cur_x) {
    c.beginPath()
    c.strokeStyle = 'white'
    c.fillStyle = 'green'

    let cur_y = baseHeight

    c.moveTo(cur_x, cur_y) // Top-left of cactus
    cur_x += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)

    cur_y += cellSize*10
    c.lineTo(cur_x, cur_y)
    // Drawing right arm
    rightArmHeight = 7
    cur_x += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize*rightArmHeight
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*rightArmHeight
    c.lineTo(cur_x, cur_y)
    for (let i = 0; i < 4; i++) {
        cur_x -= cellSize
        c.lineTo(cur_x, cur_y)
        cur_y += cellSize
        c.lineTo(cur_x, cur_y)
    }
    cur_x -= cellSize*2
    c.lineTo(cur_x, cur_y)

    cur_y += cellSize*7
    c.lineTo(cur_x, cur_y)
    cur_x -= cellSize*5
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)

    cur_y -= cellSize*5
    c.lineTo(cur_x, cur_y)
    // Drawing left arm
    leftArmHeight = 6
    cur_x -= cellSize*2
    c.lineTo(cur_x, cur_y)
    for (let i = 0; i < 4; i++) {
        cur_y -= cellSize
        c.lineTo(cur_x, cur_y)
        cur_x -= cellSize
        c.lineTo(cur_x, cur_y)
    }
    cur_y -= cellSize*leftArmHeight
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize*2
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y += cellSize*leftArmHeight
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize*2
    c.lineTo(cur_x, cur_y)

    cur_y -= cellSize*11
    c.lineTo(cur_x, cur_y)
    cur_x += cellSize
    c.lineTo(cur_x, cur_y)
    cur_y -= cellSize
    c.lineTo(cur_x, cur_y)


    c.stroke()
    // c.fill()
}