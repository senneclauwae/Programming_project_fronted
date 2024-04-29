import react, { useEffect, useReducer, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import { Link, json } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { data } from "autoprefixer";
import canonFoto from "../../assets/canon-eos-200d.jpg";
import Spinner from "../../components/Spinner";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaCircleInfo } from "react-icons/fa6";

const Inventaris = () => {
  const [productModellen, setProductModellen] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/productmodel")
      .then((response) => {
        setProductModellen(response.data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProductModellen = productModellen.filter((model) =>
    model.productModelNaam.toLowerCase().includes(searchQuery.toLowerCase())||
    model.productModelMerk.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <content className="top-0 flex-grow">
      <main className="flex-grow p-10">
        <div className="flex justify-between items-center">
          <h1 className=" flex text-3xl font-bold w-40 border-b justify-center">
            Inventaris
          </h1>
          <Link
            to={`/admin/Inventaris/toevoegen`}
            className="w-48 rounded-xl bg-Groen h-12 items-center justify-center flex gap-2 p-2 hover:bg-lime-400"
          >
            <MdOutlineAddCircle className="flex size-6" />
            <h2 className="font-semibold">Product Toevoegen</h2>
          </Link>
        </div>
        <div className="flex items-center gap-2 mt-10 ml-5  justify-between">
          <breadcrumb className="flex items-center gap-2">
            <RxDashboard className="text-rood" />
            <breadcrumb-item>Inventaris</breadcrumb-item>
          </breadcrumb>
          <div className="items-center flex h-12 gap-4">
            <div className="items-center flex h-full border-2 w-56 gap-2 rounded-xl border-Lichtgrijs hover:border-black">
              <IoSearchOutline className="ml-2 size-6" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Zoek hier"
                className="h-full w-full rounded-xl p-2"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="flex h-full border-2 items-center justify-center gap-3 rounded-xl border-Lichtgrijs w-28 hover:cursor-pointer">
              <FaFilter className="size-4 text-black-600" />
              <h2 className="text-xl font-semibold">Filter</h2>
            </div>
          </div>
        </div>
        <div className="flex w-full h-screen">
          <div>{loading && <Spinner />}</div>
          <table className="w-full h-screen">
            <thead className="w-full h-16">
              <tr className="text-sm text-Lichtgrijs font-thin">
                <th scope="col" className=" px-2 ">
                  Nr
                </th>
                <th
                  scope="col"
                  className="text-left hover:cursor-pointer w-80 "
                >
                  Product
                </th>
                <th scope="col" className="text-left">
                  Categorie
                </th>
                <th
                  scope="col"
                  className=" flex h-full justify-center items-center  gap-1"
                >
                  Beschikbaar
                  <IoMdArrowDropdown className="size-4 text-Grijs" />
                </th>
                <th scope="col" className="">
                  Uitgeleend
                </th>
                <th scope="col" className=" ">
                  Gereserveerd
                </th>
                <th scope="col" className=" ">
                  Gepauzeerd
                </th>
                <th scope="col" className="text-right">
                  Actie
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProductModellen.map((model) => (
                <tr key={model.productModelNr} className="h-16">
                  <td className="flex justify-center items-center h-full">
                    {model.productModelNr}
                  </td>
                  <td className="">
                    <div className="flex items-center justify-start gap-2 overflow-x-hidden">
                      <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-Lichtgrijs">
                        <img
                          src={canonFoto}
                          alt=""
                          className="w-full h-full object-cover bg-white"
                        />
                      </div>
                      <h2 className="flex flex-col -space-y-1">
                        <span className="text-base text-black font-semibold">{`${model.productModelNaam}`}</span>
                        <span className="text-sm text-Lichtgrijs">{`${model.productModelMerk}`}</span>
                      </h2>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex w-full border h-8 bg-slate-300 items-center justify-center rounded-md ">
                      Video
                    </div>
                  </td>
                  <td className="">{model.beschikbaar}</td>
                  <td className="">{model.uitgeleend}</td>
                  <td className="">{model.gereserveerd}</td>
                  <td className="">{model.gepauzeerd}</td>
                  <td className="">
                    <div className="flex justify-end items-center gap-2">
                      <Link
                        to={`/admin/inventaris/wijzigen/${model.productModelNr}`}
                        className="bg-cyan-600 text-white py-1 px-1 rounded-xl flex items-center justify-center hover:bg-cyan-900"
                      >
                        <HiMiniPencilSquare className="size-6" />
                      </Link>
                      <Link
                        to={`/admin/inventaris/info/${model.productModelNr}`}
                        className="bg-Grijs text-white py-1 px-1 rounded-xl flex items-center justify-center hover:bg-black"
                        title="Edit"
                      >
                        <FaCircleInfo className="size-6" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </content>
  );
};

export default Inventaris;
