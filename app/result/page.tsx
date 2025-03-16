// @ts-nocheck 
"use client";
import { useStore } from "@/store";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalty } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ResultPage = () => {
  const results = useStore((state) => state.results);
  const [toggleBlue, setToggleBlue] = useState(false);
  const [toggleRed, setToggleRed] = useState(false);
  const [toggleYellow, setToggleYellow] = useState(false);
  const [toggleGreen, setToggleGreen] = useState(false);

  const count = { green: 0, blue: 0, red: 0, yellow: 0 };
  Object.values(results).forEach((value: number | string) => {
    if (count.hasOwnProperty(value)) {
      count[value]++;
    }
  });

  // const count = {
  //   green: 2,
  //   blue: 4,
  //   red: 1,
  //   yellow: 3,
  // };

  return (
    <div className="space-y-6 w-full h-screen flex flex-col items-center p-8">
      <h2 className="text-center font-bold text-2xl uppercase">
        Here are your test results
      </h2>
      <div className="w-full mx-auto sm:w-4/5">
        <div className="w-full h-3 flex justify-between items-center bg-white/30 rounded">
          <motion.div
            initial={{ width: 0 }}
            transition={{ duration: 1 }}
            animate={{ width: `${count.blue * 10}%` }}
            className="h-3 bg-blue-400 rounded-full"
          />
        </div>
        <div className="text-xl font-bold flex items-center justify-between text-blue-400">
          <div className="flex items-center gap-x-2">
            Analytical
            <span className="text-xl">{count.blue * 10}%</span>
          </div>
          <Button
            variant={"link"}
            onClick={() => setToggleBlue(!toggleBlue)}
            className="text-sm text-white"
          >
            {toggleBlue ? "Hide" : "Read more"}
          </Button>
        </div>
        <ul
          className={`${toggleBlue ? "flex" : "hidden"}  flex-wrap gap-6 mt-4`}
        >
          {personalty.blue.map((char, index) => (
            <li className="list-disc" key={index}>
              {char}
            </li>
          ))}
        </ul>
        <div></div>
      </div>
      <div className="w-full mx-auto sm:w-4/5">
        <div className="w-full h-3 bg-white/30 rounded">
          <motion.div
            initial={{ width: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            animate={{ width: `${count.red * 10}%` }}
            className=" h-3 bg-red-400 rounded-full"
          />
        </div>

        <div className="text-xl font-bold flex items-center justify-between text-red-400">
          <div>
            Dominant <span>{count.red * 10}%</span>
          </div>
          <Button
            variant={"link"}
            onClick={() => setToggleRed(!toggleRed)}
            className="text-sm text-white"
          >
            {toggleRed ? "Hide" : "Read more"}
          </Button>
        </div>
        <ul
          className={`${toggleRed ? "flex" : "hidden"}  flex-wrap gap-6 mt-4`}
        >
          {personalty.red.map((char, index) => (
            <li className="list-disc" key={index}>
              {char}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mx-auto sm:w-4/5">
        <div className="w-full h-3 bg-white/30 rounded">
          <motion.div
            initial={{ width: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            animate={{ width: `${count.yellow * 10}%` }}
            className=" h-3 bg-yellow-400 rounded-full"
          />
        </div>

        <div className="text-xl font-bold flex items-center justify-between text-yellow-400">
          <div>
            Inspiring <span>{count.yellow * 10}%</span>
          </div>
          <Button
            variant={"link"}
            onClick={() => setToggleYellow(!toggleYellow)}
            className="text-sm text-white"
          >
            {toggleYellow ? "Hide" : "Read more"}
          </Button>
        </div>
        <ul
          className={`${
            toggleYellow ? "flex" : "hidden"
          }  flex-wrap gap-6 mt-4`}
        >
          {personalty.yellow.map((char, index) => (
            <li className="list-disc" key={index}>
              {char}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex-1 mx-auto sm:w-4/5">
        <div className="w-full h-3 bg-white/30 rounded">
          <motion.div
            initial={{ width: 0 }}
            transition={{ duration: 1 }}
            animate={{ width: `${count.green * 10}%` }}
            className=" h-3 bg-green-400 rounded-full"
          />
        </div>

        <div className="text-xl font-bold flex items-center justify-between text-green-400">
          <div>
            Stable <span>{count.green * 10}%</span>
          </div>
          <Button
            variant={"link"}
            onClick={() => setToggleGreen(!toggleGreen)}
            className="text-sm text-white"
          >
            {toggleGreen ? "Hide" : "Read more"}
          </Button>
        </div>
        <ul
          className={`${toggleGreen ? "flex" : "hidden"}  flex-wrap gap-6 mt-4`}
        >
          {personalty.green.map((char, index) => (
            <li className="list-disc" key={index}>
              {char}
            </li>
          ))}
        </ul>
      </div>
      <Button
        asChild
        size={"lg"}
        className="border-slate-100 animate-pulse bg-transparent border-2"
      >
        <Link
          className="uppercase text-md text-slate-100 hover:bg-black font-sans tracking-widest"
          href={"/test"}
        >
          Take test again
        </Link>
      </Button>
      <br/>
    </div>
  );
};

export default ResultPage;
