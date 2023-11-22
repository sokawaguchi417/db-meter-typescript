import { SoundMeasure } from './soundMeasure.js';
import { Alarm } from './alarm.js';
import { Display } from './display.js';

class Main {
    private soundMeasure: SoundMeasure;
    private alarm: Alarm;
    private display: Display;

    constructor() {
        // Initialize SoundMeasure, Alarm, and Display
        this.soundMeasure = new SoundMeasure();
        this.alarm = new Alarm(this.soundMeasure, 80);
        this.display = new Display(this.soundMeasure, this.alarm);
    }

    public async run() {
        while (true) {
            // 音量を測定する
            const decibel = await this.soundMeasure.measure();
            // 測定した音量を表示する
            this.display.displayDecibel(decibel);

            // 音量が閾値を超えているか確認する
            if (this.alarm.isAlarmActive()) {
                // 閾値を超えていたらアラームを鳴らす
                this.alarm.activateAlarm();
            } else {
                // 閾値を超えてなかったらアラームを鳴らさない
                this.alarm.deactivateAlarm();
            }  
            

            // 最小音量を取得する
            const minDecibel = this.soundMeasure.getMinDecibel();
            // 最大音量を取得する
            const maxDecibel = this.soundMeasure.getMaxDecibel();
            // 最小音量と最大音量を表示する
            this.display.displayMinMaxDecibel(minDecibel, maxDecibel);
        }
    }
}

const main = new Main();
main.run();
