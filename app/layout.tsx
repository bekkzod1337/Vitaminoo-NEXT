import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Vitaminoo",
  description: "Dashboard panel with MUI + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-amber-50">
        <Sidebar />
        <main className="flex-1 ml-[300px] p-8 pt-4">{children}</main>
      </body>
    </html>
  );
}
