import React from 'react';
import Card from './Card';
import Adv from './Adv';

const Page = () => {
  return (
    <div>
        <div className="container-1 py-[20px] px-[100px]">
            <div className="element-1 py-6 text-3xl font-bold underline underline-offset-8 decoration-violet-500">
                Sports
            </div>
            <div className="element-2 flex flex-wrap justify-between">
                <Card id={1}/>
                <Card id={2}/>
                <Card id={3}/>
                <Card id={2}/>
                <Adv/>
            </div>
            <div className="element-3 flex justify-center mt-14">
                <div className="btn h-18 w-[120px] rounded-sm bg-blue-500 text-slate-50 p-3 flex justify-center">See More</div>
            </div>
        </div>
    </div>
  );
};

export default Page;
