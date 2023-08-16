import { StaticImageData } from "next/image";

export type IUser = {
  id: number;
  name: string;
  rating: number;
  avatar: StaticImageData;
  symbol: string;
};
