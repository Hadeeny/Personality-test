import type { Metadata } from "next";
// import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";


// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: "Sorrounded by Idiots",
  description: `Discover which of the four types of human behaviour
   you belong to and learn how to effectively communicate
   with people in bussiness and in life`,
   keywords: ['Personality tests', 'Sorrounded by Idiots', 'Discover my Colour'],
   authors: [{name: 'Oluwasegun Adeniyi', url: 'segun-dev-gray.vercel.app'}],
   creator: 'Oluwasegun Adeniyi',
   publisher: 'Oluwasegun Adeniyi',
   openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
  },
  //  openGraph: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black/90 text-slate-300`}>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
