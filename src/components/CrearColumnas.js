import React from 'react';
import {drum} from '../music/drum.js'

const CrearColumnas = (num) =>  {
    var id = num.num - 2;
    var id2 = 0;

    const makeItSound = element => {
        element.audio.load(); 
        element.audio.play();
        
    }

    return ( 
        <div className="column">
            {drum.map((element) => 
                <div 
                    className="button" 
                    id={`${id}${id2++}`}
                    key={element.key} 
                    onClick={()=> {
                            makeItSound(element);
                        }
                    }></div>
            )}
        </div> 
    );
}
 
export default CrearColumnas;

