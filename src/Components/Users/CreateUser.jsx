import React from 'react'
import Layout from '../../Layout/Layout'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateUser = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowToggle = () => { setShowPassword(!showPassword) };
  const [error_message, setError_message] = useState(null)
  const [loading, setLoading] = useState(false)

  const [user_data, setUser_data] = useState({ firstName: '', lastName: '', username: '', phone: '', email: '', dob: '', password: '', confirmPassword: '', role: '', attachment: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUser_data((prev) => ({ ...prev, [name]: type === 'file' ? files[0] : value.trim() }));
    setError_message((prev) => ({ ...prev, [name]: null })); //remove err if type input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user_data.password !== user_data.confirmPassword) {
      return setError_message((prev) => ({
        ...prev, confirm_password: 'Confirm Password do not match.'
      }));
    }

    try {
      setLoading(true);
      const formData = new FormData();
      Object.keys(user_data).forEach((key) => {
        if (key === "attachment" && user_data.attachment === null) { return }
        formData.append(key, user_data[key]);
      });

      const response = await axios.post('http://localhost:8000/api/v1/auth/register', formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response && response.data && response.data.success) {
        navigate('/user/table')
        toast.success(response.data.message || 'Register Success.')
      }

    } catch (error) {
      if (error.response) {
        if (error.response.data.errors && typeof error.response.data.errors === 'object') {
          const serverErrors = {};
          Object.keys(error.response.data.errors).forEach(key => {
            serverErrors[key] = error.response.data.errors[key][0]
          });
          setError_message(serverErrors);
        } else {
          toast.error(error.response.data.message || 'An error occurred');
        }
      }
      throw error

    } finally {
      setLoading(false);
    }
  }






  return (
    <Layout>
      <section className='container my-5'>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className='shadow-sm bg-white px-5 pt-3 pb-4'>
              <h4 className='text-center py-4'>Create New User</h4>
              <div className="row border-top border-warning pt-4">
                <div className="col-md-6 mb-3">
                  <label className='form-label'>First Name</label>
                  <input type="text" name='firstName' value={user_data.firstName} onChange={handleChange} className='form-control rounded-0' required disabled={loading} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Last Name</label>
                  <input type="text" name='lastName' value={user_data.lastName} onChange={handleChange} className='form-control rounded-0' required disabled={loading} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>User Name</label>
                  <input type="text" name='username' value={user_data.username} onChange={handleChange} className='form-control rounded-0' required disabled={loading} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Phone Number</label>
                  <input type="tel" name='phone' value={user_data.phone} onChange={handleChange} className='form-control rounded-0' required disabled={loading} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Email Address</label>
                  <input type="email" name='email' value={user_data.email} onChange={handleChange} className='form-control rounded-0' required disabled={loading} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Date of Birth</label>
                  <input type="date" name='dob' value={user_data.dob} onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Password</label>
                  <input type={showPassword ? "text" : "password"} name='password' value={user_data.password} onChange={handleChange} className='form-control rounded-0' required disabled={loading} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Confirm Password</label>
                  <div className='position-relative'>
                    <input type={showPassword ? "text" : "password"} name='confirmPassword' value={user_data.confirmPassword} onChange={handleChange} className='form-control rounded-0' required disabled={loading} />
                    <button type="button" className='password_show_btn' onClick={passwordShowToggle}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Attachment</label>
                  <input type="file" onChange={handleChange} className='form-control rounded-0' disabled={loading} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Role</label>
                  <select className="form-select rounded-0" name='role' value={user_data.role} onChange={handleChange} disabled={loading}>
                    <option defaultValue="">Select User Role</option>
                    <option value="1">Salesman</option>
                    <option value="2">Manager</option>
                    <option value="3">Admin</option>
                  </select>
                </div>
                <div className="col-md-6 mt-3">
                  <Link to='/users/table' type="reset" className='btn btn-dark rounded-0 w-100'>Cancel</Link>
                </div>
                <div className="col-md-6 mt-3">
                  <button type="submit" className='btn btn-dark rounded-0 w-100' disabled={loading}>{loading ? 'Creating...' : 'Create'}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CreateUser