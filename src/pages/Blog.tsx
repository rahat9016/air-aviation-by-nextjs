import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/blog_hero_bg.png"
import circle from "../assets/circle.png"
const Blog = () => {
    return (
        <Layout>
            <ReactHelmet title='Blog' />
            <Common_Hero bg={bg} title="Our Blog" desc="Learn about the essential, in’s and out’s of the logistics world" />
            <div className='mt-0 lg:-mt-80 bg-white shadow-3xl container px-mobileContainer xl:px-0 '>
                <div className="px-10 bg-no-repeat bg-[65%] pb-10"
                    style={{ backgroundImage: `url(${circle})` }}>
                    <h1 className="py-28 text-center font-bold text-primary text-2xl">We’ve got<br />
                        a full range of<br />
                        transportation & logistics services</h1>
                </div>
            </div>
            <div>a</div>
        </Layout>
    );
};

export default Blog;