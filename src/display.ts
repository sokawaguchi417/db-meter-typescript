import { SoundMeasure } from './soundMeasure';
import { Alarm } from './alarm';

export class Display {
    private soundMeasure: SoundMeasure;
    private alarm: Alarm;

    constructor(soundMeasure: SoundMeasure, alarm: Alarm) {
        this.soundMeasure = soundMeasure;
        this.alarm = alarm;

        this.soundMeasure.on('measure', (decibel: number) => {
            this.displayDecibel(decibel);
            this.displayMinMaxDecibel(this.soundMeasure.getMinDecibel(), this.soundMeasure.getMaxDecibel());
            this.displayAlarmStatus();
        });
    }

    public displayDecibel(decibel: number) {
        console.log(`Current sound level: ${decibel.toFixed(2)} dB`);
    }

    public displayMinMaxDecibel(minDecibel: number, maxDecibel: number) {
      console.log(`Min sound level: ${minDecibel.toFixed(2)} dB`);
      console.log(`Max sound level: ${maxDecibel.toFixed(2)} dB`);
  }

    private displayAlarmStatus() {
        if (this.alarm.isAlarmActive()) {
            console.log('Alarm is currently active!');
        } else {
            console.log('Alarm is currently inactive.');
        }
    }
}
