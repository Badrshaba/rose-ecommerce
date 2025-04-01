"use client";
import { authOptions } from "@/auth";
import useAddToCart from "@/hooks/cart/use-add-to-cart";
import { useSession } from "next-auth/react";
import { BsHandbag } from "react-icons/bs";

export default function AddProductComponent({ product }: { product: Product }) {
  const { addCartItem } = useAddToCart();
  const { data } = useSession({ required: true, ...authOptions });

  return (
    <button
      onClick={() =>
        addCartItem({ token: data?.token as string, productId: product._id, quantity: 1 })
      }
      className="shrink-0 handbag-icon me-4 bg-custom-violet-900 cursor-pointer  rounded-full flex items-center justify-center w-10 h-10 "
    >
      {/* The handbag icon */}
      <BsHandbag className="  text-lg text-white font-black  " />
    </button>
  );
}
