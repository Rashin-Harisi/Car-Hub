import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
