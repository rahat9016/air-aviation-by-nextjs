import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/blog_hero_bg.png"
import { goToTop } from "../utility/goToTop";
import { blogData } from "../data/blog";
// import { blogData } from "../data/blog";
import Blog_Card from "../components/Blog/Blog_Card";
// import { blogData } from "../data/blog";
const Blog = () => {
    goToTop()
    
    return (
        <Layout>
            <ReactHelmet title='Blog' />
            <Common_Hero bg={bg} title="Our Blog" desc="Learn about the essential, in’s and out’s of the logistics world" />
            <div className='mt-0 lg:-mt-80 bg-white shadow-3xl container px-mobileContainer xl:px-0 '>
                <div className="grid grid-cols-4 px-[22px] py-6 gap-6">
                    {blogData?.map((blog, index) => <Blog_Card key={index} blog={blog} /> )}
                </div>
            </div>
        </Layout>
    );
};

export default Blog;