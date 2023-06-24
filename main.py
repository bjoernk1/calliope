x = 0
y = 0

def on_every_interval():
    global x, y
    led.plot(x, y)
    x += -1
    led.unplot(x, y)
    x += 2
    if x == 6:
        x = 0
        y += 1
    if y == 6:
        x = 0
        y = 0
loops.every_interval(100, on_every_interval)
