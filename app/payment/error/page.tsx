"use client"

const Page = () => {
  const emailAddress = 'pengfeihuan@gmail.com';


  return (
    <div className='flex items-center justify-center w-full flex-col gap-8 mt-32'>
      <h2 className='font-bold text-2xl'>Something went wrong...</h2>
      <p className="font-medium text-gray-500 max-w-[80vw]">
        Please report bug to{' '}
        <a href={`mailto:${emailAddress}`}  className='text-primary hover:underline' >
          pengfeihuan@gmail.com
        </a>
        , Thank you!
      </p>
    </div>
  );
};

export default Page;