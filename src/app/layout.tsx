import "~/styles/globals.css";
import Navigation from "src/components/Navigation";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "UX/UI Portfolio",
  description: "A clean canvas for showcasing UX/UI design work",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="dark">
        <TRPCReactProvider>
          <Navigation />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
