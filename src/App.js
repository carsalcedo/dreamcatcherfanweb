import './App.css';
import About from './components/About/About';
import Albums from './components/Albums/Albums';
import Contact from './components/Contact/Contact';
import Discografy from './components/Discography/Discografy';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Members from './components/Members/Members';
import Navbar from './components/Navbar/Navbar';
import Producers from './components/Producers/Producers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Albums/>
      <Producers/>
      <Discografy/>
      <Members/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
