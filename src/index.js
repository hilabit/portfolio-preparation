import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import About from "./About";
import SkillsContainer from "./SkillsContainer";



const Contact = () => <div className="block contact">Contact</div>;

const Square = <div className="yellow-square"></div>;


const Container = () => (
  <div className="container">
    <Header />
    <About> {Square}</About>
    <SkillsContainer/>
    <Contact/>
  </div>
);

function App() {
  return <Container />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
