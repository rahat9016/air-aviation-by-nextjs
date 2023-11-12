import { useLocation } from 'react-router-dom'
import { ReCaptchaProvider } from '../../hooks/useContext'
import { Footer } from './Footer'
import { TopBar } from './Topbar'
type ChildrenProps = {
  children: React.ReactNode
}
export function Layout({ children }: ChildrenProps) {
  const {pathname}=useLocation()
  console.log(pathname)
  return (
    <ReCaptchaProvider>
      <header className={` ${pathname ==="/" ? " lg:absolute lg:right-[500px] lg:top-4 top-0 z-50" :"sticky top-0 z-50"}`}> <TopBar /> </header>
      <main>
        {children}
      </main>
      <footer><Footer /></footer>
    </ReCaptchaProvider>
  )
}
