import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = { firstName: "Mato", $id: "1", lastName: "Laue" };
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
