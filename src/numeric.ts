export function rk4<T extends any[]>(fn: (...params: T) => any, dt: number, ...params: T) {
    let [t, x, y, z] = params
    const remainder = params.slice(4)

    const k1 = fn(...[t, x, y, z, ...remainder] as T);

    const k1x = dt * k1.dxdt
    const k1y = dt * k1.dydt
    const k1z = dt * k1.dzdt

    const k2 =  fn(...[t + 0.5*dt, x + 0.5*k1x, y + 0.5*k1y, z + 0.5*k1z, ...remainder] as T)

    const k2x = dt * k2.dxdt
    const k2y = dt * k2.dydt
    const k2z = dt * k2.dzdt

    const k3 =  fn(...[t + 0.5*dt, x + 0.5*k2x, y + 0.5*k2y, z + 0.5*k2z, ...remainder] as T)

    const k3x = dt * k3.dxdt
    const k3y = dt * k3.dydt
    const k3z = dt * k3.dzdt

    const k4 =  fn( ...[t + dt, x + k3x, y + k3y, z + k3z, ...remainder] as T)

    const k4x = dt * k4.dxdt
    const k4y = dt * k4.dydt
    const k4z = dt * k4.dzdt

    x += (k1x + 2*k2x + 2*k3x + k4x) / 6.0
    y += (k1y + 2*k2y + 2*k3y + k4y) / 6.0
    z += (k1z + 2*k2z + 2*k3z + k4z) / 6.0

    return {x, y, z};
}
