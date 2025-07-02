import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row
    items-center justify-between min-h-[calc(90vh-6rem)]">
        <div className="max-w-x1 ml-[5%] z-10 mt-[90%]
        md:mt-[60%] lg:mt-0">
            {/* Tag box-with gradient border */}
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r
             from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)]
             rounded-full'>
                <div className='absolute inset-[3px] 
                bg-black rounded-full flex items-center 
                justify-cener gap-1'>
                <i class='bx bx-diamond'></i>
                INTRODUCING

            </div></div>
            {/* Main Heading */}
            <h1 className='text-3xl sm:text-4xl
            md:text-5xl lg:text-6xl font-semibold
            tracking-wider my-8'>
                WELCOME TO 
                <br/>
                VIJAYA CLOTH STORE


            </h1>
            {/* Description */}
            <p className='text-base sm:text-lg
            tracking-wider text-gray-400 max-w-[25rem] 
            lg:max-w-[30rem]'>
                your one-stop destination for stylish and
                comfortable clothing. We're dedicated to providing
                high-quality apparel at affordable prices, ensuring a 
                great shopping experience for all.

            </p>
            {/* Buttons */}
            <div className='flex gap-4 mt-12'>
                <a className='border border-[#2a2a2a]
                py-2 sm:py-3 px-4 sm:px-5 rounded-full
                sm:text-lg text-sm font-semibold
                tracking-wider transition-all
                duration-300 hover:bg-[#1a1a1a]' href="#">
                    Documentation <i class='bx
                    bx-link-exernal'></i>

                </a>
                <a className='border border-[#2a2a2a]
                py-2 sm:py-3 px-8 sm:px-10 rounded-full
                sm:text-lg text-sm font-semibold
                tracking-wider transition-all
                duration-300 hover:bg-[#1a1a1a]
                bg-gray-300 text-black hover:text-white' href="#">
                    GetStarted <i class='bx bx-link-exernal'></i>

                </a>
            </div>


        </div>
        {/* 3d Robot */}
         <Spline className='absolute lg:top-0 top-[-20%]
         bottom-0 lg:left-[25%] sm:left-[-2%] h-full
         'scene="https://prod.spline.design/PJjxi4sg8IzuOKI3/scene.splinecode" />

    </main>
  )
}

export default Hero
