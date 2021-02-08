import React from 'react';
import GameContext from '../../GameContext.js';
import './Button.css';


const Button = ([ playing, startGame ]) => {
    <GameContext.Consumer>
        <button onClick={startGame}>
            {playing === true ? 'reset' : 'start'}
        </button>
    </GameContext.Consumer>
}

export default Button
