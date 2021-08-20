import { DefaultTheme } from 'styled-components';

const colors = {
  primary: {
    medium: '#D2B48C',
    light: '#DFD9D3',
    dark: '#645645',
  },
  secondary: {
    medium: '#7B86AA',
    light: '#BFC8EA',
    dark: '#17243B',
  },
  gray: {
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
  sm: '0.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const boxShadow = {
  default: '0 0.4em 1.5em rgba(0, 0, 0, 0.2)',
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  sizes,
  devices,
  margins,
  paddings,
  boxShadow,
};
