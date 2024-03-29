import { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';

const App = () => {
  return(
    <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <section className='container'>
              <Alert />
              <Routes>
                  <Route exact path='/' element={<Landing />} />
                  <Route exact path='/login' element={<Login />} />
                  <Route exact path='/register' element={<Register />} />
              </Routes>
            </section>
        </Fragment>
      </Router>
    </Provider>

  )
}

export default App;
