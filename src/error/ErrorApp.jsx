import React from 'react'
import apperror from '../assets/App-Error.png'
import { Navigate, useNavigate } from 'react-router'
import { IoMdArrowRoundBack } from 'react-icons/io'

const ErrorApp = () => {

    const navigator = useNavigate()

  return (
    <div>
        {/* <div className='flex items-center justify-center mt-10'>
            <img src={apperror} alt="" />
        </div>
        <div>
            <h1>Opp</h1>
        </div> */}


        <div className="flex-1 flex flex-col justify-center items-center p-10">
                <img src={apperror} alt="" />
                <h2 className="text-4xl mt-10">OPPS!! APP NOT FOUND</h2>
                <p className="text-sm text-gray-400 mt-2">
                  The page you are looking for is not available.
                </p>
        
                <button
                  onClick={() => navigator(-1)}
                  className="flex items-center gap-2 bg-gradent text-white px-3 py-2 rounded-sm shadow-2xl mt-4 cursor-pointer"
                >
                  {" "}
                  <IoMdArrowRoundBack />
                  Go Back!
                </button>
              </div>
    </div>
  )
}

export default ErrorApp