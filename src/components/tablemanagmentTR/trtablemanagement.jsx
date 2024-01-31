

export const TrTableManagemente = () => {
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
    status: "Recebido",

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

 return(
  <tr className=" w-[100%] flex text-[14px] h-10 font-normal text-[#363636] py-2 ">
  <td className="text-[13px]  border border-r-slate-300 items-center grid place-content-center w-[16%]">
    {clienteOrderData.sku01.orderSku}
  </td>
  <td className="text-[13px]  border border-r-slate-300 flex-1 grid place-content-center">
    {clienteOrderData.sku01.clientName}
  </td>
  <td className="text-[13px]  border border-r-slate-300 flex-1 flex flex-col overflow-clip text-overflow- gap-2">
    {clienteOrderData.sku01.orderDetails.itemorder01.type},
    {clienteOrderData.sku01.orderDetails.itemorder02.type}
  </td>
  <td className="text-[13px]  border border-r-slate-300 flex-1 grid place-content-center">
    {clienteOrderData.sku01.orderTime}
  </td>
  <td className="text-[13px]  border border-r-slate-300 flex-1 grid place-content-center bg-[#FFE193] hover:bg-orange-200 p-2 rounded-xl text-orange-700 text-[12px] ">
    {clienteOrderData.sku01.status}
  </td>
  <td className="text-[13px]  border border-r-slate-300 flex-1 grid place-content-center">
    <button className="bg-green-700 py-1 px-3 rounded-xl text-white hover:bg-green-600">
      Revisar
    </button>
  </td>
</tr>
  );
}