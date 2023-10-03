import "./globals.css";
import { Inter } from "next/font/google";
import { storiesUri } from "@/utils/pathUtils";
import ContextProvider from "@/components/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function getData() {
  const res = await fetch(storiesUri);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RootLayout({ children }) {
  // Must be cached
  const allStories = await getData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}