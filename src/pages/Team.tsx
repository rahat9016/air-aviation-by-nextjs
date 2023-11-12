import { Layout } from "../components/common/Layout";
import { ReactHelmet } from "../components/common/Helmet";
import Common_Hero from "../components/Common_Hero";
import bg from "../assets/our_team_hero_bg.jpg";
import Team_Box from "../components/Team/Team_Box";
import { goToTop } from "../utility/goToTop";
import Meet_Team_Box from "../components/Team/Meet_Team_Box";
import vector_ from "../assets/vector_bg_2.png";
export function Team() {
  goToTop();
  return (
    <Layout>
      <ReactHelmet title="Team" />
      <Common_Hero bg={bg} />
      <div
        className="lg:-mt-80 container bg-no-repeat bg-center bg-contain px-mobileContainer xl:px-20 bg-white drop-shadow-md"
        style={{ backgroundImage: `url(${vector_})` }}
      >
        <Team_Box />
        <Meet_Team_Box />
      </div>
    </Layout>
  );
}
