import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/features/product/product-card";

type CarouselComponentProps = {
  bestProducts: Product[];
};

export default function CarouselComponent({ bestProducts }: CarouselComponentProps) {
  const data = [
    {
      _id: 1,
      imgCover: "/assets/images/gallery/gallery-1.png",
      title: "Best Seller",
      price: 500,
      priceAfterDiscount: 400,
    },
    {
      _id: 2,
      imgCover: "/assets/images/gallery/gallery-3.png",
      title: "Best Seller",
      price: 400,
      priceAfterDiscount: 300,
    },
    {
      _id: 3,
      imgCover: "/assets/images/gallery/gallery-3.png",
      title: "Best Seller",
      price: 650,
      priceAfterDiscount: 550,
    },
  ];
  console.log(bestProducts);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      {/* Content */}
      <CarouselContent key={Math.random()} className="realative ">
        {data?.map((product: Product) => (
          <CarouselItem
            key={product._id}
            className=" rounded-tl-[50px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px] bg-white rounded-3xl  mr-1 px-2 !w-[15rem] lg:w-[20rem] sm:basis-3/6 md:basis-6/12 lg:basis-4/12 basis-full"
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Prev item button */}
      <CarouselPrevious className="bg-transparent border-0 text-custom-rose-900" />

      {/* Next item button */}
      <CarouselNext className="border-0 text-custom-rose-900 bg-transparent" />
    </Carousel>
  );
}
