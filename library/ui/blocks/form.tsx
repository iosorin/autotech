"use client";

import React, { useState } from "react";
import { cn } from "@utils";
import { toast } from "sonner";
import { Label } from "@ui/atoms/label";
import { Input } from "@ui/atoms/input";
import { Button } from "@ui/atoms/button";
import { Textarea } from "@ui/atoms/textarea";

type FieldSelect = {
    id: string;
    type: "select";
    required?: boolean;
    label: string;
    placeholder: string;
    options: string[];
};

type FieldOther = {
    id: string;
    type: "text" | "tel" | "email" | "textarea";
    required?: boolean;
    label: string;
    placeholder: string;
};

type Field = FieldSelect | FieldOther;

type Props = {
    heading?: string;
    fields: Field[];
    onSubmit: (formData: FormData) => Promise<unknown>;
    className?: string;
    submitLabel?: string;
    agree?: React.ReactNode;
};

const REQUIRED = "Заполните поле";

export const Contact = ({
    heading,
    fields,
    onSubmit,
    className,
    submitLabel = "Отправить",
    agree,
}: Props) => {
    const initial = fields.reduce<Record<string, string>>((acc, f) => {
        acc[f.id] = "";
        return acc;
    }, {});
    const [data, setData] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [agreeChecked, setAgreeChecked] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const nextErrors: Record<string, string> = {};
        fields.forEach((f) => {
            if (f.required && !data[f.id]?.trim()) nextErrors[f.id] = REQUIRED;
        });
        if (agree !== undefined && !agreeChecked) nextErrors.agree = REQUIRED;
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setLoading(true);
        const fd = new FormData();
        fields.forEach((f) => fd.set(f.id, data[f.id].trim()));
        if (agreeChecked) fd.set("agree", "1");

        onSubmit(fd)
            .then(() => toast.success("Сообщение отправлено"))
            .catch(() => toast.error("Ошибка при отправке"))
            .finally(() => setLoading(false));
    };

    const update = (id: string, value: string) => {
        setData((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn(
                "rounded-2xl p-6 md:p-8 bg-background w-full shadow-lg",
                className
            )}
        >
            {heading && <h3 className="mb-6">{heading}</h3>}
            <div className="flex flex-col gap-4">
                {fields.map((field) => (
                    <div key={field.id} className="space-y-2">
                        <Label htmlFor={field.id} className="text-foreground">
                            {field.label}
                            {field.required && <span className="text-destructive"> *</span>}
                        </Label>
                        {field.type === "textarea" ? (
                            <Textarea
                                id={field.id}
                                placeholder={field.placeholder}
                                value={data[field.id]}
                                onChange={(e) => update(field.id, e.target.value)}
                                className={cn(errors[field.id] && "border-destructive", "resize-none")}
                                aria-invalid={!!errors[field.id]}
                                rows={4}
                            />
                        ) : field.type === "select" ? (
                            <select
                                id={field.id}
                                value={data[field.id]}
                                onChange={(e) => update(field.id, e.target.value)}
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
                        ) : (
                            <Input
                                id={field.id}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={data[field.id]}
                                onChange={(e) => update(field.id, e.target.value)}
                                className={errors[field.id] ? "border-destructive" : ""}
                                aria-invalid={!!errors[field.id]}
                            />
                        )}
                        {errors[field.id] && (
                            <p className="text-sm text-destructive">{errors[field.id]}</p>
                        )}
                    </div>
                ))}
                {agree !== undefined && (
                    <div className="flex items-start gap-2">
                        <input
                            id="form-agree"
                            type="checkbox"
                            checked={agreeChecked}
                            onChange={(e) => {
                                setAgreeChecked(e.target.checked);
                                if (errors.agree) setErrors((prev) => ({ ...prev, agree: "" }));
                            }}
                            className="h-4 w-4 mt-0.5 rounded border border-input flex-shrink-0"
                            aria-required
                            aria-invalid={!!errors.agree}
                        />
                        <Label
                            htmlFor="form-agree"
                            className="cursor-pointer text-muted-foreground font-normal"
                        >
                            {agree}
                        </Label>
                    </div>
                )}
                {errors.agree && <p className="text-sm text-destructive">{errors.agree}</p>}
                <Button type="submit" size="xl" className="self-start" disabled={loading}>
                    {submitLabel}
                </Button>
            </div>
        </form>
    );
};

export default Contact;