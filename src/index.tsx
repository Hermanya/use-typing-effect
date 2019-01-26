import * as React from 'react';

export const useTypingEffect = (strings: string[]) => {
  let [{
    stringIndex,
    characterIndex
  }, setState] = React.useState<{
    stringIndex: number;
    characterIndex: number;
  }>({
    stringIndex: 0,
    characterIndex: 0,
  });

  const handle = () => {
    characterIndex++;
    if (characterIndex === strings[stringIndex].length) {
      characterIndex = 0;
      stringIndex++;
      if (stringIndex == strings.length) {
        stringIndex = 0;
      }
    }
    setState({
      characterIndex,
      stringIndex
    })
  };

  React.useEffect(() => {
    const id = window.setInterval(handle, 300);
    return () => {
      window.clearInterval(id);
    };
  }, []);

  return strings[stringIndex]
    .slice(0, characterIndex);
};