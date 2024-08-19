/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import useWaitlist from "@/components/providers/waitlist-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const initialFormValue = {
    "entry.1321230215": "",
    "entry.847868758": "",
    "entry.881683111": "",
    "entry.341762229": "",
    "entry.1945850391": "",
    "entry.1419066428": "",
    "entry.780254798": "",
    "entry.1449170415": "",
    "entry.1613011424": "",
    "entry.466139929": "",
}
export default function rough() {
    return (
        <>
            {/* First & Last Name */}
            <div className="form-group">
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

            {/* Email & Phone */}
            <div className="form-group">
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

            {/* Title, Preferred Method, Message For */}
            <div className="form-group">
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
        </>
    )
}
