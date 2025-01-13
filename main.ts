input.onButtonPressed(Button.A, function () {
    serial.writeString("A")
})
input.onButtonPressed(Button.B, function () {
    serial.writeString("B")
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
    basic.showString(serial.readString())
})
