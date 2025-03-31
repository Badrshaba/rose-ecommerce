import Image from "next/image";
import { Heart, User } from "lucide-react";
import { PiBagBold } from "react-icons/pi";
import { getServerSession } from "next-auth";
import AuthDialog from "@/components/features/auth/auth-dialog";
import MenuHeader from "./MenuHeader";
import Navigation from "./Navigation";
import SearchComponent from "./SearchComponent";

export default async function Header() {
  // Get user session information
  const session = await getServerSession();

  // Determine if user has an image or not
  const userHasImage = session?.user?.image ? true : false;

  return (
    <header className="flex justify-between items-center container my-4 sticky top-0 z-50 bg-white ">
      {/* Logo */}
      <Image src="/assets/images/Logo.png" alt="Logo" width={86} height={0} />

      {/* Navigation */}
      <div className="md:block hidden ">
        <Navigation />
      </div>

      {/* Actions */}
      <div className="flex gap-5  items-center">
        {/* Login Button: Only show if user is not logged in */}
        {!session?.user && (
          <div className="flex items-center">
            <AuthDialog />
          </div>
        )}
        {/* Search */}
        <SearchComponent />
        {/* Favorites */}
        {session?.user && (
          <div className="relative">
            <Heart className="text-rose-500" />
            <div className="absolute -top-4 -right-2 bg-rose-500 text-white rounded-full w-5 h-fit flex justify-center items-center"></div>
          </div>
        )}

        {/* Cart */}
        {session?.user && (
          <div className="relative">
            <PiBagBold fontSize={26} className="text-rose-500" />
            <div className="absolute -top-4 -right-2 bg-rose-500 text-white rounded-full w-5 h-fit flex justify-center items-center"></div>
          </div>
        )}

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
