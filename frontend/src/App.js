import { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return(
    <Router>
        <Fragment>
          <Navbar />
          <section className='container'>
            <Routes>
                <Route exact path='/' element={<Landing />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
          </section>
      </Fragment>
    </Router>
  )
}

export default App;
