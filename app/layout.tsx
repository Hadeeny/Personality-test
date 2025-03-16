import type { Metadata } from "next";
// import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import og_image from '@'

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: "Sorrounded by Idiots",
  description: `Discover which of the four types of human behaviour
   you belong to and learn how to effectively communicate
   with people in bussiness and in life`,
  keywords: ["Personality tests", "Sorrounded by Idiots", "Discover my Colour"],
  authors: [{ name: "Oluwasegun Adeniyi", url: "segun-dev-gray.vercel.app" }],
  creator: "Oluwasegun Adeniyi",
  publisher: "Oluwasegun Adeniyi",
  openGraph: {
    title: "Sorrounded by Idiots",
    description: `Discover which of the four types of human behaviour
   you belong to and learn how to effectively communicate
   with people in bussiness and in life`,
    url: "segun-dev-gray.vercel.app",
    siteName: "Personality Test",
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:id" content="1467726470533754880" />
      <meta name="twitter:creator" content="@nextjs" />
      <meta name="twitter:creator:id" content="1467726470533754880" />
      <meta name="twitter:title" content="Next.js" />
      <meta
        name="twitter:description"
        content="The React Framework for the Web"
      />
      <meta property="og:title" content="" />
      {/* <meta property="og:image" content={og_image} /> */}
      <meta name="twitter:image" content="https://nextjs.org/og.png" />
      <body className={`bg-black/90 text-slate-300`}>
        <Navbar />
        {children}
        <div className="text-center fixed bottom-0 left-0 right-0 mx-auto text-muted-foreground font-bold">
          Built with ❤️ by
          <Button className="text-muted-foreground" variant={"link"}>
            <Link href="https://segun-dev-gray.vercel.app">Segun Adeniyi</Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
