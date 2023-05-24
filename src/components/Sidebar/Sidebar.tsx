'use client';

import React from "react";
import styled from "styled-components";

const Sidebar = ({children}) => {
  return (
    <Wrapper>
      <div>
        <h1>Lists</h1>
        <ul>
          <li key="1">list 1</li>
          <li key="2">list 2</li>
          <li key="3">list 3</li>
        </ul>
      </div>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 25%;
  height: 100vh;
  border: 1px solid red;

  li {
    list-style: none;
  }
  ul { margin: 0; padding: 0; }

  background: var(--supporting-400);
`;

export default Sidebar;
