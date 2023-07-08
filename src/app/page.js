import { Home, Works, About, Contact } from "@/components/Sections";
export default function Main() {
  return (
    <main className="relative flex min-h-[200vh] flex-col gap-20 ">
      <About />
      <Works />
      <Contact />
    </main>
  );
}
