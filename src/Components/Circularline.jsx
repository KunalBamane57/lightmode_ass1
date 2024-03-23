import React from 'react'

const Circularline = () => {
    return (
        <div className='container-1 flex items-center'>
          <div className="circle rounded-r-xl h-[20px] w-[12px] mr-2 bg-slate-200"></div>
          <div className="line">
            - - - - - - - - - - - - - - - - - - - - 
          </div>
          <div className="circle rounded-s-xl h-[20px] w-[12px] ml-3 bg-slate-200"></div>
        </div>
    )
}

export default Circularline
