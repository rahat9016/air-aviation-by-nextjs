import { useLocation } from "react-router-dom";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import { blogData } from "../data/blog";
import Blog_Box from "../components/Blog/Blog_Box";
import { NotFound } from "./NotFound";
import { goToTop } from '../utility/goToTop';

const Blog_Details = () => {
    const { pathname } = useLocation()
    const params = pathname.split('/')[2]
    const blog = blogData?.find(blog => blog?.id  == Number(params))
    // if blog not found it will redirect to not found page
    if(!blog) return <NotFound/>
    
    // Otherwise return blog page
    goToTop()
    return (
        <Layout>
            <ReactHelmet title='Blog' />
            {blog && <Blog_Box blog={blog} />}
        </Layout>
    );
};

export default Blog_Details;