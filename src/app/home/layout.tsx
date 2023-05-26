import { Metadata } from 'next';

import Sidebar from "@/components/Sidebar/";
import HBox from '@/components/HBox/HBox';

export const metadata: Metadata = {
  title: 'Home - Nextron (with-typescript)',
};

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // const data = await getData();
  const data = [];
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
