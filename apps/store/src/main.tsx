import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import DashAppHolder from './DashAppHolder';
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming';
import App from './app/app';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
})
const Box = styled.div`
  background-color: ${boxBackgroundColor};
`
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render( 
    <StrictMode>
      <ThemeProvider theme={{ mode: 'dark' }}>
        <Box>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </StrictMode>
 );
