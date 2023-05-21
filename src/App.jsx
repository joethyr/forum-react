import React from "react";
import "./App.css";
import { comments } from "./commentData";
import Card from "./Card";

function App() {
  return comments.map((comment) => <Card commentObject={comment} />);
}

export default App;
