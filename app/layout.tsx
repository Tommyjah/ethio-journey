import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ethiojourney.pro.et'),
  title: "Ethio Journey | Luxury Travel & VIP Logistics Ethiopia",
  description: "Experience the majesty of Ethiopia with elite private tours, VIP Land Cruiser rentals, and professional concierge services. Your gateway to luxury in the Horn of Africa.",
  keywords: ["Luxury Travel Ethiopia", "VIP Car Rental Addis Ababa", "Ethiopian Expedition", "Land Cruiser 300 Rental", "Private Tours Ethiopia"],
  openGraph: {
    title: "Ethio Journey | Luxury Travel & Logistics",
    description: "Unveil the majesty of Ethiopia with our elite fleet and signature expeditions.",
    url: "https://ethiojourney.pro.et", // Replace with your actual domain
    siteName: "Ethio Journey",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 image and put it in /public
        width: 1200,
        height: 630,
        alt: "Ethio Journey Luxury Land Cruiser in the Ethiopian Highlands",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethio Journey | Luxury Travel & Logistics",
    description: "Elite private tours and VIP logistics across Ethiopia.",
    images: ["/og-image.jpg"], 
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}