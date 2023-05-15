import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button/';


// import styled from 'styled-components';

export const metadata: Metadata = {
  title: 'Next - Nextron (with-typescript)',
};


function Next() {
  return (
    <React.Fragment>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/">
            Go to home page
          </Link>
          <Link href="/">
            <Button>Styled Button to go to home page</Button>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Next;
