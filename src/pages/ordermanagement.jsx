import {TableManagement} from '../components/tableManagement/index.jsx';
import { ReportBox, SubReportBox } from "../components/reportbox/index.jsx";
import { UtensilsCrossed } from "lucide-react";
import { UserOrderDetails } from "../components/userOrderDetails/index.jsx";



import {
  PedidosRecebidos,
  PedidosProducao,
  Finalizados,
  Cancel,
  SubReportBoxIcontime,
  SubReportBoxIconDelivery,
} from "../components/reportbox/icons/iconesBoxReport.jsx";


export const Ordermanagement = () => {
  return (
    <div className=" flex flex-col w-[65%] mt-8">

      
      <section className="flex justify-aroundb gap-1 w-[96%] mb-6">
        <ReportBox
          iconBox={<PedidosRecebidos/>}
          iconBackground={"bg-[#FFE193]"}
          textTitleBox={"Recebidos"}
          textValueBox={"290"}
        />
        <ReportBox
          iconBox={<PedidosProducao />}
          iconBackground={"bg-[#EEFF86]"}
          textTitleBox={"Em Produção"}
          textValueBox={"290"}
        />
        <ReportBox
          iconBox={<Finalizados />}
          iconBackground={"bg-[#43DD99]"}
          textTitleBox={"Finalizados"}
          textValueBox={"290"}
        />
        <ReportBox
          iconBox={<Cancel />}
          iconBackground={"bg-[#FFE6E7]"}
          textTitleBox={"Cancelados"}
          textValueBox={"29"}
        />

        {/* <div className="flex w-[30%] bg-black gap-1 h-24">
          <SubReportBox
           
            iconBox={<SubReportBoxIconDelivery />}
            iconBackground={"bg-[#FFE6E7]"}
            textTitleBox={"Tempo Médio de Preparação"}
            textValueBox={"29"}
            background={"bg-[#09B644]"}
            fontColor={"white"}
          />
          <SubReportBox
            iconBox={<SubReportBoxIcontime />}
            iconBackground={"bg-[#FFE6E7]"}
            textTitleBox={"Tempo médio de Entrega"}
            textValueBox={"29"}
            fontColor={"white"}
            background={"bg-[#FB9700]"}
          />
        </div> */}
      </section>

      <section className=" flex p-2 bg-white rounded-lg w-[96%]">
      <TableManagement /> 
      </section>
    </div>
  );
};
