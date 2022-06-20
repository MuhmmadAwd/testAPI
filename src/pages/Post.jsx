import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
    const [post, setPost] = useState([]);

      const { id } = useParams()
    useEffect(() => {
        const getPost = async () => {
          await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
              setPost(res.data);
              console.log(res)
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getPost();
      }, [id]);
    return (
        <div>
            <center><h3>{post.title} {post.id}  </h3></center>
            <center>{post.body}</center>
        </div>
    )
}
