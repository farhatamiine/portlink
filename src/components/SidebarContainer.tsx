import { FC } from "react";

interface SidebarContainerProps {
  children: React.ReactNode;
}

const SidebarContainer: FC<SidebarContainerProps> = ({ children }) => {
  return (
    <div className="h-screen bg-[#172340] w-[20rem] flex flex-col items-center py-5">
      {children}
    </div>
  );
};

export default SidebarContainer;
