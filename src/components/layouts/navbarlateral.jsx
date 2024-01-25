import ItemsNavBar from "../navbar/itemsnavbar/itemsnavbar";
import {
  ClipboardCheck,
  ClipboardPenLine,
  FilePenLine,
  Group,
  Star,
  CircleUserRound,
  Wallet,
  SquarePen,
  Upload,
  CheckCircle2,
  PlusCircle,
  PlusSquare,
  Trash2,
  PanelLeftClose,
  FunctionSquare,
  ChevronLeft, 
  UtensilsCrossed
} from "lucide-react";




import React, { useEffect } from "react";


import userProfilePng from "../../assets/imgs/userprofile/user.png";

export const NavBarLateral = ({ className, togleMenu }) => {


  return (
    <div className={`${className} lateralNavBar relative w-72 bg-zinc-800 h-screen px-2 flex items-center flex-col text-white`}>

      {/* <div className="w-[80%] ml-auto mr-auto flex items-center justify-center h-20 mb-6">
        <img src={logoPng} alt="" className="w-[95%]" />
      </div> */}

      <div className="mt-8  rounded-lg w-[95%] py-4 gap-4 bg-zinc-900 flex flex-col items-center justify-center">
        <img src={userProfilePng} alt="" />
        <div className="flex flex-col items-center text-center">
          <strong>João Batista</strong>
          <p className="text-[12px]">joaobatista@gmail.com</p>
          
        </div>
      </div>

      <nav className="pt-8 space-y-3 flex flex-col">
      
      <ItemsNavBar onClick={()=>itemClick()} itemIcon={<UtensilsCrossed />} itemName={"Pedidos"} />
        <ItemsNavBar onClick={()=>itemClick()} itemIcon={<ClipboardCheck />} itemName={"Novo Item"} />
        <ItemsNavBar onClick={()=>itemClick()} itemIcon={<CheckCircle2 />} itemName={"Cadastrados"} />
        <ItemsNavBar onClick={()=>itemClick()}
          itemIcon={<ClipboardPenLine />}
          itemName={"Editar items"}
        />
        <ItemsNavBar onClick={()=>itemClick()} itemIcon={<Group />} itemName={"Categorias"} />
        <ItemsNavBar onClick={()=>itemClick()} itemIcon={<Wallet />} itemName={"Financeiro"} />
      </nav>
    </div>
  );
};


export const MenuToggle = () => {
  useEffect(() => {
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.addEventListener('click', clicouTeste);

    function clicouTeste() {
     const lateralNavBar = document.querySelector(".lateralNavBar")
    //  lateralNavBar.classList.toggle("right-[300px]")
     lateralNavBar.classList.toggle("hidden");

     const iconeName = ChevronLeft.displayName
     iconeName.textContent = "ChevronRight"
     
    }

    return () => {
      menuToggle.removeEventListener('click', clicouTeste);
    };

    
  }, []);

  return (
    <div className="menuToggle mt-auto mb-auto flex flex-col h-[40%] rounded-r-md">
      <ChevronLeft color={'#363636'} className="cursor-pointer" />
    </div>
  );
};
