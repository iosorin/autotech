import { IField } from "@ui/blocks/form";
import Link from "next/link";

export const forms = {
    call: {
        heading: "Запросить обратный звонок",
        fields: [
            { id: "name", type: "text", required: true, label: "Имя", placeholder: "Введите ваше имя" },
            { id: "phone", type: "tel", required: true, label: "Мобильный телефон", placeholder: "+7 (999) 999-99-99" },
            { id: "organization", type: "text", label: "Организация", placeholder: "Введите название организации" },
            {
                id: "privacy", type: "checkbox", required: true, label: <>
                    Я принимаю условия{" "}
                    <Link target="_blank" href="/privacy" className="text-primary underline hover:text-primary/80" title="Политика обработки персональных данных" > обработки персональных данных </Link>
                </>
            },
        ] satisfies IField[],
    },
    contact: {
        heading: "Свяжитесь с нами",
        fields: [
            { id: "name", type: "text", required: true, label: "Имя", placeholder: "Введите ваше имя" },
            { id: "phone", type: "tel", required: true, label: "Мобильный телефон", placeholder: "+7 (999) 999-99-99" },
            {
                id: "topic", type: "select", label: "Тема обращения", placeholder: "Выберите тему обращения",
                options: ["Подключение", "Техническая проблема", "Пожелание по доработке", "Вопрос по приложению", "Другое",] as const,
            },
            { id: "message", type: "textarea", label: "Опишите вопрос или проблему", placeholder: "Опишите вопрос или проблему" },
            {
                id: "privacy", type: "checkbox", required: true, label: <>
                    Я принимаю условия{" "}
                    <Link target="_blank" href="/privacy" className="text-primary underline hover:text-primary/80" title="Политика обработки персональных данных" > обработки персональных данных </Link>
                </>
            }
        ] satisfies IField[],
    },
}
export default forms;