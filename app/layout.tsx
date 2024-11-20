import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Enroll Limited s.r.o.",
  description: "Vitajte na webovej stránke Enroll Limited s.r.o. Objavte naše projekty a informácie.",
  keywords: ["Next.js", "Tailwind CSS", "Kreatívne projekty", "Webová stránka"],
  authors: [{ name: "Andrej Srna", url: "https://andrejsrna.sk.sk" }],
  themeColor: "#b71c1c",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Enroll Limited s.r.o.",
    description: "Objavte zaujímavé projekty a informácie na našej stránke.",
    url: "https://enrollltd.sk",
    siteName: "Enroll Limited s.r.o.",
    images: [
      {
        url: "/og-image.jpg", // Nahrajte obrázok do `public` a uveďte jeho názov
        width: 1200,
        height: 630,
        alt: "Náhľad našej stránky",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enroll Limited s.r.o.",
    description: "Objavte zaujímavé projekty a informácie na našej stránke.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
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
}
