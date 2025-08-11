import { BsBank } from 'react-icons/bs'

const DashboardCard = () => {
    return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className='card dashboard_account_card rounded-0'>
                <div className="card-body">
                    <div className="d-flex align-items-center gap-3">
                        <div className='card_icon'> <BsBank /> </div>
                        <div> <h4>5,0000 TK</h4> <span>Bank Account</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard