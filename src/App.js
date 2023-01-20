import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Spacehome from './pages/home_space/Spacehome';


function App() {
  return (
    <div className="App">
           <Navbar />
         
           <Home />

           <Spacehome />

           <About />
           
    </div>
  );
}

export default App;
