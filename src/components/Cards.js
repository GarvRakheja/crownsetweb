import {UnderlineButton} from "@/components/CustomButtons";
import { ImArrowUp as ArrowUpIcon } from "react-icons/im";

export const CardTwo = ({ heading, icon, description }) => {
    return (
        <>
            <div className='w-[100%] py-4 pl-7 pr-16 pb-[2.5rem] pt-10 sm:pt-5 mt-7 rounded-[2.5rem]  bg-white'>

                <div className='xl:h-[18rem]'>

                <span>{icon}</span>

                <h1 className='text-[1.3rem] font-bold mt-5 sm:mt-3'>{heading}</h1>

                <p className='mt-5 text-bodyTextColor'>
                    {description}
                </p>
                </div>

               <div>

                <UnderlineButton buttonName={'learn more'} />
               </div>


            </div>
        </>
    )
}

export const RoundedCircleCard = ({ value, descripiton }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 mt-6'>
            <div className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] border rounded-[50%] flex justify-center items-center'>
                <div className='w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] border border-primary-color rounded-[50%] flex flex-col justify-center items-center'>
                    <span className='text-[1.5rem] font-[600]'>{value}%</span>
                    <span><ArrowUpIcon className='text-primary-color' /></span>
                </div>
            </div>
            <div className='font-bold text-center'>{descripiton}</div>
        </div>
    )
}

export const CardOne = ({ heading, icon, description }) => {
    return (
        <>
            <div className='border py-4 pb-10 px-7 pt-12 rounded-[3rem] mt-7'>

                <div className='flex justify-between items-center lg:gap-[1rem]'>
                    <h1 className='text-[1.3rem] lg:text-[1.9rem] font-bold'>{heading}</h1>
                    <span>{icon}</span>
                </div>

                <p className='mt-5 text-bodyTextColor'>
                    {description}
                </p>

            </div>
        </>
    )
}
