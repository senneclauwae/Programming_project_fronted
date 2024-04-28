import react, { useEffect, useReducer, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import { Link, json } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { data } from "autoprefixer";

const Inventaris = () => {
  const [productModellen, setProductModellen] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/productmodel")
      .then((response) => response.json()) // Parse JSON data here
      .then((data) => {
        setProductModellen(data); 
        console.log(data)// Set state with parsed data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div> </div>
  //   // <content className="flex top-0 flex-grow">
  //   //   <main className="flex-grow p-10">
  //   //     <div className="flex justify-between items-center">
  //   //       <h1 className=" flex text-3xl font-bold w-40 border-b justify-center">
  //   //         Inventaris
  //   //       </h1>
  //   //       <Link
  //   //         to={`/admin/Inventaris/toevoegen`}
  //   //         className="w-48 rounded-xl bg-Groen h-12 items-center justify-center flex gap-2 p-2"
  //   //       >
  //   //         <MdOutlineAddCircle className="flex size-6" />
  //   //         <h2 className="font-semibold">Product Toevoegen</h2>
  //   //       </Link>
  //   //     </div>
  //   //     <div className="flex items-center gap-2 mt-10 ml-5  justify-between">
  //   //       <breadcrumb className="flex items-center gap-2">
  //   //         <RxDashboard className="text-rood" />
  //   //         <breadcrumb-item>Inventaris</breadcrumb-item>
  //   //       </breadcrumb>
  //   //       <div className="items-center flex h-12 gap-4">
  //   //         <div className="items-center flex h-full border-2 w-56 gap-2 rounded-xl border-Lichtgrijs">
  //   //           <IoSearchOutline className="ml-2 size-6" />
  //   //           <input
  //   //             type="search"
  //   //             name=""
  //   //             id=""
  //   //             placeholder="Zoek hier"
  //   //             className="h-full w-full rounded-xl"
  //   //           />
  //   //         </div>
  //   //         <div className="flex h-full border-2 items-center justify-center gap-3 rounded-xl border-Lichtgrijs w-28 hover:cursor-pointer">
  //   //           <FaFilter className="size-4 text-black-600" />
  //   //           <h2 className="text-xl font-semibold">Filter</h2>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //     <div>
  //   //       <table className="w-full border mt-4  ">
  //   //         <thead className="w-full h-full justify-end">
  //   //           <tr className="text-sm text-Grijs font-thin">
  //   //             <th
  //   //               scope="col"
  //   //               className="py-3 px-6 w-hover:cursor-pointer border"
  //   //             >
  //   //               Nr
  //   //             </th>
  //   //             <th
  //   //               scope="col"
  //   //               className="py-3 px-6 hover:cursor-pointer border"
  //   //             >
  //   //               Product
  //   //             </th>
  //   //             <th scope="col" className="py-3 px-6">
  //   //               Categorie
  //   //             </th>
  //   //             <th scope="col" className="py-3 px-6 flex items-center gap-1">
  //   //               Beschikbaar
  //   //               <IoMdArrowDropdown className="size-4" />
  //   //             </th>
  //   //             <th scope="col" className="py-3 px-6">
  //   //               Uitgeleend
  //   //             </th>
  //   //             <th scope="col" className="py-3 px-6">
  //   //               Gereserveerd
  //   //             </th>
  //   //             <th scope="col" className="py-3 px-6">
  //   //               Gepauzeerd
  //   //             </th>
  //   //             <th scope="col" className="py-3 text-right">
  //   //               Actie
  //   //             </th>
  //   //           </tr>
  //   //         </thead>
  //   //         <tbody>
  //   //           {orders.map((productModel, index) => (
  //   //             <tr
  //   //               key={productModel.productModelNr}
  //   //               className="bg-white border-b hover:bg-gray-50"
  //   //             >
  //   //               <td className="py-4 px-6">{index + 1}</td>
  //   //               <td className="py-4 px-6 items-center">
  //   //                 <div>
  //   //                   <img
  //   //                     src={productModel.image}
  //   //                     alt={productModel.name}
  //   //                     className="rounded-mb h-full w-auto object-cover"
  //   //                   />
  //   //                   <h2>
  //   //                     {productModel.name}
  //   //                   </h2>
  //   //                 </div>
  //   //               </td>
  //   //               <td className="py-4 px-6">
  //   //                 <div>
  //   //                   <h2>{productModel.categorie}</h2>
  //   //                 </div>
  //   //               </td>
  //   //               <td className="py-4 px-6">
  //   //                 {productModel.beschikbaar.aantal}
  //   //               </td>
  //   //               <td className="py-4 px-6">
  //   //                 {productModel.uitgeleend.aantal}
  //   //               </td>
  //   //               <td className="py-4 px-6">
  //   //                 {productModel.gereserveerd.aantal}
  //   //               </td>
  //   //               <td className="py-4 px-6">
  //   //                 {productModel.gepauzeerd.aantal}
  //   //               </td>
  //   //               <td className="py-4 px-6">
  //   //                 <div>
  //   //                   <Link
  //   //                     to={`/admin/inventaris/wijzigen/${productModel.id}`}
  //   //                     className="bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded-lg"
  //   //                   >
  //   //                     wijzig
  //   //                   </Link>
  //   //                   <Link
  //   //                     to={`/admin/inventaris/info/${productModel.id}`}
  //   //                     className="bg-red-500 hover:bg-red-900 text-white py-2 px-4 rounded-lg"
  //   //                   >
  //   //                     info
  //   //                   </Link>
  //   //                 </div>
  //   //               </td>
  //   //             </tr>
  //   //           ))}
  //   //         </tbody>
  //   //       </table>
  //   //     </div>
  //   //   </main>
  //   // </content>
   );
};

export default Inventaris;
