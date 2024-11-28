"use client";

import Phone from "@/components/phone";
import Promo from "@/components/promo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FavouritesPage() {
  const [promoType, setPromoType] = useState("All");

  const promos = [
    {
      type: "coupon",
      title: "20% Off All Drinks!",
      description:
        "Get 20% off your favorite drinks this weekend only. Show this coupon at the counter to redeem.",
      date: "2024-12-02",
      location: "All Locations",
    },
    {
      type: "event",
      title: "Live Acoustic Night",
      description:
        "Join us for a relaxing evening with live acoustic music by local artists. Enjoy great music and coffee.",
      date: "2024-12-05",
      location: "Downtown Cafe",
    },
    {
      type: "coupon",
      title: "Buy One, Get One Free!",
      description:
        "For a limited time, buy one drink and get the second one absolutely free. Bring a friend and enjoy!",
      date: "2024-12-09",
      location: "All Locations",
    },
    {
      type: "event",
      title: "Holiday Latte Art Workshop",
      description:
        "Learn the art of creating beautiful latte designs with our expert baristas. Perfect for the holiday season!",
      date: "2024-12-15",
      location: "Central Coffee Hub",
    },
    {
      type: "coupon",
      title: "Free Cookie with Any Coffee",
      description:
        "Treat yourself to a free cookie with any coffee purchase. Offer valid while supplies last.",
      date: "2024-12-20",
      location: "All Locations",
    },
  ];

  return (
    <Phone>
      <div className="p-4 h-[607px] overflow-y-scroll">
        <h2 className="font-eczar text-2xl ml-2">Your Favourites</h2>
        <div className="basis-16 flex gap-4 items-center p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"secondary"}>Promo Type</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"start"}>
              <DropdownMenuRadioGroup
                value={promoType}
                onValueChange={setPromoType}
              >
                <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="coupon">
                  Coupon
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="event">
                  Event
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className={cn(`p-2 flex flex-col gap-4`)}>
          {promos
            .filter((promo) => {
              if (promoType !== "All" && promo.type !== promoType) return false;
              return true;
            })
            .map((promo, index) => (
              <Promo
                key={index}
                date={promo.date}
                description={promo.description}
                location={promo.location}
                title={promo.title}
                type={promo.type as "coupon" | "event"}
              />
            ))}
        </div>
      </div>
    </Phone>
  );
}
