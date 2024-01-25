import { MapPin, TicketIcon , CreditCard} from "lucide-react";

export const UserOrderDetails = () => {
  return (
    <section className="border  flex-1 rounded-lg flex flex-col bg-white gap-4 p-6 mt-8">
      <header className=" flex mb-6">
        <div className="flex flex-col justify-center items-start gap-1 w-[50%] ">

          <strong className="text-xl">João Batista</strong>
          <span className="flex gap-2">
          <TicketIcon /> <h2>Pedido Pendente</h2>
          </span>
          <span className="flex gap-2">
          <CreditCard /> <h2>Cartão de Credito</h2>
          </span>

        </div>

        <div className="flex items-end gap-1 flex-col ml-auto">
          
            <MapPin />
            <p>{"Paulo aguia, 950"}</p>
            <p>{"Vicente Pizon"}</p>
            
            
         
        </div>
      </header>

   

      <section className="flex flex-col gap-4">
        <strong>Detalhes do Pedido:</strong>

        <table className="flex gap-2">
          <thead className="flex flex-col text-left">
            <th className="w-[100%]">1px Pizza de Calabresa - M</th>
            <th className="w-[100%]">1px coca-cola - Lata</th>
          </thead>

          <tbody className="flex-1 flex items-center justify-end">
            <tr className="flex flex-col">
              <td>R$ 49,99</td>
              <td>R$ 49,99</td>
            </tr>
          </tbody>
        </table>
        <section className="bg-zinc-200 p-4 rounded-md w-[90%] flex  ml-auto mr-auto">
          <p>Tirar a Cebola da Pizza </p>
        </section>
        <section className="flex justify-center">
          <button className="w-[90%] bg-green-600 text-white font-bold p-3 rounded-xl text-lg">
            Aprovar Pedido:
          </button>
        </section>
      </section>
    </section>
  );
};
