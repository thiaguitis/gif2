basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    basic.showLeds(`
        # # . . .
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        . # # # .
        . # . # .
        `)
})
