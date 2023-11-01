
import Commitment from "../components/Home/Commitment"
import Contact_ from "../components/Home/Contact_"
import Request_Feedback from "../components/Home/Request_Feedback"
import Success from "../components/Home/Success"
import Transportation from "../components/Home/Transportation"
import Why from "../components/Home/Why"
import { ReactHelmet } from "../components/common/Helmet"
import { Hero } from "../components/common/Hero"
import { Layout } from "../components/common/Layout"

export function Home () {
  return (
    <Layout>
      <ReactHelmet title='Home' />
      <Hero />
      <Commitment />
      <Transportation /> 
      <Success />
      <Why />
      <Contact_ />
      <Request_Feedback />
    </Layout>
  )
}
