import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import indigo from '@material-ui/core/colors/indigo';
import store from './reducers/configureStore';
import Router from './router/Router';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#FF4384',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router />
        </Provider>
      </MuiThemeProvider>
    </>
  );
}
