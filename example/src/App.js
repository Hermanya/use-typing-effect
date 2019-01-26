import React from 'react'

import { useTypingEffect } from 'use-typing-effect'

const App = () => {
  const heading = useTypingEffect([
    'Typing effect...',
    'React hook for typing effect.',
    'Best react hook!'
  ])

  return (
    <div>
      <h1>
        {heading}
      </h1>
    </div>
  )
}

export default App