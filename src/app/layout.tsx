import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter, Roboto_Mono  } from "next/font/google";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); 

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Francisco Sucatti - Frontend Developer Portfolio",
};

/*export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}*/




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} flex bg-gradient-to-br from-green-950 via-green-900 to-black text-white`}>
        <LoadingScreen />
        <Navbar />
        <main className="ml-20 w-full">{children}</main>
      </body>
    </html>
  )
}

