import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Booking from './components/pages/Booking';
import AdminLogin from './components/pages/Admin';
import AdminBookings from './components/pages/AdminBookings'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/services' component={Services} />
        <Route path='/booking' exact component={Booking} />
        <Route path='/admin' exact component={AdminLogin} />
        <Route path='/admin/bookings' component={AdminBookings} />
      </Switch>
    </Router>
  );
}

export default App;
