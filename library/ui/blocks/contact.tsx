"use client";

import React from "react"

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const topics = [
  "Подключение",
  "Техническая проблема",
  "Пожелание по доработке",
  "Вопрос по приложению",
  "Другое",
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    topic: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl ring-5 p-6 md:p-8 bg-background w-full"
    >
      <h3 className="text-lg font-bold text-foreground mb-6">
        {"Заполните форму обращения"}
      </h3>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="contact-name" className="block font-medium text-foreground mb-1.5">
            {"Имя"}
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Введите ваше имя"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full rounded-lg border border-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-background"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block font-medium text-foreground mb-1.5">
            {"Мобильный телефон"}
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="Маска телефона"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full rounded-lg border border-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-background"
          />
        </div>

        <div>
          <label htmlFor="contact-topic" className="sr-only">{"Тема обращения"}</label>
          <select
            id="contact-topic"
            value={formData.topic}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, topic: e.target.value }))
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

        <div>
          <label htmlFor="contact-message" className="block font-medium text-foreground mb-1.5">
            {"Опишите вопрос или проблему"}
          </label>
          <textarea
            id="contact-message"
            placeholder="Опишите вопрос или проблему"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            className="w-full rounded-lg border border-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-background resize-none"
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            id="contact-agree"
            type="checkbox"
            checked={formData.agree}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, agree: e.target.checked }))
            }
            className="mt-1 rounded border-input"
          />
          <label htmlFor="contact-agree" className="text-xs text-muted-foreground">
            {"Я принимаю условия обработки персональных данных"}
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity w-fit"
        >
          {"Отправить"}
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}

export default Contact;