import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Nunito} from "next/font/google";
import Navbar from "./components/navbar/narbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
// import Modal from "./components/modals/Modal";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Homeify",
  description: "A home for your life",
};


const font = Nunito({
  subsets:["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
          <ClientOnly>
            {/* <Modal  title="Hello world" isOpen actionLabel="Submit"/> */}
            <RegisterModal/>
          <Navbar/>
          </ClientOnly>
      
        {children}
      </body>
    </html>
  );
}
