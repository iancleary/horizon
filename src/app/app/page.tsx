import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button/';
import HBox from '@/components/HBox/HBox';

export default function Page() {
  return (
    <React.Fragment>
      <HBox>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/home/next">Go to next page</Link>
          <Link href="/home/next">
            <Button>Styled Button to go to next page</Button>
          </Link>
        </p>
      </HBox>
      <Image src="/images/logo.png" alt="" width={125} height={125} />
    </React.Fragment>
  );
}
