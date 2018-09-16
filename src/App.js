import React, { Component } from 'react';
import Inventory from './Inventory';
import LogIn from './SignIn';
import './App.css';
import { Route , BrowserRouter} from 'react-router-dom';
import Header from './Header'
class App extends Component {
  render() {
    return (
      <div className="App">
         
          <BrowserRouter>
          
          <div>
          <Header/>
            <Route path='/' exact component={Inventory} />
            <Route path='/login' exact component={LogIn} />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
