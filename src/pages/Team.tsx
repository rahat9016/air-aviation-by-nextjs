import { Layout } from '../components/common/Layout'
import { ReactHelmet } from '../components/common/Helmet'
import Common_Hero from '../components/Common_Hero'
import bg from "../assets/blog_hero_bg.png"
export function Team () {
  return (
    <Layout>
      <ReactHelmet title='Team' />
      s
      <Common_Hero bg={bg} title="Our Team" desc="Learn about the essential, in’s and out’s of the logistics world" />
    </Layout>
  )
}
