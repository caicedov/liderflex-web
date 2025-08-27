"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-gray-800 to-gray-600 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Hydraulic workshop"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold mb-4">
            Hurry!! Up To 25% OFF
          </div>

          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Liderflex Hydraulic Hose Kit
            <br />
            Heavy Duty
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">Starting At Only</span>
            <span className="text-4xl font-bold text-yellow-400">$59.00</span>
          </div>

          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg">
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
