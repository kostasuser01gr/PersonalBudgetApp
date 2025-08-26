import Navbar from "@/components/Navigation/Navbar";
import BottomNav from "@/components/Navigation/BottomNav";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import OnboardingModal from "@/components/Onboarding/OnboardingModal";
import CommandPalette from "@/components/UI/CommandPalette";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-emerald-950 via-gray-950 to-black text-white flex flex-col items-center">
      <Navbar />
      <section className="w-full max-w-5xl mx-auto flex-1 flex flex-col items-center justify-start py-10 px-2">
        <DashboardMain />
        <OnboardingModal />
      </section>
      <BottomNav />
      <CommandPalette />
    </main>
  );
}
