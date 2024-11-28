"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";

type props = {
  type: "coupon" | "event";
  title: string;
  description: string;
  image?: string;
  date: string;
  location: string;
};

export default function Promo({
  type,
  title,
  description,
  date,
  location,
}: props) {
  const [showQR, setShowQR] = useState(false);
  const [actuallyShowQR, setActuallyShowQR] = useState(false);

  return type === "event" ? (
    <Card>
      <CardContent className="flex items-center py-2 px-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 relative">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm">{date}</span>
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    <div className="flex overflow-hidden">
      <div className="border flex-1 p-4 relative">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 relative">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{date}</p>
            <p className="text-sm">{location}</p>
          </div>
        </div>
        <div className="w-8 h-8 bg-border rounded-full absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-7 h-7 bg-background rounded-full absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-8 h-8 bg-border rounded-full absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2"></div>
        <div className="w-7 h-7 bg-background rounded-full absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="w-20 border border-l-0 grid place-content-center bg-card">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="-rotate-90 rounded-none ml-2"
              variant={"secondary"}
            >
              Redeem
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-left">{title}</DialogTitle>
              <DialogDescription>
                <p className="text-left">
                  {date} at {location}
                </p>
              </DialogDescription>
              <div className="text-left">
                <p>{description}</p>
                <p className="text-sm mt-4">
                  Redeem this coupon at the counter and show the following QR
                  code to the cashier.
                </p>
              </div>
              <DialogFooter>
                <div className="w-full mt-4 flex gap-2 justify-center">
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      onClick={() => {
                        setShowQR(true);
                      }}
                    >
                      Redeem
                    </Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog open={showQR} onOpenChange={setShowQR}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-left">Are you sure?</DialogTitle>
              <DialogDescription>
                <p className="text-left">
                  This action cannot be undone, once your exit the page the QR
                  code will be lost.
                </p>
              </DialogDescription>
              <DialogFooter>
                <div className="w-full mt-4 flex gap-2 justify-center">
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      onClick={() => {
                        setActuallyShowQR(true);
                      }}
                    >
                      Confirm
                    </Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog open={actuallyShowQR} onOpenChange={setActuallyShowQR}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-left">Coupon QR Code</DialogTitle>
              <DialogDescription>
                <p className="text-left">
                  Show this QR code to the cashier to redeem your coupon.
                </p>
              </DialogDescription>
              <div className="flex justify-center">
                <Card className="mt-4">
                  <Image
                    src="/images/qr-code.png"
                    width={200}
                    height={200}
                    alt="QR Code"
                  />
                </Card>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
