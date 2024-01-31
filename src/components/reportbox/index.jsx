import { UtensilsCrossed, MoreVertical } from "lucide-react";

export const ReportBox = ({
  iconBackground,
  iconBox,
  textTitleBox,
  textValueBox,
}) => {
  return (
    <div
      className="border bg-white w-[190px] px-2 py-2   
  rounded-xl shadow-md  flex flex-col cursor-pointer hover:bg-green-100" 
    >
      <header className="flex justify-between items-center p-2">
        <i
          className={`${iconBackground} w-10 h-10 aspect-square rounded-[20%] grid place-content-center`}
        > 
          {iconBox}
        </i>{" "}
        <MoreVertical />
        
      </header>
      <div className="flex flex-col px-2">
        <p className="text-[13px] text-zinc-400 ">{textTitleBox}</p>
        <strong className="text-[22px] font-bold text-zinc-800">
          {textValueBox}
        </strong>
      </div>
    </div>
  );
};

export const SubReportBox = ({
  width,
  iconBackground,
  iconBox,
  textTitleBox,
  textValueBox,
  background,
  fontColor,
  className
}) => {
  return (
    <div
      className={` w-[${width}] p-3
    rounded-xl flex flex-col shadow-md ${background}`}
    >
      <header className="flex justify-between ">
    
          {iconBox}
     
      </header>
      <div className={`flex flex-col borde text-${fontColor}`}>
        <p className="text-[16px]">{textTitleBox}</p>
        <strong className="text-[16px] font-bold ">
          {textValueBox}
        </strong>
      </div>
    </div>
  );
};
