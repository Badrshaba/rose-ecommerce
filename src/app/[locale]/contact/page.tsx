import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Page() {
  // Translation
  const t = useTranslations();
  return (
    <main className="container mx-auto h-[60vh]  px-4 py-8">
      <h2 className="text-2xl text-custom-rose-900 text-center font-bold mb-5">
        {t("contact-us")}
      </h2>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 md:gap-0 md:grid-cols-8 md:h-[8rem]  w-fit  px-8 py-5 justify-between items-center border border-custom-rose-300 rounded-lg shadow-lg md:w-[50rem] shadow-custom-rose-300 gap-10 ">
          <div className="flex gap-4 col-span-2 items-center justify-content-center ">
            {" "}
            <div className=" p-2 border border-custom-rose-900 rounded-lg">
              {" "}
              <Phone color="#f82ba9" />
            </div>{" "}
            <div className="flex flex-col">
              <h3 className="text-custom-rose-900 font-semibold ">{t("call-anytime")}</h3>
              <h3>241-373-2123</h3>
            </div>
          </div>
          <div className="flex gap-4 col-span-3 items-center justify-content-center ">
            <div className=" p-2 border border-custom-rose-900 rounded-lg">
              <Mail color="#f82ba9" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-custom-rose-900 font-semibold ">{t("send-email")}</h3>
              <h3>Dwight63@gmail.com</h3>
            </div>
          </div>
          <div className="flex gap-4 col-span-3 items-center justify-content-center">
            <div className=" p-2 border border-custom-rose-900 rounded-lg">
              <MapPin color="#f82ba9" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-custom-rose-900 font-semibold ">{t("visit-us")}</h3>
              <h3>20 Island Park Road, New Jearsy, New York, USA</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
