import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { BrowserRouter as Switch } from "react-router-dom";
import Login from './Pages/Login';
import Verification from './Pages/Verification';
import ServiceArea from './Pages/ServiceArea'
import Test from './Pages/Test'

function App() {
  return (
    <BrowserRouter>
     <Router>
      <div className="App">
      <Switch>
          <Route path='/' exact Component={Login}/>
          <Route path='/verification' Component={Verification}/>
          <Route path='/servicerea' Component={ServiceArea}/>
          <Route path='/test' Component={Test}/>
      </Switch>
    </div>
    </Router>
    
    </BrowserRouter>
   
  );
}

export default App;
