//importar os modulos de formúlários
import { useForm } from 'react-hook-form'
import { z } from 'zod';



import HeaderSection from '../headerSection/index';
import {
  UploadImg,
  FormRegisterInput,
  FormRegisterInputSecond,
  ButtonImgUpload,
  LabelMinutes,
} from "../forms/inputsforms";

import { PlusSquare, Trash2, ConciergeBell, ChevronRight , MoreVertical } from "lucide-react";

// const createOrderSchema = z.object({
//   orderImg : z.string().nonempty({message : "O pedido Precisa de uma Imagem"}),
//   orderName : z.string().nonempty({message : "O nome do Produto é Obtigatório"}),
//   orderDescription : z.string().nonempty({message: "Adcione uma DEscrição ao Produto"}).min(8, {message:"Adiciona mais Detalhes a Descrição"}),
//   orderAddictional : z.string().nonempty({message : "Escolha o que pode ser adicionado"}),
//   orderStatus: z.string(),
//   orderDelivery : z.boolean(),
//   orderPrice: z.string().nonempty({message : "O Preço é Obrigátorio"}),
//   orderSku: z.string().nonempty({message : "Adicione o codigo do Produto"}),
//   orderTime: z.boolean
// })

// console.log(createOrderSchema)



export const Forms = () => {

  const {register, handleSubmit} = useForm();

  function onSubmit(data){
    console.log(JSON.stringify(data , null, 2))
  }

  return (
    <>
  
      <div className="formsContainer p-6 bg-white rounded-lg shadow-lg w-[90%]  flex-col gap-6">
      <HeaderSection sectionTitle={"Cadastrar Novos Items"} 
      iconsSectionName={<ConciergeBell color={"orange"} />}
      sectionWays={"Pizzas"}
      />

 
        <form className="flex text-black"
        onSubmit={handleSubmit(onSubmit)}
     
        >
        
          {/* <div
            id="primaryFormsContainer"
            className=" w-[22%]  flex flex-col gap-8 items-center justify-center"
          >
            <UploadImg />

            <div className="flex gap-2">
              <ButtonImgUpload
                btnText={"Adicionar"}
                className="bg-zinc-600 text-white"
              />
              <ButtonImgUpload
                btnText={"Remover"}
                className="border-zinc-500 border-2 text-zinc-800"
              />
            </div>
          </div> */}

          <div
            id="secondFormsContainer"
            className=" flex-1 flex flex-col gap-4  items-center justify-center"
          >
            <FormRegisterInput
              label={"Nome do Produto"}
              placeholder={"Digite o nome do Produto"}
              type={"text"}
              id="orderItemName"
              width={"[90%]"}
              height={"[10%]"}
             register={register}
        
            />

            <FormRegisterInput
              label={"Descrição"}
              placeholder={"Adicione uma Pequena descrição"}
              type={"textarea"}
              id="orderItemDescription"
              width={"[90%]"}
              height={"20"}
              register={register}
            />

            <div className=" w-[90%] h-[30%] flex-1 flex gap-4 justify-between">
              <fieldset className="border-2 flex flex-wrap gap-1 w-[50%] rounded-lg p-2 ">
                <legend className="ml-2 font-semibold text-sm">
                  Adicionais:
                </legend>

                <FormRegisterInputSecond
                  inputType="checkbox"
                  label={"Azeitonas"}
                 
                  padding={0}
                  paddingX={2}
                  width={8}
                  height={8}
                  roundedNivel={"lg"}
                  htmlFor={"Azeitonas"}
                  register={register}
                />

                <FormRegisterInputSecond
                  inputType="checkbox"
                  label={"Milho"}
                 
                  padding={0}
                  paddingX={2}
                  width={8}
                  height={8}
                  roundedNivel={"lg"}
                  htmlFor={"Milho"}
                />

                <FormRegisterInputSecond
                  inputType="checkbox"
                  label={"Cebola"}
                 
                  padding={0}
                  paddingX={2}
                  width={8}
                  height={8}
                  roundedNivel={"lg"}
                  htmlFor={"Cebola"}
                />

                <FormRegisterInputSecond
                  inputType="checkbox"
                  label={"Peperone"}
                 
                  padding={0}
                  paddingX={2}
                  width={8}
                  height={8}
                  roundedNivel={"lg"}
                  htmlFor={"Peperone"}
                  
                />
              </fieldset>

              <div
                className="flex flex-col gap-3 items-end justify-end w-auto flex-1"
                id="containerDisponiveis"
              >
                <div className="">
                  <input type="checkbox" id="orderDisponibility"></input>{" "}
                  <label htmlFor="orderDisponibility">Produto disponível</label>
                </div>
                <fieldset
                  className="flex flex-col border-2 w-[100%] p-2 rounded-lg text-zinc-600"
                  title="Escolha se o cliente ou a Loja que paga a Taxa de entrega"
                >
                  <legend className="ml-2 font-semibold text-sm">
                    Delivery:
                  </legend>

                  <span className="cursor-pointer">
                    {" "}
                    <input type="checkbox" id="orderTaxOff"></input>{" "}
                    <label htmlFor="orderTaxOff">Entrega gratuita</label>
                  </span>
                  <span className="cursor-pointer">
                    {" "}
                    <input type="checkbox" id="orderTaxOn"></input>{" "}
                    <label htmlFor="orderTaxOn">Aplicar Taxa</label>
                  </span>
                </fieldset>
              </div>
            </div>
          </div>

          <div
            id="thirdFormsContainer"
            className=" w-[30%] flex flex-col gap-8"
          >
            <div className="thirdFormsContainerDiv flex gap-2">
              <FormRegisterInput
              id={"orderItemPrice"}
                label={"Preço"}
                type={"text"}
                placeholder={"Digite o Preço"}
                register={register}
              />

              <FormRegisterInput
                id={"orderItemSku"}
                label={"SKU"}
                type={"text"}
                register={register}
              />
            </div>

            <div className="thirdFormsContainerDiv  flex gap-2 justify-center items-center">
              <fieldset className="flex items-center justify-center gap-2 border-2 p-2 rounded-lg text-zinc-600 w-[100%]">
                <legend className="ml-2 font-semibold text-sm">
                  Tempo de Preparo(min):
                </legend>

                <LabelMinutes label={"15"} forLabel={"quinze"} />
                <LabelMinutes label={"20"} forLabel={"Vinte"} />
                <LabelMinutes label={"30"} forLabel={"trinta"} />
                <LabelMinutes label={"40"} forLabel={"quarenta"} />
                <LabelMinutes label={"50"} forLabel={"cinquenta"} />
              </fieldset>
            </div>

            <div className="flex justify-between items-center h-auto">
              <ButtonImgUpload
                btnText={"Excluir"}
                className={
                  "bg-red-600 text-white font-semibold w-[48%] py-3 hover:bg-red-500"
                }
                btnIcon={<Trash2 size={20} />}
                type={"reset"}
              />

              <ButtonImgUpload
                btnText={"Adicionar"}
                className={
                  "bg-green-700 text-white font-semibold w-[48%] py-3 hover:bg-green-600 hover:shadow-md"
                }
                btnIcon={<PlusSquare size={20} />}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
