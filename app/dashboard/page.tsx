import Navbar from '@/components/modules/Navbar'
import { getServerSession } from 'next-auth';
import DashboardPage from '@/components/templates/DashboardPage';
import { authOptions } from '@/utils/authOptions';

const Dashboard = async() => {
  const session= await getServerSession(authOptions)
  return <DashboardPage session={session}/>
}
export default Dashboard