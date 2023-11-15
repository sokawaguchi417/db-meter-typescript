import { EventEmitter } from 'events';

export class SoundMeasure extends EventEmitter {
    private minDecibel: number;
    private maxDecibel: number;

    constructor() {
        super();
        this.minDecibel = Infinity;
        this.maxDecibel = -Infinity;
    }

    public async measure(): Promise<number> {
        // Here you should implement the actual sound measurement.
        // This is a placeholder implementation that generates a random decibel value.
        const decibel = Math.random() * 100;
        this.updateMinMaxDecibel(decibel);
        return decibel;
    }

    private updateMinMaxDecibel(decibel: number) {
        this.minDecibel = Math.min(this.minDecibel, decibel);
        this.maxDecibel = Math.max(this.maxDecibel, decibel);
    }

    public getMinDecibel(): number {
        return this.minDecibel;
    }

    public getMaxDecibel(): number {
        return this.maxDecibel;
    }
}
