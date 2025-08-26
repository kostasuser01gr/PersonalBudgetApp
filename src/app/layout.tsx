import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/app/providers";
import { Toaster } from "sonner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Personal Budget App",
  description: "Premium οικονομική διαχείριση εξόδων.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-emerald-950 via-gray-950 to-black`}>
        <Providers>
          {children}
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}
