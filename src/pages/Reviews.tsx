"use client";
import ResponseCard from "../components/ResponseCard";
import { responsesData } from "../../store/response.data"; 
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Reviews = () => {
const [count, setCount] = useState(0);

const increaseCounte = () => {
    if( count+1 !== responsesData.length) {
        return setCount(count+1)
    }
    return  setCount(0)
}
    return (
        <div className="bg-white h-screen flex flex-col items-center justify-center">
            <div className="flex">
                <AnimatePresence>
                    <motion.div
                        key={count}
                        initial={{ x:'-80vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        exit={{ x: '80vw', opacity: 0 }}
                        transition={{ type: 'spring', duration: 2 }}
                        >
                            <ResponseCard info={responsesData[count]}/>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="m-10 flex justify-between">
                
                <button className="bg-yellow-300 rounded-full h-10 w-10 flex items-center justify-center hover:bg-yellow-500" onClick={increaseCounte}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Reviews;