import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import CartOne from "../component/CartOne";


 function Cart(props) {

  return (
    <Container>
      <Row>
        {props.cart.map((text) => (
            <CartOne text={text} key={text.id} />
        ))}
      </Row>
    </Container>
  );
}

function stateToProps(state){
  return{cart:state.cart}
}

export default connect (stateToProps)(Cart)
