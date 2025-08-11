import Layout from '../Layout/Layout'
import DashboardCard from '../Components/Dashboard/DashboardCard'

const Dashboard = () => {
  return (
    <Layout>
      <section className='container-fluid'>
        <div className="row">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard