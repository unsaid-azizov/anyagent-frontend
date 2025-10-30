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
