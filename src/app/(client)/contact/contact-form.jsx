"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import FormInput from "@/components/ui/form/form-input";
import FormSelect from "@/components/ui/form/form-select";
import { formatData } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    "727782606": z.string().min(1, "First Name is required")
        .regex(/^[A-Za-z\s]+$/, "First Name should only contain letters"),
    "469037222": z.string().min(1, "Last Name is required")
        .regex(/^[A-Za-z\s]+$/, "Last Name should only contain letters"),
    "233219632": z.string().min(1, "Email is required").email("Email format is not valid"),
    // "303251615": z.optional(z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")),
    "303251615": z.string().optional(),
    "473713592": z.string().optional(),
    "1494750270": z.string().min(1, "Please select message type"),
    "659131164": z.string().optional(),
},)

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const form = useForm({
        mode: "onTouched",
        resolver: zodResolver(formSchema)
    });
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;

    const onSubmit = async (data) => {
        try {
            await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfe_FOJf-yR6OfyMwenoBryjCjyxHH0PyThsPWED4cgMbIM4g/formResponse", {
                method: "POST",
                body: await formatData(data),
                mode: "no-cors",
            });

            toast({
                title: "🙂Thank you for reaching out to us.",
                description: <div>
                    We&apos;ll be in touch soon!, At the meantime, checkout <Link className="underline underline-offset-2 hover:text-primary" href="/how-it-works"> how our product works </Link> for more info.
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
            <form className="space-y-lg" onSubmit={handleSubmit(onSubmit)} noValidate>


                {/* First Name & Last Name */}
                <div className="form-group">
                    <FormInput
                        required
                        placeholder="John"
                        label="First Name"
                        id="727782606"
                        {...register("727782606")}
                        error={errors["727782606"]?.message}
                    />
                    <FormInput
                        required
                        placeholder="Doe"
                        label="Last Name"
                        id="469037222"
                        {...register("469037222")}
                        error={errors["469037222"]?.message}
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
                        id="233219632"
                        {...register("233219632")}
                        error={errors["233219632"]?.message}
                    />

                    {/* Phone */}
                    <FormInput
                        // required
                        placeholder="+1 (123) 456-7890"
                        label="Phone"
                        type="tel"
                        id="303251615"
                        {...register("303251615")}
                        error={errors["303251615"]?.message}
                    />
                </div>


                {/* Preferred Method & Message Type */}
                <div className="form-group">
                    {/* Preferred Contact */}
                    <Controller
                        name="473713592"
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Preferred Contact Method"
                                id="473713592"
                                items={["Email", "Phone"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors["473713592"]?.message}
                            />
                        )}
                    />

                    {/* Message Type */}
                    <Controller
                        name="1494750270"
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Message Type"
                                id="1494750270"
                                items={["Business", "Conference", "Question", "Suggestion", "Other"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors["1494750270"]?.message}
                                required
                            />
                        )}
                    />
                </div>


                {/* Message */}
                <FormInput
                    textarea
                    placeholder="Leave a Message (Optional)"
                    label="Message"
                    id="659131164"
                    {...register("659131164")}
                    error={errors["659131164"]?.message}
                />

                {/* Submit Button */}
                <div className="flex-center md:block">
                    <Button className="flex items-center capitalize" type="submit" disabled={!isDirty || !isValid || isSubmitting || isSubmitSuccessful}>
                        {isSubmitting && <LoaderCircle className="mr-xs size-base animate-spin" />}
                        Submit{submitted ? "ed" : (isSubmitting && "ing")}
                    </Button>
                </div>
            </form>
        </div>
    )
}
