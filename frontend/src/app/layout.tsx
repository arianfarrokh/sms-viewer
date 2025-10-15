"use client"

import React, { ReactNode } from "react";
import RootLayout from "@/components/layouts/root-layout/RootLayot";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {

  return (

      <RootLayout>{children}</RootLayout>
  );
}

export default Layout;
