'use server';

// getAllSkills
export const getAllSkills = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skill?limit=5000&page=1&sort=createdAt`,
      {
        next: {
          tags: ['SKILLS'],
          revalidate: 1800, // Revalidate this page every 1800 seconds // this is not needed if I use export const revalidate: 1800; inside the home page
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};
