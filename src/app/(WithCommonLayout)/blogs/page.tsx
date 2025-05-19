import AllBlogs from '@/components/Blogs/AllBlogs';
import Pagination from '@/components/ui/core/Pagination';
import { getAllBlogs } from '@/services/blog';
import { blogsPageMetadata } from '@/utils/Metadata';
import { Metadata } from 'next';
// import Script from 'next/script';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const AllBlogsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { data: blogs, meta } = await getAllBlogs(query.page as string, '12');

  // const blogsSchemaData = blogsPageSchemaData(blogs);

  return (
    <>
      {/* <Script
        id="schema-markup-blogs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsSchemaData) }}
      /> */}

      <AllBlogs blogs={blogs} />
      {blogs && blogs.length > 0 && (
        <Pagination page={Number(query.page)} totalPage={meta?.totalPage} />
      )}
    </>
  );
};

export default AllBlogsPage;

export const metadata: Metadata = blogsPageMetadata;
