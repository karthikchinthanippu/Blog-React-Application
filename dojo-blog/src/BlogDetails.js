
import { useParams, useNavigate } from "react-router-dom"
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const {data,ispending, error} = useFetch("http://localhost:8000/blogs/" + id)
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + data.id, {
            method : 'DELETE'
        }).then(() => {
            navigate("/") })
    }
    return ( 
        <div className='BlogDetails'>
            {ispending && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {data && (
                <article>
                    <h2> {data.title} </h2>
                    <p>  written by {data.author}</p>
                    <div> {data.body} </div>
                </article>
            )}
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}

export default BlogDetails