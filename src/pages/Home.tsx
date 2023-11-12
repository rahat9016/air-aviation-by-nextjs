
// import Commitment from "../components/Home/Commitment"
import Contact_ from "../components/Home/Contact_"
import Request_Feedback from "../components/Home/Request_Feedback"
import Success from "../components/Home/Success"
import Transportation from "../components/Home/Transportation"
import Why from "../components/Home/Why"
import { ReactHelmet } from "../components/common/Helmet"
import { Hero } from "../components/Home/Hero"
import { Layout } from "../components/common/Layout"
import { goToTop } from "../utility/goToTop"
import Home_Service from "../components/Home/Home_Service"
import home_bg from "../assets/home-bg.jpg"
import { useLocation } from "react-router-dom"

export function Home () {
  const {pathname}=useLocation()
  goToTop()
  return (
    <Layout>
      <ReactHelmet title='Home' />
      <div className={`${pathname && "relative"}`}>
      <Hero />
      <Home_Service />
      <div className="bg-no-repeat  bg-[top]" style={{
        backgroundImage:`url(${home_bg})`
      }}>
      {/* <Commitment /> */}
      <Transportation /> 
      <Success />
      <Why />
      </div>
      <Contact_ />
      <Request_Feedback />
      </div>
    
    </Layout>
  )
}
