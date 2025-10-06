import "@/app/globals.css";
import type { Metadata } from "next";
import { RTLThemeProvider } from "../../rtl-layout/RTLThmeProvider";

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
          {children}
        </body>
      </html>
    </RTLThemeProvider>
  );
}
