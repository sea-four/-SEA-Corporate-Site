import CEOMessage from "@/components/CEOMessage/CEOMessage";
import Hero from "@/components/Hero/Hero";
import { IMAGE_PASH } from "@/consts/common/imagePass";

export default function Profile() {
  return (
    <main>
      <Hero
        companyName={"代表者メッセージ"}
        backgroundImageUrl={IMAGE_PASH.HOME.HERO}
      />
      <CEOMessage />
    </main>
  );
}
