import Image from "next/image";

type MenuItem = {
    name: string;
    image: string;
    description: string;
    price: number;
};

const CatalogCard = ({ info }: { info: MenuItem }) => {
    return (
        <div className="bg-white flex flex-col items-center  m-5 w-[290px] h-[400px] border-gray-200 border-[0.5px] rounded-r-md">
            <Image className="h-1/2"
            src={info.image}
            width={290}
            height={200}
            alt={info.name}
            />
            <div className="flex flex-col justify-center items-start p-3">
                <h1 className="font-bold text-base md:text-2xl">{info.name}</h1>
                <p className="mb-2 text-sm md:text-base">{info.description}</p>
                <p className="">{info.price} грн/шт</p>
            </div>
            <button className="text-base md:text-xl font-bold bg-yellow-300 w-40 h-10 rounded-2xl active:bg-yellow-400 mb-3">Замовити</button>
        </div>
    );
};

export default CatalogCard;