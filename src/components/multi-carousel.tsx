import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";

export function MultiCarousel() {
  const items = ["Open Now", "Quiet", "Fast WiFi", "Power Outlet", "Outdoor"];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-2"
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Link href={"/map"}>
                <Button
                  variant={"outline"}
                  className="aspect-square grid place-content-center p-1 rounded-full w-full h-full text-wrap bg-card"
                >
                  <span className="text-xs text-center">{items[index]}</span>
                </Button>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
}
