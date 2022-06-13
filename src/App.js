import './App.css';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      {/*quede ne 1:00:00 */}
    </div>
  );
}

export default App;
