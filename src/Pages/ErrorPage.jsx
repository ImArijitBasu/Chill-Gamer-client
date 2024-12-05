import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex justify-center flex-col items-center text-red-500 dark:text-slate-400 font-extrabold bg-slate-300 dark:bg-slate-900 h-full md:h-screen p-20 space-y-5 text-center" >
            <div className="flex justify-center items-center text-red-500 dark:text-slate-400 font-extrabold bg-slate-300 dark:bg-slate-900 text-8xl font-error ">
                <p className='inline'>4</p>
                <p className='inline'>0</p>
                <p className='inline'>4</p>
                
            </div>
            <div className=" uppercase dark:text-red-500 text-7xl">Not Found !</div>
            <div className=" capitalize text-4xl">Back to <Link to="/" className='text-blue-500 underline underline-offset-8 '> Homepage</Link></div>
            
        </div>
    );
};

export default ErrorPage;
