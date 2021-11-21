let Puntos = 0
let Random_number = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("start")
    Puntos = 0
    while (Puntos < 5) {
        Random_number = randint(1, 3)
        if (Random_number == 1) {
            basic.showIcon(IconNames.Chessboard)
            basic.pause(5000)
            if (input.isGesture(Gesture.Shake)) {
                basic.showIcon(IconNames.Yes)
                Puntos += 1
                basic.showNumber(Puntos)
                basic.pause(1000)
                basic.clearScreen()
            } else {
                basic.showIcon(IconNames.Sad)
            }
        }
        if (Random_number == 2) {
            basic.showArrow(ArrowNames.East)
            basic.pause(5000)
            if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Yes)
                Puntos += 1
                basic.showNumber(Puntos)
                basic.pause(1000)
                basic.clearScreen()
            } else {
                basic.showIcon(IconNames.Sad)
            }
        }
        if (Random_number == 3) {
            basic.showArrow(ArrowNames.West)
            basic.pause(5000)
            if (input.buttonIsPressed(Button.A)) {
                basic.showIcon(IconNames.Yes)
                Puntos += 1
                basic.showNumber(Puntos)
                basic.pause(1000)
                basic.clearScreen()
            } else {
                basic.showIcon(IconNames.Sad)
            }
        }
    }
    basic.showNumber(Puntos)
    basic.pause(500)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    game.gameOver()
})
basic.forever(function () {
	
})
