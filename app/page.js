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
import OurLocation from "./components/OurLocation";
import KeyDepartments from "./components/KeyDepartments";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurTeam />
      <KeyDepartments />
      <OurLocation />
      <Work />
      <OurAervices />
      <OurTrustedSuppliersAndProducts />
      <ForYourInquiry />
      <Footer />
    </div>
  );
}
