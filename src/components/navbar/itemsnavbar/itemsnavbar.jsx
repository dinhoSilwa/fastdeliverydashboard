export const ItemsNavBar = (
 {
  itemName , itemIcon
 }
) =>{
 return (

     <li className=" hover:bg-[#FB9700] inline-flex gap-2 px-9 py-3 rounded-lg cursor-pointer">
         <i>{itemIcon}</i>
      <p>{itemName}</p>
        
     </li>
 );

}
export default ItemsNavBar;