import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/blog_hero_bg.png"
const Blog = () => {
    return (
        <Layout>
        <ReactHelmet title='Blog' />
        <Common_Hero bg={bg} title="Our Blog" desc="Learn about the essential, in’s and out’s of the logistics world" />
    </Layout>
    );
};

export default Blog;