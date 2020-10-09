import React from 'react';
import { drum } from '../music/drum.js';
import CrearColumnas from './CrearColumnas.js';

const CrearTablero = ({table}) => {

    const n = 16;
    var num = 1;

    return ( 
        <div className="tablero">
            <div className="instruments">{drum.map(element => <p key={element.key}>{element.key}</p>)}</div>
            {[...Array(n)].map(() => 
                <div style={{textAlign: "center"}}>  
                    <p key={num}>{num++}</p>
                    <CrearColumnas 
                        table = {table}
                        num = {num} 
                        key = {num}
                    />
                </div>
            )}
        </div>
     );
}
 
export default CrearTablero;


 