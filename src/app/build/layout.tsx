"use client";
import "@/styles/globals.css";
import React from "react";
import Sidebar from "@/components/Sidebar";
import {Button, buttonVariants} from "@/components/ui/Button";
import {LogIn} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function BuildLayout({children,}: { children: React.ReactNode; }) {
    const pathname = usePathname();
    const path = pathname.split("/")[2]
    return (
        <html lang="en">
        <body>
        <div className="w-full h-screen flex">
            <Sidebar/>
            <div className={"flex-1"}>
                <div className="flex justify-between p-4 border-b-2 border-gray-300 w-full">
                    <p className=" font-semibold text-xl text-black capitalize">{path}</p>
                    <div>
                        <Link href='/sign-in' className={buttonVariants({
                            variant: 'secondary',
                        })}>
                            <LogIn size={20} className="mr-2"/>
                            Se connecter
                        </Link>

                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
