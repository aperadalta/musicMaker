// https://tonejs.github.io/docs/14.7.39/Sampler

/*===================================
Tipus de Synth que es poden triar

    AMSynth
    DuoSynth
    FMSynth
    MembraneSynth
    MetalSynth
    MonoSynth
    NoiseSynth
    PluckSynth
    PolySynth
    Sampler
    Synth

// Les notes en angles: C D E F G A B

// triggerAttackRelease("C4", "8n") 
C4 note, 8n duration
=====================================*/
import * as Tone from 'tone';

var note = "C2",
    duration = "4n";

const synth = new Tone.MembraneSynth(Tone.Synth).toDestination();
var sound = {
    one: synth.triggerAttackRelease(note, duration),
    two: synth.triggerAttackRelease("D2", duration),
    three: synth.triggerAttackRelease("E2", duration)
};

export {sound};