import { generateDataPoints } from './generateDataPoints.js'

const {real, imag} = generateDataPoints(-1, 1, 32, Math.sin)
console.log({real, imag})



console.log('the end')
