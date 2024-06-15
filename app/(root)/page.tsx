import Header from "@/components/Header";
import RightSideBarHome from "@/components/RightSideBarHome";
import TotalBalance from "@/components/TotalBalance";
import React from "react";

const Home = () => {
  const user = {
    firstName: "Mato",
    $id: "1",
    lastName: "Laue",
    email: "mato@laue.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            title="Welome"
            type="greeting"
            subtext="Manage and access Transaction efficiently"
            user="Mato"
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2000.02}
          />
        </header>
        RCENT TXN
      </div>
      <RightSideBarHome user={user} banks={[{}, {}, {}]} transactions={[]} />
    </section>
  );
};

export default Home;
