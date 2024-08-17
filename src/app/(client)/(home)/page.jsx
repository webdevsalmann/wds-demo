import About from "./about";
import Data from "./data";
import Eligibility from "./eligibility";
import Features from "./features";
import Hero from "./hero";
import Services from "./services";
import Technology from "./technology";
import WhyUs from "./why-us";
import Working from "./working";

export default function page() {
  return (
    <main>
      <Hero />
      <Features />
      <Technology />
      <Data />
      <About />
      <Working />
      <Services />
      <Eligibility />
      {/* <WhyUs /> */}
    </main>
  )
}
