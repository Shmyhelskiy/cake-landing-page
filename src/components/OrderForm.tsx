"use client";
import { SetStateAction, useState } from "react";

const OrderForm = () => {
    const [value, setValue] = useState('');

    const takeNumber = (event: { target: { value: SetStateAction<string>; } }) => {
        setValue(event.target.value)
    }
    return (
        <form className="bg-white w-80 sm:w-1/2 flex flex-col justify-center items-center rounded-xl pt-2">
            <h1 className="text-2xl font-bold mb-3">Що б зробити замовлення, вкажіть ваш телефон</h1>
            <p>Ми зателефонуємо вам протягом 15 хвилин, що б уточнити ваші побажання</p>
            <div className="flex flex-col md:flex-row m-5">
                <input type="tel" placeholder="Номер телефона" value={value} onChange={takeNumber} 
                className="text-sm md:text-lg mr-5 outline-0 focus:border-b focus:border-b-orange-300 dark:bg-sky-800 rounded-md"
                />
                <button className="w-full bg-yellow-300 hover:bg-yellow-500 rounded-2xl" >Зробити замовлення</button>
            </div>
            
        </form>
    );
};

export default OrderForm;