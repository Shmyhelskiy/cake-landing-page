

const Content = () => {
    return (
        <div className="flex flex-col justify-center items-center w-1/2 h-full text-white">
            <h1 className="text-xl md:text-3xl m-3"> Тістечка та капкейки  від 79₴ з доставкою по Києву </h1>
            <p className="text-sm md:text-xl m-3">Приготує за 2 години у день замовлення </p>
            <p className="text-sm md:text-xl m-3">Доставка на автоу  холодильнику</p>
            <a className="bg-yellow-300 w-28 md:w-48 h-20 md:h-14 rounded-md text-black text-sm flex justify-center items-center hover:cursor-pointer" href="#catalog">Перейти до каталога</a>
        </div>
    );
};

export default Content;