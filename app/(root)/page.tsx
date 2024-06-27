import Header from "@/components/Header";
import RightSideBarHome from "@/components/RightSideBarHome";
import TotalBalance from "@/components/TotalBalance";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { User } from "@/types";
import React from "react";

const Home = async () => {
  const user: User = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            title="Welome"
            type="greeting"
            subtext="Manage and access Transaction efficiently"
            user={user?.name}
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
