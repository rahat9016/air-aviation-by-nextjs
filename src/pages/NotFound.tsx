
import { Link } from 'react-router-dom'

import { Layout } from '../components/common/Layout'
import { ReactHelmet } from '../components/common/Helmet'
export function NotFound () {
  return (
    <Layout>
      <ReactHelmet title='Not Found' />
      <div className='flex flex-col items-center justify-center h-[69.7vh]'>
            <h1 className='text-[64px] font-extrabold text-primary mb-3 text-center'>404</h1>
            <h2 className='text-4xl font-bold text-primary font-poppins text-center'>Not Found!</h2>
            <Link to='/' className='text-xl text-primary font-medium font-poppins underline duration-300 text-center mt-4 block'>Get back to home page!</Link>
          </div>
    </Layout>
  )
}
