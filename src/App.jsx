import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import RouterPath from './config/RouterPath';



const App = () => {

    return (
      <>
          <Router>
              <RouterPath />
          </Router>
      </>
    )

}


export default App;
