import { LucideIcon, User2 } from "lucide-react";
import { FC } from "react";
interface SidebarItemProps {
  Icon: LucideIcon;
  sidebarTitle: string;
  isActive?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({
  sidebarTitle,
  Icon,
  isActive,
}) => {
  return (
    <div
      className={`flex  w-full px-3 py-4 items-center cursor-pointer ${
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
    </div>
  );
};

export default SidebarItem;
