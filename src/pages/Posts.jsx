import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import MyCard from "../component/MyCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <Row>
        {posts && posts.map((text) => (
            <MyCard text={text} key={text.id} />
        ))}
      </Row>
      {/* add new card form */}
    </Container>
  );
}

