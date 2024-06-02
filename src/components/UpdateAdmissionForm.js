import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetRegValueByIdQuery, useUpdateRegValueMutation } from '../servies/loginServies';

const UpdateAdmissionForm = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    course: ''
  });
  const { data: admissionData, isLoading, isError } = useGetRegValueByIdQuery(id);
  const [updateAdmission, { isLoading: isUpdateLoading }] = useUpdateRegValueMutation();

  useEffect(() => {
    if (admissionData) {
      setFormData(admissionData);
    }
  }, [admissionData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAdmission({ id, ...formData });
      history('/admission-list');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Unable to fetch data</div>;

  return (
    <div className="admission-form-container">
      <h2>Update Admission Details</h2>
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
        <button type="submit" disabled={isUpdateLoading}>
          {isUpdateLoading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export default UpdateAdmissionForm;
