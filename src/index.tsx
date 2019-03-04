import * as React from 'react';

export const useTypingEffect = (
  strings: string[] = [''],
  {
    loop = false,
    playbackRate = 1
  }: { loop?: boolean; playbackRate?: number } = {
    loop: false,
    playbackRate: 1
  }
) => {
  let [{ stringIndex, characterIndex }, setState] = React.useState<{
    stringIndex: number;
    characterIndex: number;
  }>({
    stringIndex: 0,
    characterIndex: 0
  });

  let timeoutId: number;
  const emulateKeyStroke = () => {
    characterIndex++;
    if (characterIndex === strings[stringIndex].length) {
      characterIndex = 0;
      stringIndex++;
      if (stringIndex === strings.length) {
        if (!loop) {
          return;
        }
        stringIndex = 0;
      }
      timeoutId = window.setTimeout(emulateKeyStroke, 100 * playbackRate);
    } else if (characterIndex === strings[stringIndex].length - 1) {
      timeoutId = window.setTimeout(emulateKeyStroke, 2000 * playbackRate);
    } else {
      timeoutId = window.setTimeout(emulateKeyStroke, 100 * playbackRate);
    }
    setState({
      characterIndex,
      stringIndex
    });
  };

  React.useEffect(() => {
    emulateKeyStroke();
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  const nonBreakingSpace = '\u00A0';
  return strings[stringIndex].slice(0, characterIndex + 1) || nonBreakingSpace;
};
export default useTypingEffect;
