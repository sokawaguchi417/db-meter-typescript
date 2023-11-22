var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SoundMeasure } from './soundMeasure.js';
import { Alarm } from './alarm.js';
import { Display } from './display.js';
class Main {
    constructor() {
        // Initialize SoundMeasure, Alarm, and Display
        this.soundMeasure = new SoundMeasure();
        this.alarm = new Alarm(this.soundMeasure, 80);
        this.display = new Display(this.soundMeasure, this.alarm);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                // 音量を測定する
                const decibel = yield this.soundMeasure.measure();
                // 測定した音量を表示する
                this.display.displayDecibel(decibel);
                // 音量が閾値を超えているか確認する
                if (this.alarm.isAlarmActive()) {
                    // 閾値を超えていたらアラームを鳴らす
                    this.alarm.activateAlarm();
                }
                else {
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
        });
    }
}
const main = new Main();
main.run();
