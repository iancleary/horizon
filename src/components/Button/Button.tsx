'use client';

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  appearance: none;
  font-size: 1.3rem;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  transition: all ease-in-out 0.1s;
  cursor: pointer;
  opacity: 0.9;

  :hover {
    transform: scale(1.05);
    opacity: 1;
  };
`;


export default function ButtonComponent({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Button>
      {children}
    </Button>
  );
}
