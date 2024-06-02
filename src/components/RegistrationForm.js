// components/RegistrationForm.jsx
import React, { useState } from 'react';
import { useCreateLoginValueMutation, useCreateRegValueMutation } from '../servies/loginServies';

const RegistrationForm = () => {
  const [createLoginValue] = useCreateLoginValueMutation();
  const [createRegValue]=useCreateRegValueMutation();
  const [loginFormData,setLoginFormData]=useState({
    username:'',
    password:''
  });
  const [formData, setFormData] = useState({
    whattype:'Reg',
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    status: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoginFormData({
        username: formData.username,
        password: formData.password,
        fullname: formData.firstname+' '+formData.lastname,
        status:'false'
      });
      await createLoginValue(formData);
      await createRegValue(loginFormData);
      setFormData({
        whattype:'Reg',
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        status: '',
        age: '',
        gender: '',
      });
    } catch (err) {
      console.error('Failed to create login value:', err);
    }
  };

  return (
    <form className='login-container' onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">First Name:</label>
        <input
          name="firstname"
          type="text"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Last Name:</label>
        <input
          name="lastname"
          type="text"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          name="age"
          type="text"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="radio"
            id="other"
            name="gender"
            value="Other"
            checked={formData.gender === "Other"}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="username">User Name:</label>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="User Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit">Create Registration</button>
    </form>
  );
};

export default RegistrationForm;
