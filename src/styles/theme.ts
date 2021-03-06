import { DefaultTheme } from 'styled-components';

const colors = {
  primary: {
    base: '#D2B48C',
    light: '#DFD9D3',
    dark: '#645645',
  },
  secondary: {
    base: '#7B86AA',
    light: '#BFC8EA',
    dark: '#17243B',
  },
  gray: {
    base: '#a5a3a4',
    light: '#DCDCDC',
    dark: '#545051',
  },
  white: '#F8F8FF',
  red: '#DC143C',
  orange: '#FF7F00',
  yellow: '#F89B00',
  green: '#008D62',
  blue: '#00498C',
  purple: '#660099',
  pink: '#F29886',
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: 'Raleway',
  },
  size: {
    sm: '1.4rem',
    base: '1.6rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 200,
    normal: 400,
    bold: 700,
  },
};

const sizes = {
  mobile: 425,
  tablet: 768,
  desktop: 1440,
};

const devices = {
  mobile: `@media only screen and (max-width: ${sizes.mobile}px)`,
  tablet: `@media only screen and (max-width: ${sizes.tablet}px)`,
  desktop: `@media only screen and (max-width: ${sizes.desktop}px)`,
};

const margins = {
  sm: '0.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const paddings = {
  sm: '0.8rem',
  base: '1rem',
  lg: '1.5rem',
  xl: '3rem',
};

const boxShadow = {
  default: '0 0.4em 1.5em rgba(0, 0, 0, 0.2)',
};

const borders = {
  radius: {
    round: '50px',
    square: '4px',
  },
};

const flexes = {
  mixin: (direction = 'row', align = 'center', justify = 'center') => `
    display:flex;
    flex-direction:${direction};
    align-items:${align};
    justify-content:${justify}
  `,
  center: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  row: (justify = 'center') => `
    display: flex;
    justify-content: ${justify};
    align-items: center;
  `,
  column: (justify = 'center') => `
    display: flex;
    flex-flow: column;
    justify-content: ${justify};
    align-items: center;
  `,
};

const positions = {
  absolute: {
    topLeft: `
      position: absolute;
      top: 0;
      left: 0;
    `,
    center: `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    `,
  },
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  sizes,
  devices,
  margins,
  paddings,
  boxShadow,
  borders,
  flexes,
  positions,
};
