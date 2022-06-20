import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getPosts } from "../ActionCreator/getPosts";

import MyCard from "../component/MyCard";

 function Posts(props) {
  useEffect(() => {
    props.getPosts();
  }, [props]);

  return (
    <Container>
      <Row>
        {props.posts.map((text) => (
            <MyCard text={text} key={text.id} />
        ))}
      </Row>
    </Container>
  );
}

function stateToProps(state){
  return{posts:state.posts}
}

export default connect (stateToProps,{getPosts})(Posts)
