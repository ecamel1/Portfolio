import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/education"><Education /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/skills"><Skills /></Route>
          </Switch>
        </div>
      </div>
    </Router>
    
      // <div className="App">
      //   <Navbar/>
      // <div className="content">
      //   <Home/>
      // </div>
      // </div>
    
    
  );
}

export default App;
