import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [author,setAuthor] = useState('mario')
    const [body,setBody] = useState('')
    const [ispending,setIspending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,author,body}

        setIspending(true)

        fetch("http://localhost:8000/blogs",{
            method : 'POST',
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setIspending(false)
            navigate("/")
            console.log("hey buddy");
        })
        
    }

    return (
        <div className='create'>
        <form onSubmit={handleSubmit}>
            <label> Blog Title: </label>
            <input 
               type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <label> Blog Body: </label>
            <textarea 
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
            />
            <label> Blog Author: </label>
            <select 
               value={author}
               onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario"> mario </option>
                <option value="yoshi"> yoshi </option>
            </select>
            { !ispending && <button > Add blog </button>}
            { ispending && <button disabled> Adding blog </button>}
        </form> 
        {/* <p> {title} </p>
        <p>{author}</p>
        <p>{body}</p> */}
        </div>
    )
}

export default Create