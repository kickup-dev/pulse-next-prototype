/* eslint-disable import/prefer-default-export */
import chroma from 'chroma-js';

export const makeScale = (theme, count) => {
  const baseColors = [
    theme.colors.blue,
    theme.colors.purple,
    theme.colors.red,
    theme.colors.green,
    theme.colors.yellow,
  ];

  const loopCount = Math.ceil(count / baseColors.length || 0);

  return baseColors.reduce((acc, colorVal) => {
    const colorScale = chroma
      .bezier(['lightyellow', colorVal])
      .scale()
      .colors(loopCount + 1)
      .reverse()
      .splice(0, Math.floor(loopCount));

    return [
      ...acc,
      ...colorScale,
    ];
  }, []);
};
