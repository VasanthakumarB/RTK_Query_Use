import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import store from './app/store';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/loginPage';
import Home from './page/Home'
import './App.css';
import AdmissionForm from './components/AdmissionForm';
import AdmissionList from './components/AdmissionList';
import UpdateAdmissionForm from './components/UpdateAdmissionForm';
// Import Update and Delete components as needed
// import UpdateLoginComponent from './components/UpdateLoginComponent';
// import DeleteLoginComponent from './components/DeleteLoginComponent';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Login Management</h1>
          <Routes>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path='/admission' element={<AdmissionForm/>}/>
            <Route path='/admission-list' element={<AdmissionList/>}/>
            <Route path='/edit/:id' element={<UpdateAdmissionForm/>}/>
            {/* Render Update and Delete components with appropriate props */}
            {/* <Route path="/update/:id" component={UpdateLoginComponent} /> */}
            {/* <Route path="/delete/:id" component={DeleteLoginComponent} /> */}
            </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
