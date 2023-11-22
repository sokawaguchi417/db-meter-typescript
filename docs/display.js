"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
class Display {
    constructor(soundMeasure, alarm) {
        this.soundMeasure = soundMeasure;
        this.alarm = alarm;
        this.soundMeasure.on('measure', (decibel) => {
            this.displayDecibel(decibel);
            this.displayMinMaxDecibel(this.soundMeasure.getMinDecibel(), this.soundMeasure.getMaxDecibel());
            this.displayAlarmStatus();
        });
    }
    displayDecibel(decibel) {
        console.log(`Current sound level: ${decibel.toFixed(2)} dB`);
    }
    displayMinMaxDecibel(minDecibel, maxDecibel) {
        console.log(`Min sound level: ${minDecibel.toFixed(2)} dB`);
        console.log(`Max sound level: ${maxDecibel.toFixed(2)} dB`);
    }
    displayAlarmStatus() {
        if (this.alarm.isAlarmActive()) {
            console.log('Alarm is currently active!');
        }
        else {
            console.log('Alarm is currently inactive.');
        }
    }
}
exports.Display = Display;
