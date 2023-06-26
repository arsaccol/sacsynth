import { useState } from 'react'


function generateDataPoints(min, max, sampleCount, samplerFunction) {
    const results = []

    const step = (max - min) / sampleCount

    for( let i = min; i < max; i += step ) {
        results.push([i, samplerFunction(i)])
    }

    const real = Float32Array.from(results.map(pair => pair[0]))
    const imag = Float32Array.from(results.map(pair => pair[1]))
    

    return {
        real, 
        imag,
    }
}

function useWaveTable(sourceDataPoints) {
    const [dataPoints, setDataPoints] = useState(sourceDataPoints)

    return {
        dataPoints,
        setDataPoints
    }
}

export {
    generateDataPoints,
    useWaveTable,
}
