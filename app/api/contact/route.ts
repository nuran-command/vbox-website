import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, surname, phone, email, about } = await request.json();

    // Telegram Bot API configuration
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram configuration missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const text = `
🆕 *Новая заявка с сайта VBOX*

👤 *Имя:* ${name} ${surname}
📞 *Телефон:* ${phone}
📧 *Email:* ${email || 'не указан'}
📝 *О себе:* ${about || 'нет описания'}
    `;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json({ error: 'Failed to send message to Telegram' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
