import {
    useState,
    useEffect,
} from 'react';
import { generateDataPoints } from './generateDataPoints';



function usePlayOscillator() {

    console.log(`usePlayOscillator`)


    // Create an AudioContext
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Define the frequencies for each note
    const frequencies = {
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392.00,
      A4: 440.00,
      B4: 493.88,
      C5: 523.25
    };

    // Play a single note
    function playNote(note, duration) {
      const oscillator = audioContext.createOscillator();
      oscillator.type = 'sawtooth'; // Set the oscillator type (e.g., 'sine', 'square', 'sawtooth', 'triangle')
      oscillator.frequency.value = frequencies[note];

      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();

      // Stop the note after the specified duration
      setTimeout(function() {
        oscillator.stop();
      }, duration);
    }

    // Play a melody
    function playMelody(melody) {
      let delay = 0;

      for (const note of melody) {
        const [noteName, duration] = note;
        setTimeout(function() {
          playNote(noteName, duration);
        }, delay);
        delay += duration;
      }
    }

    // Define the melody
    const melody = [
      ['C4', 250], ['D4', 250], ['E4', 250], ['C4', 250],
      ['C4', 250], ['D4', 250], ['E4', 250], ['C4', 250],
      ['E4', 250], ['F4', 250], ['G4', 500],
      ['E4', 250], ['F4', 250], ['G4', 1000],
      ['G4', 250], ['A4', 250], ['G4', 250], ['F4', 250], ['E4', 500],
      ['C4', 250], ['C4', 250], ['D4', 250], ['E4', 250],
      ['C4', 250], ['C4', 250], ['D4', 250], ['E4', 250],
      ['E4', 250], ['F4', 250], ['G4', 500],
      ['E4', 250], ['F4', 250], ['G4', 500],
      ['G4', 250], ['A4', 250], ['G4', 250], ['F4', 250], ['E4', 500]
    ];

    // Play the melody
    playMelody(melody);

}

function useOscillator() {

    //const gainNode = audioContext.createGain()
    //gainNode.connect(audioContext.destination)
    const [samples, setSamples] = useState(generateDataPoints(0, 1, 100, Math.log2))
    const [audioContext, setAudioContext] = useState(new (window.AudioContext || window.webkitAudioContext)())
    const [oscillator, setOscillator] = useState(audioContext.createOscillator())
    const [isPlaying, setIsPlaying] = useState(false)

    function play() {
        console.log('playing')

        const newOscillator = audioContext.createOscillator()
        oscillator.frequency.value = 440.00
        newOscillator.type = 'sine'
        newOscillator.connect(audioContext.destination)
        newOscillator.start()

        setOscillator(newOscillator)

        setIsPlaying(true)
        
    }

    function stop() {
        console.log('stopping')
        oscillator.stop()
        setIsPlaying(false)
    }


    return {
        play,
        stop,
        isPlaying,
    }

}



export { 
    usePlayOscillator,
    useOscillator,
}
