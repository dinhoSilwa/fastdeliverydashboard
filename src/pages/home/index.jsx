import { Ordermanagement } from "../ordermanagement"
import { UserOrderDetails } from "../../components/userOrderDetails/index";
import {NavBarLateral} from '../../components/navbarLateral/navbarlateral';
import Navsuper from '../../components/layouts/navbarsupe'

export const Dashboarddelivery = () =>{
return(
<main className=" flex bg-zinc-200">
<NavBarLateral className={"flex"} />

<section className="flex flex-col w-full justify-start items-center border shadow-lg">
  <Navsuper />

<div className=" flex w-[96%] ">
 <Ordermanagement />
 <UserOrderDetails />
</div>
  
</section>
</main>
);
}


