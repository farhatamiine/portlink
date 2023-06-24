import "@/styles/globals.css";
import React from "react";

export const metadata = {
  title: "Portlink",
  description: "Build.",
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
