import React from 'react'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'

const SingleUser = () => {
    return (
        <Layout>
            <section className='container my-5'>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form className='shadow-sm bg-white px-5 pt-3 pb-4'>
                            <h4 className='text-center py-4'>Single User Details</h4>
                            <div className="row border-top border-warning pt-4">
                                <div className="col-md-4 mb-3">
                                    <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1726582928~exp=1726583528~hmac=f5f57e59f2e03486c4c56b803637cd61e4b87e4306ddb4d9ca92676192667ac2" className='img-thumbnail' alt="student image" />
                                </div>
                                <div className="col-md-8 mb-3">
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <div className="row">
                                                <div className="col-4"><span>Full Name : </span></div>
                                                <div className="col-8"><span>Sabbir Hosain</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="row">
                                                <div className="col-4"><span>User Name : </span></div>
                                                <div className="col-8"><span>sabbirhosain</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="row">
                                                <div className="col-4"><span>Phone : </span></div>
                                                <div className="col-8"><span>1234567890</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="row">
                                                <div className="col-4"><span>Email : </span></div>
                                                <div className="col-8"><span>example@gmail.com</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="row">
                                                <div className="col-4"><span>Role : </span></div>
                                                <div className="col-8"><span>Admin</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="row">
                                                <div className="col-4"><span>Birth Date : </span></div>
                                                <div className="col-8"><span>10-10-2025</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <Link to='/users/table' type="reset" className='btn btn-dark rounded-0 w-100'>Back</Link>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <Link to='/users/update' type="reset" className='btn btn-dark rounded-0 w-100'>Update</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SingleUser