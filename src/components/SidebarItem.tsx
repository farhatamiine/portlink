import { LucideIcon, User2 } from "lucide-react";
import { FC } from "react";
import Link from "next/link";
interface SidebarItemProps {
  Icon: LucideIcon;
  sidebarTitle: string;
  isActive?: boolean;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  sidebarTitle,
  Icon,
  isActive,
                                             href,
}) => {
  return (
    <Link href={href}
      className={`flex  w-full px-3 py-4 items-center cursor-pointer hover:bg-[#1f2f55] my-2 ${
        isActive ? "bg-[#1f2f55]" : "transparent"
      }`}
    >
      <div className={`${isActive ? "bg-blue-500" : ""} p-3 rounded mr-4`}>
        <Icon
          size={24}
          className={`${isActive ? "text-white" : "text-[#6a87c9]"}`}
        />
      </div>
      <p
        className={` text-lg  font-semibold ${
          isActive ? "text-white" : "text-muted-foreground"
        }`}
      >
        {sidebarTitle}
      </p>
    </Link>
  );
};

export default SidebarItem;
