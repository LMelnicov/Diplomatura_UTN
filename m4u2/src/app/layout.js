import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Rick and Morty",
  description: "Desarrollo de un sitio web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
          
      
        {children}
      </body>
    </html>
  );
}
