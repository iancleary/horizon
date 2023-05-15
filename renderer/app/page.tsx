import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button/';


export default function Page() {
  return (
    <React.Fragment>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            Go to next page
          </Link>
          <Link href="/next">
            <Button>Styled Button to go to next page</Button>
          </Link>
        </p>
        <Image src="/images/logo.png" alt="" width={125} height={125}/>
      </div>
    </React.Fragment>
  );
}
