import "./globals.css";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export const metadata = {
  title: "Opeyemi Babalola.",
  description: "Opeyemi Babalola.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inconsolata.variable}>{children}</body>
    </html>
  );
}
