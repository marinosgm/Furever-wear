import Navbar from "@/components/Navbar";
import "./globals.css";
import { BasketProvider } from "@/context/BasketContext"; // Import the BasketProvider
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the app with BasketProvider */}
        <BasketProvider>
          <Navbar />
          <main>{children}</main>
        </BasketProvider>
        <Footer />
      </body>
    </html>
  );
}