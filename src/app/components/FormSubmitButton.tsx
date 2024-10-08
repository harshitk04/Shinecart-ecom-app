"use client"

import React, { ComponentProps, useState } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
    children : React.ReactNode;
    className?: string
} & ComponentProps<"button">;

export default function FormSubmitButton(
    {children,className,...props}:FormSubmitButtonProps)
    {
    const {pending} = useFormStatus();
    return (
                <button
                    {...props}
                    className={`${className}`}
                    type="submit"
                    disabled={pending}
                >
                    {pending && <span className="loading loading-spinner"/>}
                    {children}
                </button>
    );
}