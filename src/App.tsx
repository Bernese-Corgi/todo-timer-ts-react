import TodoApp from 'container/TodoApp/TodoApp';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global-style';
import { theme } from 'styles/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TodoApp />
      </ThemeProvider>
  );
}

export default App;
