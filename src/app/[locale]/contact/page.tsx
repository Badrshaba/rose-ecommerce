import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Page() {
  // Translation
  const t = useTranslations();
  return (
    <main className="container mx-auto h-[60vh]  px-4 py-8">
      <h2 className="text-2xl text-custom-rose-900  font-bold">{t("contact-us")}</h2>
      <div className="flex justify-center items-center gap-5">
        <div className="flex md:flex-row flex-col w-fit  px-10 py-5 justify-between border border-custom-rose-300 rounded-lg shadow-lg md:w-[40rem] shadow-custom-rose-300 ">
          <div className="flex gap-4">
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
          <div className="flex gap-4">
            <div className=" p-2 border border-custom-rose-900 rounded-lg">
              <Mail color="#f82ba9" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-custom-rose-900 font-semibold ">{t("call-anytime")}</h3>
              <h3>241-373-2123</h3>
            </div>
          </div>
          <div className="flex gap-4">
            <div className=" p-2 border border-custom-rose-900 rounded-lg">
              <MapPin color="#f82ba9" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-custom-rose-900 font-semibold ">{t("call-anytime")}</h3>
              <h3>241-373-2123</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
