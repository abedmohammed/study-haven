import { MapPin } from "lucide-react";
import Link from "next/link";

type props = {
  link: string;
  top: number;
  left: number;
};

export default function Pin({ link, top, left }: props) {
  return (
    <div
      className={`absolute z-20`}
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <Link href={link}>
        <MapPin
          size={40}
          className="fill-red-500 text-[#6f2c0b]"
          strokeWidth={1}
        />
      </Link>
    </div>
  );
}
