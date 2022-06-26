import BarChart from "../icons/PieChart";
import Friends from "../icons/Friends";
import House from "../icons/House";
import Menu from "../icons/Menu";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomMenu() {
  return (
    <nav className="h-16 w-full flex justify-center bottom-0 left-0 fixed">
      <div className="w-1/2 mr-[42px] z-[1] grid grid-cols-2">
        <BottomMenuItem href="/dashboard/main" icon={<House />}>
          Home
        </BottomMenuItem>
        <BottomMenuItem href="/" icon={<Friends />}>
          Friends
        </BottomMenuItem>
      </div>

      <div className="flex items-center text-sm justify-center text-white tracking-widest w-[64px] h-[64px] shadow-2xl rounded-full bg-gradient-to-r from-[#7A60EF] via-[#3b82f6] to-[#2dd4bf]  -top-6 absolute">
        Play
      </div>

      <div className="w-1/2 ml-[42px] z-[1] grid grid-cols-2">
        <BottomMenuItem href="/" icon={<BarChart />}>
          Stats
        </BottomMenuItem>
        <BottomMenuItem href="/" icon={<Menu />}>
          Menu
        </BottomMenuItem>
      </div>

      <div className="presentation-only flex justify-between absolute top-0 pt-2 left-0 w-full h-full">
        <div className="h-full w-1/2 shadow-2xl  bg-[#252C39] inverse-border-right " />
        <div className="absolute overflow-hidden top-0 left-0 w-1/2 h-full after:block after:shadow-2xl  after:absolute after:right-[40px] after:-top-0 after:h-2 after:w-full after:bg-[#252C39] after:rounded-tr-lg" />

        <div className="h-full w-1/2 bg-[#252C39] inverse-border-left " />
        <div className="absolute overflow-hidden top-0 right-0 w-1/2 h-full after:block after:absolute after:left-[40px] after:-top-0 after:h-2 after:w-full after:bg-[#252C39] after:rounded-tl-lg" />
      </div>
    </nav>
  );
}

function BottomMenuItem({ children, href, icon }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  const _className = classNames(
    "grid gap-1.5 p-2 content-center justify-items-center font-bold text-[10px] tracking-widest uppercase",
    { ["text-white"]: isActive },
    { ["text-[#7C8596]"]: !isActive }
  );

  return (
    <Link href={href}>
      <button className={_className}>
        {icon}
        {children}
      </button>
    </Link>
  );
}
