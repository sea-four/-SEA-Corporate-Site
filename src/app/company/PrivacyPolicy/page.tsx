import Hero from "@/components/Hero/Hero";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import { IMAGE_PASH } from "@/consts/common/imagePass";

export default function PrivacyPage() {
  return (
    <main>
      <Hero
        companyName={"プライバシーポリシー"}
        backgroundImageUrl={IMAGE_PASH.HOME.HERO}
      />
      <PrivacyPolicy />
    </main>
  );
}
