let x = 0
let y = 0
loops.everyInterval(100, function () {
    led.plot(x, y)
    x += -1
    led.unplot(x, y)
    x += 2
    if (x == 6) {
        x = 0
        y += 1
    }
    if (y == 6) {
        x = 0
        y = 0
    }
})
