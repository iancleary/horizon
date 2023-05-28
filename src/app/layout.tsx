import React from 'react';
import { Metadata } from 'next';
import './reset.css';
import './custom.css';

import StyledComponentsRegistry from '../components/StyledComponentsRegistry/StyledComponentRegistry';

export const metadata: Metadata = {
  title: 'Root - Nextron (with-typescript)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
