import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo.svg" alt="Logo" width={35} height={35} />
        <p className="text-2xl text-white font-semi-bold ml-2.5">Wangku</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
