import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: "Web & App Development Services | Vibex DevDuo",
  description: "Vibex offers expert web and mobile development using React, Next.js, Flutter, WordPress, and Shopify. Get custom solutions for your digital needs.",
  keywords: "web development, mobile app development, React developer, Next.js expert, Flutter developer, WordPress development, Shopify expert, freelance developer, full-stack development, custom websites",
  robots: "index, follow",
  alternates: { canonical: "https://vibex-mu.vercel.app/" },
  openGraph: {
    title: "Web & App Development Services | Vibex DevDuo",
    description: "Custom web and mobile solutions using React, Flutter, WordPress, and Shopify. Built by experienced freelance developers.",
    url: "https://vibex-mu.vercel.app/",
    siteName: "Vibex DevDuo",
    images: [
      {
        url: "https://vibex-mu.vercel.app/WebLogoBlack.png", // Full URL to the image
        width: 1200,
        height: 630,
        alt: "Vibex DevDuo Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development Services | Vibex DevDuo",
    description: "Expert solutions in web and mobile development using modern technologies like React, Flutter, and Shopify.",
    images: ["https://vibex-mu.vercel.app/WebLogoBlack.png"], // Full URL again
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
        className={jost.className} suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
