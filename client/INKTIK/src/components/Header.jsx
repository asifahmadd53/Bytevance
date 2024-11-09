import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../contexts/MenuContext";
import { navLinks } from "../constants";
import ProfileIcon from "./ProfileIcon";
import axios from "axios";
import { userContext } from "../contexts/UserContext";
import { logo3, } from "../assets";


const Header = () => {
    const [search, setSearch] = useState(false);
    const searchRef = useRef(null);

    const toggleSearch = () => setSearch((prev) => !prev);

    const { clickOnMenu } = useContext(MenuContext);

    // const [isLogin, setIsLogin] = useState(false);
    const {userInfo, setUserInfo} =  useContext(userContext)

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/user/profile', {
                    withCredentials: true,
                });
                if(response.data){
                    setUserInfo(response.data);
                }
                else{
                    setUserInfo(null);
                }
            } catch (error) {
                
                setUserInfo(null); 
            }
        };
        fetchUserProfile();
    }, [setUserInfo, userInfo]);
    
    return (
        <>
            <header className="relative w-full ">
                <div ref={searchRef} className={`transition-all duration-500 w-full bg-white h-20 absolute border  p-3 ${search ? 'translate-y-0' : '-translate-y-full'}`}>
                    <input type='text' className='w-[80%] h-full text-xl md:text-3xl px-5' placeholder="Search"/>
                </div>
                <nav className="flex items-center justify-between px-5 pt-7 pb-4 md:px-14 lg:px-16 w-full z-50 ">
                <div className="logo inline-block">
  <Link to={'/'}>
  <img
  
    className="w-32 md:w-36 xl:w-36 mix-blend-color-burn object-contain bg-none "
    src={logo3}
    alt=""
  />
  </Link>
</div>

                    <div>
                        <ul className="flex gap-5 items-center">
                            {navLinks.map((item, index) => (
                                <li className="hidden md:block text-xl" key={index}>
                                    <Link to={`/${item.id}`} className="">{item.name}</Link>
                                </li>
                            ))}
                            <div className="flex items-center gap-1">
                            {userInfo ? (
        <ProfileIcon />
    ) : (
        <button className="border transition-colors duration-300 ease-in-out px-6 py-2 hidden md:block rounded-[3rem] bg-black text-white text-xl hover:bg-[#314bff]">
            <Link to='/signup'>Join</Link>
        </button>
    )}
                                <div onClick={toggleSearch} ref={searchRef} className="md:border md:flex md:items-center md:bg-[#efeef0] cursor-pointer rounded-[3rem]">
                                    
                                </div>
                                <div onClick={clickOnMenu} className="w-10 md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h8m-8-5h14m-8-5h8"/>
                                    </svg>
                                </div>
                               
                            </div>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
