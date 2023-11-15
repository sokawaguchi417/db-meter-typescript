import { SoundMeasure } from './soundMeasure';

// Alarmクラスの定義
export class Alarm {
    // SoundMeasureオブジェクトの参照
    private soundMeasure: SoundMeasure;
    // アラームが鳴る閾値
    private alarmThreshold: number;
    // アラームがアクティブかどうかを示すフラグ
    private alarmActive: boolean;

    // コンストラクタ
    constructor(soundMeasure: SoundMeasure, alarmThreshold: number) {
        // 初期化
        this.soundMeasure = soundMeasure;
        this.alarmThreshold = alarmThreshold;
        this.alarmActive = false;

        // 音量が閾値を超えたときにアラームをアクティブにする
        this.soundMeasure.on('measure', (decibel: number) => {
            if (decibel >= this.alarmThreshold) {
                this.activateAlarm();
            } else {
                this.deactivateAlarm();
            }
        });
    }

    // アラームをアクティブにするメソッド
    public activateAlarm() {
        if (!this.alarmActive) {
            this.alarmActive = true;
            console.log('Alarm activated! Sound level is above the threshold.');
        }
    }

    // アラームを非アクティブにするメソッド
    public deactivateAlarm() {
        if (this.alarmActive) {
            this.alarmActive = false;
            console.log('Alarm deactivated. Sound level is below the threshold.');
        }
    }

    // アラームがアクティブかどうかを返すメソッド
    public isAlarmActive(): boolean {
        return this.alarmActive;
    }
}
