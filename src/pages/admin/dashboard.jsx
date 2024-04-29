import react, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { CiBoxes } from "react-icons/ci";

const Dashboard = () => {
  return (
    <content className="top-0 flex-grow">
      <main className="flex-grow p-10">
        <h1 className=" flex text-3xl font-bold w-40 border-b justify-center">
          Dashboard
        </h1>

        <div className="flex items-center gap-2 mt-10 ml-5  justify-between">
          <breadcrumb className="flex items-center gap-2">
            <RxDashboard className="text-rood" />
            <breadcrumb-item>Dashboard</breadcrumb-item>
          </breadcrumb>
        </div>
        <div>
          <ul className="flex h-12 items-center ml-20 mt-8">
            <li className="flex w-80 h-full items-center border-r gap-3 ml-5">
              <CiBoxes className="size-10 text-yellow-300" />
              <h1 className="flex flex-col -space-y-7">
                <span className="text-sm text-Grijs ">Aantal producten</span>
                <br />
                <span className="text-2xl text-black font-semibold">4000</span>
              </h1>
            </li>
            <li className="flex w-80 h-full items-center border-r gap-3 ml-5">
              <CiBoxes className="size-10 text-yellow-300" />
              <h1 className="flex flex-col -space-y-7">
                <span className="text-sm text-Grijs ">Aantal producten</span>
                <br />
                <span className="text-2xl text-black font-semibold">4000</span>
              </h1>
            </li>
            <li className="flex w-80 h-full items-center border-r gap-3 ml-5">
              <CiBoxes className="size-10 text-yellow-300" />
              <h1 className="flex flex-col -space-y-7">
                <span className="text-sm text-Grijs ">Aantal producten</span>
                <br />
                <span className="text-2xl text-black font-semibold">4000</span>
              </h1>
            </li>
            <li className="flex w-80 h-full items-center gap-3 ml-5">
              <CiBoxes className="size-10 text-yellow-300" />
              <h1 className="flex flex-col -space-y-7">
                <span className="text-sm text-Grijs ">Aantal producten</span>
                <br />
                <span className="text-2xl text-black font-semibold">4000</span>
              </h1>
            </li>
          </ul>
        </div>
      </main>
    </content>
  );
};

export default Dashboard;
