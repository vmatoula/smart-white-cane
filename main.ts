let uperixwn = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.forever(function () {
    uperixwn = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (uperixwn <= 20) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.play(music.stringPlayable("C D E F F E D C ", 120), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
