import React from 'react'
import { useState } from 'react';
import { Button, Col,Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function MyCard({text}) {
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
                <Button className="ml-2" variant="primary">
                  <Link className="text-white" to={`/post/${text.id}`}>Read more</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          }
        </>
    )
}
