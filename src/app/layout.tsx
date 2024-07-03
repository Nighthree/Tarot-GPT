import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TarotGPT",
  description: "Tarot with chatGPT-4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
