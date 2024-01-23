import  React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
 const {data:blogs,ispending, error} = useFetch("http://localhost:8000/blogs")
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs);
  // }

  // const [name,setName] = useState('mario')

  
  
  return (
    <div className="home">
       {error && <div> {error} </div>}
       {ispending && <div> Loading... </div>}
       {blogs && <BlogList blogs={blogs} title ="All Blogs"/>}
       {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title ="Mario's Blogs"/> */}
       {/* <button onClick={() => setName('lungi')}> {name} </button> */}
    </div>
  )
}

export default Home
