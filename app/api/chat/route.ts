// ✅ FULL UPDATE for app/api/chat/route.ts
import { NextResponse } from 'next/server';

export const maxDuration = 60; 
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); 

  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) return NextResponse.json({ text: "Concierge config error." }, { status: 500 });

    const model = "gemini-2.0-flash-lite"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ 
              text: `SYSTEM INSTRUCTIONS: 
                     Role: You are the 'Ethio Journey' Elite Luxury Concierge.
                     Personality: Sophisticated, warm, and highly knowledgeable. 
                     Goal: Actively help the user plan their trip. Do NOT just tell them to call. 
                     
                     Context for your response:
                     - For Lalibela: Mention luxury lodges (like Mezena or Hara) and private sunset tours of the churches.
                     - For Addis Ababa: Mention the National Museum, Entoto Park, and high-end dining like Yod Abyssinia or Hyatt Regency.
                     - For Honeymoons: Emphasize romance, private guides, and exclusive views.
                     
                     Constraint: Keep responses around 4-6 sentences. Be helpful first, THEN provide the contact +251 911 44 46 46 at the end.
                     
                     USER MESSAGE: ${message}` 
            }]
          }
        ],
        generationConfig: {
          temperature: 0.85, // Higher temperature = more creative & conversational
          maxOutputTokens: 600, // Increased so it doesn't cut off the itinerary
        }
      }),
    });

    clearTimeout(timeoutId);
    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini Error:", JSON.stringify(data, null, 2));
      return NextResponse.json({ text: "I'm momentarily unavailable to check the itinerary. How else can I help?" });
    }

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am at your service.";
    return NextResponse.json({ text: aiText });

  } catch (error: any) {
    clearTimeout(timeoutId);
    return NextResponse.json({ text: "The connection is a bit slow. Please try again." });
  }
}