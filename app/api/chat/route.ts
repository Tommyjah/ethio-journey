import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) return NextResponse.json({ text: "Config error." }, { status: 500 });

    // ✅ Use v1beta - it is actually MORE stable for system_instructions in 2026
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `INSTRUCTIONS: You are the Elite Concierge for 'Ethio Journey' Luxury Travel. Be sophisticated. Contact: +251 911 22 33 44. 
            
            USER MESSAGE: ${message}` }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      }),
    });

    clearTimeout(timeoutId);
    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini Error:", data);
      return NextResponse.json({ text: "The concierge is busy." }, { status: response.status });
    }

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am at your service.";
    return NextResponse.json({ text: aiText });

  } catch (error: any) {
    clearTimeout(timeoutId);
    return NextResponse.json({ text: "Connection issues." }, { status: 500 });
  }
}