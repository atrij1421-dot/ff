let Bool_start = 0
let Bool_rec = 1
basic.showString("Press")
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
control.waitMicros(6000)
basic.clearScreen()
basic.showString("Or")
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
Bool_start += 1
basic.forever(function () {
    if (Bool_start == 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            basic.showString("Play mode!!")
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . # . . .
                    # . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . # . . .
                    . # . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . # .
                    . . . # .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . # .
                    . . . . #
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . # #
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # # #
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . # #
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . #
                    . . . # .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . # .
                    . . . # .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . # . . .
                    . # . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    # . . . .
                    . # . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    # # . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # . .
                    . . . . .
                    . . . . .
                    `)
                control.waitMicros(6000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    # # . . .
                    . . . . .
                    `)
            }
            basic.clearScreen()
            music.play(music.stringPlayable("C D C E D F E G ", 120), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("G F A G B A C5 C5 ", 120), music.PlaybackMode.UntilDone)
            record.setMicGain(record.AudioLevels.Medium)
            record.setSampleRate(7686)
            while (Bool_rec == 1) {
                if (input.isGesture(Gesture.TiltLeft)) {
                    Bool_rec += 0
                    record.startRecording(record.BlockingState.Blocking)
                }
            }
            record.playAudio(record.BlockingState.Blocking)
        }
        if (input.buttonIsPressed(Button.B)) {
        	
        }
    }
})
