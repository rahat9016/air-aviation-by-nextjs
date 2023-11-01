
import { Link } from 'react-router-dom'

import { Layout } from '../components/common/Layout'
export function NotFound () {
  return (
    <Layout>
      <div className='w-full lg:w-9/12 mx-auto flex items-center h-[600px] -mb-80'>
        <div className='flex items-center gap-32 ml-48 z-50'>
          {/* <img src={Ship} alt='' className='w-[317px]' /> */}
          <div>
            <h1 className='text-[64px] font-extrabold text-primary mb-3 text-center'>404</h1>
            <h2 className='text-4xl font-bold text-primary font-poppins text-center'>Not Found!</h2>
            <Link to='/' className='text-xl text-primary font-medium font-poppins hover:underline duration-300 text-center mt-4 block'>Get back to home page!</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
