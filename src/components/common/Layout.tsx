import { ReCaptchaProvider } from '../../hooks/useContext'
import { Footer } from './Footer'
import { TopBar } from './Topbar'
type ChildrenProps = {
  children: React.ReactNode
}
export function Layout({ children }: ChildrenProps) {
  return (
    <ReCaptchaProvider>
      <header className='sticky top-0 z-50'><TopBar /> </header>
      <main>
        {children}
      </main>
      <footer><Footer /></footer>
    </ReCaptchaProvider>
  )
}
