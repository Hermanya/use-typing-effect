import React from 'react'
import { useTypingEffect } from 'use-typing-effect'

const App = () => {
  const heading = useTypingEffect([
    'Typing effect...',
    'React hook for the “human typing” effect.',
    'Best react hook!',
    'Star on github!',
    'Use in production!',
    'Links below ⬇',
  ])

  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-8 p-lg-8 mx-auto my-5">
          <h1 className="display-4 font-weight-normal my-5">{heading}</h1>
          <p className="text-monospace">npm install use-typing-effect</p>
          <p className="text-monospace text-muted">yarn add use-typing-effect</p>
          <a className="btn btn-outline-danger" href="https://www.npmjs.com/package/use-typing-effect">npm</a>
          <a className="btn btn-dark ml-2" href="https://github.com/Hermanya/use-typing-effect">github</a>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-2">
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