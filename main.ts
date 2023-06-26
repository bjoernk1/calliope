let x = -1
let y = 0
let oldx = -1
let oldy = -1
function f1 () {
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
}

function f2() {
    oldx = x
    oldy = y
    x += 1
    led.plot(x, y)
    led.unplot(oldx, oldy)
    if (x == 5) {
        x = -1
        y += 1
    }
    if (y == 5) {
        x = -1
        y = 0
    }
}
loops.everyInterval(100, function () {
    f2()
})
