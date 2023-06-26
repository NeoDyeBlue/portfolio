import { Home, Works, About, Contact } from "@/components/Sections";
export default function Main() {
  return (
    <main className="flex min-h-[200vh] flex-col gap-20 md:gap-24 md:py-12">
      <About />
      <Works />
      <Contact />
    </main>
  );
}
