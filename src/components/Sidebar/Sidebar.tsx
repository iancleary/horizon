'use client';

import React from "react";
import styled from "styled-components";

const Sidebar = ({children, lists}) => {
  return (
    <Wrapper>
      <div>
        <h1>Lists</h1>
        <ul>
          {lists.map((list: any) => (
            <li key={list.id}>{list.name}</li>
          ))}
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
