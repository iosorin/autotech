"use client";

import React from "react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@utils";
import { toast } from "sonner";
import { Button } from "@ui/atoms/button";
import { Input } from "@ui/atoms/input";
import { Textarea } from "@ui/atoms/textarea";
import { Label } from "@ui/atoms/label";


type Props = {
  heading?: string;
  topics: string[];
  className?: string;
  onSubmit: (formData: FormData) => Promise<unknown>;
};

const REQUIRED_FIELD = "Заполните поле";

export const Contact = ({ heading, topics, className, onSubmit }: Props) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [data, setData] = useState({
    name: "",
    phone: "",
    topic: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = data.name.trim();
    const phone = data.phone.trim();
    const nextErrors: { name?: string; phone?: string } = {};
    if (!name) nextErrors.name = REQUIRED_FIELD;
    if (!phone) nextErrors.phone = REQUIRED_FIELD;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    const fd = new FormData();
    fd.set("name", name);
    fd.set("phone", phone);
    fd.set("topic", data.topic);
    fd.set("message", data.message);
    if (data.agree) fd.set("agree", "1");

    onSubmit(fd)
      .then(() => toast.success("Сообщение отправлено"))
      .catch(() => toast.error("Ошибка при отправке сообщения"))
      .finally(() => setLoading(false));
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
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-foreground">
            Имя <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contact-name"
            type="text"
            placeholder="Введите ваше имя"
            value={data.name}
            onChange={(e) => {
              setData((prev) => ({ ...prev, name: e.target.value }));
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            className={errors.name ? "border-destructive" : ""}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-phone" className="text-foreground">
            Мобильный телефон <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="+7 (999) 999-99-99"
            value={data.phone}
            onChange={(e) => {
              setData((prev) => ({ ...prev, phone: e.target.value }));
              if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
            }}
            className={errors.phone ? "border-destructive" : ""}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          {errors.phone && (
            <p id="contact-phone-error" className="text-sm text-destructive">
              {errors.phone}
            </p>
          )}
        </div>

        {topics?.length > 0 && (
          <div className="space-y-2">
            <Label htmlFor="contact-topic" className="sr-only">
              Тема обращения
            </Label>
            <select
              id="contact-topic"
              value={data.topic}
              onChange={(e) =>
                setData((prev) => ({ ...prev, topic: e.target.value }))
              }
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
            >
              <option value="" disabled>
                Выберите тему обращения
              </option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="contact-message" className="text-foreground">
            Опишите вопрос или проблему
          </Label>
          <Textarea
            id="contact-message"
            placeholder="Опишите вопрос или проблему"
            rows={4}
            value={data.message}
            onChange={(e) =>
              setData((prev) => ({ ...prev, message: e.target.value }))
            }
            className="resize-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            id="contact-agree"
            type="checkbox"
            checked={data.agree}
            onChange={(e) =>
              setData((prev) => ({ ...prev, agree: e.target.checked }))
            }
            className="h-4 w-4 rounded border border-input"
          />
          <Label
            htmlFor="contact-agree"
            className="cursor-pointer text-muted-foreground font-normal"
          >
            Я принимаю условия обработки персональных данных
          </Label>
        </div>

        <Button
          type="submit"
          size="xl"
          className="self-start"
          disabled={loading}
        >
          Отправить
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};

export default Contact;