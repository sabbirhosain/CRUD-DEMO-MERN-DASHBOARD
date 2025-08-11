import React from 'react'
import Layout from '../../Layout/Layout'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UpdateUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowToggle = () => { setShowPassword(!showPassword) };

  return (
    <Layout>
      <section className='container my-5'>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className='shadow-sm bg-white px-5 pt-3 pb-4'>
              <h4 className='text-center py-4'>Update User Details</h4>
              <div className="row border-top border-warning pt-4">
                <div className="col-md-6 mb-3">
                  <label className='form-label'>First Name</label>
                  <input type="text" className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Last Name</label>
                  <input type="text" className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>User Name</label>
                  <input type="text" className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Phone Number</label>
                  <input type="text" className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Email Address</label>
                  <input type="email" className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Date of Birth</label>
                  <input type="date" className='form-control rounded-0' />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Password</label>
                  <input type={showPassword ? "text" : "password"} className='form-control rounded-0' required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Confirm Password</label>
                  <div className='position-relative'>
                    <input type={showPassword ? "text" : "password"} className='form-control rounded-0' required />
                    <button type="button" className='password_show_btn' onClick={passwordShowToggle}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Image</label>
                  <input type="file" className='form-control rounded-0' />
                </div>
                <div className="col-md-6 mb-3">
                  <label className='form-label'>Role</label>
                  <select className="form-select">
                    <option selected>Select User Role</option>
                    <option value="1">Salesman</option>
                    <option value="2">Manager</option>
                    <option value="3">Admin</option>
                  </select>
                </div>
                <div className="col-md-6 mt-3">
                  <Link to='/users/table' type="reset" className='btn btn-dark rounded-0 w-100'>Cancel</Link>
                </div>
                <div className="col-md-6 mt-3">
                  <button type="submit" className='btn btn-dark rounded-0 w-100'>Update User</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UpdateUser