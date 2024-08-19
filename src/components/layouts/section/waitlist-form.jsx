"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { LoaderCircle, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import useWaitlist from "@/components/providers/waitlist-provider";

export default function WaitlistForm() {
    const { getSubmissionCount } = useWaitlist();
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        "entry.103675429": "",
        "entry.1658348171": "",
        "entry.264249751": "",
        "entry.1307653429": "",
        "entry.1938791065": "",
        "entry.578847054": "",
        "entry.1509032610": "",
        "entry.1522262866": "",
        "entry.1705422733": "",
        "entry.1371377710": "",
        "entry.529350982": false,
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setIsSubmitted(false);
        setError("");

        const formattedData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formattedData.append(key, value);
        });

        console.log("Formatted Data:", formattedData);

        try {
            const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLScG_Bx_-xJ9ATHVOMbWUd5iF3WRcvcxsWT6TJUSlo0-TRZU2Q/formResponse", {
                method: "POST",
                body: formattedData,
                mode: "no-cors",
            });

            setIsSubmitted(true);
            toast({
                title: "🎉 You're on the Waitlist!",
                description: "Thank you for applying. We'll be in touch soon!",
            });
            setTimeout(() => {
                getSubmissionCount()
            }, 3000);
        } catch (err) {
            setError("Something went wrong, please try again later.");
            setIsSubmitted(false);
            console.error("Error~",err)
            toast({
                variant: "destructive",
                title: "Error",
                description: "We couldn't process your request. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="p-base bg-secondary rounded-md overflow-hidden">
            <form className="mt-xl space-y-base" onSubmit={handleSubmit}>

                {/* First Name & Last Name */}
                <div className="grid gap-base sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    {/* First Name */}
                    <div className="space-y-2">
                        <Label htmlFor="entry.103675429">
                            First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="John"
                            name="entry.103675429"
                            id="entry.103675429"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {/* Last Name */}
                    <div className="space-y-2">
                        <Label htmlFor="entry.1658348171">
                            Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="Doe"
                            name="entry.1658348171"
                            id="entry.1658348171"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                {/* Title, Preferred Method, Message Type */}
                <div className="grid gap-base sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    {/* Title */}
                    <div className="space-y-2">
                        <Label htmlFor="entry.264249751">Title</Label>
                        <Select
                            value={formData["entry.264249751"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, "entry.264249751": value })
                            }
                            name="entry.264249751"
                            id="entry.264249751"
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Mr.">Mr.</SelectItem>
                                <SelectItem value="Mrs.">Mrs.</SelectItem>
                                <SelectItem value="Miss">Miss</SelectItem>
                                <SelectItem value="Blank">Blank</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Preferred Method */}
                    <div className="space-y-2">
                        <Label htmlFor="entry.1307653429">Preferred Contact</Label>
                        <Select
                            value={formData["entry.1307653429"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, "entry.1307653429": value })
                            }
                            name="entry.1307653429"
                            id="entry.1307653429"
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Email">Email</SelectItem>
                                <SelectItem value="Phone">Phone</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Message Type */}
                    <div className="space-y-2">
                        <Label htmlFor="entry.1938791065">
                            Booking Type <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={formData["entry.1938791065"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, "entry.1938791065": value })
                            }
                            name="entry.1938791065"
                            id="entry.1938791065"
                            required
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Beta User">Beta User</SelectItem>
                                <SelectItem value="Business Owner">Business Owner</SelectItem>
                                <SelectItem value="Researcher">Researcher</SelectItem>
                                <SelectItem value="Expo">Expo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-base sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="entry.578847054">
                            Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="email"
                            placeholder="mail@address.com"
                            name="entry.578847054"
                            id="entry.578847054"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="entry.1509032610">Phone</Label>
                        <Input
                            type="tel"
                            placeholder="+1 (123) 456-7890"
                            name="entry.1509032610"
                            id="entry.1509032610"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Location Field */}
                <div className="space-y-2">
                    <Label htmlFor="entry.1522262866">
                        Location (City, State, Country) <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        type="text"
                        placeholder="City, State, Country"
                        name="entry.1522262866"
                        id="entry.1522262866"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* How Did You Find Us */}
                <div className="space-y-2">
                    <Label htmlFor="entry.1705422733">How did you find us?</Label>
                    <Select
                        value={formData["entry.1705422733"]}
                        onValueChange={(value) =>
                            setFormData({ ...formData, "entry.1705422733": value })
                        }
                        name="entry.1705422733"
                        id="entry.1705422733"
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Social Media Posts">
                                Social Media Posts
                            </SelectItem>
                            <SelectItem value="Friends">Friends</SelectItem>
                            <SelectItem value="Ads">Ads</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Leave a Message */}
                <div className="space-y-2">
                    <Label htmlFor="entry.1371377710">Leave a Message (Optional)</Label>
                    <Textarea
                        className="w-full"
                        placeholder="Type your message here"
                        name="entry.1371377710"
                        id="entry.1371377710"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Checkbox */}
                <div className="items-top flex space-x-2">
                    <Checkbox
                        id="entry.529350982"
                        name="entry.529350982"
                        checked={formData.allowContact}
                        onCheckedChange={(checked) => {
                            setFormData(prevFormData => ({
                                ...prevFormData,
                                allowContact: checked
                            }));
                        }}

                    />
                    <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="entry.529350982">
                            Allow us to contact you for the next demo session.
                        </Label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex-center md:block">
                    <Button type="submit" disabled={loading || isSubmitted}>
                        {loading ? (
                            <>
                                <LoaderCircle className="mr-xs size-base animate-spin" />
                                <span>Joining</span>
                            </>
                        ) : (
                            <>
                                <Send className="mr-xs size-base" />
                                <span>Join the Waitlist</span>
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
