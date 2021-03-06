import { useState } from 'react';
import { Button, Col,Card } from "react-bootstrap";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../ActionCreator/getPosts';



 function MyCard({text,addToCart}) {
  const [remove, setRemove] = useState(true)

  const handleRemove =()=>{
    setRemove(false)
  }
    return (
        <>
          {remove && 
            <Col md={4} key={text.id}>
            <Card className="m-2" >
              <Card.Img
                variant="top"
                src="https://picsum.photos/300/300?random=1"
              />
              <Card.Body>
                <Card.Title>{text.title}</Card.Title>
                <Button onClick={handleRemove} className=" ml-5" variant="danger">Remove{remove}</Button>
                <Button onClick={() => addToCart(text.id)} className="ml-2" variant="primary"> add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          }
        </>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart : (id)=> dispatch(addToCart(id))
  }
}

export default connect(null,mapDispatchToProps)(MyCard)