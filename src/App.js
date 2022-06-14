import './App.css';
import About from './components/About/About';
import Albums from './components/Albums/Albums';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Albums/>
      {/* quede en la hora 1:16:00 */}
    </div>
  );
}

export default App;
