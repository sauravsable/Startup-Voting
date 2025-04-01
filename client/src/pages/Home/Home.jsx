import { Features } from "../../components/Features/Features";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { HomeCollection } from "../../components/HomeCollection/HomeCollection";
import { SocialLinks } from "../../components/SocialLinks/SocialLinks";

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <HomeCollection/>
        <Features/>
        <SocialLinks/>
    </div>
  )
}
