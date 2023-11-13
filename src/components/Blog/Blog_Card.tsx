import { useNavigate } from "react-router-dom";
import { IBlogType } from "../../Interface";



const Blog_Card = ({ blog }: { blog: IBlogType }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#F6F6F6] rounded-[15px] hover:drop-shadow-lg duration-300 transition-all">
            <img
                src={blog?.profile}
                alt="KM"
                className="xl:h-[286px] w-full rounded-t-[15px]"
            />
            <div className="text-center px-3">
                <h1 className="font-bold text-[#181818] font-inter mt-3 lg:mt-7 text-xs lg:text-base">
                    {blog?.title}
                </h1>
                <span className="text-[#767676] text-[10px] font-inter inline-block mt-2 ">
                    {blog?.date}
                </span>
                <button
                    className="group block after:bg-primary mx-auto text-primary text-xs lg:text-sm font-semibold font-inter lg:mt-5 mb-5"
                    onClick={() => navigate(`/blog-page/${blog.id}`)}
                >
                    Read More
                    <span className="w-[70%] group-hover:w-full h-[1.5px] duration-300 bg-primary block"></span>
                </button>
            </div>
        </div>
    );
};

export default Blog_Card;
