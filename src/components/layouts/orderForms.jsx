import {
  UploadImg,
  FormRegisterInput,
  FormRegisterInputSecond,
  ButtonImgUpload,
  LabelMinutes,
} from "../forms/inputsforms";

import { PlusSquare, Trash2, ConciergeBell, ChevronRight , MoreVertical } from "lucide-react";

export const Forms = () => {
  
  return (
    <>
      <div className="formsContainer p-6 bg-white rounded-lg shadow-lg w-[90%] flex flex-col gap-6">
        <header className=" h-10 flex justify-between items-center">
        <div className="flex items-center">
        <ConciergeBell color={"orange"}  size={40} className={"m-4"} /> <strong>Adicionar</strong><ChevronRight /> 
        <p className="text-zinc-500 font-semibold">{categoryDados[0]}</p>
        </div>

        <nav>
          <MoreVertical />
        </nav>
        </header>
        <form className="flex text-black ">
          <div
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
          </div>

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
            />

            <FormRegisterInput
              label={"Descrição"}
              placeholder={"Adicione uma Pequena descrição"}
              type={"textarea"}
              id="orderItemDescription"
              width={"[90%]"}
              height={"20"}
            />

            <div className=" w-[90%] h-[30%] flex-1 flex gap-4 justify-between">
              <fieldset className="border-2 flex flex-wrap gap-1 w-[50%] rounded-lg p-2 ">
                <legend className="ml-2 font-semibold text-sm">
                  Adicionais:
                </legend>

                <FormRegisterInputSecond
                  inputType="checkbox"
                  label={"Azeitonas"}
                  color={200}
                  padding={0}
                  paddingX={2}
                  width={8}
                  height={8}
                  roundedNivel={"lg"}
                  htmlFor={"Azeitonas"}
                />

                <FormRegisterInputSecond
                  inputType="checkbox"
                  label={"Milho"}
                  color={200}
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
                  color={200}
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
                  color={200}
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
                label={"Preço"}
                type={"text"}
                placeholder={"Digite o Preço"}
              />

              <FormRegisterInput
                label={"SKU"}
                type={"text"}
                placeholder={"#76"}
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
