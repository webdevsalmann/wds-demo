"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import FormSelect from "@/components/ui/form/form-select";
import FormInput from "@/components/ui/form/form-input";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { formatData } from "@/lib/utils";
import useWaitlist from "@/components/providers/waitlist-provider";

const formSchema = z.object({
    "103675429": z.string().min(1, "First Name is required")
        .regex(/^[A-Za-z\s]+$/, "First Name should only contain letters"),
    "1658348171": z.string().min(1, "Last Name is required")
        .regex(/^[A-Za-z\s]+$/, "Last Name should only contain letters"),
    "578847054": z.string().min(1, "Email is required").email("Email format is not valid"),
    // "1509032610": z.optional(z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")),
    "1509032610": z.string().optional(),
    "1307653429": z.string().optional(),
    "1938791065": z.string().min(1, "Booking type is required"),
    "1522262866": z.string().min(1, "Location is required"),
    "1705422733": z.string().min(1, "Les us know where you find us"),
    "1371377710": z.string().optional(),
},)


export default function WaitlistForm() {
    const [submitted, setSubmitted] = useState(false);
    const form = useForm({
        mode: "onTouched",
        resolver: zodResolver(formSchema)
    });
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;

    const onSubmit = async (data) => {
        try {
            await fetch("https://docs.google.com/forms/d/e/1FAIpQLScG_Bx_-xJ9ATHVOMbWUd5iF3WRcvcxsWT6TJUSlo0-TRZU2Q/formResponse", {
                method: "POST",
                body: await formatData(data),
                mode: "no-cors",
            });

            toast({
                title: "🎉 You're on the Waitlist!",
                description: <div>
                    Thank you for applying. We&apos;ll be in touch soon!,
                    At the meantime, checkout <Link className="underline underline-offset-2 hover:text-primary" href="/how-it-works"> how it works </Link> for more info.
                </div>,
                duration: 15000
            });

            setSubmitted(true)
            setTimeout(() => {
                getSubmissionCount()
            }, 3000);
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
        <div className="p-base h-fit bg-secondary rounded-md overflow-hidden">
            <form className="space-y-base" onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* First Name & Last Name */}
                <div className="form-group">
                    <FormInput
                        required
                        placeholder="John"
                        label="First Name"
                        id="103675429"
                        {...register("103675429")}
                        error={errors["103675429"]?.message}
                    />
                    <FormInput
                        required
                        placeholder="Doe"
                        label="Last Name"
                        id="1658348171"
                        {...register("1658348171")}
                        error={errors["1658348171"]?.message}
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
                        id="578847054"
                        {...register("578847054")}
                        error={errors["578847054"]?.message}
                    />

                    {/* Phone */}
                    <FormInput
                        // required
                        placeholder="+1 (123) 456-7890"
                        label="Phone"
                        type="tel"
                        id="1509032610"
                        {...register("1509032610")}
                        error={errors["1509032610"]?.message}
                    />
                </div>


                {/* Preferred Method & Message Type */}
                <div className="form-group">
                    {/* Preferred Contact */}
                    <Controller
                        name="1307653429"
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Preferred Contact Method"
                                id="1307653429"
                                items={["Email", "Phone"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors["1307653429"]?.message}
                            />
                        )}
                    />

                    {/* Booking Type */}
                    <Controller
                        name="1938791065"
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Booking Type"
                                id="1938791065"
                                items={["Beta User", "Business Owner", "Researcher", "Expo"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors["1938791065"]?.message}
                                required
                            />
                        )}
                    />
                </div>

                {/* Location & Find Us */}
                <div className="form-group">
                    {/* Location */}
                    <FormInput
                        required
                        placeholder="City, State, Country"
                        label="Location (City, State, Country)"
                        id="1522262866"
                        {...register("1522262866")}
                        error={errors["1522262866"]?.message}
                    />

                    {/* Find Us */}
                    <Controller
                        name="1705422733"
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                required
                                label="How did you find us?"
                                id="1705422733"
                                items={["Social Media Posts", "Friends", "Ads", "Other"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors["1705422733"]?.message}
                            />
                        )}
                    />
                </div>

                {/* Message */}
                <FormInput
                    textarea
                    placeholder="Leave a Message (Optional)"
                    label="Message"
                    id="1371377710"
                    {...register("1371377710")}
                    error={errors["1371377710"]?.message}
                />

                {/* Submit Button */}
                <div className="flex-center md:block">
                    <Button className="flex items-center capitalize" type="submit" disabled={!isDirty || !isValid || isSubmitting || isSubmitSuccessful}>
                        {isSubmitting && <LoaderCircle className="mr-xs size-base animate-spin" />}
                        Join{submitted ? "ed" : (!isSubmitting && " For Free")}
                    </Button>
                </div>
            </form>
        </div>
    );
}
