import React from 'react'
import { useTypingEffect } from 'use-typing-effect'

const example = `
import * as React from 'react'

import useTypingEffect from 'use-typing-effect'

const Example = () => {
  const heading = useTypingEffect([
    'Some text here',
    'More text here',
  ])
  return (
    <h1>{heading}</h1>
  )
}
`.trim()

const Command = ({children, className}) => <input className={`form-control text-monospace  border-0 bg-transparent text-center mb-3 ${className || ''}`} readOnly defaultValue={children}/>

const App = () => {
  const heading = useTypingEffect([
    '“Human typing” effect',
    'React hook...',
    'Best react hook!',
    'Star on github!',
    'Use in production!',
  ])
  const comment = useTypingEffect([
    '// Nice, eh?',
    '// Simple API',
    '// Easy to use'
  ])

  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 mt-md-3 mx-md-3 text-center bg-light">
        <div className="col-md-8 p-lg-8 mx-auto my-5">
          <h1 className="display-4 font-weight-normal my-5">{heading}</h1>
          <p className="text-monospace"></p>
          <Command>npm install use-typing-effect</Command>
          <Command className="text-muted">yarn add use-typing-effect</Command>
          <a className="btn btn-outline-danger" href="https://www.npmjs.com/package/use-typing-effect">npm</a>
          <a className="btn btn-dark ml-2" href="https://github.com/Hermanya/use-typing-effect">github</a>
        </div>
      </div>
      <div className="mx-3 d-flex flex-align-center">
      <textarea
        className="col-sm-8 col-md-6 col-lg-4 p-3 px-lg-5 mx-auto text-left bg-dark text-success rounded shadow text-monospace form-control border-0"
        style={{transform: 'translateY(-3em)'}}
        value={[example, comment].join('\n')}
        readOnly
        rows={example.split('\n').length + 2}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center my-2">
        MIT ©
        <a href="https://hermanya.github.io" className="ml-1">
          Herman Starikov
        </a>
          <img
            height="48"
            width="48"
            className="rounded d-inline-block ml-2"
            alt="Herman"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1589206/profile/profile-512.jpg"/>
      </div>
    </div>
  )
}

export default App