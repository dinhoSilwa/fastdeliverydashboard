import { useState } from "react";
import { NavBarLateral } from "./components/layouts/navbarlateral";
import Forms from "./components/layouts/orderForms";
import OrderTable from "./components/layouts/orderTable";
import Navsuper from "./components/layouts/navbarsupe";
import { Ordermanagement } from "./pages/ordermanagement";
import { TableManagement } from "./components/tableManagement/index";
import {UserOrderDetails} from './components/userOrderDetails/index'
// import {OrderTable} from './components/layouts/orderTable';

import "./App.css";

function App() {
  return (
    <main className=" flex bg-zinc-200">
      <NavBarLateral className={"flex"} />

      <section className="flex flex-col w-full justify-start items-center border shadow-lg">
        <Navsuper />
        {/* <Forms /> */}

        <div className=" flex w-[96%]">
          <Ordermanagement />
          <UserOrderDetails />
        </div>

        {/* <div className='containerTable px-4 bg-white rounded-lg py-6 w-[95%] shadow-2xl '>
    <OrderTable />
    </div> */}
      </section>
    </main>
  );
}

export default App;

