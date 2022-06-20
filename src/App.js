import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import "./App.css";
import Posts from "./pages/Posts";
import  Post  from "./pages/Post";
import Cart from "./pages/Cart";
import Nav from "./component/Nav";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/posts/:id">
          <Post/>
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
