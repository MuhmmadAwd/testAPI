import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function MyPost() {
    const [post, setPost] = useState([]);

    const { id } = useParams()
    useEffect(() => {
        const getPost = async () => {
          await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
              setPost(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getPost();
      }, [id]);
    return (
        <div>
            <center><h3>this is the {post.id} post </h3></center>
            <center>{post.body}</center>
        </div>
    )
}
