// AdmissionForm.jsx
import React, { useState } from 'react';
import { useCreateLoginValueMutation } from '../servies/loginServies';
import { useNavigate } from 'react-router-dom';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    whattype: 'Admission',
    firstname: '',
    lastname: '',
    email: '',
    course: ''
  });
  const navigate = useNavigate();
  const [createLoginValue, { isLoading, isSuccess, isError, error }] = useCreateLoginValueMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createLoginValue(formData);
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="admission-form-container">
        <h2>College Admission Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Course:</label>
            <input type="text" name="course" value={formData.course} onChange={handleChange} />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {isSuccess && <div>Application submitted successfully!</div>}
        {isError && <div>Error: {error.message}</div>}
      </div>
    </div>
  );
}
