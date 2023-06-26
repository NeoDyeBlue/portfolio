import { Home, Works, About, Contact } from "@/components/Sections";
export default function Main() {
  return (
    <main className="flex min-h-[200vh] flex-col gap-10 md:gap-24 md:py-12">
      {/* ABOUT */}
      <About />
      {/* HOME */}
      {/* <Home /> */}
      {/* WORKS */}
      <Works />
      <Contact />
    </main>
  );
}
