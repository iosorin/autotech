const contact = async (formData: FormData) => {
    'use server';


    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log('--------------------------------');
    console.log('BOT_TOKEN:', botToken);
    console.log('CHAT_ID:', chatId);
    console.log('FORM_DATA:', formData);
    console.log('--------------------------------');

    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message') || 'Нет сообщения';
    const topic = formData.get('topic');

    if (!name || !phone) {
        return { error: 'Имя и телефон обязательны' };
    }

    try {
        const telegramMessage = `
<b>📬 Новая заявка с сайта</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
📝 <b>Сообщение:</b> ${message}
🔑 <b>Тема:</b> ${topic}
⏱ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}
    `;

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