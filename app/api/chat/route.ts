import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Use a Controller to prevent the request from hanging forever
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second limit

  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("CRITICAL: GEMINI_API_KEY is missing from environment variables.");
      return NextResponse.json({ text: "Concierge configuration error." }, { status: 500 });
    }

    // ✅ Using the Stable V1 Endpoint
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      cache: 'no-store',
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: message }]
          }
        ],
        // The 'v1' API uses system_instruction with an underscore
        system_instruction: {
          parts: [{ 
            text: `You are the Elite Concierge for 'Ethio Journey' Luxury Travel & VIP Logistics in Ethiopia.
                   Your goal is to assist high-end travelers with information about Lalibela, Danakil, and your VIP Land Cruiser 300 fleet.
                   Tone: Sophisticated, professional, and welcoming. 
                   Contact: Phone: +251 911 22 33 44 | Email: info@ethiojourney.pro.et
                   If a user asks for pricing, explain that we offer bespoke quotes and ask for their group size.` 
          }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        }
      }),
    });

    clearTimeout(timeoutId);

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error:", data.error?.message || "Unknown Error");
      return NextResponse.json({ 
        text: "The concierge is currently attending to another guest. Please try again in a moment." 
      }, { status: response.status });
    }

    // Extract the text safely
    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                   "I am at your service. How may I assist with your Ethiopian expedition?";

    return NextResponse.json({ text: aiText });

  } catch (error: any) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      console.error("Fetch Timeout: Google API took too long to respond.");
      return NextResponse.json({ text: "Our private line is currently busy. Please try again shortly." }, { status: 504 });
    }

    console.error("Network/Runtime Error:", error.message);
    return NextResponse.json({ 
      text: "The concierge desk is temporarily offline. Please contact us directly at +251..." 
    }, { status: 500 });
  }
}