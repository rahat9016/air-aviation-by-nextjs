import { IBlogType } from "../../Interface";
import eye from "../../assets/eye.jpg"

const Blog_Box = ({ blog }: {blog: IBlogType}) => {
    console.log(blog)
    return (
        <div className="container mt-10 lg:mt-20 px-mobileContainer xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 className="capitalize font-semibold text-sm text-[#5F5F5F]">resources</h2>
                    <h1 className="capitalize font-bold text-xl md:text-[48px]  font-poppins text-[#292929]  md:leading-[60px]">{blog.title}</h1>
                    <h3 className="text-[#191919] font-inter text-sm lg:text-base mt-4 lg:mt-16 mb-5">{blog.subTitle}</h3>
                    <div className="flex items-center justify-between md:justify-normal md:gap-12 mb-3 md:mb-0">
                        <p className="font-inter text-[#5F5F5F] text-sm md:text-base">{blog.date}</p>
                        <p className="flex items-center gap-4 text-[#5F5F5F] text-sm md:text-base">
                            <img src={eye} alt="" />
                            <span>{blog.readTime}</span>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={blog.cover} alt="KM Air Aviation" className="w-full" />
                </div>
            </div>
            <div className="w-full lg:w-7/12 mx-auto mt-4 md:mt-24 font-poppins text-base">
                <p className="mb-2 lg:mb-10 ">{blog.start_desc}</p>
                {blog.points.map((point, index) => {
                    const {title, desc} = point.point 
                    return  <div key={index} className="mb-2 lg:mb-10">
                        <h1 className="text-[#1A1A1A] font-bold text-lg lg:text-[32px] font-poppins mb-2 lg:mb-5">{title}</h1>
                        {desc && <p className=" text-base  font-inter ">{desc}</p>}
                        {point?.listPoint  &&  point?.listPoint.map((list, index) => {
                            return <div key={index} className="mb-2 lg:mb-10">
                                <p className=" text-base  font-inter ">
                                    <span className="font-semibold">{list.title} </span>
                                    {list.desc}
                                </p>
                            </div>
                        }) }
                    </div>
                })}
                <p className="mb-[136px]">{blog.end_desc}</p>
            </div>
        </div>
    );
};

export default Blog_Box;