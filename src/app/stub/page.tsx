import Hero from "@/components/Hero";
import { IMAGE_PASH } from "@/consts/common/imagePass";
import { SEA_COMMON } from "@/consts/common/text";

export default function Stub() {
  return (
    <>
      <main>
        <Hero
          companyName={SEA_COMMON.COMPANY_NAME}
          backgroundImageUrl={IMAGE_PASH.HOME.HERO}
        />
      </main>
    </>
  );
}
