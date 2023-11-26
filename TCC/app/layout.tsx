import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Return from "@/components/return";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "SINTDAC | %s",
    default: "SINTDAC",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Return />
        {children}
        <footer className="sm:absolute sm:bottom-0 w-full px-10 py-5 flex-col flex gap-2 justify-center items-center">
          <div className="flex gap-1 items-center">
            <Image src="/sintdac.png" alt="Sintdac Logo" width={30} height={15} priority />
            <b className="text-xl">SINTDAC</b>
          </div>
          <b className="text-sm leading-relax text-gray-400">© 2023</b>
        </footer>
      </body>
    </html>
  );
}
