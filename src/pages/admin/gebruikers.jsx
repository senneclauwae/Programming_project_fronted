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
import { FaRegUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Gebruikers = () => {
  const [gebruikers, setGebruikers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/gebruiker")
      .then((response) => {
        setGebruikers(response.data);
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

  const filteredGebruikers = gebruikers.filter(
    (gebruiker) =>
      gebruiker.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(gebruiker.gebruikerID).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <content className="top-0 flex-grow">
      <main className="flex-grow p-10">
        <h1 className=" flex text-3xl font-bold w-40 border-b justify-center">
          Gebruikers
        </h1>

        <div className="flex items-center gap-2 mt-10 ml-5  justify-between">
          <breadcrumb className="flex items-center gap-2">
            <FaUsers className="text-rood" />
            <breadcrumb-item>Gebruikers</breadcrumb-item>
          </breadcrumb>
          <div className="items-center flex h-12 gap-4">
            <div className="items-center flex h-full border-2 w-56 gap-1 rounded-xl border-Lichtgrijs">
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
                  Naam/email
                </th>
                <th scope="col" className="text-left">
                  Titel
                </th>
                <th
                  scope="col"
                  className=" flex h-full justify-center items-center  gap-1"
                >
                  # Leningen
                  <IoMdArrowDropdown className="size-4 text-Grijs" />
                </th>
                <th scope="col" className="">
                  Laatste Lening
                </th>
                <th scope="col" className="text-right">
                  Actie
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredGebruikers.map((gebruiker) => (
                <tr key={gebruiker.gebruikerID} className="h-16 ">
                  <td className="flex justify-center items-center h-full">
                    {gebruiker.gebruikerID}
                  </td>
                  <td className="">
                    <div className="flex items-center justify-start h-full gap-2 overflow-x-hidden">
                      <div className="rounded-full items-center text-Grijs">
                        <FaRegUserCircle className="size-12" />
                      </div>
                      <h2 className="flex flex-col -space-y-1">
                        <span className="text-base text-Grijs font-semibold">Senne Clauwaert</span>
                        <span className="text-base text-Lichtgrijs font-light">{`${gebruiker.email}`}</span>
                      </h2>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex w-full border h-8 bg-slate-300 items-center justify-center rounded-md">
                      {gebruiker.titel === "student" ? (
                        <p>student</p>
                      ) : (
                        <p>docent</p>
                      )}
                    </div>
                  </td>
                  <td className="">{gebruiker.beschikbaar}</td>
                  <td className="">{gebruiker.uitgeleend}</td>

                  <td className="">
                    <div className="flex justify-end items-center gap-2">
                      <Link
                        to={`/admin/gebruiker/info/${gebruiker.gebruikerID}`}
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

export default Gebruikers;
