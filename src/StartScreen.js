import React from 'react'

export default function StartScreen({ totalQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{totalQuestions} questions to test your React knowledge.</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  )
}
