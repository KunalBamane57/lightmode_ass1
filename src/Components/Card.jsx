import React from 'react';
import all_photo from '../Components/Assets/all_img';

const Card = ({ id }) => {
  const photo = all_photo.find(item => item.id === id);
  if (!photo) {
    return <p>Photo not found!</p>;
  }
  return (
    <div className="box-1 p-3 bg-white w-[255px] shadow-lg shadow-slate-300">
      <img className='h-[400px] w-[240px]' src={photo.image} alt={photo.name} />
      <p className='text-xl font-semibold p-1 mt-3' >{photo.name}</p>
      <div className="detail flex flex-row justify-between bg-slate-100 px-3 py-2 mt-3">
        <p className='text-sm' >Total Events <br /> <span className='font-semibold'>{photo.events} Events</span></p>
        <p className='text-sm pr-10'>Sport <br /> <span className='font-semibold'>{photo.sport}</span></p>
      </div>
    </div>
  );
}

export default Card;
