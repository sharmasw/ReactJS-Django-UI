import React from 'react';
import './App.css';
import UplaodForm from './FileUpload';
import Home from './Home';
import Navigator from './NavigationBar';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigator />
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/batchProcessing' component={UplaodForm}></Route>
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
