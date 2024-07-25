import Navbar from '@/components/modules/Navbar'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import DashboardPage from '@/components/templates/DashboardPage';

const Dashboard = async() => {
  const session= await getServerSession(authOptions)
  return <DashboardPage session={session}/>
}
export default Dashboard