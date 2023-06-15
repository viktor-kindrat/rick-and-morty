import './App.css';
import Main from './Main/Main';
import Navigation from './Navigation/Navigation';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">

      <ThemeProvider theme={darkTheme}>
        <Navigation />
        <Main />
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
