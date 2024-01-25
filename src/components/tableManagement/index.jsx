import { ClipboardList, CheckSquare } from "lucide-react";
import HeaderSection from "../headerSection/index";

export const TableManagement = () => {
  const clienteOrderData = {
    sku01: {
      orderSku: "#0908",
      clientName: "João Batista",
      phoneNumber: "123-456-7890",
      email: "joao.batista@example.com",
      orderTime: "12:00",

      clienteOrderAddress: {
        rua: "Paulo Aguiar",
        num: "950",
        neighborhood: "Praia do Futuro",
        city: "Fortaleza",
      },

      orderDetails: {
        itemorder01: {
          orderQuantity: 2,
          type: "Pizza",
          orderTypeName: "Calabresa Acebolada",
          orderPrice: 69.99,
          orderSize: "M",
          orderDeliveryPay: "Grátis",
          extras: ["Sem cebola"],
        },
        itemorder02: {
          orderQuantity: 1,
          type: "Bebidas",
          orderTypeName: "Coca-cola",
          orderPrice: 4.99,
          orderSize: "-",
          orderDeliveryPay: "Grátis",
        },
      },

      orderDetailsComment: { comment: "Tirar Toda Cebola da Calabresa" },

      orderStatus: "Aberto",
      status: "Pedido Recebido",

      deliveryDetails: {
        deliveryMethod: "Entrega Padrão",
        deliveryTime: "30 minutos",
        deliveryFee: 5.0,
      },

      paymentDetails: {
        paymentMethod: "Cartão de Crédito",
        cardNumber: "**** **** **** 1234",
        totalAmount: 74.98,
      },
    },
  };

  return (
    <section className=" w-[100%] p-6 rounded-lg ">
      <HeaderSection
        sectionTitle={"Gestão de Pedidos"}
        sectionWays={"Recebidos"}
        iconsSectionName={<ClipboardList color={"orange"} />}
      />
      <table className=" flex flex-col items-center">
        <thead className=" w-[100%] flex justify-between  text-[14px] h-10 font-normal text-[#363636]">
          <th className="items-center grid place-content-center font-bold w-[16%]">
            Sku:
          </th>
          <th className="items-center grid place-content-center flex-1 font-bold">
            Nome do Cliente:
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
        <tbody className=" tableScrool w-[100%] table-auto border flex flex-col gap-2 h-[400px]">
          <tr className=" w-[100%] flex justify-between  text-[14px] h-10 font-normal text-[#363636] py-2">
            <td className="items-center grid place-content-center w-[16%]">
              {clienteOrderData.sku01.orderSku}
            </td>
            <td className="flex-1 grid place-content-center">
              {clienteOrderData.sku01.clientName}
            </td>
            <td className="flex-1 flex flex-col overflow-clip text-overflow- gap-2">
              {clienteOrderData.sku01.orderDetails.itemorder01.type},
              {clienteOrderData.sku01.orderDetails.itemorder02.type}
            </td>
            <td className="flex-1 grid place-content-center">
              {clienteOrderData.sku01.orderTime}
            </td>
            <td className="flex-1 grid place-content-center bg-[#FFE193] p-2 rounded-xl text-orange-500">
              {clienteOrderData.sku01.status}
            </td>
            <td className="flex-1 grid place-content-center">
              <button className="bg-green-700 py-1 px-3 rounded-xl text-white hover:bg-green-600">
                Revisar
              </button>
            </td>
          </tr>


          
        </tbody>
      </table>
    </section>
  );
};
