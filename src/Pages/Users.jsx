import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Select from 'react-select';
import UserTable from '../Components/Users/UserTable';
import { MdFormatListBulletedAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useApp_Context_Provider } from '../Context/App_Context';

const Users = () => {
  const { updateUserState } = useApp_Context_Provider()

  return (
    <Layout>
      <section className=''>

        <div className='d-flex align-items-center justify-content-between bg-white p-3 ps-3 pe-md-5 my-2'>
          <h4 className='table_name_title'>User List</h4>
          <Link to='/users/create' className='btn btn-outline-primary btn-sm rounded-0'><MdFormatListBulletedAdd /></Link>
        </div>

        <div className="row bg-white p-3">
          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <input type='date' onChange={(event) => updateUserState({ to_date: event.target.value })} className="form-control rounded-0" />
            </div>
          </div>
          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <input type="date" onChange={(event) => updateUserState({ from_date: event.target.value })} className="form-control rounded-0" />
            </div>
          </div>
          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <select onChange={(event) => updateUserState({ status: event.target.value })} className="form-select rounded-0">
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="hold">Hold</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className='w-100'>
              <input type="search" onChange={(event) => updateUserState({ search: event.target.value })} className="form-control rounded-0" placeholder="Search Hear..." />
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <UserTable />
        </div>
      </section>
    </Layout>
  )
}

export default Users