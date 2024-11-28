import Phone from "@/components/phone";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function MapPage() {
  return (
    <Phone>
      <div className="h-[350px] rounded-t-lg overflow-hidden border-b">
        <Image
          src="/images/map.png"
          width={1347}
          height={913}
          className="object-cover w-full h-full"
          alt="map"
        />
      </div>
      <div>
        <div className="h-16 border-b flex gap-4 items-center p-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"secondary"}>Sort By</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Latest</DropdownMenuItem>
              <DropdownMenuItem>Ratings</DropdownMenuItem>
              <DropdownMenuItem>Trending</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </Phone>
  );
}
