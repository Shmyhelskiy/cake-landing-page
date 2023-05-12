import Image from "next/image";

type responsesDataType = {
    name: string,
    city: string,
    image: string | null,
    title: string,
    text: string,
}

const ResponseCard = ({ info }: { info: responsesDataType } ) => {
    return (
        <div className="flex bg-sky-950 p-5 text-white rounded-lg">
            <div className="w-full md:w-96 mr-10">
                <Image 
                src='/quotes.png'
                width={50}
                height={10}
                alt="quotes"
                />
                <h1 className="font-bold mb-5 text-base md:text-xl">"{info.title}"</h1>
                <p className="text-sm">{info.text}</p>
            </div>
            <div className="flex flex-col items-center">
                {info.image ? 
                <Image 
                src={info.image}
                width={50}
                height={10}
                alt={info.name}
                />
                :
                <Image 
                src='/qustion.png'
                width={200}
                height={200}
                alt={info.name}
                />}

                <h1 className="font-bold text-base ">{info.name}</h1>
                <p className="text-sm opacity-30">{info.city}</p>
            </div>
        </div>
    );
};

export default ResponseCard;