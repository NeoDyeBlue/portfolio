import { Home, Works, About } from "@/components/Sections";
export default function Main() {
  return (
    <main className="flex min-h-[200vh] flex-col gap-10">
      {/* ABOUT */}
      <About />
      {/* HOME */}
      {/* <Home /> */}
      {/* WORKS */}
      <Works />
    </main>
  );
}
