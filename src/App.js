import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return(
  <BrowserRouter>
  <Header />
  <Route path="/" exact component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/profile" component={Profile}/>
  <Footer />
  </BrowserRouter>
  );
  
  
}

function startAnimation(){
  
}

export default App;
