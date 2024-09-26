export const Header = () => {
  return (
    <div className='w-[100%]'>
      <div className='bg-white flex items-center justify-between dark:bg-gray-800 w-[100%] shadow '>
        <div className='px-8 max-w-7xl'>
          <div className='flex items-center justify-between h-16'>
            <div className=' flex items-center'>
              <p className='mb-2 text-xl font-light text-gray-200 md:mb-0'>
                Logo
              </p>
            </div>
            <div className='block'>
              <div className='flex items-center ml-4 md:ml-6'></div>
            </div>
          </div>
        </div>

        <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4'>
          <div className='flex-row gap-4 flex justify-center items-center'>
            <div className=' flex flex-col'>
              <span className='text-lg font-medium text-gray-600 dark:text-white'>
                Charlie
              </span>
            </div>
            <div className='flex-shrink-0'>
              <a href='#' className='relative block'>
                <img
                  alt='profil'
                  src='https://www.tailwind-kit.com/images/person/1.jpg'
                  className='mx-auto object-cover rounded-full h-12 w-12 '
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
