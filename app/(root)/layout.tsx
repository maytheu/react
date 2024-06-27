import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { User } from "@/types";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User = await getLoggedInUser();  
  return (
    <main className="h-screen w-full font-inter flex">
      <Sidebar user={user} />

      {/* mobile view */}
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="Logo" />
          <div className="">
            <MobileNav user={user} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
