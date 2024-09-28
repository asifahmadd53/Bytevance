import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../contexts/MenuContext";
import { navLinks } from "../constants";

const Header = () => {
    const [search, setSearch] = useState(false);
    const searchRef = useRef(null);

    const toggleSearch = () => setSearch((prev) => !prev);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (searchRef.current && !searchRef.current.contains(event.target)) {
    //             setSearch(false);
    //         }
    //     };
    //     document.addEventListener("click", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("click", handleClickOutside);
    //     };
    // }, []);

    const {clickOnMenu} = useContext(MenuContext)

    return (
        <>
            <header className="relative w-full">
                <div ref={searchRef} className={`transition-all duration-500 w-full bg-white h-20 absolute border border-black ${search ? 'translate-y-0 ' : '-translate-y-full'}`}>
                    {/* <form action=""> */}
                    <input type='text' className='w-[80%] h-full text-xl  md:text-3xl px-5' placeholder="Search"/>
                    {/* </form> */}

                </div>
                <nav className="flex items-center justify-between p-4 w-full z-50">
                    <div className="logo text-2xl font-bold">InkTiq</div>
                    <div>
                        <ul className="flex gap-5 items-center">
                            {navLinks.map((item, index) => (
                                <li className="hidden md:block text-xl" key={index}>
                                    <a to={`/${item.id}`} className="">{item.name}</a>
                                </li>
                            ))}
                            <div className="flex items-center gap-1">

                            <div onClick={toggleSearch} ref={searchRef} className="md:border md:flex md:items-center md:bg-[#efeef0] cursor-pointer rounded-[3rem] ">
    <div className="flex md:items-center py-1 md:w-28 md:justify-between px-[.5rem]"> 
        <svg className="w-7 h-7 md:w-5 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="black" d="M456.69 421.39L362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"/>
        </svg>
        <span className="hidden md:block text-xl">Search</span>
    </div>
</div>


                            <div onClick={clickOnMenu} className="w-10 md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h8m-8-5h14m-8-5h8"/></svg>
                            </div>
                            <button className="border transition-colors duration-300 ease-in-out px-6 py-2 hidden md:block rounded-[3rem] bg-black text-white text-xl hover:bg-[#314bff]">
                                
                            <Link to='/signup'>Join</Link>

                            </button>
                            </div>
                        </ul>
                    </div>
                    
                </nav>
               

            
            </header>
        </>
    );
}

export default Header;
