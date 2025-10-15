
import "@/app/globals.css";
import type { Metadata } from "next";
import { RTLThemeProvider } from "../../rtl-layout/RTLThmeProvider";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Check in/out",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinkLists = [
    {
      href: "/",
      label: "test",
    },
  ];
  return (
    <RTLThemeProvider>
      <html lang="fa" dir="rtl">
       <body>
          <Sidebar  />
          <main style={{ flex: 1, padding: "16px", marginRight: "240px" }}>
            {children}
          </main>
        </body>

      </html>
    </RTLThemeProvider>
  );
}
