import { Poppins } from "next/font/google"; // 1. Importa a fonte
import "./globals.css";

// 2. Configura a fonte
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Escolha os pesos que vai usar (normal e negrito)
  variable: "--font-poppins", // Cria uma variável CSS
});

export const metadata = {
  title: "Mini-Bio",
  description: "minha bio com next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
