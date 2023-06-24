import {
  BrainCog,
  Briefcase,
  GraduationCap,
  Languages,
  Lightbulb,
  User2,
} from "lucide-react";
import { FC } from "react";
import SidebarItem from "./SidebarItem";
import SidebarContainer from "./SidebarContainer";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <SidebarContainer>
      <div className="sidebar">
        <h2>LOGO</h2>
      </div>
      <SidebarItem Icon={User2} sidebarTitle="Coordonnees" isActive={true} />
      <SidebarItem Icon={Briefcase} sidebarTitle="Experience" />
      <SidebarItem Icon={GraduationCap} sidebarTitle="Etude" />
      <SidebarItem Icon={BrainCog} sidebarTitle="Competances" />
      <SidebarItem Icon={Lightbulb} sidebarTitle="Objectif" />
      <SidebarItem Icon={Languages} sidebarTitle="Langues" />
    </SidebarContainer>
  );
};

export default Sidebar;
