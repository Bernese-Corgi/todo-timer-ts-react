import React from 'react';
import { AnalogClock } from 'components';
import HeaderBar from 'container/HeaderBar/HeaderBar';
import TodoApp from 'container/TodoApp/TodoApp';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global-style';
import { theme } from 'styles/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnalogClock />
        <TodoApp />
        <HeaderBar/>
      </ThemeProvider>
  );
}

export default App;
