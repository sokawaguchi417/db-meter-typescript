"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alarm = void 0;
// Alarmクラスの定義
class Alarm {
    // コンストラクタ
    constructor(soundMeasure, alarmThreshold) {
        // 初期化
        this.soundMeasure = soundMeasure;
        this.alarmThreshold = alarmThreshold;
        this.alarmActive = false;
        // 音量が閾値を超えたときにアラームをアクティブにする
        this.soundMeasure.on('measure', (decibel) => {
            if (decibel >= this.alarmThreshold) {
                this.activateAlarm();
            }
            else {
                this.deactivateAlarm();
            }
        });
    }
    // アラームをアクティブにするメソッド
    activateAlarm() {
        if (!this.alarmActive) {
            this.alarmActive = true;
            console.log('Alarm activated! Sound level is above the threshold.');
        }
    }
    // アラームを非アクティブにするメソッド
    deactivateAlarm() {
        if (this.alarmActive) {
            this.alarmActive = false;
            console.log('Alarm deactivated. Sound level is below the threshold.');
        }
    }
    // アラームがアクティブかどうかを返すメソッド
    isAlarmActive() {
        return this.alarmActive;
    }
}
exports.Alarm = Alarm;
