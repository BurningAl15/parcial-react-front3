import React from 'react'
import { invertColor } from '../utils/OppositeColor';

const Card = ({ name, color }) => {
    return (
        <div className='card' style={{ borderColor: color }}>
            <p>Hola {name}</p>
            <p>
                Sabemos que tu color favorito es:
            </p>
            <div style={{ backgroundColor: color, color: invertColor(color) }} className="ColorBox">
                {color}
            </div>
        </div>
    )
}

export default Card;