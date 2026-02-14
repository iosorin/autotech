"use client";

import React from "react"

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@utils";
import { toast } from "sonner";
import { Button } from "../atoms/button";


type Props = {
  heading?: string;
  topics: string[];
  className?: string;
  onSubmit: (formData: FormData) => Promise<unknown>;
}

export const Contact = ({ heading, topics, className, onSubmit }: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    topic: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    onSubmit(new FormData(e.target as HTMLFormElement))
      .then(() => toast.success("Сообщение отправлено"))
      .catch(() => toast.error("Ошибка при отправке сообщения"))
      .finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("rounded-2xl p-6 md:p-8 bg-background w-full shadow-lg", className)}
    >
      {heading &&
        <h3 className="mb-6">
          {heading}
        </h3>
      }

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="contact-name" className="block font-medium text-foreground mb-1.5">
            {"Имя"}
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Введите ваше имя"
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full rounded-lg border border-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-background"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block font-medium text-foreground mb-1.5">
            Мобильный телефон
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+7 (999) 999-99-99"
            value={data.phone}
            onChange={(e) =>
              setData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full rounded-lg border border-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-background"
          />
        </div>


        {topics?.length > 0 && (
          <div>
            <label htmlFor="contact-topic" className="sr-only">{"Тема обращения"}</label>
            <select
              id="contact-topic"
              value={data.topic}
              onChange={(e) =>
                setData((prev) => ({ ...prev, topic: e.target.value }))
              }
              className="w-full rounded-lg border border-input px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-background appearance-none"
            >
              <option value="" disabled>
                {"Выберите тему обращения"}
              </option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="contact-message" className="block font-medium text-foreground mb-1.5">
            {"Опишите вопрос или проблему"}
          </label>
          <textarea
            id="contact-message"
            placeholder="Опишите вопрос или проблему"
            rows={4}
            value={data.message}
            onChange={(e) =>
              setData((prev) => ({ ...prev, message: e.target.value }))
            }
            className="w-full rounded-lg border border-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-background resize-none"
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
            className="border-muted size-4"
          />
          <label htmlFor="contact-agree" className="text-muted-foreground" >
            Я принимаю условия обработки персональных данных
          </label>
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