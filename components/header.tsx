import { UserButton } from "@clerk/nextjs";
import HeaderLogo from "@/components/header-logo";
import { Navigation } from "@/components/navigation";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 text-white px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex justify-between items-center mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <UserButton />
        </div>
      </div>
    </header>
  );
};