import "./globals.css";
import Header from "./components/Header";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fff] h-screen">
        <Header />
        <main className={`${roboto.className} ml-[10vw]`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
