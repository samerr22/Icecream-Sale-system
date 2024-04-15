
import { Link } from "react-router-dom";


export default function DashSidebar() {
  
 






  return (
    <div className=" hidden flex-col flex-shrink-0 p-3 bg-black bg-opacity-40 w-56 h-[600px]  lg:block">
      <ul className="flex flex-col space-y-1 mb-auto">
        
        <li className="nav-item">
          <Link to="/create-post" className={`block py-2 px-4 rounded-lg text-white hover:bg-gray-200 `}>
          
             Add Items
          </Link>
        </li>
        <li className="">
          <Link to="/view" className={`block py-2 px-4 rounded-lg text-white hover:bg-gray-200 `}>
          
            View Items
          </Link>
        </li>

        
      </ul>
      <hr className="my-2 border-gray-300" />
      
    </div>
  );
}
