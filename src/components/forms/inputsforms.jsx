import React, { useState, forwardRef } from "react";

import { Upload } from "lucide-react";

export const FormRegisterInput = forwardRef((props, ref) => {
  const { register, id, type, value, placeholder, label, height, width } = props;

  return (
    <fieldset
      className={`p-1 border-zinc-300 border-2 h-${height} w-${width} rounded-lg text-zinc-600`}
    >
      <legend className="ml-2 font-semibold text-sm">
        <label htmlFor="orderName">{label} :</label>
      </legend>
      <input
        
        ref={ref}
        type={type}
        id={id}
        value={value}
        className="w-full px-2 py-1 border-none focus:outline-none"
        placeholder={placeholder}
        {...register(id)}
      />
    </fieldset>
  );
});

export const FormRegisterInputSecond = forwardRef((props, ref) => {
  const {
    
    id,
    inputType,
    name,
    htmlFor,
    label,
    padding,
    paddingX,
    square,
    color,
    roundedNivel,
    height,
    width,
  } = props;

  const [addictional, setaddictional] = useState(false);

  function addictionalchoice() {
    setaddictional(!addictional);
  }

  return (
    <>
      <input type={inputType} name="selected" className="hidden" id={htmlFor} />
      {!addictional && (
        <label
        id={id}
          onClick={addictionalchoice}
          className={`text-[10px] flex items-center justify-center bg-zinc-200
        rounded-${roundedNivel} w-${width}  h-${height} p${padding} px-${paddingX} 
        aspect-${square} hover:bg-emerald-300  cursor-pointer`}
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}

      {addictional && (
        <label
        id={id}
          onClick={addictionalchoice}
          className={`text-[10px] flex items-center justify-center bg-emerald-400
        rounded-${roundedNivel} w-${width}  h-${height} p${padding} px-${paddingX} 
        aspect-${square}  cursor-pointer`}
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}
    </>
  );
});

export const UploadImg = forwardRef((props, ref) => {
  return (
    <>
      <input type="file" id="imgupload" className="hidden"></input>

      <label
        htmlFor="imgupload"
        className="border w-[85%] h-40 bg-zinc-200 p-3 rounded-lg flex flex-col justify-center items-center text-center cursor-pointer"
      >
        <i>
          <Upload strokeWidth={2} />
        </i>
        <p>Adcionar Imagem do Produto</p>
      </label>
    </>
  );
});

export const ButtonImgUpload = forwardRef((props, ref) => {
  const { id, register , className, btnText, btnIcon } = props;

  return (
    <button
    id={id}
    register={id}
      ref={ref}
      className={`${className} inline-flex px-4 py-2 border rounded-lg text-sm text-center items-center justify-center gap-2`}
    >
      <i>{btnIcon}</i>
      {btnText}
    </button>
  );
});




export const LabelMinutes = forwardRef((props, ref) => {
  const { id ,label, forLabel, value, register } = props;

  return (
    <>
      <input type="radio" id={forLabel} name="active" className=""
      value={value} 
      ref={register}
     
      />
      <label
     
 
        ref={ref}
        htmlFor={forLabel}
        className="border 
 aspect-square hover:bg-emerald-500 hover:text-white cursor-pointer
 w-10 h-10 py-2 px-4 rounded-full bg-zinc-300 flex justify-center items-center"
      >
        {label}
      </label>
    </>
  );
});
