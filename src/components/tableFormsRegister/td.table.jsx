 import {Image} from 'lucide-react';
 
 export const TdTable = () => {


 const orderItems = {
  id: "#9879",
  nome: "Calabresa Picante",
  status : "Ativo",
  categoria : "Pizzas",
  tempodepreparo : "15 min",
  data : "12/01/2024",
  classificacao : "*****"

 }


  return (
    <>
      <tr>
      <td className=" border-zinc-300 border-r grid place-content-center p-2 justify-center  items-center">
        <Image />
      </td>

      <td className="table-cell border-zinc-300 border-r text-center p-2">
        {orderItems.id}
      </td>

      <td className="table-cell border-zinc-300 border-r text-center p-2">
        {orderItems.nome}
      </td>

      <td className="table-cell border-zinc-300 border-r text-center p-2">
        {orderItems.status}
      </td>

      <td className="table-cell border-zinc-300 border-r text-center p-2">
        {orderItems.categoria}
      </td>

      <td className="table-cell border-zinc-300 border-r text-center p-2">
        {orderItems.tempodepreparo}
      </td>

      <td className="table-cell border-zinc-300 border-r text-center p-2">
        {orderItems.data}
      </td>

      <td className="table-cell border-zinc-300 border-r text-center p-2">
        {orderItems.classificacao}
      </td>
      </tr>
    </>
  );
};
export default TdTable;