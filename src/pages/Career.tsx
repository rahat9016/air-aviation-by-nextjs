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
        className="lg:-mt-[250px] container bg-no-repeat bg-top px-mobileContainer bg-white drop-shadow-md rounded-[5px]"
        style={{ backgroundImage: `url(${vector_})` }}
      >
        <Career_Box />
      </div>
    </Layout>
  );
};

export default Career;
