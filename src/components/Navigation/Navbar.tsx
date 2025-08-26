import ThemeToggle from "@/components/UI/ThemeToggle";
import LanguageSwitcher from "@/components/UI/LanguageSwitcher";
import NotificationPanel from "@/components/UI/NotificationPanel";
import UserAvatar from "@/components/User/UserAvatar";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full max-w-5xl mx-auto px-6 py-3 border-b border-emerald-800/30 bg-black/70 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-emerald-300">PersonalBudget.</span>
        <LanguageSwitcher />
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <NotificationPanel />
        <UserAvatar />
      </div>
    </nav>
  );
}
