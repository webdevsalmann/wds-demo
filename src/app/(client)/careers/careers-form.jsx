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

export default function CareersForm() {
    const initialFormValue = {
        "entry.1321230215": "",
        "entry.847868758": "",
        "entry.592946732": "",
        "entry.881683111": "",
        "entry.341762229": "",
        "entry.1945850391": "",
        "entry.1419066428": "",
        "entry.780254798": "",
        "entry.1449170415": "",
        "entry.1613011424": "",
        "entry.466139929": "",
        "entry.114523142": "",
    }
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState(initialFormValue);

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

        setFormData(initialFormValue)
        console.log("Formatted Data:", formattedData);


        try {
            const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLScXeK7wq8AfEm6wyCRig0paPVyhxnm9Ki342E__ZzgY3gj1TQ/formResponse", {
                method: "POST",
                body: formattedData,
                mode: "no-cors",
            });

            setIsSubmitted(true);
            toast({
                title: "🎉 Your request for job application has been sent successfully!",
                description: "Thank you for applying. We'll be in touch soon!",
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
                        <Label htmlFor="entry.1321230215">
                            First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="John"
                            name="entry.1321230215"
                            id="entry.1321230215"
                            value={formData["entry.1321230215"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="entry.847868758">
                            Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="Doe"
                            name="entry.847868758"
                            id="entry.847868758"
                            value={formData["entry.847868758"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                {/* Title, Preferred Method, Message Type */}
                <div className="grid gap-base sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    <div className="space-y-2">
                        <Label htmlFor="entry.592946732">Title</Label>
                        <Select
                            value={formData["entry.592946732"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, "entry.592946732": value })
                            }
                            name="entry.592946732"
                            id="entry.592946732"
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Mr">Mr.</SelectItem>
                                <SelectItem value="Mrs">Mrs.</SelectItem>
                                <SelectItem value="Miss">Miss</SelectItem>
                                <SelectItem value="Blank">Blank</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="">Preferred Contact</Label>
                        <Select
                            value={formData["entry.881683111"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, "entry.881683111": value })
                            }
                            name="entry.881683111"
                            id="entry.881683111"
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
                        <Label htmlFor="entry.341762229">
                            Apply for Role <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={formData["entry.341762229"]}
                            onValueChange={(value) =>
                                setFormData({ ...formData, "entry.341762229": value })
                            }
                            name="entry.341762229"
                            id="entry.341762229"
                            required
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Mechanical Engineer">Mechanical Engineer</SelectItem>
                                <SelectItem value="Software Engineer">Software Engineer</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-base sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="entry.1945850391">
                            Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="email"
                            placeholder="mail@address.com"
                            name="entry.1945850391"
                            id="entry.1945850391"
                            value={formData["entry.1945850391"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="entry.1419066428">Phone</Label>
                        <Input
                            type="tel"
                            placeholder="+1 (123) 456-7890"
                            name="entry.1419066428"
                            id="entry.1419066428"
                            value={formData["entry.1419066428"]}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Education & Experience */}
                <div className="grid gap-base sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="entry.780254798">
                            Education <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                            className="w-full"
                            placeholder="School, Major, Graduation Year"
                            name="entry.780254798"
                            id="entry.780254798"
                            value={formData["entry.780254798"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="entry.1449170415">
                            Work Experience <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                            className="w-full"
                            placeholder="Describe your experience"
                            name="entry.1449170415"
                            id="entry.1449170415"
                            value={formData["entry.1449170415"]}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                {/* Linkedin / Social Media Profile */}
                <div className="space-y-2">
                    <Label htmlFor="entry.1613011424">
                        LinkedIn / Social Media Profile  (Optional)
                    </Label>
                    <Input
                        type="text"
                        placeholder="https://linkedin.com/..."
                        name="entry.1613011424"
                        id="entry.1613011424"
                        value={formData["entry.1613011424"]}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <Label htmlFor="entry.466139929">
                        Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                        className="w-full"
                        placeholder="Type your Message"
                        name="entry.466139929"
                        id="entry.466139929"
                        value={formData["entry.466139929"]}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Checkbox */}
                <div className="items-top flex space-x-2">
                    <Checkbox
                        id="entry.114523142"
                        name="entry.114523142"
                        checked={formData["entry.114523142"]}
                        onCheckedChange={(checked) => {
                            setFormData(prevFormData => ({
                                ...prevFormData,
                                "entry.114523142": checked
                            }));
                        }}
                    />
                    <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="entry.114523142">
                            Allow us to contact you for job opportunities.
                        </Label>
                    </div>
                </div>


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
