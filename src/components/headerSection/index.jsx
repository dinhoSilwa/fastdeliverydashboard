import {ChevronRight, ConciergeBell, MoreVertical} from 'lucide-react';


const HeaderSection = ({
  sectionTitle,
  iconsSectionName,
  sectionWays
  
}) =>{
 return(
  <header className=" h-10 flex justify-between items-center">
  <div className="flex items-center gap-3 mb-8">
 {iconsSectionName} <strong>{sectionTitle}</strong><ChevronRight /> 
  <p className="text-zinc-500 font-semibold">{sectionWays}</p>
  
  </div>

  <nav>
    <MoreVertical />
  </nav>
  </header>
 );
}

export default HeaderSection;