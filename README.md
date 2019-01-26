# use-typing-effect

> React hook for emulating a person typing; great for landing pages, input placeholders and more!

[![NPM](https://img.shields.io/npm/v/use-typing-effect.svg)](https://www.npmjs.com/package/use-typing-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-typing-effect
```

## Usage

```tsx
import * as React from 'react'

import useTypingEffect from 'use-typing-effect'

const Example = () => {
  const heading = useTypingEffect([
    'Typing effect...',
    'React hook for the “human typing” effect.',
    'Best react hook!',
    'Star on github!',
    'Use in production!',
  ])
  return (
    <h1>{heading}</h1>
  )
}
```

## License

MIT © [Hermanya](https://github.com/Hermanya)
