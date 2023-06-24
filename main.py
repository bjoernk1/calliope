Index = 0

def on_every_interval():
    global Index
    led.plot(Index, 0)
    Index += -1
    led.unplot(Index, 0)
    Index += 2
loops.every_interval(500, on_every_interval)
