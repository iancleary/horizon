import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button/';
import Sidebar from '@/components/Sidebar/';
import HBox from '@/components/HBox/HBox';


export default function Page() {
  return (
    <React.Fragment>
      <HBox>
        <Sidebar>Home</Sidebar>
        <p>
          ⚡TOP PAGE ⚡ -
          <Link href="/home">
            Go to next page
          </Link>
          <Link href="/home">
            <Button>Styled Button to go to next page</Button>
          </Link>
        </p>
        <Image src="/images/logo.png" alt="" width={125} height={125}/>
      </HBox>
    </React.Fragment>
  );
}
