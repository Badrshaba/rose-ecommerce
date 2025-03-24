"use client";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Navigation({ col }: { col?: boolean }) {
  // Translation
  const t = useTranslations();
  const pathname = usePathname();
  return (
    <nav
      className={`flex gap-5 ${col && "flex-col"} text-custom-blue-900 font-medium rtl:font-semibold text-base`}
    >
      {" "}
      <Link className={pathname === "/" ? "text-rose-500" : ""} href={"/"}>
        {t("home")}
      </Link>
      <Link className={pathname === "/all-category" ? "text-rose-500" : ""} href={"/"}>
        {" "}
        {t("all-category")}
      </Link>
      <Link className={pathname === "/about" ? "text-rose-500" : ""} href={"/"}>
        {" "}
        {t("about")}
      </Link>
      <Link className={pathname === "/contact" ? "text-rose-500" : ""} href={"/"}>
        {" "}
        {t("contact")}
      </Link>
    </nav>
  );
}
