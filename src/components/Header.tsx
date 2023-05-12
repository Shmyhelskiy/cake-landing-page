
const Header = () => {
    return (
        <div className="flex items-center mt-10 text-xs md:text-sm text-white w-full h-5">
            <div className="flex justify-center w-1/3 text-sm md:text-base font-bold">
                <p>Солодка пригода</p>
            </div>
            <div className="flex items-center justify-center w-1/3">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </div>
                <div className=" text-slate-100/70">
                    <p>м.Київ</p>
                    <p>вул Героїв Упа 75</p>
                </div>
            </div>

            <div className="flex items-center justify-center w-1/3">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </div>
                <div>
                    <a href="tel:+3805555555" >+38 055 55 555</a>
                    <p >Працюємо кожен день з 9:00 до 18:00</p>
                </div>
            </div>
        </div>
    );
};

export default Header;