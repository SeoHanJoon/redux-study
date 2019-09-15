import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0;
  padding: 15px 0;
  text-align: center;
  border-bottom: solid 1px #ddd;
  background-color: #fff;
`;
const Li = styled.li`
  display: inline-block;
  width: calc(100% / 7);
`;

function Nav () {
  return (
    <Ul>
      <Li>
        <Link to="/">Home</Link>
      </Li>
      <Li>
        <Link to="/step1">Step1</Link>
      </Li>
      <Li>
        <Link to="/step2">Step2</Link>
      </Li>
      <Li>
        <Link to="/step3">Step3</Link>
      </Li>
      <Li>
        <Link to="/step4">Step4</Link>
      </Li>
      <Li>
        <Link to="/step5">Step5</Link>
      </Li>
      <Li>
        <Link to="/todo">Todo</Link>
      </Li>
    </Ul>
  )
}

export default Nav;