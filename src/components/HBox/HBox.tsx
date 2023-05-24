'use client';

import React from "react";
import styled from "styled-components";

const HBox = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default HBox;
