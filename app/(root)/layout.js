import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function NavLayout({ children }) {

  return (
    <>
      <Nav />
      <main className="main min-h-[200px] bg-slate-300">{children}</main>
      <Footer />
    </>
  );
}
