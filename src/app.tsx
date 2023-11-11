import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { NotFound } from './pages/NotFound'
import Blog from './pages/Blog'
import { Team } from './pages/Team'
import Services_Details from './pages/Services_Details'
import About from './pages/About'
import Blog_Details from './pages/Blog_Details'
function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<Services_Details />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-page/:id' element={<Blog_Details />} />
        <Route path='/team' element={<Team />} />
        <Route path='/about-us' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
export default App