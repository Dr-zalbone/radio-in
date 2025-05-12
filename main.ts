input.onButtonPressed(Button.A, function () {
    radio.sendString("forward")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        mode = 0
    }
    if (receivedString == "backward") {
        mode = 1
    }
    if (receivedString == "forward") {
        mode = 2
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("backward")
})
let mode = 0
radio.setGroup(1)
basic.forever(function () {
    if (mode == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        if (mode == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                `)
        } else {
            if (mode == 2) {
                basic.showLeds(`
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
            }
        }
    }
})
