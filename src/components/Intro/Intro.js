import PropTypes from 'prop-types'
import React from 'react'

const Intro = (props) => {
  return ( 
    <div>
        <h1>Instruction</h1>
        <p>Total number of questions: <span>{props.numberOfQuestions}</span></p>
        <button onClick={props.startGame}>Start</button>
    </div>
  )
}

Intro.propTypes = {
  numberOfQuestions: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired
}

export default Intro