import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import { IMAGE_PASH } from "@/consts/common/imagePass";
import { SEA_COMMON } from "@/consts/common/text";
import { slideData } from "@/consts/sliderItems";

export default function Stub() {
  return (
    <>
      <main>
        <Hero
          companyName={SEA_COMMON.COMPANY_NAME}
          backgroundImageUrl={IMAGE_PASH.HOME.HERO}
        />
        <Slider items={slideData} />
      </main>
    </>
  );
}
