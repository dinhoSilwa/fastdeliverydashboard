import { Search ,MessageCircleMore, Bell, Settings,PanelLeftClose, ChevronLeft } from "lucide-react";
import {Logo, LateralLogo , LateralLogoLarge,} from '../../assets/imgs/logo/logo';
import userProfilePng from "../../assets/imgs/userprofile/user.png";
import {MenuToggle} from './navbarlateral';


const Navsuper = () => {
 return(


  <nav className="bg-white h-20 w-full flex shadow-sm">


<MenuToggle />

   <div className="w-[25%] flex items-center justify-center">
<LateralLogoLarge />
   </div>

   <div className="flex-1 flex items-center justify-center">
       <nav className="inline-flex items-center w-[90%]">
        <label htmlFor="searchbar" className=" relative left-10"><Search color={"#404040"}/> </label>
        <input 
        type="text" 
        id="searchbar" 
        placeholder="Procurar Items Cadastrados"
        className="w-full h-10 rounded-3xl border-2 border-zinc-300 outline-orange-400 pl-12 placeholder:font-semibold font-medium"

        />
        </nav> 
   </div>

   <nav className="flex-1 flex items-center justify-center">
      <ul className="flex justify-between  w-[75%] items-center gap-2">

      <li className="bg-zinc-100 p-2 rounded-full cursor-pointer hover:bg-zinc-300 active:scale-110"><MessageCircleMore /></li>
      <li className="bg-zinc-100 p-2 rounded-full cursor-pointer hover:bg-zinc-300 active:scale-110"><Bell /></li>
      <li className="bg-zinc-100 p-2 rounded-full cursor-pointer hover:bg-zinc-300 active:scale-110"><Settings /></li>
      <figure className="flex gap-2">
        <img src={userProfilePng} alt="" />
        <span className="flex flex-col items-center justify-center">
         <p className="font-semibold">{"João Batista"}</p>
         <p className="text-[12px] text-green-500 font-semibold">{"Administrador"}</p>
        </span>
      </figure>
      </ul>
   </nav>

  </nav>
 );
}

export default Navsuper;