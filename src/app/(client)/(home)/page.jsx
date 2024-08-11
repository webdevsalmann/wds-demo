import About from "./about";
import Eligibility from "./eligibility";
import Features from "./features";
import Hero from "./hero";
import Services from "./services";
import WhyUs from "./why-us";
import Working from "./working";

export default function page() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Working />
      <Services />
      <Eligibility />
      {/* <WhyUs /> */}
    </main>
  )
}
