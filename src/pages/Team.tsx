import { Layout } from '../components/common/Layout'
import { ReactHelmet } from '../components/common/Helmet'
import Common_Hero from '../components/Common_Hero'
import bg from "../assets/our_team_hero_bg.png"
import Team_Box from '../components/Team/Team_Box'
export function Team () {
  return (
    <Layout>
      <ReactHelmet title='Team' />      
      <Common_Hero bg={bg}  />
      <div className='-mt-80'>
      <Team_Box/>
      </div>
    </Layout>
  )
}
