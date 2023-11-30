import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/navbar/Navbar";

export const metadata = {
  title: "Fatemeh Samie | Portfolio",
  description: "Front-end developer | love to bring new Ideas to the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#212121]"}>
        <Header />
        <main className="flex h-screen flex-col items-center justify-between ">
          {children}
        </main>
      </body>
    </html>
  );
}
