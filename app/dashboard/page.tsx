import Navbar from '@/components/modules/Navbar'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Dashboard = async() => {
  const session= await getServerSession(authOptions)
  return (
    <div className='flex gap-3 h-[500px]'>
      <Navbar session={session}/>
      <div>
        Dashboard
      </div>
    </div>
  )
}

export default Dashboard