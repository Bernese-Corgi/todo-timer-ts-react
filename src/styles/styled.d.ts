import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        medium: string;
        light: string;
        dark: string;
      };
      secondary: {
        medium: string;
        light: string;
        dark: string;
      };
      gray: {
        light: string;
        dark: string;
      };
      white: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      blue: string;
      purple: string;
      pink: string;
    };
    fonts: {
      family: {
        base: string;
        title: string;
      };
      size: {
        sm: string;
        base: string;
        lg: string;
        xl: string;
        title: string;
      };
      weight: {
        light: number;
        normal: number;
        bold: number;
      };
    };
    sizes: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
    devices: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    margins: {
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };
    paddings: {
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };
    boxShadow: {
      default: string;
    };
  }
}
