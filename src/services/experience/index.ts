'use server';

// getAllExperiences
export const getAllExperiences = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/experience`, {
      next: {
        tags: ['EXPERIENCES'],
        revalidate: 1800, // Revalidate this page every 1800 seconds // this is not needed if I use export const revalidate: 1800; inside the home page
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};
