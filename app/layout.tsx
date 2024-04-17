import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The "antialiased" class is used to improve the rendering of text, making it appear smoother and more legible. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
