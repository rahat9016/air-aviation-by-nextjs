 type BlogType=[
    {
        id: string,
            date: string,
            title: string,
            cover: string,
            profile: string,
            points: [
                {
                    point: {
                        title: string,
                        desc: string,
                        list: [
                            string,
                            string,
                        ]
                    }
                }
            ],        
        }
 ]


const Blog_Card = ({blog}:{blog:BlogType}) => {
    console.log(blog)
    
    return (
        <div>
            <div>
                <div></div>
                <img src=""/>
            </div>
        </div>
    );
};

export default Blog_Card;