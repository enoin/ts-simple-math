import { Vector } from '../vector'


describe('vector operation', () => {
    
    test('The length of the vector on the X-axis at x should equal to x', () => {
        const x = 10
        const v = Vector.createFrom(new Float32Array([x, 0, 0]))
        expect(v.magnitude()).toBe(x)
    })

    test('The length of the vector on the Y-axis at y should equal to y', () => {
        const y = 10
        const v = Vector.createFrom(new Float32Array([0, y, 0]))
        expect(v.magnitude()).toBe(y)
    })

    test('The length of the vector on the Z-axis at z should equal to z', () => {
        const z = 10
        const v = Vector.createFrom(new Float32Array([0, 0, z]))
        expect(v.magnitude()).toBe(z)
    })
    
    test('The magnitude of the vector must be correct regardless of the direction.', () => {
        const x = 10
        const y = 10
        const v = Vector.createFrom(new Float32Array([x, y, 0]))
        expect(v.magnitude()).toBe(y)
    })

  })
