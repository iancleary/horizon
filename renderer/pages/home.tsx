import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  appearance: none;
  font-size: 1.3rem;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  transition: all ease-in 0.1s;
  cursor: pointer;
  opacity: 0.9;

  :hover {
    transform: scale(1.05);
    opacity: 1;
  };
`;

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
          <Button>Styled Button</Button>
        </p>
        <Image src="/images/logo.png" alt="" width="125px" height="125px"/>
      </div>
    </React.Fragment>
  );
};

export default Home;
