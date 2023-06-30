"use client";

import {FC} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";
import {BadgeInfo} from "lucide-react";

interface pageProps {

}

const page: FC<pageProps> = ({}) => {
    return (
        <div className={" h-full p-5"}>
            <Card className={"bg-[#b9f6ca]"}>
                <CardHeader className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md">
                        <BadgeInfo />
                        <div className="flex-1 space-y-1">
                            <p className="text-md font-medium leading-none">
                                Commencez par les informations personnelles
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Si nescessaire, vous pourrez aller dans les paramètres et activez des champs supplémentaires
                            </p>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}
export default page