import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
    //usePlayOscillator,
    useOscillator,
} from './usePlayOscillator.js'

import {
    generateDataPoints,
    useWaveTable,
} from './generateDataPoints.js'



function App() {

    function onPlayButtonClick() {
        //const results = generateDataPoints(0, 1, 100, Math.log2)

    }

    const { play, stop } = useOscillator()

    return (
        <>
        Sacsynth
        <div style={{backgrounColor: 'red'}}>
            <button onClick={play}>
                Play
            </button>

            <button onClick={stop}>
                Stop
            </button>

        </div>
        </>
    )
}

export default App
