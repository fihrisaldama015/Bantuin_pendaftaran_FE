import Image from "next/image";
import { hind } from "@/app/layout";

function Hero() {
  return (
    <section className="p-12 pt-28 md:p-6 relative min-h-[110vh] flex flex-col-reverse md:flex-row gap-6 justify-center items-center">
      <Image
        src="/background.webp"
        alt="Hero Login Image"
        fill
        className="z-[-1] object-cover"
      />
      <div className="flex px-9 py-16 ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc3] to-[#ccca] backdrop-blur-sm">
        <Image src="/logo2.png" height={300} width={400} alt="Hero" />
      </div>

      <div className="md:max-w-[50%] antialiased drop-shadow-xl">
        <h1 className="text-6xl py-2 font-extrabold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text">
          The 14th Indonesian Student Mining Competition
        </h1>
        <h3
          className={`mt-6 text-2xl font-bold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${hind.className}`}
        >
          Welcome, let’s embrace unity, knowledge, and excellence here.
          #MineTheFuture
        </h3>
      </div>
    </section>
  );
}

export default Hero;