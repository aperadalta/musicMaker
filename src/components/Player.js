import React from 'react';
import { drum } from '../music/drum.js';

const Player = ({table}) => {


    function playMusic(){
        let j = -1;
        setInterval(()=> j++, 300);
        for(let i = 0; i<table.length; i++){
            setInterval(()=>{
                const loadPlay = () =>{
                    drum[i].audio.load();
                    drum[i].audio.play();
                } 
                if(table[i][j] === 1) loadPlay();
            
            }, 300);
        } 
        if(j >= 16) j = 0;
    }

    function reset(){
        for(let i = 0; i<table.length; i++){
            for(let j = 0; j<table[i].length; j++){
                table[i][j] = 0;
            }
        }
    }

    return ( 
        <div>
            <button
            onClick = {()=> playMusic()}
            >play</button>
            <button
                onClick = {()=> reset()}
            >reset</button>
        </div>
     );
}
 
export default Player;