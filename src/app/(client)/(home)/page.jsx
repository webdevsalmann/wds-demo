import Eligibility from "./eligibility";
import Features from "./features";
import Hero from "./hero";
import WhyUs from "./why-us";
import Working from "./working";

export default function page() {
  return (
    <main>
      <Hero />
      <Features />
      <Working />
      <Eligibility />
      {/* <WhyUs /> */}
    </main>
  )
}
