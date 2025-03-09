import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Yarn Calculator - Convert & Measure Yarn Units",
  description: "Easily convert between different yarn measurement units with our Yarn Calculator.",
  icons: {
    icon: "/favicon.ico", // Ensure the favicon is inside the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
