import React from 'react'

export default function RoughFinal() {
    return (
        <>

            {/* First Name & Last Name */}
            <div className="form-group">
                <FormInput
                    required
                    placeholder="John"
                    label="First Name"
                    id="103675429"
                    {...register("103675429", {
                        required: "First Name is required"
                    })}
                    error={errors["103675429"]?.message}
                />
                <FormInput
                    required
                    placeholder="Doe"
                    label="Last Name"
                    id="1658348171"
                    {...register("1658348171", {
                        required: "Last Name is required"
                    })}
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
                    {...register("578847054", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email format",
                        },
                    })}
                    error={errors["578847054"]?.message}
                />

                {/* Phone */}
                <FormInput
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
                            label="Preferred Contact"
                            id="1307653429"
                            items={["Email", "Phone"]}
                            value={field.value}
                            onValueChange={field.onChange}
                            error={errors.preferredContact?.message}
                        />
                    )}
                />

                {/* Booking Type */}
                <Controller
                    name="1938791065"
                    control={control}
                    rules={{ required: "Booking Type is required" }}
                    render={({ field }) => (
                        <FormSelect
                            label="Booking Type"
                            id="1938791065"
                            items={["Beta User", "Business Owner", "Researcher", "Expo"]}
                            value={field.value}
                            onValueChange={field.onChange}
                            error={errors.bookingType?.message}
                            required
                        />
                    )}
                />
            </div>


            
        </>
    )
}
