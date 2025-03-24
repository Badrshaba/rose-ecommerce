"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function MenuHeader() {
  // Translation
  const t = useTranslations();
  // states
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div>
      {" "}
      <IoIosMenu
        fontSize={28}
        fontWeight={700}
        className="text-rose-500 lg:hidden cursor-pointer "
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {/* Navigation */}
      <div
        className={`flex gap-5 text-custom-blue-900 font-medium rtl:font-semibold text-base fixed bg-white top-0 left-0 w-1/2 h-50 flex-col p-6 justify-center z-40 ${menuOpen && "hidden"} transition delay-300 duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Image src="/assets/images/Logo.png" alt="Logo" width={86} height={0} />
          <IoMdClose
            fontSize={28}
            fontWeight={700}
            onClick={() => setMenuOpen(true)}
            className="  cursor-pointer"
          />
        </div>
        <Link className="text-rose-500" href={"/"}>
          {t("home")}
        </Link>
        <Link href={"/"}> {t("all-category")}</Link>
        <Link href={"/"}> {t("about")}</Link>
        <Link href={"/"}> {t("contact")}</Link>
      </div>
      <div
        className={`${menuOpen && "hidden"}  fixed !z-30 top-0 left-0 w-full h-[110vh] bg-black opacity-50 transition delay-300 duration-300 ease-in-out `}
        onClick={() => setMenuOpen(true)}
      ></div>
    </div>
  );
}
