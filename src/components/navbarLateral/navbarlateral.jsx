import { Link } from "react-router-dom"; // Importe Link para navegação
import ItemsNavBar from "../navbar/itemsnavbar/itemsnavbar";
import React, { useState } from "react";
import userProfilePng from "../../assets/imgs/userprofile/user.png";
import { 
  ClipboardCheck, 
  ClipboardPenLine, 
  Group, 
  Wallet, 
  CheckCircle2, 
  ChevronLeft, 
  UtensilsCrossed 
} from "lucide-react";

export const NavBarLateral = ({ className, togleMenu }) => {
  const [menuHidden, setMenuHidden] = useState(false);

  const toggleMenu = () => {
    setMenuHidden(!menuHidden);
  };

  return (
    <div className={`${className} lateralNavBar relative w-72 bg-zinc-800 h-screen px-2 flex items-center flex-col text-white`}>
      <div className="mt-8 rounded-lg w-[95%] py-4 gap-4 bg-zinc-900 flex flex-col items-center justify-center">
        <img src={userProfilePng} alt="" />
        <div className="flex flex-col items-center text-center">
          <strong>João Batista</strong>
          <p className="text-[12px]">joaobatista@gmail.com</p>
        </div>
      </div>

      <nav className={`pt-8 space-y-3 flex flex-col ${menuHidden ? 'hidden' : ''}`}>
        <Link to={"/dashboarddelivery"}>
          <ItemsNavBar
            itemIcon={<UtensilsCrossed />}
            itemName={"Pedidos"}
          />
        </Link>
        <Link to={"/dashboarddelivery/novos-items"}>
          <ItemsNavBar
            itemIcon={<ClipboardCheck />}
            itemName={"Novo Item"}
          />
        </Link>
        <Link to={"/dashboarddelivery/items-cadastrados"}>
          <ItemsNavBar
            itemIcon={<CheckCircle2 />}
            itemName={"Cadastrados"}
          />
        </Link>
        <Link to={"/dashboarddelivery/editar-items"}>
          <ItemsNavBar
            itemIcon={<ClipboardPenLine />}
            itemName={"Editar items"}
          />
        </Link>
        <Link to={"/dashboarddelivery/categorias"}>
          <ItemsNavBar
            itemIcon={<Group />}
            itemName={"Categorias"}
          />
        </Link>
        <Link to={"/dashboarddelivery/financeiro"}>
          <ItemsNavBar
            itemIcon={<Wallet />}
            itemName={"Financeiro"}
          />
        </Link>
      </nav>
    </div>
  );
};

export const MenuToggle = () => {
  return (
    <div className="menuToggle mt-auto mb-auto flex flex-col h-[40%] rounded-r-md" onClick={clicouTeste}>
      <ChevronLeft color={"#363636"} className="cursor-pointer" />
    </div>
  );
};
