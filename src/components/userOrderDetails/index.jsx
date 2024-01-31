import { MapPin, TicketIcon , CreditCard , ShoppingBasket} from "lucide-react";

export const UserOrderDetails = () => {
  return (
    <section className="border  flex-1 rounded-lg flex flex-col bg-white gap-4 p-6 mt-8  h-[60%]">
      <div className="flex flex-col gap-3 justify-center items-center text-center mt-auto mb-auto">
        <div className="w-[200px] h-[200px] bg-slate-200 rounded-xl flex flex-col items-center justify-center">
        <ShoppingBasket size={"130px"} strokeWidth={0.7} color={"gray"} />

        </div>
        <h1 className="text-[22px] w-[70%] font-bold text-zinc-500">Clique em Revisar para para ver os detalhes do Pedido </h1>

      </div>
     <div className="hidden">
     <header className=" flex mb-6">
        <div className="flex flex-col justify-center items-start gap-1 w-[50%]">

          <strong className="text-xl">João Batista</strong>
          <span className="flex gap-2 text-[12px] items-center">
          <TicketIcon size={"22px"} /> <h2>Pedido Pendente</h2>
          </span>
          <span className="flex gap-2 text-[12px] items-center">
          <CreditCard size={"22px"} /> <h2>Cartão de Credito</h2>
          </span>

        </div>

        <div className="flex items-end gap-1 flex-col ml-auto text-[14px] ">
          
            <MapPin />
            <p>{"Paulo aguia, 950"}</p>
            <p>{"Vicente Pizon"}</p>
            
            
         
        </div>
      </header>

      <section className="flex flex-col gap-4  mt-8">
        <strong className="mb-3 text-green-900">Detalhes do Pedido:</strong>

        <table className="flex gap-2">
          <thead className="flex flex-col text-left text-[12px]">
            <th className="w-[100%]">1px Pizza de Calabresa - M</th>
            <th className="w-[100%]">1px coca-cola - Lata</th>
          </thead>

          <tbody className="flex-1 flex items-center justify-end text-[12px] mb-8">
            <tr className="flex flex-col">
              <td>R$ 49,99</td>
              <td>R$ 49,99</td>
            </tr>
          </tbody>
        </table>
        <section className="bg-zinc-200 p-4 rounded-md w-[90%] flex  ml-auto mr-auto text-[14px] mb-4">
          <p>Tirar a Cebola da Pizza </p>
        </section>
        <section className="flex justify-center">
          <button className="w-[100%] bg-green-600 text-white font-bold p-3 rounded-xl text-lg">
            Aprovar Pedido:
          </button>
        </section>
      </section>
     </div>
    </section>
  );
};
