
import KomorebiBackground from "./components/KomorebiBackground";
import WelcomeFooter from "./components/WelcomeFooter";

export default function Home() {
  return (
    <main className=" relative overflow-hidden min-h-screen flex flex-col items-center justify-between text-white">
      <KomorebiBackground />
      <div />
      <div className="flex flex-col justify-center items-center gap-4 z-10">
        <p className="tracking-[0.5rem] text-[18px] font-japanese">
          木 漏 れ 日
        </p>
        <h1 className="text-6xl font-serif italic">Komorebi</h1>
        <div className="w-14 h-px bg-amber-200" />
        <p className="uppercase tracking-[0.15rem] text-[12px]">A guide to Japan</p>
      </div>
      <WelcomeFooter />
    </main>
  );
}
