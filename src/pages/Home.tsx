
// import Commitment from "../components/Home/Commitment"

import home_bg from "../assets/home-bg.jpg"
import { useLocation } from "react-router-dom"
import Our_Features from "../components/Home/OurFeatures"
import Why from "../components/Home/Why"
import { goToTop } from "../utility/goToTop"
import { Layout } from "../components/common/Layout"
import Home_Service from "../components/Home/Home_Service"
import { Hero } from "../components/Home/Hero"
import Transportation from "../components/Home/Transportation"
import Success from "../components/Home/Success"
import Contact_ from "../components/Home/Contact_"
import Request_Feedback from "../components/Home/Request_Feedback"
// import Commitment from "../components/Home/Commitment"
import { ReactHelmet } from "../components/common/Helmet"

export function Home () {
  const {pathname}=useLocation()
  goToTop()
  return (
    <Layout>
      <ReactHelmet title='Home'  />
      <div className={`${pathname && "relative"}`}>
      <Hero/>
      <Home_Service />
      <div className="bg-no-repeat  bg-contain" style={{
        backgroundImage:`url(${home_bg})`
      }}>
      {/* <Commitment /> */}
      <Transportation /> 
      <Success />
      <Why />
      <Our_Features/>
      </div>
      <Contact_ />
      <Request_Feedback />
      </div>
    
    </Layout>
  )
}
