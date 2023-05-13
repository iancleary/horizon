import React from 'react';
import { Metadata } from 'next';

// import styled from 'styled-components';

export const metadata: Metadata = {
  title: 'Home - Nextron (with-typescript)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
