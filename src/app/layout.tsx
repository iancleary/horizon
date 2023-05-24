import React from 'react';
import { Metadata } from 'next';
import './reset.css';
import './custom.css';

import StyledComponentsRegistry from '../components/StyledComponentsRegistry/StyledComponentRegistry';

// import styled from 'styled-components';

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
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
