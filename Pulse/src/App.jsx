import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Herosection />
        <Pricing />
        <Testimonials />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
