import { NavBarLateral } from "../../components/navbarLateral/navbarlateral";
import Navsuper from "../../components/layouts/navbarsupe";
import { OrderTable } from "../../components/tableFormsRegister/tableformsregister";
import HeaderSection from "../../components/headerSection/index";

export const Registeredorders = () => {
  return (
    <main className=" flex bg-zinc-200">
      <NavBarLateral className={"flex"} />

      <section className="flex flex-col w-full justify-start items-center border shadow-lg">
        <Navsuper />

        <div className=" flex w-[96%] flex-col items-center justify-center mt-8 gap-4">
      
         <OrderTable />
         
        </div>
      </section>
    </main>
  );
};
