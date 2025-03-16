import ImageCarousel from "@/components/image-carousel";
import { ImageGallery } from "@/components/image-gallery";
import { RadioGroupForm } from "@/components/my-form";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex gap-y-4 justify-center min-h-screen items-center flex-col px-4 py-8">
      <h1 className="text-4xl text-orange-300/60 text-center sm:text-6xl font-extrabold">Sorrounded by Idiots?</h1>
      <p className="max-w-md text-xl text-center">Discover which of the four types of human behaviour
         you belong to and learn how to effectively communicate
          with people in bussiness and in life
      </p>
      <br/>
      <Button asChild size={'lg'} className="border-slate-100 animate-pulse bg-transparent border-2">
        <Link className="uppercase text-md text-slate-100 font-sans tracking-widest" href={'/test'}>Start test</Link>
      </Button>
    </main>
  );
}
