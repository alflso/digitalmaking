function 평소진동값설정 () {
    basic.showString("s")
    평소가속도 = input.acceleration(Dimension.X)
}
function 약한진동 () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
function 진동세기분류 () {
    진동측정()
    if (가속도변화 <= 1) {
        진동세기 = 0
    } else if (2 <= 가속도변화 && 가속도변화 <= 4) {
        진동세기 = 1
    } else {
        진동세기 = 2
    }
}
function 강한진동 () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
function 진동측정 () {
    가속도변화 = Math.round(Math.abs(input.acceleration(Dimension.X) - 평소가속도) / 30)
}
function 기기표시 () {
    if (진동세기 == 0) {
        진동없음()
    } else if (진동세기 == 1) {
        약한진동()
    } else {
        강한진동()
    }
}
function 진동없음 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
let 진동세기 = 0
let 가속도변화 = 0
let 평소가속도 = 0
평소진동값설정()
basic.forever(function () {
    진동세기분류()
    기기표시()
})
