import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "API Key missing" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    // ✅ FIX: Use gemini-2.0-flash. 
    // This model is optimized for the @google/genai SDK and v1beta version.
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash', 
      contents: [{ 
        role: 'user', 
        parts: [{ 
          text: `You are the Elite Concierge for 'Ethio Journey' Luxury Travel. 
                 Be sophisticated and expert about Ethiopia. 
                 User Question: ${message}` 
        }] 
      }],
    });

    // Extract the response text
    const aiResponse = result.candidates?.[0]?.content?.parts?.[0]?.text || 
                       "The Concierge is currently preparing your itinerary. Please try again.";

    return NextResponse.json({ text: aiResponse });

  } catch (error: any) {
    console.error("DEBUG API ERROR:", error);
    
    // If even 2.0 fails, it might be a regional or API key restriction
    return NextResponse.json({ 
      text: "Our private line is currently reserved. Please verify your connection or try again later." 
    }, { status: 500 });
  }
}