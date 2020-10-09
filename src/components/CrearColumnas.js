import React from 'react';
import {drum} from '../music/drum.js';

const CrearColumnas = ({table, num}) =>  {
    var id = num - 2;
    var id2 = 0;

    const makeItSound = (element, e) => {
        element.audio.load(); 
        element.audio.play();
        
        var id = document.getElementById(e.target.id);

        // canviar les classes (change colors)
        if(id.classList.contains('a0')){
            id.classList.remove('a0');
            id.classList.add('a1');
        } else {
            id.classList.remove('a1');
            id.classList.add('a0');
        }

        //separar col de raw (c0r0 => [0, 0] c11r9 => [11, 9])
        var news = e.target.id.split('r');
        var result = news.map(function (x) { 
            return parseInt(x, 10); 
          });
        var one = result.splice(0,1);
        
        if(table[result][one] === 0) table[result][one] = 1;
        else table[result][one] = 0;
    } 

    
    return ( 
        <div className="column">
            {drum.map((element) => 
                <div 
                    className={'button a0'} 
                    id={`${id}r${id2++}`}
                    key={element.key} 
                    onClick={(e) => {
                            makeItSound(element, e);
                        }
                    }></div>
            )}
        </div> 
    );
}
 
export default CrearColumnas;

