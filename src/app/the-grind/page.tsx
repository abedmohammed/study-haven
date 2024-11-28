"use client";

import Phone from "@/components/phone";
import ReviewCard from "@/components/review-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { CornerDownLeft, Heart, Plus, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TheGrindPage() {
  const router = useRouter();
  const [favoured, setFavoured] = useState(false);
  const [selected, setSelected] = useState(0);

  const images = [
    "grind-location.png",
    "the-grind.png",
    "grind-store.avif",
    "grind-barista.png",
  ];

  const reviews = [
    {
      name: "Sophia Green",
      review:
        "The coffee here is absolutely amazing! I tried their signature latte, and it was one of the best I’ve ever had. The flavors were rich and well-balanced, and the barista even made a beautiful design on top.",
      rating: 5,
      date: "1 week ago",
    },
    {
      name: "Ethan Carter",
      review:
        "I’ve been coming here for a few months now, and I love the cozy vibe of this place. It’s a perfect spot to work or study, with plenty of power outlets and comfortable seating.",
      rating: 4,
      date: "2 weeks ago",
    },
    {
      name: "Olivia Bennett",
      review:
        "This cafe has a great mix of modern and rustic decor, which makes it really inviting. I was impressed by their attention to detail—not just in the way the drinks were prepared, but also in how clean and organized everything was.",
      rating: 5,
      date: "3 days ago",
    },
  ];

  return (
    <Phone>
      <div className="relative p-4 h-[607px] overflow-y-scroll">
        <div className="flex gap-4">
          <div>
            <Button
              size={"icon"}
              variant={"outline"}
              className="p-6"
              onClick={() => {
                window.history.back();
              }}
            >
              <CornerDownLeft />
            </Button>
          </div>
          <div>
            <h1 className="text-4xl font-eczar font-semibold">The Grind</h1>
            <p className="text-muted-foreground text-sm">
              The Grind is located in the MUSC basement.
            </p>
          </div>
          <div className="ml-auto">
            <Button
              size={"icon"}
              variant={"ghost"}
              className="p-6"
              onClick={() => {
                setFavoured((prev) => !prev);
              }}
            >
              <Heart
                fill={favoured ? "red" : "transparent"}
                className="!w-6 !h-6"
              />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Carousel className="w-[75%] max-w-xs">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <Image
                          src={`/images/${img}`}
                          width={3000}
                          height={2000}
                          className="object-cover w-full h-full"
                          alt="grind image"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-6">
          <h3 className="font-eczar text-xl">About The Place</h3>
          <p className="text-muted-foreground text-sm">
            The Grind offers the best coffee on campus for the best price!
            Located beside TwelvEighty Bar & Grill, The Grind serves quality
            crafted beverages along with a unique menu featuring baked goods,
            hot sandwiches and bagels.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-eczar text-xl">Hours</h3>
          <p className="text-muted-foreground text-sm">
            Monday - Thursday: 9:00am - 9:00pm
          </p>
          <p className="text-muted-foreground text-sm">
            Friday: 8:00am - 4:00pm
          </p>
          <p className="text-muted-foreground text-sm">
            Saturday - Sunday: Closed
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-eczar text-xl">Info</h3>
          <div className="grid grid-cols-[1fr,3fr] gap-x-4 gap-y-2 pt-2">
            <div className="text-sm font-medium text-right">Noise:</div>
            <div className="flex items-center space-x-2">
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border rounded"></div>
              <div className="w-1/5 h-3 border rounded"></div>
            </div>

            <div className="text-sm font-medium text-right">Busy:</div>
            <div className="flex items-center space-x-2">
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border rounded"></div>
            </div>

            <div className="text-sm font-medium text-right">Space:</div>
            <div className="flex items-center space-x-2">
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border rounded"></div>
              <div className="w-1/5 h-3 border rounded"></div>
              <div className="w-1/5 h-3 border rounded"></div>
            </div>

            <div className="text-sm font-medium text-right">Ambiance:</div>
            <div className="flex items-center space-x-2">
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
              <div className="w-1/5 h-3 border bg-primary rounded"></div>
            </div>
          </div>

          <div className="mt-4 flex gap-x-2 gap-y-2 items-center flex-wrap">
            <Badge variant="outline">Great Coffee</Badge>
            <Badge variant="outline">Fast Service</Badge>
            <Badge variant="outline">Wifi</Badge>
            <Badge variant="outline">Outlets</Badge>
            <Badge variant="outline">Great Coffee</Badge>
            <Badge variant="outline">Great Coffee</Badge>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-eczar text-xl">Reviews</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button size={"icon"} variant={"outline"} className="ml-auto">
                  <Plus />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-left">
                    Write a Review
                  </DialogTitle>
                  <DialogDescription className="text-left">
                    <Textarea
                      placeholder="Write your review..."
                      className="mt-4 h-[150px]"
                    />
                    <p className="mt-4 text-foreground">Rating:</p>
                    <div className="flex justify-center gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Button
                          variant="ghost"
                          size={"icon"}
                          className="p-5"
                          onClick={() => {
                            setSelected(rating);
                          }}
                        >
                          <Star
                            className="!w-8 !h-8 text-border"
                            fill={rating <= selected ? "gold" : "transparent"}
                          />
                        </Button>
                      ))}
                    </div>
                  </DialogDescription>
                  <DialogFooter>
                    <div className="w-full mt-4 flex gap-2 justify-center">
                      <DialogClose asChild>
                        <Button
                          onClick={() => {
                            setSelected(0);
                          }}
                          variant="secondary"
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button
                          onClick={() => {
                            setSelected(0);
                          }}
                        >
                          Submit
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogFooter>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex flex-col gap-2">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <Button
              onClick={() => {
                router.push("/reviews");
              }}
              variant="outline"
            >
              View All Reviews
            </Button>
          </div>
        </div>
      </div>
    </Phone>
  );
}
