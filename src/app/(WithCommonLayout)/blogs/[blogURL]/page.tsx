import { blogDetailsMetaData } from '@/utils/Metadata';
import { getAllBlogs, getSingleBlogByUrl } from '@/services/blog';
import { IBlog } from '@/types';
import { Metadata } from 'next';
// import Script from 'next/script';
import BlogNotFound from '@/components/Blogs/BlogNotFound';
import BlogDetails from '@/components/Blogs/BlogDetails';

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogURL: string }>;
}) => {
  const { blogURL } = await params;

  const { data } = await getSingleBlogByUrl(blogURL);
  const blog: IBlog = data;

  if (!blog) return <BlogNotFound />; // return RentalNotFound component

  // const blogDetailsSchemaData = blogDetailsPageSchemaData(blog, blogURL);

  return (
    <>
      {/* for Schema Markup */}
      {/* <Script
        id={`schema-markup-${blog?.url}`}
        type="application/ld+json"
        // strategy="afterInteractive" not using is better for nextjs seo
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogDetailsSchemaData),
        }}
      /> */}

      <BlogDetails blog={blog} />
    </>
  );
};

export default BlogDetailsPage;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogURL: string }>;
}): Promise<Metadata> {
  const { blogURL } = await params;

  const { data } = await getSingleBlogByUrl(blogURL);
  const blog: IBlog = data;

  if (!blog) return { title: 'Blog Not Found' }; // return empty object

  const metaData = blogDetailsMetaData(blog);
  return metaData;
}

export async function generateStaticParams(): Promise<{ blogURL: string }[]> {
  const { data: blogs } = await getAllBlogs(); // fetching all blogs

  if (!blogs || !Array.isArray(blogs)) return []; // return empty array

  return blogs.map((blog: IBlog) => ({
    blogURL: blog?.url?.toString(), // using _id as blogURL
  }));
}
export const dynamicParams = true; // Fallback for new pages for generateStaticParams
// export const revalidate = 3600; // Revalidate this page every 3600 seconds // this is not needed if I use revalidate: 3600, inside getSingleBlog function
