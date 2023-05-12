import React from 'react';
import {menu} from "../../store/catalog.data"
import CatalogCard from '../components/CatalogCard';

const Catalog = () => {
    return (
        <div className='h-full' id='catalog'>
            <h1 className='text-base md:text-3xl mt-5 text-center'>Для будь яких свят та дорогих вам людей</h1>
            <div className='flex flex-col items-center md:flex-row md:flex-wrap justify-center'>
                {menu.map((item) => {
                    return <CatalogCard info={item}/>
                })}
            </div>
        </div>
    );
};

export default Catalog;