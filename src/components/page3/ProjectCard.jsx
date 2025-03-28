import { FaLink } from 'react-icons/fa';
import ProjectImage from '../../assets/Screenshot (110).jpg';

function HomePage() {
 

  return (
    <>
      <div className='Cards space-y-60 grid sm:flex  justify-center items-center gap-8 w-full lg:space-x-90 xl:space-x-100   '>
        {/* First Card */}
        <div className='border-6  text-white rounded-4xl grid justify-center items-center w-[85vw] h-130 mt-2 sm:w-[40vw] sm:h-120 sm:mt-60 md:w-[40vw] lg:w-[30vw] xl:w-[25vw] xl:h-120 xl:mt-60'>
          <div className='mt-5 border-2 ml-4 rounded-2xl w-[73vw] h-41 sm:w-[33vw] md:ml-7 lg:w-[24vw] xl:w-[20vw]'>
            <img
              src={ProjectImage}
              alt="Description"
              className="pointer-events-none w-[75vw] h-40 rounded-2xl object-contain"
            />
          </div>
          <h1 className='font-[estile1] text-[90px] ml-12 sm:text-[4rem] sm:ml-[2rem] md:text-[5rem]'>Movie-Verse</h1>
          <p className='font-[estile7] text-[1rem] ml-8 opacity-70'>
            Movie-Verse is a movie streaming platform offering a vast library of films and series for an immersive viewing experience.
          </p>

          <div className='Buttons flex space-x-25 mt-8 justify-center items-center'>
            <div className="group relative">
              <a href="https://movie-verse-beta.vercel.app/">
              <button>
                <FaLink
                  size={20}
                  className="text-white w-8 group-hover:text-blue-500 hover:scale-125 duration-200"
                />
              </button></a>
              <span
                className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
              >
                Link
              </span>
            </div>

            <div className="group relative">
              <a href="https://github.com/stark-4-11/Portfolio-website"><button>
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                
              </button></a>
              <span
                className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
              >
                GitHub
              </span>
            </div>
          </div>
        </div>


        {/* Second Card */}
        <div className='border-6 text-white rounded-4xl grid justify-center items-center w-[85vw] h-130 mt-2 sm:w-[40vw] sm:h-120 md:w-[40vw] lg:w-[30vw] xl:w-[25vw]'>
          <div className='mt-5 border-2 ml-4 rounded-2xl w-[73vw] h-41 sm:w-[33vw] md:ml-7 lg:w-[24vw] xl:w-[20vw]'>
            <img
              alt="Project Image"
              className="pointer-events-none w-[75vw] h-40 rounded-2xl object-contain"
            />
          </div>
          <h1 className='font-[estile1] text-[90px] ml-12 sm:text-[4rem] sm:ml-[2rem] md:text-[5rem]'>Lorem, ipsum.</h1>
          <p className='font-[estile7] text-[1rem] ml-8 opacity-70'>
            ADDING PROJECT SOON--------Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iste et excepturi molestiae.
          </p>

          <div className='Buttons flex space-x-25 mt-8 justify-center items-center'>
            <div className="group relative">
              <button>
                <FaLink
                  size={20}
                  className="text-white w-8 group-hover:text-blue-500 hover:scale-125 duration-200"
                />
              </button>
              <span
                className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
              >
                Link
              </span>
            </div>

            <div className="group relative">
              <button>
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </button>
              <span
                className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
              >
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;