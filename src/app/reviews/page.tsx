"use client";

import Phone from "@/components/phone";
import ReviewCard from "@/components/review-card";
import { Button } from "@/components/ui/button";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { CornerDownLeft, Plus, Star } from "lucide-react";
import { useState } from "react";

export default function ReviewsPage() {
  const [sort, setSort] = useState("Latest");
  const [selected, setSelected] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      review: "Great coffee!",
      rating: 5,
      date: new Date("2024-11-26"),
      dateText: "2 days ago",
    },
    {
      name: "Jane Smith",
      review: "Loved the ambiance!",
      rating: 4,
      date: new Date("2024-11-21"),
      dateText: "7 days ago",
    },
    {
      name: "Mike Johnson",
      review: "Amazing service!",
      rating: 5,
      date: new Date("2024-11-25"),
      dateText: "3 days ago",
    },
    {
      name: "Sarah Brown",
      review: "Decent coffee, but a bit pricey.",
      rating: 3,
      date: new Date("2024-11-23"),
      dateText: "5 days ago",
    },
    {
      name: "Emily Davis",
      review: "Fantastic pastries and coffee.",
      rating: 4,
      date: new Date("2024-11-14"),
      dateText: "14 days ago",
    },
    {
      name: "Chris Wilson",
      review: "Not bad, but the seating is limited.",
      rating: 3,
      date: new Date("2024-11-24"),
      dateText: "4 days ago",
    },
    {
      name: "Jessica Taylor",
      review: "Perfect spot for studying.",
      rating: 5,
      date: new Date("2024-10-28"),
      dateText: "1 month ago",
    },
    {
      name: "Daniel Martinez",
      review: "WiFi is super slow.",
      rating: 2,
      date: new Date("2024-11-07"),
      dateText: "21 days ago",
    },
    {
      name: "Olivia Thomas",
      review: "Great vibes and friendly staff!",
      rating: 5,
      date: new Date("2024-11-22"),
      dateText: "6 days ago",
    },
    {
      name: "Liam Anderson",
      review: "Overrated, but decent drinks.",
      rating: 3,
      date: new Date("2024-11-26"),
      dateText: "2 days ago",
    },
    {
      name: "Sophia Moore",
      review: "The latte art was so cute!",
      rating: 5,
      date: new Date("2024-11-24"),
      dateText: "4 days ago",
    },
    {
      name: "James Lee",
      review: "Average coffee, but great location.",
      rating: 4,
      date: new Date("2024-11-14"),
      dateText: "14 days ago",
    },
    {
      name: "Isabella White",
      review: "Best mocha I've ever had.",
      rating: 5,
      date: new Date("2024-11-21"),
      dateText: "7 days ago",
    },
    {
      name: "Ethan Harris",
      review: "Too noisy for my taste.",
      rating: 2,
      date: new Date("2024-11-25"),
      dateText: "3 days ago",
    },
    {
      name: "Charlotte Clark",
      review: "The staff was super helpful!",
      rating: 5,
      date: new Date("2024-11-27"),
      dateText: "1 day ago",
    },
    {
      name: "Noah Walker",
      review: "Small portions for the price.",
      rating: 3,
      date: new Date("2024-09-28"),
      dateText: "2 months ago",
    },
    {
      name: "Mia Robinson",
      review: "Delicious croissants and coffee.",
      rating: 4,
      date: new Date("2024-11-21"),
      dateText: "7 days ago",
    },
    {
      name: "Lucas Hall",
      review: "Best place to hang out with friends.",
      rating: 5,
      date: new Date("2024-11-23"),
      dateText: "5 days ago",
    },
    {
      name: "Amelia Allen",
      review: "Service could be faster.",
      rating: 3,
      date: new Date("2024-11-07"),
      dateText: "21 days ago",
    },
    {
      name: "Benjamin Young",
      review: "My go-to spot every weekend.",
      rating: 5,
      date: new Date("2024-11-26"),
      dateText: "2 days ago",
    },
  ];

  return (
    <Phone>
      <div className="p-4 h-[607px] overflow-y-scroll">
        <div className="flex items-center mb-2">
          <div>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="p-4"
              onClick={() => {
                window.history.back();
              }}
            >
              <CornerDownLeft />
            </Button>
          </div>
          <h2 className="font-eczar text-2xl ml-2">The Grind Reviews</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"icon"} variant={"outline"} className="ml-auto">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-left">Write a Review</DialogTitle>
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

        <div className="basis-16 flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"secondary"}>Sort By</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"start"}>
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuRadioItem value="Latest">
                  Latest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Ratings">
                  Ratings
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {reviews
            .sort((a, b) => {
              if (sort === "Latest") {
                return b.date.getTime() - a.date.getTime();
              } else {
                return b.rating - a.rating;
              }
            })
            .map((review, index) => (
              <ReviewCard
                key={index}
                date={review.dateText}
                name={review.name}
                rating={review.rating}
                review={review.review}
              />
            ))}
        </div>
      </div>
    </Phone>
  );
}
