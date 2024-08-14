"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200, // Increase offset for earlier animation trigger
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh(); // Force AOS to recalculate positions on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
