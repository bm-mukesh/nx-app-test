import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import DashAppHolder from './DashAppHolder';
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming';
import App from './app/app';
import "./index.css"
//REDUX
import { Provider } from "react-redux"
import { store } from './state/store'
import customTheme from './flowbiteTheme';
import { Flowbite } from 'flowbite-react';

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
    <Provider store={store}>
      <Router>
        {/* <ThemeProvider theme={{ mode: 'light' }}> */}
        <Flowbite theme={{ theme: customTheme }}>
          <DashAppHolder>
            <Box>
              <App />
            </Box>
          </DashAppHolder>
        </Flowbite>
        {/* </ThemeProvider> */}
      </Router>
    </Provider>
  </StrictMode>
);
