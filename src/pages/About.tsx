import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/blog_hero_bg.png"
// import vector_Bg  from "../assets/vector_bg.png"
const About = () => {
    return (
        <Layout>
        <ReactHelmet title={"About Us"} />
          <Common_Hero bg={bg}  />
          {/* <div className='mt-0 lg:-mt-28 bg-white shadow-3xl container px-mobileContainer xl:px-0 mb-8 lg:mb-10 xl:mb-20'>
                <div className="px-10 bg-no-repeat bg-top mb-20 pb-10"
                style={{ backgroundImage: `url(${vector_Bg})` }}>
                
                </div>
          </div>     */}
      </Layout>
    );
};

export default About;