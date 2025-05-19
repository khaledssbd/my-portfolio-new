'use client';

import { Button } from '@/components/ui/button';
import BlogCardCarousel from './BlogCardCarousel';
import { IBlog } from '@/types';
import Link from 'next/link';
// import { Link } from 'next-view-transitions';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import moment from 'moment';

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <Card className="p-3 bg-[#100d25]">
      {/* CardHeader */}
      <CardHeader className="relative">
        {/* Carousel */}
        <BlogCardCarousel blog={blog} />
      </CardHeader>
      {/* CardContent */}
      <CardContent className="p-0 mt-2">
        {/* <CardContent className="p-0 mt-20"> */}
        <CardTitle
          title={blog?.title}
          className="font-semibold cursor-pointer text-sm"
        >
          <h1 className="text-lg font-semibold text-gray-200 text-center">
            {blog?.title}
          </h1>
        </CardTitle>

        <div className="my-3 py-3 border-y border-gray-300 text-white">
          <p>
            Description:{' '}
            {blog?.content?.length > 30
              ? blog?.content?.slice(0, 30) + '...'
              : blog?.content}
          </p>

          <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-3 my-2">
            <p className="text-sm text-gray-400">
              <span className="font-semibold">Author: {blog?.author.name}</span>
            </p>

            <div className="text-left text-gray-400">
              Updated At:
              <span className="text-sm font-medium">
                {moment(new Date(blog?.updatedAt)).format('DD-MMMM-YY')}
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      {/* CardFooter */}
      <CardFooter className="flex flex-col lg:flex-row gap-2 items-center justify-around">
        {/* View Details */}
        <Link href={`/blogs/${blog?.url}`}>
          <Button
            size="sm"
            variant="outline"
            // className="text-black hover:text-white bg-green-500 hover:bg-black"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
