import { Terminal } from './components/Terminal/Terminal';
import { Weather } from './components/Widgets/Weather';
import { NewsWidget } from './components/Widgets/NewsWidget';
import { StatusBar } from './components/Widgets/StatusBar';
import { Desktop } from './components/Desktop/Desktop';
import './App.css';
import { ZIndexProvider } from './contexts/ZIndexContext';

function App() {
  return (
    <ZIndexProvider>
      <div className="desktop">
        <StatusBar />
        <Desktop />
        <Weather />
        <NewsWidget />
        <Terminal />
      </div>
    </ZIndexProvider>
  );
}

export default App;
