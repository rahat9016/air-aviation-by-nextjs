import { Layout } from "../components/common/Layout";
import { ReactHelmet } from "../components/common/Helmet";
import Common_Hero from "../components/Common_Hero";
import Team_Box from "../components/Team/Team_Box";
import { goToTop } from "../utility/goToTop";
import Meet_Team_Box from "../components/Team/Meet_Team_Box";
import vector_ from "../assets/vector_bg_2.png";
export function Team() {
  goToTop();
  return (
    <Layout>
      <ReactHelmet title="Team" />
      <Common_Hero bg={'https://i.ibb.co/sjdXVfY/Rectangle-103.jpg'} />
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
