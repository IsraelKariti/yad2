import './App.css';
import { HomePage } from './components/homepage/HomePage';
import { AppContextProvider } from './components/contexts/AppContextProvider';

function App() {
  return (
    <>
    <AppContextProvider>
      <HomePage/>
    </AppContextProvider>
    </>
  );
}

export default App;
