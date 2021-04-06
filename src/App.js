import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/home.js';
import ContactUs from './Components/Pages/Contact-Us/contact-us.js';
import AboutUs from './Components/Pages/About-Us/about-us.js';

class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/contact" component={ContactUs}/>
           <Route path="/about" component={AboutUs}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
