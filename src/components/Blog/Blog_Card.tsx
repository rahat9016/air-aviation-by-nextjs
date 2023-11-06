
interface IBlogType {
    id: string,
    date: string,
    title: string,
    desc: string,
    end_desc?: string,
    cover: string,
    points: { point: { title: string; desc: string; list: string[]; }; }[]
}



const Blog_Card = ({ blog }: { blog: IBlogType }) => {
    console.log(blog)

    return (
        <div className="bg-[#F6F6F6]">
            <img src={blog?.cover} alt="KM" />
            <div className="text-center px-3">
            <h1 className="font-bold text-primary font-inter mt-7">{blog?.title}</h1>
            <span className="text-[#767676] text-[10px] font-inter inline-block">{blog?.date}</span>
            <button className="block mx-auto text-primary text-sm font-semibold font-inter mt-5">Read More</button>
            </div>
        </div>
    );
};

export default Blog_Card;