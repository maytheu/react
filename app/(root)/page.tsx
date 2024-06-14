import Header from "@/components/Header";
import TotalBalance from "@/components/TotalBalance";
import React from "react";

const Home = () => {
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
      </div>
    </section>
  );
};

export default Home;
