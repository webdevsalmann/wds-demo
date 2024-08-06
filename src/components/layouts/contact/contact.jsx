import Section from "@/components/ui/section";
import FormBox from "./form";

export default function Contact({ className, heading, subTitle }) {
    return (
        <Section className={className}>
            <div className="section-wrapper relative grid md:grid-cols-2 gap-block">
                <div className="">
                    <h2 className="text-left">
                        {heading ? heading : "Get In Touch"}
                    </h2>

                    <p className="mb-base">
                        {subTitle || 'Reach out to us for any inquiries or assistance'}
                    </p>

                    <FormBox />
                </div>

                {/* Add Section */}
                <div className="w-full aspect-square">
                    <iframe className="size-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27698.38648715783!2d-95.826674!3d29.797925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b790d13ac78f%3A0xaa0bffeb2377637c!2sAndrews%20Fabrication!5e0!3m2!1sen!2sjp!4v1722503469004!5m2!1sen!2sjp" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>

                </div>
            </div>
        </Section >
    )
}
