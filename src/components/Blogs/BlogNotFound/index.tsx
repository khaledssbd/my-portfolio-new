import { Button } from '@/components/ui/button';
import { AlertOctagon } from 'lucide-react';
import Link from 'next/link';

const BlogNotFound = () => {
  return (
    <div className="flex items-center justify-center pt-30 pb-10 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-red-100 p-3 rounded-full mb-5">
            <AlertOctagon className="size-40 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Failed to load blog details. Please check the URL or try again
            later.
          </p>

          <Link href="/blogs">
            <Button>Try Again</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogNotFound;
