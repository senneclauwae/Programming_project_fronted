import React from "react";

const Gebruikers = () => {
  return (
    <content>
      <main className="flex-grow w-100 p-5">
        <h1 className=" flex text-3xl font-bold w-40 border-b justify-center">
          Inventaris
        </h1>
        <breadcrumb className="item flex items-center gap-2 mt-5">
          <RxDashboard className="text-rood" />
          <breadcrumb-item>Dashboard</breadcrumb-item>
        </breadcrumb>
      </main>
    </content>
  );
};

export default Gebruikers;
