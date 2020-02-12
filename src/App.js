import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

import Nav from "./Nav/nav";
import Step0 from "./Step/step0";
import Step1 from "./Step/step1";
import Step2 from "./Step/step2";
import Step3 from "./Step/step3";
import Step4 from "./Step/step4";
import Step5 from "./Step/step5";
import Todo from "./Todo/TodoApp";
import Counter from "./Counter";

const Wrap = styled.div`
  padding-top: 50px;
`;

function App() {
  return (
    <Wrap className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Step0} />
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/step4" component={Step4} />
        <Route path="/step5" component={Step5} />
        <Route path="/todo" component={Todo} />
        <Route path="/counter" component={Counter} />
      </BrowserRouter>
    </Wrap>
  );
}

export default App;
