import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseAnimation from "@/components/animations/MouseAnimation";

const moderniz = localFont({
  src: "./fonts/moderniz.otf",
  variable: "--font-moderniz",
});

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Shahnawaz - Web Designer & Developer",
  description: "I'm a web designer and developer based in India. I specialize in creating responsive websites and web applications that are both visually appealing and user-friendly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${interFont.className} ${moderniz.className}  antialiased h-auto flex justify-center`}>
        <MouseAnimation />
        <div className="background fixed overflow-hidden w-screen h-screen -z-10 ">
          <div className="bg-overlay " />
          <div className="gradients-container">
            <div className="g1"/>
            <div className="g2"/>
            <div className="g3"/>
            <div className="interactive" />
          </div>
        </div>
        <div className="app w-[93%] min-h-screen">
        {children}
        </div>
      </body>
    </html>
  );
}



