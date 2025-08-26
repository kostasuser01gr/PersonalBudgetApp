"use client";
import GlassCard from "@/components/UI/GlassCard";
import StatsPanel from "./StatsPanel";
import QuickFilterBar from "./QuickFilterBar";
import ChartPanel from "./ChartPanel";
import ExpensesList from "./ExpensesList";
import AddExpenseButton from "./AddExpenseButton";
import BudgetAlert from "./BudgetAlert";

export default function DashboardMain() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        <GlassCard className="w-full flex-1">
          <StatsPanel />
        </GlassCard>
        <GlassCard className="w-full flex-1">
          <QuickFilterBar />
        </GlassCard>
      </div>
      <GlassCard>
        <ChartPanel />
      </GlassCard>
      <GlassCard>
        <BudgetAlert data={[]} />
        <ExpensesList />
      </GlassCard>
      <AddExpenseButton />
    </div>
  );
}
