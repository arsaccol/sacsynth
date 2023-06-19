import { useState } from 'react'


function generateDataPoints(min, max, samples, samplerFunction) {
    const results = []

    const step = (max - min) / samples

    for( let i = min; i < max; i += step ) {
        results.push([i, samplerFunction(i)])
    }

    return results
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
