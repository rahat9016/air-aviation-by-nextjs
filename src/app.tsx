import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { NotFound } from './pages/NotFound'
import Blog from './pages/Blog'
import { Team } from './pages/Team'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/team' element={<Team />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
export default App