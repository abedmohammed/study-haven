import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

type props = {
  name: string;
  review: string;
  rating: number;
  date: string;
};

export default function ReviewCard({ name, review, rating, date }: props) {
  return (
    <Card>
      <CardContent className="py-2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500 flex">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={20}
                className={`text-yellow-500 ${
                  index < rating ? "fill-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </p>
        </div>
        <p className="text-xs text-muted-foreground">{date}</p>
        <p className="text-sm mt-2">{review}</p>
      </CardContent>
    </Card>
  );
}
