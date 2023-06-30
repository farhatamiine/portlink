import {
    BrainCog,
    Briefcase, Cog,
    GraduationCap,
    Languages,
    Lightbulb, Settings,
    User2,
} from "lucide-react";
import { FC } from "react";
import SidebarItem from "./SidebarItem";
import SidebarContainer from "./SidebarContainer";
import {usePathname} from "next/navigation";

interface SidebarProps {}


const navigationMenu = [
    {
        title: "Coordonnees",
        icon: User2,
        isActive: true,
        href: "build/coordonnees"
    },
    {
        title: "Experience",
        icon: Briefcase,
        isActive: false,
        href: "build/experience"
    },
    {
        title: "Etude",
        icon: GraduationCap,
        isActive: false,
        href: "build/etude"

    },
    {
        title: "Competances",
        icon: BrainCog,
        isActive: false,
        href: "build/competances"
    },
    {
        title: "Objectif",
        icon: Lightbulb,
        isActive: false,
        href: "build/objectif"
    },
    {
        title: "Langues",
        icon: Languages,
        isActive: false,
        href: "build/langues"
    },
    {
        title: "Configurations",
        icon: Settings,
        isActive: false,
        href: "build/configurations"
    },




]

const Sidebar: FC<SidebarProps> = ({}) => {
    const pathname = usePathname();
    const path = pathname.split("/")[2]
  return (
    <SidebarContainer>
      <div className={"sidebar my-3 w-full h-10 flex justify-center items-center"}>
        <h2 className={"text-white text-2xl font-bold"}>PORTLINK</h2>
      </div>
        {
            navigationMenu.map((item, index) => (
                <SidebarItem href={item.href} key={index} Icon={item.icon} sidebarTitle={item.title} isActive={path === item.title.toLowerCase()} />
            ))
        }
    </SidebarContainer>
  );
};

export default Sidebar;
