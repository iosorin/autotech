const contact = async (formData: FormData) => {
    'use server';


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
            agree: "Согласие",
        };

        // Собираем текст сообщения динамически
        const lines = [
            "<b>📬 Новая заявка с сайта</b>",
            "",
            "⏱ <b>Время:</b> " + new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
            "",
        ];

        for (const [id, value] of Object.entries(data)) {
            const label = labels[id] ?? id;
            lines.push(`🔹 <b>${label}:</b> ${String(value).trim() || "—"}`);
        }

        const telegramMessage = lines.join("\n");

        console.log('--------------------------------');
        console.log('BOT_TOKEN:', botToken);
        console.log('CHAT_ID:', chatId);
        console.log('MESSAGE:', telegramMessage);
        console.log('--------------------------------');

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        const result = await response.json();

        console.log('--------------------------------');
        console.log('TELEGRAM RESPONSE:', result);
        console.log('--------------------------------');
        if (!result.ok) throw new Error('Ошибка при отправке обращения');
    } catch (error) {
        console.error('Server error:', error);
        throw new Error('Внутренняя ошибка сервера');
    }
}

export default contact;