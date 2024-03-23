import React from 'react';
import Ticketcard from './Ticketcard';

const Container2 = () => {
    return (
        <div className='pt-10 md:pt-20 pb-20 md:pb-40 px-5 md:px-10 lg:px-20 xl:px-32'>
            <div className="container-1 pt-2 flex flex-wrap justify-center bg-white rounded-md shadow-lg md:h-40 lg:h-60 xl:h-80">
                <span className='text-4xl md:text-6xl font-bold mt-5 md:mt-10'>Collection Spotlight</span>
                <div className="innert-container-1 text-center text-lg md:text-xl mt-3 md:mt-5">
                    Discover extraordinary moments with our Spotlight Collection metatickets-exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!
                </div>
            </div>
            <div className="container-2 md:h-[calc(100vh - 230px)] bg-white flex flex-wrap justify-center gap-10 md:gap-20 pb-10 md:pb-28">
                <div className="box-1 flex items-center">
                    <div className="blue-arrow border-2 border-sky-500 p-2 md:p-3 cursor-pointer">
                        <span className='text-3xl md:text-4xl text-sky-500'>{"<"}</span>
                    </div>
                </div>
                <div className="box-2 flex flex-wrap justify-center gap-5 md:gap-10">
                    <Ticketcard id={4} />
                    <Ticketcard id={5} />
                    <Ticketcard id={4} />
                </div>
                <div className="box-1 flex items-center">
                    <div className="blue-arrow border-2 border-sky-500 p-2 md:p-3 cursor-pointer">
                        <span className='text-3xl md:text-4xl text-sky-500'>{">"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container2;
