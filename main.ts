basic.showString("J")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    . . . # .
    . . . # .
    # . . # .
    . # # . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    . . . . .
    # # # # #
    `)
basic.showIcon(IconNames.Tortoise)
basic.showIcon(IconNames.House)
basic.showIcon(IconNames.Rollerskate)
basic.showIcon(IconNames.Sword)
basic.showIcon(IconNames.Umbrella)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        . . # . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
