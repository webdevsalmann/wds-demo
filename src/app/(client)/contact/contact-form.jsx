"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { LoaderCircle, Send } from "lucide-react";

export default function ContactForm() {
    const initialFormValue = {
        "entry.727782606": "",
        "entry.469037222": "",
        "entry.1344868066": "",
        "entry.473713592": "",
        "entry.1494750270": "",
        "entry.233219632": "",
        "entry.303251615": "",
        "entry.659131164": "",
    }
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState(initialFormValue);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
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

        setFormData(initialFormValue)
        console.log("Formatted Data:", formattedData);

        try {
            const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfe_FOJf-yR6OfyMwenoBryjCjyxHH0PyThsPWED4cgMbIM4g/formResponse", {
                method: "POST",
                body: formattedData,
                mode: "no-cors",
            });

            setIsSubmitted(true);
            toast({
                title: "🙂Thank you for reaching out to us.",
                description: "We'll be in touch soon!",
            });
        } catch (err) {
            setError("Something went wrong, please try again later.");
            setIsSubmitted(false);
            console.error("Error~", err)
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
            <form className="space-y-lg" onSubmit={handleSubmit}>
                {/* First & Last Name */}
                <div className="grid gap-base sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="entry.727782606">
                            First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="John"
                            name="entry.727782606"
                            id="entry.727782606"
                            value={formData["entry.727782606"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="entry.469037222">
                            Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="Doe"
                            name="entry.469037222"
                            id="entry.469037222"
                            value={formData["entry.469037222"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                {/* Title, Preferred Method, Message For */}
                <div className="grid gap-base sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    <div className="space-y-2">
                        <Label htmlFor="entry.1344868066">Title</Label>
                        <Select
                            value={formData["entry.1344868066"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, ["entry.1344868066"]: value })
                            }
                            name="entry.1344868066"
                            id="entry.1344868066"
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Mr">Mr.</SelectItem>
                                <SelectItem value="Mrs">Mrs.</SelectItem>
                                <SelectItem value="Miss">Miss</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="entry.473713592">Preferred Contact</Label>
                        <Select
                            value={formData["entry.473713592"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, ["entry.473713592"]: value })
                            }
                            name="entry.473713592"
                            id="entry.473713592"
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

                    <div className="space-y-2">
                        <Label htmlFor="entry.1494750270">
                            Message Type <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={formData["entry.1494750270"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, ["entry.1494750270"]: value })
                            }
                            name="entry.1494750270"
                            id="entry.1494750270"
                            required
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Business">Business</SelectItem>
                                <SelectItem value="Conference">Conference</SelectItem>
                                <SelectItem value="Question">Question</SelectItem>
                                <SelectItem value="Suggestion">Suggestion</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-base sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="entry.233219632">
                            Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="email"
                            placeholder="mail@address.com"
                            name="entry.233219632"
                            id="entry.233219632"
                            value={formData["entry.233219632"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="entry.303251615">Phone</Label>
                        <Input
                            type="tel"
                            placeholder="+1 (123) 456-7890"
                            name="entry.303251615"
                            id="entry.303251615"
                            value={formData["entry.303251615"]}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <Label htmlFor="entry.659131164">
                        Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                        className="w-full"
                        placeholder="Type your Message"
                        name="entry.659131164"
                        id="entry.659131164"
                        value={formData["entry.659131164"]}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="text-xs">On clicking on &quot;Send&quot; you are agreeing to our privacy-policy.</div>

                {/* Submit Button */}
                <div className="flex-center md:block">
                    <Button type="submit" disabled={loading || isSubmitted}>
                        {loading ? (
                            <>
                                <LoaderCircle className="mr-xs size-base animate-spin" />
                                <span>Sending</span>
                            </>
                        ) : (
                            <>
                                <Send className="mr-xs size-base" />
                                <span>Send{isSubmitted && "ed"}</span>
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}
