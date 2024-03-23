import React from 'react';
import Circularline from './Circularline';
import all_photo from '../Components/Assets/all_img';

const Ticketcard = ({ id }) => {
    const selectedItem = all_photo.find(item => item.id === id);

    if (!selectedItem) {
        return <div>No item found for the given id</div>;
    }

    const { name, image ,ticket } = selectedItem;

    return (
        <div className="outercard h-[675px] w-[255px] shadow shadow-slate-400 flex flex-col justify-center items-center">
            <div className='card bg-white w-[255.5px]'>
                <div className="box-1 p-3 w-[250px]">
                    <img className='h-[400px] w-[245px]' src={image} alt={name} />
                </div>
                <Circularline />
                <div className="box-2 flex flex-col items-center text-center">
                    <span className='text-xl font-bold mt-2'>{name}</span> <br />
                       OCT 15 | SUN | 4:30 PM
                       Las Vegas Ballpark,Las Vegas, <br />
                       Nevada
                    <div className="btn p-4 bg-black text-white flex flex-col justify-center h-[40px] w-[230px] mt-2 mb-2">
                    {ticket}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticketcard;
