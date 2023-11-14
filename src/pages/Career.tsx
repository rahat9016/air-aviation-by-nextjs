import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/career.jpg";
import vector_ from "../assets/vector_bg_2.png";
import Career_Box from "../components/Career/Career_Box";
import { goToTop } from "../utility/goToTop";

const Career = () => {
  goToTop();
  return (
    <Layout>
      <ReactHelmet title="Career" />
      <Common_Hero bg={bg} />
      <div
        className="lg:-mt-80 container bg-no-repeat bg-center bg-contain px-mobileContainer xl:px-20 bg-white drop-shadow-md"
        style={{ backgroundImage: `url(${vector_})` }}
      >
        <Career_Box />
      </div>
    </Layout>
  );
};

export default Career;
