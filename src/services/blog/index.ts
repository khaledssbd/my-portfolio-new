'use server';

// import { revalidateTag } from 'next/cache';

// getAllBlogs
export const getAllBlogs = async (
  page?: string,
  limit?: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogpost?limit=${limit}&page=${page}`,
      {
        next: {
          tags: ['BLOGS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// getSingleBlog
export const getSingleBlogByUrl = async (blogURL: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogpost/post/${blogURL}`,
      // { cache: 'no-store' }
      {
        next: {
          tags: ['BLOGS'],
          revalidate: 1800, // Revalidate this page every 1800 seconds // this is not needed if I use export const revalidate: 1800; inside the blog page
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};
