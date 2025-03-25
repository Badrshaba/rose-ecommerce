import { Suspense } from "react";
import PopularProductsContent from "../(homepage)/_components/popular-products/components/popular-products-content";
import Square from "@/components/common/skeletons/square";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-wrap justify-center items-center gap-5 my-10 ">
          {" "}
          <Square className="w-[15rem] h-[272px] rounded-[20px] bg-gray-200 mb-1" />{" "}
          <Square className="w-[15rem] h-[272px] rounded-[20px] bg-gray-200 mb-1" />{" "}
          <Square className="w-[15rem] h-[272px] rounded-[20px] bg-gray-200 mb-1" />{" "}
          <Square className="w-[15rem] h-[272px] rounded-[20px] bg-gray-200 mb-1" />{" "}
        </div>
      }
    >
      <PopularProductsContent searchParams={{}} />
    </Suspense>
  );
}
