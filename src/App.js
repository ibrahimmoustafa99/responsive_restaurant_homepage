
import './App.css';
import NavBar from './components/Nav/Nav';
import About from './components/home/About';
import About2 from './components/home/About2';
import Explore from './components/home/Explore';
import Headerpage from './components/home/header';
import States from './components/home/states';
import Slider from './components/home/Slider'
import Footer from './components/home/Footer';
// import HomePage from './components/home/home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Headerpage />
      <States />
      <About />
      <About2 />
      <Explore />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
