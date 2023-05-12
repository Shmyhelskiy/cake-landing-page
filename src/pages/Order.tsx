import Image from 'next/image';
import React from 'react';

const Order = () => {
    return (
        <div className='h-screen bg-sky-950 flex flex-col sm:flex-row items-center justify-evenly'>
            <div>
                <Image className='w-[320px] sm:w-[500px] h-[320px] sm:h-full rotate-6'
                    src="/imageCake.png"
                    width={250}
                    height={250}
                    alt='cake'
                />
            </div>
            <div className='flex flex-col items-center sm:items-start w-full sm:w-96 text-white'>
                <p className='bg-slate-300 w-64 p-2 text-center rounded-sm mb-5 text-slate-600'>Не знайшли що вам потрібно?</p>
                <h1 className=' text-2xl sm:text-3xl'>Приготуємо замовлення будь-якої складності по фото або ескізу</h1>
                <p className='mt-5'>Завантажте фотограграфію або ескіз і ми розрахуємо вартість за 30 хвилин</p>
                <button className="bg-yellow-300 w-28 sm:w-48 h-20 sm:h-14 rounded-sm text-black text-sm flex justify-center items-center hover:cursor-pointer m-5 active:bg-yellow-500">Завантажити фотографію</button>
            </div>
        </div>
    );
};

export default Order; 