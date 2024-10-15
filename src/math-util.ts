export namespace MathUtils {

    export function abs(n: number) {
        if(n % 1 == 0){
            return (n ^ (n >> 31)) - (n >> 31)
        } 

        const floatView = new Float64Array(1);   
        const intView = new BigUint64Array(floatView.buffer);
        floatView[0] = n;
        intView[0] &= 0x7FFFFFFFFFFFFFFFn;
        return floatView[0];
    }

    export function sign(n: number) {
        return (n >> 31) | 1
    }

    export function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export function logScale(x: number, maxValue: number, c: number): number {
        return Math.log(x + c) / Math.log(maxValue + c);
    }

    // Normalize x to [0, 1] linear decay  
    export function linearScale(x: number, maxValue: number): number {
        return x < 0 ? 0 : roundDownToFixed(x / maxValue, 1)
    }

    // Normalize x to [0, 1] exponential decay
    export function expDecayScale(x: number, maxValue: number, alpha: number): number {
        const normalizedX = x / maxValue;
        return (1 - Math.exp(-alpha * normalizedX));
    }

    export function roundDownToFixed(value: number, fixedValue: number) {
        return value > fixedValue ? fixedValue : value;
    }

    export function manhattanDistance(x1: number, y1: number, x2: number, y2: number) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2)
    }  
}
