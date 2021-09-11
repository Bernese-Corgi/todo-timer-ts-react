import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global-style';
import { theme } from 'styles/theme';
import { AnalogClock } from 'components';
import { TodoApp } from 'container';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnalogClock />
        <TodoApp />
      </ThemeProvider>
  );
}

export default App;
