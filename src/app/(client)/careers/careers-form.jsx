"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { LoaderCircle, Send } from "lucide-react";
import FormInput from "@/components/ui/form/form-input";
import FormSelect from "@/components/ui/form/form-select";
import { Controller, useForm, } from "react-hook-form";
import { optional, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { formatData } from "@/lib/utils";

const formSchema = z.object({
    "1321230215": z.string().min(1, "First Name is required")
        .regex(/^[A-Za-z\s]+$/, "First Name should only contain letters"),
    "847868758": z.string().min(1, "Last Name is required")
        .regex(/^[A-Za-z\s]+$/, "Last Name should only contain letters"),
    "1945850391": z.string().min(1, "Email is required").email("Email format is not valid"),
    // "1419066428": z.optional(z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")),
    "1419066428": z.string().optional(),
    "881683111": z.string().optional(),
    "341762229": z.string().min(1, "Please select the role"),
    "780254798": z.string().min(1, "Please mention your education"),
    "1449170415": z.string().min(1, "Please mention your previous work experience"),
    "1613011424": z.string().optional(),
    "466139929": z.string().optional(),
},)

export default function CareersForm() {
    const [submitted, setSubmitted] = useState(false);
    const form = useForm({
        mode: "onTouched",
        resolver: zodResolver(formSchema)
    });
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful, } = formState;


    const onSubmit = async (data) => {
        try {
            await fetch("https://docs.google.com/forms/d/e/1FAIpQLScXeK7wq8AfEm6wyCRig0paPVyhxnm9Ki342E__ZzgY3gj1TQ/formResponse", {
                method: "POST",
                body: await formatData(data),
                mode: "no-cors",
            });

            toast({
                title: "🎉 Your request for job application has been sent successfully!",
                description: <div>
                    Thank you for applying. We&apos;ll get back to you shortly!,
                    At the meantime, checkout <Link className="underline underline-offset-2 hover:text-primary" href="/products"> how it works </Link> for more info.
                </div>,
                duration: 15000
            });

            setSubmitted(true)
        } catch (err) {
            console.error("Error~", err)
            toast({
                variant: "destructive",
                title: "Error",
                description: "We couldn't process your request. Please try again later.",
            });
        }
    };

    useEffect(() => { if (isSubmitSuccessful) { reset() } }, [isSubmitSuccessful, reset])

    return (
        <div className="p-base bg-secondary rounded-md overflow-hidden">
            <form className="space-y-base" onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* First Name & Last Name */}
                <div className="form-group">
                    <FormInput
                        label="First Name"
                        placeholder="John"
                        id="1321230215"
                        {...register("1321230215")}
                        error={errors["1321230215"]?.message}
                        required
                    />

                    <FormInput
                        label="Last Name"
                        placeholder="Doe"
                        id="847868758"
                        {...register("847868758")}
                        error={errors["847868758"]?.message}
                        required
                    />
                </div>

                {/* Email & Phone */}
                <div className="form-group">
                    {/* Email */}
                    <FormInput
                        required
                        placeholder="mail@address.com"
                        label="Email"
                        type="email"
                        id="1945850391"
                        {...register("1945850391")}
                        error={errors["1945850391"]?.message}
                    />

                    {/* Phone */}
                    <FormInput
                        // required
                        placeholder="+1 (123) 456-7890"
                        label="Phone"
                        type="tel"
                        id="1419066428"
                        {...register("1419066428")}
                        error={errors["1419066428"]?.message}
                    />
                </div>

                {/* Preferred Method, Message Type */}
                <div className="form-group">
                    <Controller
                        name="881683111"
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Preferred Contact Method"
                                id="881683111"
                                items={["Email", "Phone"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors["881683111"]?.message}
                            />
                        )}
                    />

                    <Controller
                        name="341762229"
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                required
                                label="Apply For Role"
                                id="341762229"
                                items={["Mechanical Engineer", "Software Engineer", "Web Developer", "Sales & Marketing Associate", "Flight Test Operator", "Other"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors["341762229"]?.message}
                            />
                        )}
                    />
                </div>

                {/* Education & Experience */}
                <div className="form-group">
                    {/* Education*/}
                    <FormInput
                        required
                        textarea
                        placeholder="School, Major, Graduation Year"
                        label="Education"
                        id="780254798"
                        {...register("780254798")}
                        error={errors["780254798"]?.message}
                    />

                    <FormInput
                        required
                        textarea
                        placeholder="Describe the projects that you have done. (Optional)"
                        label="Work Experience"
                        id="1449170415"
                        {...register("1449170415")}
                        error={errors["1449170415"]?.message}
                    />
                </div>

                {/* Linkedin / Social Media Profile */}
                <FormInput
                    placeholder="https://linkedin.com/..."
                    label="LinkedIn / Social Media Profile"
                    id="1613011424"
                    {...register("1613011424")}
                    error={errors["1613011424"]?.message}
                />

                {/* Message */}
                <FormInput
                    textarea
                    placeholder="Leave a Message (Optional)"
                    label="Message"
                    id="466139929"
                    {...register("466139929")}
                    error={errors["466139929"]?.message}
                />


                {/* Submit Button */}
                <div className="flex-center md:block">
                    <Button className="flex items-center capitalize" type="submit" disabled={!isDirty || !isValid || isSubmitting || isSubmitSuccessful}>
                        {isSubmitting && <LoaderCircle className="mr-xs size-base animate-spin" />}
                        Appl{submitted ? "ied" : (isSubmitting ? "ing" : "y")}
                    </Button>
                </div>
            </form>
        </div>
    )
}
