"use client";

import {
  BatteryFull,
  CircleUserRound,
  Heart,
  House,
  Map,
  SignalHigh,
  Ticket,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type props = {
  children: React.ReactNode;
};

export default function Phone({ children }: props) {
  const path = usePathname();

  const navItems = [
    {
      name: "Home",
      icon: <House size={30} />,
      link: "/",
    },
    {
      name: "Map",
      icon: <Map size={30} />,
      link: "/map",
    },
    {
      name: "Favourites",
      icon: <Heart size={30} />,
      link: "/favourites",
    },
    {
      name: "Promotions",
      icon: <Ticket size={30} />,
      link: "/promos",
    },
    {
      name: "Profile",
      icon: <CircleUserRound size={30} />,
    },
  ];

  return (
    <div className="grid place-content-center min-h-screen bg-[#140D06]">
      <div className="bg-muted-foreground rounded-[43px] p-[2px]">
        <div className="bg-black rounded-[42px] p-3">
          <div className="w-[360px] h-[800px] rounded-[30px] bg-background flex flex-col">
            <header className="h-12 flex justify-between items-center p-4">
              <div className="flex-1">
                <p className="ml-1">12:36</p>
              </div>
              <div className="h-5 bg-black rounded-full w-[70px] flex items-center"></div>
              <div className="flex-1 flex gap-2 items-center justify-end">
                <SignalHigh />
                <Wifi className="mr-1" />
                <BatteryFull />
              </div>
            </header>
            <main>
              <div className="relative h-12">
                <h1 className="text-3xl text-center font-eczar mt-4">
                  Study Haven
                </h1>
              </div>
              <div className="border-t border-muted rounded-xl">{children}</div>
            </main>
            <nav className="mt-auto border-t h-20 flex items-center justify-evenly">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link ? item.link : ""}
                  className="flex flex-col justify-center items-center relative"
                >
                  <div
                    className={cn(
                      "h-full",
                      path === item.link
                        ? "text-[#c07224] border-[#ce761e] pb-1 border-b-2"
                        : "text-border"
                    )}
                  >
                    {item.icon}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
