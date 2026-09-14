import type { Metadata } from "next"; 
import "./globals.css";
import { DonationProvider } from "@/context/DonationContext";
import { DonationModal, Footer, Header } from "@/components/SharedUI";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Horizon — Global Humanitarian Relief for Palestine & Ukraine",
  description: "A unified global platform providing immediate emergency relief, thermal shelter, medical aid, and transparent support for families displaced by conflict in Palestine and Ukraine.",
  keywords: [
    "humanitarian relief",
    "Palestine relief",
    "Ukraine relief",
    "emergency aid",
    "displaced families",
    "global charity platform",
    "secure donations"
  ],
  authors: [{ name: "Horizon Global Relief" }],
  creator: "Horizon",
  publisher: "Horizon Global Relief",
  metadataBase: new URL("https://horizon-relief.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://horizon-relief.org",
    title: "Horizon — Global Humanitarian Relief for Palestine & Ukraine",
    description: "Support immediate frontline emergency relief, medical supplies, and winterized shelter for families in Palestine and Ukraine.",
    siteName: "Horizon",
    images: [
      {
        url: "/buildings.jpg", // Make sure to place your preview image in the public folder
        width: 1200,
        height: 630,
        alt: "Horizon — Global Humanitarian Relief",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon — Global Humanitarian Relief",
    description: "Providing hope, aid, and direct support across global crisis zones.",
    images: ["/buildings.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-[#F8F5F0] text-[#1A1A1A] ${plusJakarta.variable} ${plusJakarta.className} selection:bg-[#22C55E]/30 flex flex-col min-h-screen antialiased`}>
        <DonationProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <DonationModal />
        </DonationProvider>
      </body>
    </html>
  );
}