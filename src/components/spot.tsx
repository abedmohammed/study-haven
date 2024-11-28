import Image from "next/image";
import { Card } from "./ui/card";
import { useRouter } from "next/navigation";

type props = {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  price: "$" | "$$" | "$$$";
  image: string;
  coffee?: boolean;
  food?: boolean;
  open?: boolean;
};

export default function Spot({
  name,
  description,
  rating,
  reviews,
  price,
  coffee,
  food,
  open,
  image,
}: props) {
  const router = useRouter();
  return (
    <Card
      className="p-4 cursor-pointer hover:-translate-y-1 transition-all hover:bg-background"
      onClick={() => {
        router.push("/the-grind");
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="bg-slate-200 rounded-full overflow-hidden w-[75px] h-[75px] border">
          <Image
            src={image}
            width={3000}
            height={2000}
            className="object-cover w-full h-full"
            alt="coffee shop"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-sm ">
                {rating} ({reviews})
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {coffee && <span className="text-sm text-gray-500">☕️</span>}
              {food && <span className="text-sm text-gray-500">🍔</span>}
              {open && <span className="text-sm text-gray-500">🕒</span>}
              <span className="text-sm">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
