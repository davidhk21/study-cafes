import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import NavBar from "./_components/NavBar";
import { NextUIProvider } from "@nextui-org/system";

import "./globals.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: "400"
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Kim's Study Cafes",
  description: "David Kim's study cafes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      // add imported font families to use
      className={`${libreBaskerville.variable} ${sourceSans.variable}`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body>
        <NextUIProvider>
          <NavBar />
        </NextUIProvider>
          {children}
          <div className="h-40 bg-white font-libre text-xl flex justify-center items-center">
            david kim study cafes
          </div>
      </body>
    </html>
  );
}
