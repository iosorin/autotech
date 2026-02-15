"use client";

import React, { useState } from "react";
import { cn } from "@utils";
import { toast } from "sonner";
import { Label } from "@ui/atoms/label";
import { Input } from "@ui/atoms/input";
import { Button } from "@ui/atoms/button";
import { Textarea } from "@ui/atoms/textarea";

type ISelect = {
    id: string;
    type: "select";
    required?: boolean;
    label: React.ReactNode;
    placeholder: string;
    options: string[];
};

type IInput = {
    id: string;
    type: "text" | "tel" | "email" | "textarea" | "checkbox";
    required?: boolean;
    label: React.ReactNode;
    placeholder: string;
};


export type IField = ISelect | IInput;

export type IForm = {
    heading?: string;
    fields: IField[];
    className?: string;
    submitLabel?: string;
    onSubmit: (formData: FormData) => Promise<unknown>;
};

const REQUIRED = "Заполните поле";
const CHECKED = "true";

export const Form = ({
    heading,
    fields,
    onSubmit,
    className,
    submitLabel = "Отправить",
}: IForm) => {
    const initial = fields.reduce<Record<string, string>>((acc, f) => {
        acc[f.id] = "";
        return acc;
    }, {});
    const [data, setData] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const nextErrors = fields.reduce<Record<string, string>>((acc, f) => {
            if (f.required && !data[f.id]?.trim()) acc[f.id] = REQUIRED;
            return acc;
        }, {});

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) return;

        setLoading(true);

        const formData = fields.reduce<FormData>((acc, f) => (acc.set(f.id, data[f.id].trim()), acc), new FormData());

        onSubmit(formData)
            .then(() => {
                toast.success("Сообщение успешно отправлено")
                setSuccess(true)
            })
            .catch(() => toast.error("Ошибка при отправке сообщения"))
            .finally(() => setLoading(false));
    };

    const onChange = (id: string, value: string) => {
        setSuccess(false);
        setData((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
    };

    const renderField = (field: IField) => {
        const label = (
            <Label htmlFor={field.id} className="text-foreground">
                {field.label}
            </Label>
        );

        const error = errors[field.id] && <p className="text-sm text-destructive">{errors[field.id]}</p>;

        if (field.type === "textarea") {
            return (
                <div key={field.id} className="space-y-2">
                    {label}
                    <Textarea
                        id={field.id}
                        placeholder={field.placeholder}
                        value={data[field.id]}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        className={cn(errors[field.id] && "border-destructive", "resize-none")}
                        aria-invalid={!!errors[field.id]}
                        rows={4}
                    />
                    {error}
                </div>
            );
        }
        if (field.type === "select") {
            return (
                <div key={field.id} className="space-y-2">
                    {label}
                    <select
                        id={field.id}
                        value={data[field.id]}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm",
                            errors[field.id] && "border-destructive"
                        )}
                        aria-invalid={!!errors[field.id]}
                    >
                        <option value="" disabled>
                            {field.placeholder}
                        </option>
                        {field.options.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                    {error}
                </div>
            );
        }
        if (field.type === "checkbox") {
            return (
                <div key={field.id} className="space-y-2">
                    <div className="flex items-center gap-3">
                        <input
                            id={field.id}
                            type="checkbox"
                            checked={data[field.id] === CHECKED}
                            onChange={(e) => onChange(field.id, e.target.checked ? CHECKED : "")}
                            className="size-4 rounded border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            aria-invalid={!!errors[field.id]}
                        />
                        {label}
                    </div>
                    {error}
                </div>
            );
        }

        return (
            <div key={field.id} className="space-y-2">
                {label}
                <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={data[field.id]}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    className={errors[field.id] ? "border-destructive" : ""}
                    aria-invalid={!!errors[field.id]}
                />
                {error}
            </div>
        );
    };

    return (
        <form
            className={cn(
                "rounded-2xl p-6 md:p-8 bg-background w-full shadow-lg",
                className
            )}
            onSubmit={handleSubmit}
        >
            {heading && <h3 className="mb-6">{heading}</h3>}

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    {fields.map(renderField)}
                </div>

                <Button type="submit" size="xl" className="self-start" disabled={loading || success}>
                    {success ? "Сообщение отправлено" : submitLabel}
                </Button>
            </div>
        </form>
    );
};

export default Form;