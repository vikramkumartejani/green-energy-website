import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Work from "./components/Work";
import OurTrustedSuppliersAndProducts from "./components/OurTrustedSuppliersAndProducts";
import ForYourInquiry from "./components/ForYourInquiry";
import Footer from "./components/Footer";
import OurAervices from "./components/OurAervices";
 import KeyDepartments from "./components/KeyDepartments";
import OurLocation from "./components/OurLocation";

export default function Home() {
  return (
    <div>
      <Navbar  data-aos="fade-up"/>
      <Hero  data-aos="fade-up"/>
      <AboutUs  data-aos="fade-up"/>
      <OurTeam  data-aos="fade-up"/>
      <KeyDepartments  data-aos="fade-up"/>
      <OurLocation  data-aos="fade-up"/>
      <Work  data-aos="fade-up"/>
      <OurAervices  data-aos="fade-up"/>
      <OurTrustedSuppliersAndProducts data-aos="fade-up" />
      <ForYourInquiry  data-aos="fade-up"/>
      <Footer data-aos="fade-up" />
    </div>
  );
}
