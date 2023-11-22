var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventEmitter } from 'events';
export class SoundMeasure extends EventEmitter {
    constructor() {
        super();
        this.minDecibel = Infinity;
        this.maxDecibel = -Infinity;
    }
    measure() {
        return __awaiter(this, void 0, void 0, function* () {
            // Here you should implement the actual sound measurement.
            // This is a placeholder implementation that generates a random decibel value.
            const decibel = Math.random() * 100;
            this.updateMinMaxDecibel(decibel);
            return decibel;
        });
    }
    updateMinMaxDecibel(decibel) {
        this.minDecibel = Math.min(this.minDecibel, decibel);
        this.maxDecibel = Math.max(this.maxDecibel, decibel);
    }
    getMinDecibel() {
        return this.minDecibel;
    }
    getMaxDecibel() {
        return this.maxDecibel;
    }
}
