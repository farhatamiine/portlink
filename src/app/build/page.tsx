import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/Button";
import { LogIn } from "lucide-react";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="bg-white w-full h-screen flex-1">
        <div className="flex justify-between p-4 border-b-2 border-gray-300 items-center">
          <p className=" font-semibold text-xl text-black">Coordonnees</p>
          <div>
            <Button variant="secondary">
              <LogIn size={20} className="mr-2" />
              Se connecter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
