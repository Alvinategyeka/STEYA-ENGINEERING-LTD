import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Steya Engineering – Building Beyond Limits",
  description:
    "Premium construction and engineering firm delivering landmark projects across East Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}