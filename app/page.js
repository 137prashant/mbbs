import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import MedicalUniversities from "./components/MedicalUniversities";
import Footer from "./components/Footer";
import Form from "./components/Form";
import WhyUzbekistanMedi from "./components/WhyUzbekistanMedi";
import Services from "./components/Services";
import PartnersAndStudents from "./components/PartnerAndStudents";
import BlogsGalleryQuestion from "./components/BlogsGalleryQuestion";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <MedicalUniversities />
      <WhyUzbekistanMedi />
      <Services />
      <PartnersAndStudents />
      <BlogsGalleryQuestion />
      <Form />
      <Footer />
    </>
  );
}
