import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    // const blogs = props.blogsprop;
    // const title = props.title;
    return ( 
        <div className="Blog-list">
            <h2> {title} </h2>
            {blogs.map((eachblog) => (
                <div className="blog-preview" key = {eachblog.id}> 
                    <Link to={`/blogs/${eachblog.id}`}> 
                    <h1> {eachblog.title}</h1>
                    <h4>  written by {eachblog.author}</h4>
                    </Link>
                {/* <button onClick={() => handleDelete(eachblog.id)}>delete blog</button> */}
                </div>
       ))} 
        </div>
     );
}
 
export default BlogList;