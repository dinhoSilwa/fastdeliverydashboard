import { ClipboardList, CheckSquare } from "lucide-react";
import HeaderSection from "../headerSection/index";
import {TrTableManagemente} from '../../components/tablemanagmentTR/trtablemanagement';

export const TableManagement = () => {

  return (
    <section className=" w-[100%] p-6 rounded-lg ">
      <HeaderSection
        sectionTitle={"Gestão de Pedidos"}
        sectionWays={"Recebidos"}
        iconsSectionName={<ClipboardList color={"orange"} />}
      />
      <table className=" flex flex-col items-center ">
        <thead className=" w-[100%] flex justify-between  text-[14px] h-14 font-normal text-[#363636] mb-4 shadow-xl">
          <th className="items-center grid place-content-center font-bold w-[16%]">
            Sku:
          </th>
          <th className="items-center grid place-content-center flex-1 font-bold">
            Cliente:
          </th>
          <th className="items-center grid place-content-center flex-1 font-bold">
            Pedido:
          </th>
          <th className="items-center grid place-content-center flex-1 font-bold">
            Tempo:
          </th>
          <th className="items-center grid place-content-center flex-1 font-bold">
            Status:
          </th>
          <th className="items-center grid place-content-center flex-1 font-bold">
            <CheckSquare />
          </th>
        </thead>
        <tbody className=" tableScrool w-[100%] table-auto border flex flex-col gap-2 h-[130px] overflow-y-auto">
          
<TrTableManagemente />
        </tbody>
      </table>
    </section>
  );
};
