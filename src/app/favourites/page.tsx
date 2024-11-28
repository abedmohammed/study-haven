"use client";

import Phone from "@/components/phone";
import Spot from "@/components/spot";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FavouritesPage() {
  const [sort, setSort] = useState("Latest");

  const [openSelected, setOpenSelected] = useState(false);
  const [coffeeSelected, setCoffeeSelected] = useState(false);
  const [foodSelected, setFoodSelected] = useState(false);

  const spots = [
    {
      coffee: true,
      food: true,
      open: true,
      name: "The Grind",
      description:
        "The Grind offers the best coffee on campus for the best price!",
      image: "/images/the-grind.png",
      price: "$$",
      rating: 4.9,
      reviews: 592,
    },
    {
      coffee: true,
      food: false,
      open: true,
      name: "Bean & Brew",
      description: "A cozy spot with artisan coffee and a warm ambiance.",
      image:
        "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$$$",
      rating: 4.7,
      reviews: 251,
    },
    {
      coffee: true,
      food: true,
      open: false,
      name: "Campus Coffee Hub",
      description: "A student favorite for affordable coffee and snacks.",
      image:
        "https://plus.unsplash.com/premium_photo-1706061120861-6435bc850a31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHklMjBsb2NhdGlvbiUyMHB1YmxpY3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$",
      rating: 4.5,
      reviews: 104,
    },
    {
      coffee: false,
      food: true,
      open: true,
      name: "Bites & Brews",
      description: "Delicious food and refreshing drinks under one roof.",
      image:
        "https://plus.unsplash.com/premium_photo-1661290334064-d610a4ef81e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWR5JTIwbG9jYXRpb24lMjBwdWJsaWN8ZW58MHx8MHx8fDA%3D",
      price: "$$$",
      rating: 4.6,
      reviews: 189,
    },
    {
      coffee: true,
      food: true,
      open: true,
      name: "Java Junction",
      description: "Known for their specialty lattes and fresh pastries.",
      image:
        "https://images.unsplash.com/photo-1505066827145-34bcde228211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdHJ5JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
      price: "$$",
      rating: 4.8,
      reviews: 328,
    },
  ];

  return (
    <Phone>
      <div className="p-4 h-[607px] overflow-y-scroll">
        <h2 className="font-eczar text-2xl ml-2">Your Favourites</h2>
        <div className="basis-16 flex gap-4 items-center p-2">
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
                <DropdownMenuRadioItem value="Trending">
                  Trending
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"secondary"}>Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"start"}>
              <DropdownMenuCheckboxItem
                checked={openSelected}
                onCheckedChange={setOpenSelected}
              >
                Open Now
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={coffeeSelected}
                onCheckedChange={setCoffeeSelected}
              >
                Coffee
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={foodSelected}
                onCheckedChange={setFoodSelected}
              >
                Food
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className={cn(`p-2 flex flex-col gap-4`)}>
          {spots
            .filter((spot) => {
              if (openSelected && !spot.open) return false;
              if (coffeeSelected && !spot.coffee) return false;
              if (foodSelected && !spot.food) return false;
              return true;
            })
            .sort((a, b) => {
              if (sort === "Latest") return 0;
              if (sort === "Ratings") return b.rating - a.rating;
              if (sort === "Trending") return b.reviews - a.reviews;
              return 0;
            })
            .map((spot, index) => (
              <Spot
                key={index}
                coffee={spot.coffee}
                food={spot.food}
                open={spot.open}
                name={spot.name}
                description={spot.description}
                image={spot.image}
                price={spot.price as "$" | "$$" | "$$$"}
                rating={spot.rating}
                reviews={spot.reviews}
              />
            ))}
        </div>
      </div>
    </Phone>
  );
}
