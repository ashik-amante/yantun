import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Yantun khaijan",
    template: "%s | Yantun khaijan",
  },
  description: " Best Restaurent in noakhali",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="px-5 py-2 flex justify-between items-center bg-stone-800  ">
          <div>
            <Link href="/">
              {/* <img className="w-36" src="/logo.png" alt="Yantun khaijan logo" /> */}
              <Image height={30} width={120} loading="eager" className="w-36" src="/logo.png" alt="Yantun khaijan logo" ></Image>
            </Link>
          </div>

          <div className="space-x-5">
            <Link prefetch ={false} className="btn" href="/foods">Foods</Link>
            <Link className="btn" href="/reviews">Foods reviews</Link>
            <Link className="btn" href="/feedbacks"> FeedBacks</Link>
          </div>
        </header>
        <main className="px-6 mt-5">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
