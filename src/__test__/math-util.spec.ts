import { MathUtils } from "../math-util"


describe('abs with sign bit mask', () => {
    
    test('minus must be blus', () => {
        expect(MathUtils.abs(-1)).toBe(1)
    })    

    test('when arg < 0 sign must be -1', () => {
        expect(MathUtils.sign(-11)).toBe(-1)
    })

    test('when arg 0 sign must be 1', () => {
        expect(MathUtils.sign(0)).toBe(1)
    })
})

describe('sign', () => {
    
    test('when arg less than 0 sign must be -1', () => {
        expect(MathUtils.sign(-11)).toBe(-1)
    })

    test('when arg 0 sign must be 1', () => {
        expect(MathUtils.sign(0)).toBe(1)
    })

    test('when arg > 0 sign must be 1', () => {
        expect(MathUtils.sign(10)).toBe(1)
    })
})

describe('manhattan', () => {
    
    test('manhattanDistance happycase', () => {
        expect(MathUtils.manhattanDistance(1,2, 5, 5)).toBe(7)
        expect(MathUtils.manhattanDistance(0,0, 5, 5)).toBe(10)
        expect(MathUtils.manhattanDistance(0,0, -5, 5)).toBe(10)
    })

    test('when two point is the same, manhattanDistance must be zero', () => {
        expect(MathUtils.manhattanDistance(1,2, 1, 2)).toBe(0)
    })

})

describe('linearScale between [0, 1]', () => {
    
    test('linearScale happycase', () => {
        expect(MathUtils.linearScale(3,100)).toBe(0.03)
    })

    test('when value greater than max value, linearScale must give 1', () => {
        expect(MathUtils.linearScale(3,1)).toBe(1)
    })

    test('when value less than zero, linearScale must give 1', () => {
        expect(MathUtils.linearScale(-11,1)).toBe(0)
    })
})
