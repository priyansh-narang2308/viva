import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const serif = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Viva",
  description: "An AI interview platform for students and professionals",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${dmSans.variable} ${serif.variable} font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="flex items-center justify-center py-4" >
            <p>Viva &copy; 2026</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
