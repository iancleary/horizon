import { Metadata } from 'next';

import Sidebar from "@/components/Sidebar/";
import HBox from '@/components/HBox/HBox';

export const metadata: Metadata = {
  title: 'Home - Nextron (with-typescript)',
};

async function getData() {
  const res = await fetch('http://localhost:8000/lists/all');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <HBox>
        <Sidebar lists={data}> </Sidebar>
        {children}
        </HBox>
    </>
  );
}
