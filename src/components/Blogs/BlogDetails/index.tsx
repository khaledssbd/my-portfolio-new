'use client';

import { ShieldCheck } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';
import { IBlog } from '@/types';
import moment from 'moment';

const BlogDetails = ({ blog }: { blog: IBlog }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <div className="mx-auto lg:px-8 pt-24 pb-8 text-white">
      <div className="rounded-3xl shadow-xl overflow-hidden">
        <div className="relative h-96 bg-gray-100">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {blog.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative h-96 w-full">
                    <Image
                      src={img}
                      fill
                      alt={`Slide ${idx + 1}`}
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* <div className="absolute bottom-4 right-4  flex items-center gap-2 ">
            <div className="flex bg-white/90 backdrop-blur-sm  px-3 md:px-4 py-2 rounded-full shadow-sm items-center gap-2">
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-700">
                {blog.category?.name}
              </span>
            </div>
          </div> */}
        </div>

        {/* Content Section */}
        <div className="p-2 md:p-8 lg:p-12">
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">{blog.title}</h1>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* Problem Section */}
              <div className="p-6 bg-green-50 rounded-xl dark:bg-transparent border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-7 h-7 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-green-400">
                    Despription
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed dark:text-white text-lg">
                  {blog.content}
                </p>
              </div>
            </div>

            <div className="text-left text-gray-400">
              Updated At:
              <span className="text-sm font-medium">
                {moment(new Date(blog?.updatedAt)).format('DD-MMMM-YY')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
