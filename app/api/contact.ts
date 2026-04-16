'use server';

const contact = async (formData: FormData, heading?: string) => {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    try {
        // Собираем объект из formData (как раньше)
        const data: Record<string, string> = {};
        for (const [key, value] of formData.entries()) {
            if (typeof value === "string") data[key] = value;
        }

        // Опционально: человекочитаемые подписи полей (id → label)
        const labels: Record<string, string> = {
            name: "Имя",
            phone: "Телефон",
            message: "Сообщение",
            topic: "Тема",
            organization: "Организация",
            privacy: "Согласие",
        };

        // Собираем текст сообщения динамически
        const lines = [
            `<b>📬 ${heading || 'Новая заявка с сайта'}</b>`,
            "",
            "⏱ <b>Время:</b> " + new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }) + " мск",
            "",
        ];

        for (const [id, value] of Object.entries(data)) {
            const label = labels[id] ?? id;
            lines.push(`🔹 <b>${label}:</b> ${String(value).trim() || "—"}`);
        }

        const telegramMessage = lines.join("\n");

        // Поддержка нескольких chat_id через запятую или пробел: TELEGRAM_CHAT_ID=123,456 789
        const chatIds = (chatId ?? '')
            .split(/[\s,]+/)
            .map((id: string) => id.trim())
            .filter(Boolean);

        console.log('--------------------------------');
        console.log('BOT_TOKEN:', botToken);
        console.log('CHAT_IDs:', chatIds);
        console.log('MESSAGE:', telegramMessage);
        console.log('--------------------------------');

        if (chatIds.length === 0) throw new Error('TELEGRAM_CHAT_ID не задан');

        const proxy = process.env.PROXY;

        const results = await Promise.all(
            chatIds.map((id: string) => {
                const options: RequestInit & { dispatcher?: unknown } = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: id,
                        text: telegramMessage,
                        parse_mode: 'HTML'
                    })
                };

                if (proxy) {
                    const { ProxyAgent } = require('undici');
                    options.dispatcher = new ProxyAgent(proxy);
                }

                return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, options as RequestInit)
                    .then((r) => r.json());
            })
        );

        const failed = results.filter((r: { ok?: boolean }) => !r.ok);
        if (failed.length > 0) {
            console.error('TELEGRAM FAILED:', failed);
            throw new Error('Ошибка при отправке обращения');
        }

        console.log('--------------------------------');
        console.log('TELEGRAM OK:', results.length, 'chats');
        console.log('--------------------------------');
    } catch (error) {
        console.error('Server error:', error);
        throw new Error('Внутренняя ошибка сервера');
    }
}

export default contact;