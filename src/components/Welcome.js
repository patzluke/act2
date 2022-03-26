import React, {Component} from 'react'
import {useHistory} from 'react-router-dom'

function Welcome() {
    let history = useHistory();
    return(
        <div className='backgroundz'>
            <h1>
                In between Game
            </h1>
            <button
            className="btnPlay"
            onClick={() =>
            history.push('/Game')
            }>
                Play
            </button>
        </div>
    )
}

export default Welcome;