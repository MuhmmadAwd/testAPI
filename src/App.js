import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import Posts from "./pages/Posts";
import MyPost from "./pages/MyPost";

export default function App() {
  // const [title, setTitle] = useState("ahmed");
  // const [body, setBody] = useState("bodyasdflkjasd;f");

  // const handleSumbit = async () => {
  //   try {
  //     await axios.post("https://jsonplaceholder.typicode.com/posts", {
  //       title,
  //       body,
  //       userId: 1,
  //     });
  //   } catch (error) {
  //     // handle error
  //     console.log(error);
  //   }
  // };
  return (
    <Router>
      <Switch>
        {/* <button onClick={handleSumbit}>asdfaasdf</button> */}
        <Route exact path="/">
          <Posts />
        </Route>
        <Route exact path="/post/:id">
          <MyPost />
        </Route>
      </Switch>
    </Router>
  );
}
