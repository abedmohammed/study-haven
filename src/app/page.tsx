import { MultiCarousel } from "@/components/multi-carousel";
import Phone from "@/components/phone";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BatteryFull, SignalHigh, Wifi } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <Phone>
      <div className="p-4">
        <h2 className="text-2xl font-eczar">Hello, Zayn!</h2>
        <div className="mt-2">
          <Card>
            <CardContent className="flex items-center py-2 px-4">
              <div className="bg-slate-200 rounded-full overflow-hidden w-[100px] h-[100px] border">
                <Image
                  src="/images/books.jpg"
                  width={3000}
                  height={2000}
                  className="object-cover w-full h-full"
                  alt="coffee shop"
                />
              </div>
              <div className="flex-1 p-4">
                <Link href="/map">
                  <Button className="w-full mb-4">Find a Spot</Button>
                </Link>
                <Link href="/favourites">
                  <Button className="w-full" variant={"outline"}>
                    Check Favourites
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-eczar">Looking for a Vibe?</h3>
          <div className="flex justify-center">
            <div className="w-[75%]">
              <MultiCarousel />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-eczar">Current Promotions!</h3>
          <Card className="overflow-hidden h-[150px] border-none mt-2">
            <div className="relative h-full">
              <div className="absolute inset-0 z-0">
                <Image
                  alt="Image"
                  className="object-cover blur-[4px]"
                  height="400"
                  src="/images/nice-seating.webp"
                  width="400"
                />
              </div>
              <div className="relative z-10 p-8 flex items-center h-full gap-8">
                <Link href="/favourites">
                  <Button className="w-full" variant={"outline"}>
                    Discounts
                  </Button>
                </Link>
                <CardTitle className="text-white text-2xl">
                  20% off on all drinks
                </CardTitle>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Phone>
  );
}
