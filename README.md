# use-typing-effect

> React hook for emulating a person typing; great for landing pages, input placeholders and more!

[![NPM](https://img.shields.io/npm/v/use-typing-effect.svg)](https://www.npmjs.com/package/use-typing-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![demo](https://media.giphy.com/media/5YkXhqD4SDmSR1Y2Ae/giphy.gif)

[DEMO](https://hermanya.github.io/use-typing-effect/)

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
    'Some text here',
    'More text here'
  ])
  return (
    <h1>{heading}</h1>
  )
}
```

## License

MIT © [Hermanya](https://github.com/Hermanya)
