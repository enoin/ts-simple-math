export type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;


export class Vector {
    x: number = 0
    y: number = 0
    z: number = 0

    private constructor(a: TypedArray) {
        [this.x, this.y, this.z] = a
    }

    static createFrom(from: TypedArray): Vector {
        return new Vector(from)
    }

    static createFromPosition(from: Position): Vector {
        return new Vector(new Float32Array([from.x, from.y, from.z]))
    }

    clone(): Vector {
        const a = new Float64Array([this.x, this.y, this.z])
        return Vector.createFrom(a)
    }

    /** Euclidean distance */
    distanceTo(v: Vector) {
        return this.minus(v).magnitude()
    }

    /** ‖v‖, Euclidean norm, Euclidean length |v|, quadratic norm, magnitude */
    normalize() {
        return Math.sqrt(this.dot(this))
    }

    magnitude() {
        return this.normalize()
    }

    /** A - B = [a_ij] - [b_ij] := [a_ij - b_ij].  */
    minus(v: Vector) {
        const c = this.clone()
        c.x -= v.x
        c.y -= v.y
        c.z -= v.z
        return c
    }
    
    multiplyScalar(scalar: number): Vector {
        const v = this.clone();
        v.x = this.x * scalar
        v.y = this.y * scalar
        v.z = this.z * scalar
        return v
    }

    /** unit vector, normalized vector */
    direction() {
        return this.multiplyScalar(1.0 / this.magnitude())
    }

    /** (scalar product, ⟨𝐴,𝐵⟩ inner product in Euclidean space) dot_product = ||A|| ||B|| cos(theta) = a1*b1+a2*b2 .... */ 
    dot(v: Vector) {
        let dotProductSum = 0.0
        dotProductSum += this.x * v.x
        dotProductSum += this.y * v.y
        dotProductSum += this.z * v.z
        return dotProductSum
    }
}

export interface Position {
    x: number
    y: number
    z: number
}