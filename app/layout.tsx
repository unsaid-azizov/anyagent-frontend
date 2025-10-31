import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorTrail } from "@/components/magicui/cursor-trail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VocalBeam - AI Automation Agency",
  description: "Transform your business with AI-powered automation. From intelligent call agents to RAG chatbots and AI-driven CRMs.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  metadataBase: new URL("https://vocalbeam.com"),
  openGraph: {
    title: "VocalBeam - AI Automation Agency",
    description: "Transform your business with AI-powered automation. From intelligent call agents to RAG chatbots and AI-driven CRMs.",
    url: "https://vocalbeam.com",
    siteName: "VocalBeam",
    images: [
      {
        url: "/preview.png",
        width: 1766,
        height: 968,
        alt: "VocalBeam - AI Automation Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VocalBeam - AI Automation Agency",
    description: "Transform your business with AI-powered automation. From intelligent call agents to RAG chatbots and AI-driven CRMs.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CursorTrail />
          {children}

          {/* ElevenLabs ConvAI Widget */}
          {/* <div dangerouslySetInnerHTML={{
            __html: '<elevenlabs-convai agent-id="agent_1101k89kvy38f0kb3g0xaxacz7cq"></elevenlabs-convai>'
          }} />
          <Script
            src="https://unpkg.com/@elevenlabs/convai-widget-embed"
            strategy="afterInteractive"
            async
          /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
