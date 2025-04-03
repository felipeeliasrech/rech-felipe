import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Felipe's Homepage",
  description: "Portfolio open-source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}