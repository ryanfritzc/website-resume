import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Ryan Fritz | Full Stack Developer",
  description:
    "Ryan Fritz is a full stack developer specializing in building exceptional digital experiences. Currently, he is focused on building responsive full-stack web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-foreground bg-background transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          <div className="bg-background">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
