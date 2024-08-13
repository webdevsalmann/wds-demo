"use client"
import { useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Section from "@/components/ui/section";
import Image from "next/image";
import { LoaderCircle, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function Eligibility() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    setIsSubmitted(false);
    setError(false);
    
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSePAOTJ8jyGNUrCIJ0ksuEgPJ8VwHmclerZAQJl8D-47rJLNg/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      
      setIsSubmitted(true);
      toast({
        title: "🎉 Request Send Successfully ",
      })
    } catch (err) {
      setError(true);
      setIsSubmitted(false);
    } finally {
      setLoading(false)
    }
  };



  return (
    <Section id="request-demo" sectionClassName="-mt-block">
      <div className="px-base py-xl bg-primary rounded-md md:rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-block">
          <div className="relative hidden md:block mx-auto md:w-full lg:w-4/5">
            <div className="absolute -top-block -left-[10rem] size-[20rem] bg-background rounded-full border border-black/50" />
            <Image
              className="w-full h-fit rounded object-center object-contain aspect-square animate-bounce-slow"
              src="/images/common/drone.png"
              height={200}
              width={200}
              alt="Drone Image"
            />
          </div>

          <div className="flex-center">
            <div>
              <FadeUp>
                <h2 className="text-primary-foreground">
                  Apply For Our{" "}
                  <span className="text-primary bg-primary-foreground">
                    Free Demo
                  </span>{" "}
                  Session
                </h2>
              </FadeUp>
              <form className="space-y-base" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label className="text-primary-foreground" htmlFor="entry.173140650">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    name="entry.173140650"
                    id="entry.173140650"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-primary-foreground" htmlFor="entry.170155236">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="johndoe007@mail.com"
                    name="entry.170155236"
                    id="entry.170155236"
                    required
                  />
                </div>
                {error &&
                  <p className="text-red-300 font-medium">Something went wrong, please try after few minutes.</p>
                }
                <div className="flex-center md:block">
                  <Button variant="secondary" type="submit" disabled={loading || isSubmitted}>
                    {loading
                      ? (<>
                        <LoaderCircle className="mr-xs size-base animate-spin" />
                        <span>Applying</span>
                      </>)
                      : (<>
                        <Send className="mr-xs size-base" />
                        <span>Appl{isSubmitted ? "ied" : "y"}</span>
                      </>)
                    }
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
