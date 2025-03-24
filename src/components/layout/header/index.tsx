import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heart, Search, User } from "lucide-react";
import { PiBagBold } from "react-icons/pi";
import { getTranslations } from "next-intl/server";
import { getServerSession } from "next-auth";
import AuthDialog from "@/components/features/auth/auth-dialog";
import MenuHeader from "./MenuHeader";

export default async function Header() {
  // Translation
  const t = await getTranslations();

  // Get user session information
  const session = await getServerSession();

  // Determine if user has an image or not
  const userHasImage = session?.user?.image ? true : false;

  return (
    <header className="flex justify-between items-center container my-4 sticky z-10 ">
      {/* Logo */}
      <Image src="/assets/images/Logo.png" alt="Logo" width={86} height={0} />

      {/* Navigation */}
      <div className="lg:flex gap-5 text-custom-blue-900 font-medium rtl:font-semibold text-base hidden ">
        <Link className="text-rose-500" href={"/"}>
          {t("home")}
        </Link>
        <Link href={"/"}> {t("all-category")}</Link>
        <Link href={"/"}> {t("about")}</Link>
        <Link href={"/"}> {t("contact")}</Link>
      </div>

      {/* Actions */}
      <div className="flex gap-5 items-center">
        {/* Login Button: Only show if user is not logged in */}
        {!session?.user && (
          <div className="flex items-center">
            <AuthDialog />
          </div>
        )}
        {/* Search */}
        <Search className="text-rose-500" />
        {/* Favorites */}
        <div className="relative">
          <Heart className="text-rose-500" />
          <div className="absolute -top-4 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
            2
          </div>
        </div>
        {/* Cart */}
        <div className="relative">
          <PiBagBold fontSize={26} className="text-rose-500" />
          <div className="absolute -top-4 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
            5
          </div>
        </div>
        {/* User Profile: Only show if user is logged in */}
        {session?.user &&
          (userHasImage ? (
            <Image
              width={32}
              height={32}
              alt="User Image"
              src={session?.user?.image as string}
              className="rounded-full"
            />
          ) : (
            <User className="text-rose-500 w-8 h-8" />
          ))}
        <MenuHeader />
      </div>
    </header>
  );
}
