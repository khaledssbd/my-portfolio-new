import { IBlog } from '@/types';
import BlogCard from '../BlogCard';

const AllBlogs = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div className="flex flex-col gap-3 py-30">
      <div className="mx-4 lg:mx-10">
        {blogs?.length === 0 ? (
          <h3 className="text-xl font-bold text-center text-white min-h-[calc(100vh-320px)] flex justify-center items-center">
            No post found
          </h3>
        ) : (
          <div>
            <p className="text-xl font-bold text-center text-white pb-10">
              All blog posts ({blogs?.length})
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-24 mx-10">
              {blogs?.map((blog: IBlog, idx: number) => (
                <BlogCard key={idx} blog={blog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
