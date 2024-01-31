import { Image } from 'lucide-react';
import TdTable from '../tableItems/orderTableItems';





export const OrderTable = () => {


  return (
    <>
    
    
    <table className=" w-[90%] bg-white flex flex-col p-6 rounded-xl">
     
      <thead className=" w-[100%] h-20 flex items-center justify-center ">
        <tr className='h-16 flex items-center justify-around w-[100%]'>
          <th className='flex justify-center flex-1 items-center'>Imagem:</th>
          <th className='flex justify-center flex-1 items-center'>Id:</th>
          <th className='flex justify-center flex-1 items-center'>Nome:</th>
          <th className='flex justify-center flex-1 items-center'>Status:</th>
          <th className='flex justify-center flex-1 items-center'>Categoria:</th>
          <th className='flex justify-center flex-1 items-center'>Preparo:</th>
          <th className='flex justify-center flex-1 items-center'>Data:</th>
          <th className='flex justify-center flex-1 items-center'>Classificação:</th>
        </tr>
      </thead>

      <tbody className=" w-[100%] h-[400px] overflow-y-auto">
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
          <TdTable />
     
     
     
      </tbody>
    </table>
    </>
  );
}

export default OrderTable;
