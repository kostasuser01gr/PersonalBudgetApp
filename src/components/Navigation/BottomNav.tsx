import AddExpenseButton from "@/components/Dashboard/AddExpenseButton";
export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center bg-black/70 backdrop-blur-xl border-t border-emerald-800/40 z-50 py-2 md:hidden">
      <div className="flex gap-6 items-center">
        {/* Add nav icons as needed */}
        <AddExpenseButton />
      </div>
    </div>
  );
}
