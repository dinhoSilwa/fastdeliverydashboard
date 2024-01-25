import { Image } from 'lucide-react';
import TdTable from './td.table';

export const OrderTable = () => {
  return (
    <>
    
    
    <table className="w-[100%]">
     
      <thead className="table-auto text-[13px] h-10 font-normal text-[#363636]">
        <tr>
          <th>Imagem:</th>
          <th>Id:</th>
          <th>Nome:</th>
          <th>Status:</th>
          <th>Categoria:</th>
          <th>Preparo:</th>
          <th>Data:</th>
          <th>Classificação:</th>
        </tr>
      </thead>

      <tbody className="table-container table-auto">
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
