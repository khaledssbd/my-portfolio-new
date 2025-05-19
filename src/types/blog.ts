import { TUser } from './user';

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  url: string;
  images: string[];
  author: TUser;
  createdAt: Date;
  updatedAt: Date;
}
