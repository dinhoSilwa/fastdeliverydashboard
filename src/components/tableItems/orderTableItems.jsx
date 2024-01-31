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
     <tr className="w-[100%] flex justify-around">
     <td className="flex justify-center flex-1 items-center ">
       <Image />
     </td>

     <td className="flex justify-center flex-1 items-center border-zinc-300 border-r text-center p-2">
       {orderItems.id}
     </td>

     <td className="flex justify-center flex-1 items-center border-zinc-300 border-r text-center p-2">
       {orderItems.nome}
     </td>

     <td className="flex justify-center flex-1 items-center border-zinc-300 border-r text-center p-2">
       {orderItems.status}
     </td>

     <td className="flex justify-center flex-1 items-center border-zinc-300 border-r text-center p-2">
       {orderItems.categoria}
     </td>

     <td className="flex justify-center flex-1 items-center border-zinc-300 border-r text-center p-2">
       {orderItems.tempodepreparo}
     </td>

     <td className="flex justify-center flex-1 items-center border-zinc-300 border-r text-center p-2">
       {orderItems.data}
     </td>

     <td className="flex justify-center flex-1 items-center border-zinc-300 border-r text-center p-2">
       {orderItems.classificacao}
     </td>

     </tr>
   </>
 );
};
export default TdTable;